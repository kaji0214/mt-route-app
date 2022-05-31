import gql from 'graphql-tag'

export const MOUNTAIN_LIST_ITEM_FRAGMENT = gql`
  fragment MountainListItem on Mountain {
    id
    name
    lat
    lng
  }
`
