import gql from 'graphql-tag'

export const ROUTE_POLYLINE_FRAGMENT = gql`
  fragment RoutePolyline on Route {
    id
    latlngs {
      id
      lat
      lng
    }
  }
`
