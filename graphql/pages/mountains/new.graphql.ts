import gql from 'graphql-tag'

export const CREATED_MOUNTAIN_WITH_SESSION_FRAGMENT = gql`
  fragment CreatedMountainWithSession on Mountain {
    id
    name
    lat
    lng
  }
`
export const CREATE_MOUNTAIN_MUTATION_WITH_SESSION = gql`
  ${CREATED_MOUNTAIN_WITH_SESSION_FRAGMENT}
  mutation CreateMountainWithSession($data: MountainCreateWithSessionInput!) {
    createMountainWithSession(data: $data) {
      ...CreatedMountainWithSession
    }
  }
`
