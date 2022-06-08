import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import { DefaultPageProps } from '@/pages/_app'
import { z } from 'zod'
import RouteForm from '@/src/components/route/route-form/RouteForm'
import {
  EditedMountainQuery,
  MountainMarkerFragment,
  MountainMarkerFragmentDoc,
  NewRouteQuery,
  NewRouteQueryFragment,
  useCreateRouteWithSessionMutation,
} from '@/graphql/generated/client'
import Sidebar from '@/src/components/layout/Sidebar'
import { useSession } from 'next-auth/react'
import MountainMarker from '@/src/components/mountain/mountain-marker/MountainMarker'
import { filter } from 'graphql-anywhere'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import client from '@/graphql/client'
import { NEW_ROUTE_QUERY } from '@/graphql/pages/mountains/mid/routes/new.graphql'
import { useNewRouteHook } from '@/src/hooks/route/useNewRouteHook/useNewRouteHook'
import { useSetSideMenuWidth } from '@/src/hooks/useSetSideMenuWidth/useSetSideMenuWidth'
import { useIsToastOpenContextUpdater } from '@/src/contexts/IsToastOpenContext/IsToastOpenContextProvider'
import { useToastContextUpdater } from '@/src/contexts/ToastContext/ToastContextProvider'
import { useFormHook } from '@/src/hooks/useFormHook/useFormHook'
export const CreateRoute = z.object({
  name: z.string(),
  time: z.number(),
  // latlngs: z.array(z.object({
  //   lat: z.number(),
  //   lng: z.number(),
  // }))
})

export const defaultNewRouteQuery: NewRouteQueryFragment = {
  id: 0,
  name: '',
  lat: 0,
  lng: 0,
}

type Data = {
  query: EditedMountainQuery
}
const NewRoutePage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { query } = data
  const router = useRouter()
  const { mid } = router.query

  useSetSideMenuWidth(400)

  const { getLatlngs, mountain } = useNewRouteHook({ query })

  const setToast = useToastContextUpdater()
  const setIsToastOpen = useIsToastOpenContextUpdater()
  const { data: session } = useSession()
  const [mutateFunction] = useCreateRouteWithSessionMutation()
  const { onFailed } = useFormHook()

  const create = (values: z.infer<typeof CreateRoute>) => {
    const { name, time } = values

    mutateFunction({
      variables: {
        data: {
          name,
          time,
          mountainId: Number(mid),
          userId: session!.user!.id,
          latlngs: getLatlngs(),
        },
      },
    }).then((res) => {
      if (res.errors) {
        onFailed()
        return
      }
      setToast('success')
      setIsToastOpen(true)
      router.push({
        pathname: '/mountains/[mid]/routes/[rid]',
        query: {
          mid: Number(mid),
          rid: res.data?.createRouteWithSession.id,
        },
      })
    })
  }

  return (
    <>
      <Sidebar backUrl={`/mountains/${Number(mid)}`}>
        <div style={{ padding: '5px', height: '100%', position: 'relative' }}>
          <Typography variant='h6' component='div' gutterBottom>
            {mountain.name}
          </Typography>
          <Box
            component='div'
            sx={{
              '& > :not(style)': { marginTop: 1 },
            }}
          >
            <RouteForm
              submitText='Create route'
              onSubmit={(values) => create(values)}
              initialValues={{}}
              schema={CreateRoute}
            />
          </Box>
        </div>
      </Sidebar>
      <MountainMarker data={filter<MountainMarkerFragment>(MountainMarkerFragmentDoc, mountain)} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  const result = await client.query<NewRouteQuery>({
    query: NEW_ROUTE_QUERY,
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

const defaultProp: DefaultPageProps = {
  auth: true,
}
NewRoutePage.defaultProps = defaultProp
export default NewRoutePage
