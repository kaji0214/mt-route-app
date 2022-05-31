import gql from 'graphql-tag'

export const MOUNTAIN_DETAIL_FRAGMENT = gql`
  fragment MountainDetail on Mountain {
    name
  }
`
