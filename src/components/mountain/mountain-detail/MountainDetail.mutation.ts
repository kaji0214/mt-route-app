import gql from 'graphql-tag'

export const MOUNTAIN_DELETE_FRAGMENT = gql`
  fragment MountainDelete on Mountain {
    id
  }
`
export const MOUNTAIN_DELETE_MUTATION_WITH_SESSION = gql`
  ${MOUNTAIN_DELETE_FRAGMENT}

  mutation DeleteMountainWithSession(
    $where: MountainWhereUniqueInput!
    $data: MountainDeleteWithSessionInput!
  ) {
    deleteMountainWithSession(where: $where, data: $data) {
      ...MountainDelete
    }
  }
`
