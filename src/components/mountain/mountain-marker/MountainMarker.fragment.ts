import gql from 'graphql-tag'

export const MOUNTAIN_MARKER_FRAGMENT = gql`
  fragment MountainMarker on Mountain {
    id
    lat
    lng
  }
`
