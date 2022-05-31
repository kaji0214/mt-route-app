import gql from 'graphql-tag'

export const EDITED_MOUNTAIN_QUERY_FRAGMENT = gql`
  fragment EditedMountainQuery on Mountain {
    id
    name
    lat
    lng
  }
`
export const EDITED_MOUNTAIN_QUERY = gql`
  ${EDITED_MOUNTAIN_QUERY_FRAGMENT}
  query EditedMountain($where: MountainWhereUniqueInput!) {
    mountain(where: $where) {
      ...EditedMountainQuery
    }
  }
`

export const UPDATE_MOUNTAIN_MUTATION_WITH_SESSION = gql`
  ${EDITED_MOUNTAIN_QUERY_FRAGMENT}

  mutation UpdateMountainWithSession(
    $where: MountainWhereUniqueInput!
    $data: MountainUpdateWithSessionInput!
  ) {
    updateMountainWithSession(where: $where, data: $data) {
      ...EditedMountainQuery
    }
  }
`
