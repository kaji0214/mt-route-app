import React, { useEffect } from 'react'
import { z } from 'zod'
import Sidebar from '@/src/components/layout/Sidebar'
import MountainForm from '@/src/components/mountain/mountain-form/MountainForm'
import { DefaultPageProps } from '../../_app'
import {
  EditedMountainQuery,
  newMountain,
  useUpdateMountainWithSessionMutation,
} from '@/graphql/generated/client'
import { useRouter } from 'next/router'
import EmptyData from '@/src/components/layout/EmptyData'
import { useSession } from 'next-auth/react'
import { Marker } from '@react-google-maps/api'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import client from '@/graphql/client'
import { EDITED_MOUNTAIN_QUERY } from '@/graphql/pages/mountains/mid/edit.graphql'
import { useCenterContextState } from '@/src/contexts/CenterContext/CenterContextProvider'
import { useIsToastOpenContextUpdater } from '@/src/contexts/IsToastOpenContext/IsToastOpenContextProvider'
import { useCenterContextUpdater } from '@/src/contexts/CenterContext/CenterContextProvider'
import { useToastContextUpdater } from '@/src/contexts/ToastContext/ToastContextProvider'

export const UpdateMountain = z.object({
  id: z.number(),
  name: z.string(),
  lat: z.number(),
  lng: z.number(),
})

type Data = {
  query: EditedMountainQuery
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  const result = await client.query<EditedMountainQuery>({
    query: EDITED_MOUNTAIN_QUERY,
    variables: {
      where: {
        id: Number(params!.mid),
      },
    },
  })

  const data: Data = {
    query: result.data,
  }
  return {
    props: {
      data,
    },
  }
}
const EditMountainPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { query } = data
  const router = useRouter()
  const { mid } = router.query
  const center = useCenterContextState()
  const setCenter = useCenterContextUpdater()
  const setToast = useToastContextUpdater()
  const setIsToastOpen = useIsToastOpenContextUpdater()
  const { data: session } = useSession()

  const mountain = query && query.mountain ? query.mountain! : newMountain()

  const [updateMutation] = useUpdateMountainWithSessionMutation()

  const edit = (values: z.infer<typeof UpdateMountain>) => {
    updateMutation({
      variables: {
        data: {
          name: { set: values.name },
          lat: { set: values.lat },
          lng: { set: values.lng },
          userId: { set: session!.user!.id },
        },
        where: { id: Number(mid) },
      },
    }).then((res) => {
      if (res.errors) {
        return
      }

      setToast('success')
      setIsToastOpen(true)

      router.push({
        pathname: '/mountains/[mid]',
        query: {
          mid,
        },
      })
    })
  }
  useEffect(() => {
    setCenter({
      lat: mountain.lat,
      lng: mountain.lng,
    })
  }, [mountain, setCenter])

  if (!mountain) {
    return <EmptyData />
  }

  return (
    <>
      <Sidebar backUrl={`/mountains/${mid}`}>
        <>
          <div style={{ marginTop: '10px' }}>
            <MountainForm
              submitText='Edit Mountain'
              onSubmit={(values) => edit(values)}
              initialValues={{
                id: mountain.id,
                name: mountain.name,
                lng: mountain.lng,
                lat: mountain.lat,
              }}
              schema={UpdateMountain}
            />
          </div>
        </>
      </Sidebar>
      {center && (
        <Marker
          position={{
            lat: center.lat,
            lng: center.lng,
          }}
        />
      )}
    </>
  )
}

const defaultProp: DefaultPageProps = {
  auth: true,
}
EditMountainPage.defaultProps = defaultProp
export default EditMountainPage
