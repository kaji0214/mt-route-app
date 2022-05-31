import gql from 'graphql-tag'

export const NEW_ROUTE_QUERY_FRAGMENT = gql`
  fragment NewRouteQuery on Mountain {
    id
    name
    lat
    lng
  }
`

export const NEW_ROUTE_QUERY = gql`
  ${NEW_ROUTE_QUERY_FRAGMENT}
  query NewRoute($where: MountainWhereUniqueInput!) {
    mountain(where: $where) {
      ...NewRouteQuery
    }
  }
`

export const CREATED_ROUTE_FRAGMENT = gql`
  fragment CreatedRoute on Route {
    id
    name
  }
`

export const CREATE_ROUTE_MUTATION_WITH_SESSION = gql`
  ${CREATED_ROUTE_FRAGMENT}
  mutation CreateRouteWithSession($data: RouteCreateWithSessionInput!) {
    createRouteWithSession(data: $data) {
      ...CreatedRoute
    }
  }
`
