import React from 'react'
import { DefaultPageProps } from '@/pages/_app'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import {
  EditedRouteQuery,
  EditedRouteQueryFragment,
  MountainMarkerFragment,
  MountainMarkerFragmentDoc,
  useUpdateRouteWithSessionMutation,
} from '@/graphql/generated/client'
import Typography from '@mui/material/Typography'
import RouteForm from '@/src/components/route/route-form/RouteForm'
import { z } from 'zod'
import Sidebar from '@/src/components/layout/Sidebar'
import { useSetSideMenuWidth } from '@/src/hooks/useSetSideMenuWidth/useSetSideMenuWidth'
import MountainMarker from '@/src/components/mountain/mountain-marker/MountainMarker'
import { filter } from 'graphql-anywhere'
import { useSession } from 'next-auth/react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import client from '@/graphql/client'
import { EDITED_ROUTE_QUERY } from '@/graphql/pages/mountains/mid/routes/rid/edit.graphql'
import { useEditRouteHook } from '@/src/hooks/route/useEditRouteHook/useEditRouteHook'
import { useAppContext } from '@/src/contexts/AppContext'
import EmptyData from '@/src/components/layout/EmptyData'

const defaultRouteDetail: EditedRouteQueryFragment = {
  id: 0,
  name: '',
  userId: 0,
  time: 0,
  mountain: {
    id: 0,
    name: '',
    lat: 0,
    lng: 0,
  },
  latlngs: [],
}
const UpdateRoute = z.object({
  name: z.string(),
  time: z.number(),
})

type Data = {
  query: EditedRouteQuery
}
const EditRoutePage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { query } = data
  const router = useRouter()
  const { data: session } = useSession()
  const { mid, rid } = router.query
  useSetSideMenuWidth(400)
  const { setToast, setIsToastOpen } = useAppContext()

  const [updateRoute] = useUpdateRouteWithSessionMutation()

  const route = query && query.route ? query!.route! : defaultRouteDetail

  const { getLatlngs } = useEditRouteHook({ query })
  const UpdateRouteHandle = (values: z.infer<typeof UpdateRoute>) => {
    const { name, time } = values

    updateRoute({
      variables: {
        where: { id: route.id },
        data: {
          name: {
            set: name,
          },
          time: {
            set: time,
          },
          userId: session!.user!.id,
          latlngs: {
            create: getLatlngs(),
          },
        },
      },
    }).then((res) => {
      setToast('success')
      setIsToastOpen(true)
      router.push({
        pathname: '/mountains/[mid]/routes/[rid]',
        query: {
          mid: Number(mid),
          rid: res.data?.updateRouteWithSession?.id,
        },
      })
    })
  }

  if (!route) {
    return <EmptyData />
  }
  return (
    <>
      <Sidebar backUrl={`/mountains/${route.id}`}>
        <div style={{ padding: '5px', height: '100%', position: 'relative' }}>
          <Typography variant='h6' component='div' gutterBottom>
            {route.mountain.name}
          </Typography>
          <Box
            component='div'
            sx={{
              '& > :not(style)': { marginTop: 1 },
            }}
          >
            <RouteForm
              submitText='Update route'
              onSubmit={UpdateRouteHandle}
              initialValues={{
                name: route.name,
                time: route.time,
              }}
              schema={UpdateRoute}
            />
          </Box>
        </div>
      </Sidebar>
      <MountainMarker
        data={filter<MountainMarkerFragment>(MountainMarkerFragmentDoc, route.mountain)}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  const result = await client.query<EditedRouteQuery>({
    query: EDITED_ROUTE_QUERY,
    variables: {
      where: {
        id: Number(params!.rid),
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
EditRoutePage.defaultProps = defaultProp
export default EditRoutePage
