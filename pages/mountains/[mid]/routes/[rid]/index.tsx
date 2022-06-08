import React from 'react'
import { DefaultPageProps } from '@/pages/_app'
import {
  MountainMarkerFragment,
  MountainMarkerFragmentDoc,
  RouteDetailFragment,
  RouteDetailFragmentDoc,
  RouteLatlngsTableFragment,
  RouteLatlngsTableFragmentDoc,
  RoutePolylineFragment,
  RoutePolylineFragmentDoc,
  ShowRouteQuery,
  useDeleteRouteWithSessionMutation,
} from '@/graphql/generated/client'
import RouteDetail from '@/src/components/route/route-detail/RouteDetail'
import { filter } from 'graphql-anywhere'
import RoutePolyline from '@/src/components/route/route-polyline/RoutePolyline'
import Sidebar from '@/src/components/layout/Sidebar'
import EmptyData from '@/src/components/layout/EmptyData'
import MountainMarker from '@/src/components/mountain/mountain-marker/MountainMarker'
import RouteLatlngsTable from '@/src/components/route/route-latlngs-table/RouteLatlngsTable'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import client from '@/graphql/client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { SHOW_ROUTE_QUERY } from '@/graphql/pages/mountains/mid/routes/rid/index.graphql'
import { useSetSideMenuWidth } from '@/src/hooks/useSetSideMenuWidth/useSetSideMenuWidth'
import { useShowRouteHook } from '@/src/hooks/route/useShowRouteHook/useShowRouteHook'
import { useIsToastOpenContextUpdater } from '@/src/contexts/IsToastOpenContext/IsToastOpenContextProvider'
import { useToastContextUpdater } from '@/src/contexts/ToastContext/ToastContextProvider'

type Data = {
  query: ShowRouteQuery
}
const ShowRoutePage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { query } = data
  useSetSideMenuWidth(400)
  const router = useRouter()
  const { mid, rid } = router.query
  const { data: session } = useSession()

  const setToast = useToastContextUpdater()
  const setIsToastOpen = useIsToastOpenContextUpdater()
  const { route, canEdit, canDelete, onClickEditRoute } = useShowRouteHook({
    query,
  })
  const [deleteRoute] = useDeleteRouteWithSessionMutation()

  const onClickDeleteRoute = () => {
    deleteRoute({
      variables: {
        where: {
          id: Number(rid),
        },
        data: {
          userId: session!.user!.id,
        },
      },
    }).then((res) => {
      setToast('success')
      setIsToastOpen(true)
      router.push(`/mountains/${mid}`)
    })
  }

  if (!route) {
    return <EmptyData />
  }

  return (
    <>
      <Sidebar backUrl={`/mountains/${route.mountain.id}`}>
        <>
          <div style={{ padding: '5px' }}>
            <RouteDetail
              data={filter<RouteDetailFragment>(RouteDetailFragmentDoc, route)}
              canEdit={canEdit}
              canDelete={canDelete}
              onClickEditRoute={() => onClickEditRoute()}
              onClickDeleteRoute={() => onClickDeleteRoute()}
            />
            <RouteLatlngsTable
              data={filter<RouteLatlngsTableFragment>(RouteLatlngsTableFragmentDoc, route)}
            />
          </div>
        </>
      </Sidebar>
      <RoutePolyline
        data={filter<RoutePolylineFragment>(RoutePolylineFragmentDoc, route)}
        active={false}
      />
      <MountainMarker
        data={filter<MountainMarkerFragment>(MountainMarkerFragmentDoc, route.mountain)}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  const result = await client.query<ShowRouteQuery>({
    query: SHOW_ROUTE_QUERY,
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
  auth: false,
}
ShowRoutePage.defaultProps = defaultProp
export default ShowRoutePage
