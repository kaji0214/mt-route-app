import gql from 'graphql-tag'
import { MOUNTAIN_MARKER_FRAGMENT } from '@/src/components/mountain/mountain-marker/MountainMarker.fragment'
import { MOUNTAIN_LIST_ITEM_FRAGMENT } from '@/src/components/mountain/mountain-list/MountainList.fragment'

const LIST_MOUNTAINS_QUERY_FRAGMENT = gql`
  ${MOUNTAIN_LIST_ITEM_FRAGMENT}
  ${MOUNTAIN_MARKER_FRAGMENT}

  fragment ListMountainsQuery on MountainsPagination {
    data {
      ...MountainListItem
      ...MountainMarker
    }
    meta {
      total
      lastPage
      currentPage
      perPage
      prev
      next
    }
  }
`

export const LIST_MOUNTAINS_QUERY = gql`
  ${LIST_MOUNTAINS_QUERY_FRAGMENT}

  query ListMountains(
    $where: MountainWhereInput
    $orderBy: [MountainOrderByWithRelationInput!]
    $perPage: Int
    $page: Int
  ) {
    mountainsPagination(where: $where, orderBy: $orderBy, perPage: $perPage, page: $page) {
      ...ListMountainsQuery
    }
  }
`
