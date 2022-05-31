import React from 'react'
import MountainForm from '@/src/components/mountain/mountain-form/MountainForm'
import { z } from 'zod'
import { DefaultPageProps } from '../_app'
import { useCreateMountainWithSessionMutation } from '@/graphql/generated/client'
import Sidebar from '@/src/components/layout/Sidebar'
import { Marker } from '@react-google-maps/api'
import { useSession } from 'next-auth/react'
import { useAppContext } from '@/src/contexts/AppContext'
import { useRouter } from 'next/router'

export const CreateMountain = z.object({
  name: z.string(),
  lat: z.number(),
  lng: z.number(),
})
const NewMountainPage = () => {
  const router = useRouter()
  const { center, setToast, setIsToastOpen } = useAppContext()
  const { data: session } = useSession()
  const [createMountain] = useCreateMountainWithSessionMutation()
  const create = (values: z.infer<typeof CreateMountain>) => {
    const { name, lat, lng } = values
    createMountain({
      variables: {
        data: {
          name,
          lat,
          lng,
          userId: session!.user!.id,
        },
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
          mid: res.data?.createMountainWithSession.id,
        },
      })
    })
  }
  return (
    <>
      <Sidebar backUrl={`/mountains`}>
        <>
          <div style={{ marginTop: '10px' }}>
            <MountainForm
              submitText='Create Mountain'
              onSubmit={(values) => create(values)}
              initialValues={{}}
              schema={CreateMountain}
            />
          </div>
        </>
      </Sidebar>
      {center && <Marker position={center} />}
    </>
  )
}

const defaultProp: DefaultPageProps = {
  auth: true,
}
NewMountainPage.defaultProps = defaultProp
export default NewMountainPage
