import gql from 'graphql-tag'
import { MOUNTAIN_MARKER_FRAGMENT } from '@/src/components/mountain/mountain-marker/MountainMarker.fragment'

export const UPDATE_ROUTE_FRAGMENT = gql`
  fragment UpdateRoute on Route {
    id
    name
  }
`

export const UPDATE_ROUTE_MUTATION_WITH_SESSION = gql`
  ${UPDATE_ROUTE_FRAGMENT}
  mutation UpdateRouteWithSession(
    $data: RouteUpdateWithSessionInput!
    $where: RouteWhereUniqueInput!
  ) {
    updateRouteWithSession(data: $data, where: $where) {
      ...UpdateRoute
    }
  }
`
export const EDITED_ROUTE_QUERY_FRAGMENT = gql`
  ${MOUNTAIN_MARKER_FRAGMENT}

  fragment EditedRouteQuery on Route {
    id
    name
    time
    userId
    mountain {
      ...MountainMarker
      name
      lat
      lng
    }
    latlngs {
      lat
      lng
    }
  }
`

export const EDITED_ROUTE_QUERY = gql`
  ${EDITED_ROUTE_QUERY_FRAGMENT}
  query EditedRoute($where: RouteWhereUniqueInput!) {
    route(where: $where) {
      ...EditedRouteQuery
    }
  }
`
