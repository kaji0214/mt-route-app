import gql from 'graphql-tag'
import { ROUTE_DETAIL_FRAGMENT } from '@/src/components/route/route-detail/RouteDetail.fragment'
import { MOUNTAIN_MARKER_FRAGMENT } from '@/src/components/mountain/mountain-marker/MountainMarker.fragment'
import { ROUTE_LATLNGS_TABLE_FRAGMENT } from '@/src/components/route/route-latlngs-table/RouteLatlngsTable.fragment'

const SHOW_ROUTE_QUERY_FRAGMENT = gql`
  ${ROUTE_LATLNGS_TABLE_FRAGMENT}
  ${ROUTE_DETAIL_FRAGMENT}
  ${MOUNTAIN_MARKER_FRAGMENT}
  fragment ShowRouteQuery on Route {
    ...RouteDetail
    ...RouteLatlngsTable
    userId
    mountain {
      ...MountainMarker
      lat
      lng
    }
  }
`

export const SHOW_ROUTE_QUERY = gql`
  ${SHOW_ROUTE_QUERY_FRAGMENT}
  query ShowRoute($where: RouteWhereUniqueInput!) {
    route(where: $where) {
      ...ShowRouteQuery
    }
  }
`
export const DELETE_ROUTE_WITH_SESSION_MUTATION = gql`
  mutation DeleteRouteWithSession(
    $where: RouteWhereUniqueInput!
    $data: RouteDeleteWithSessionInput!
  ) {
    deleteRouteWithSession(where: $where, data: $data) {
      id
    }
  }
`
