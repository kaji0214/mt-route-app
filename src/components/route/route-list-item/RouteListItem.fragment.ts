import gql from 'graphql-tag'

export const ROUTE_LIST_ITEM_FRAGMENT = gql`
  fragment RouteListItem on Route {
    id
    mountainId
    name
    time
  }
`
