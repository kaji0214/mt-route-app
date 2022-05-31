import gql from 'graphql-tag'
import { MOUNTAIN_DETAIL_FRAGMENT } from '@/src/components/mountain/mountain-detail/MountainDetail.fragment'
import { ROUTE_LIST_ITEM_FRAGMENT } from '@/src/components/route/route-list-item/RouteListItem.fragment'
import { ROUTE_POLYLINE_FRAGMENT } from '@/src/components/route/route-polyline/RoutePolyline.fragment'

export const SHOW_MOUNTAIN_FRAGMENT = gql`
  ${MOUNTAIN_DETAIL_FRAGMENT}
  ${ROUTE_LIST_ITEM_FRAGMENT}
  ${ROUTE_POLYLINE_FRAGMENT}
  fragment ShowMountain on Mountain {
    ...MountainDetail
    id
    userId
    lat
    lng
    _count {
      routes
    }
    routes {
      ...RouteListItem
      ...RoutePolyline
    }
  }
`
export const SHOW_MOUNTAIN_QUERY = gql`
  ${SHOW_MOUNTAIN_FRAGMENT}
  query ShowMountain($where: MountainWhereUniqueInput!) {
    mountain(where: $where) {
      ...ShowMountain
    }
  }
`
