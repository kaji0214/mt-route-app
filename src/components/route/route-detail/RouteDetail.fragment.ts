import gql from 'graphql-tag'

export const ROUTE_DETAIL_FRAGMENT = gql`
  fragment RouteDetail on Route {
    id
    name
    mountain {
      id
      name
    }
  }
`
