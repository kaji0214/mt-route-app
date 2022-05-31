import gql from 'graphql-tag'

export const ROUTE_LATLNGS_TABLE_FRAGMENT = gql`
  fragment RouteLatlngsTable on Route {
    latlngs {
      id
      lat
      lng
    }
  }
`
