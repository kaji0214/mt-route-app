import React from 'react'
import { DefaultPageProps } from '../../_app'
import Box from '@mui/material/Box'
import {
  MountainMarkerFragmentDoc,
  RouteListItemFragment,
  RouteListItemFragmentDoc,
  RoutePolylineFragmentDoc,
  ShowMountainQuery,
  useDeleteMountainWithSessionMutation,
} from '@/graphql/generated/client'
import MountainDetail from '../../../src/components/mountain/mountain-detail/MountainDetail'
import { filter } from 'graphql-anywhere'
import { MOUNTAIN_DETAIL_FRAGMENT } from '@/src/components/mountain/mountain-detail/MountainDetail.fragment'
import MountainMarker from '@/src/components/mountain/mountain-marker/MountainMarker'
import Sidebar from '@/src/components/layout/Sidebar'
import RoutePolyline from '@/src/components/route/route-polyline/RoutePolyline'
import EmptyData from '@/src/components/layout/EmptyData'
import RouteListItem from '@/src/components/route/route-list-item/RouteListItem'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import RouteList from '@/src/components/route/route-list/RouteList'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { SHOW_MOUNTAIN_QUERY } from '@/graphql/pages/mountains/mid/index.graphql'
import client from '@/graphql/client'
import { useSetSideMenuWidth } from '@/src/hooks/useSetSideMenuWidth/useSetSideMenuWidth'
import { useShowMountainHook } from '@/src/hooks/mountain/useShowMountainHook/useShowMountainHook'
import { useIsToastOpenContextUpdater } from '@/src/contexts/IsToastOpenContext/IsToastOpenContextProvider'
import { useActiveContextState } from '@/src/contexts/ActiveContext/ActiveContextProvider'
import { useActiveContextUpdater } from '@/src/contexts/ActiveContext/ActiveContextProvider'
import { useToastContextUpdater } from '@/src/contexts/ToastContext/ToastContextProvider'

type Data = {
  query: ShowMountainQuery
}
const ShowMountain = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useSetSideMenuWidth(400)
  const { query } = data

  const router = useRouter()
  const active = useActiveContextState()
  const setActive = useActiveContextUpdater()
  const setToast = useToastContextUpdater()
  const setIsToastOpen = useIsToastOpenContextUpdater()
  const { data: session } = useSession()
  const { mid } = router.query
  const [deleteMountain] = useDeleteMountainWithSessionMutation()
  const { canEdit, canDelete, onClickAddRoute, onClickEditMountain, mountain } =
    useShowMountainHook({
      query,
    })

  const isActive = false

  const onClickDeleteMountain = () => {
    deleteMountain({
      variables: {
        where: {
          id: Number(mid),
        },
        data: {
          userId: session!.user!.id,
        },
      },
    }).then((res) => {
      setToast('success')
      setIsToastOpen(true)
      router.push(`/mountains`)
    })
  }

  if (!mountain) {
    return <EmptyData />
  }

  return (
    <>
      <Sidebar backUrl={'/'}>
        <>
          <div style={{ padding: '5px' }}>
            <MountainDetail
              data={filter(MOUNTAIN_DETAIL_FRAGMENT, mountain)}
              onClickDeleteMountain={() => onClickDeleteMountain()}
              onClickAddRoute={() => onClickAddRoute()}
              onClickEditMountain={() => onClickEditMountain()}
              canDelete={canDelete}
              canEdit={canEdit}
            />
          </div>
          <Box
            sx={{
              width: '100%',
              bgcolor: 'background.paper',
            }}
          >
            <RouteList data={mountain.routes}>
              {({ style, index }) => (
                <RouteListItem
                  style={style}
                  data={filter<RouteListItemFragment>(
                    RouteListItemFragmentDoc,
                    mountain.routes[index],
                  )}
                  active={isActive}
                  onClickListItem={() =>
                    router.push(`/mountains/${mid}/routes/${mountain.routes[index].id}`)
                  }
                  onMouseEnterListItemButton={() => setActive(mountain.routes[index].id)}
                  onMouseLeaveListItemButton={() => setActive(-1)}
                />
              )}
            </RouteList>
          </Box>
        </>
      </Sidebar>
      {mountain.routes.map((route) => (
        <RoutePolyline
          data={filter(RoutePolylineFragmentDoc, route)}
          key={route.id}
          active={active === route.id}
        />
      ))}
      <MountainMarker data={filter(MountainMarkerFragmentDoc, mountain)} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  const result = await client.query<ShowMountainQuery>({
    query: SHOW_MOUNTAIN_QUERY,
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
ShowMountain.defaultProps = defaultProp
export default ShowMountain
