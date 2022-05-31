import React, { useEffect, useState } from 'react'
import Sidebar from '@/src/components/layout/Sidebar'
import { Button, Box } from '@mui/material'
import MountainList from '@/src/components/mountain/mountain-list/MountainList'
import {
  MountainListItemFragment,
  MountainMarkerFragmentDoc,
  useListMountainsLazyQuery,
} from '@/graphql/generated/client'
import MountainListForm from '@/src/components/mountain/mountain-list-form/MountainListForm'
import MountainMarker from '@/src/components/mountain/mountain-marker/MountainMarker'
import { filter } from 'graphql-anywhere'
import { useAppContext } from '@/src/contexts/AppContext'
import { useRouter } from 'next/router'
import Loading from '@/src/components/layout/Loading'
import { useListMountainsHook } from '@/src/hooks/mountain/useListMountainsHook/useListMountainsHook'

const ListMountainsPage = () => {
  const router = useRouter()
  const { active, setActive } = useAppContext()
  const [mountains, setMountains] = useState<MountainListItemFragment[]>([])
  const [next, setNext] = useState<number | undefined | null>(1)

  const [fetchMore, { called, loading }] = useListMountainsLazyQuery({
    variables: {
      perPage: 10,
      page: next,
    },
  })
  const { keyword, shouldSearch, onSearch, onSearched } = useListMountainsHook({ called, loading })

  const loadMoreItems = (): Promise<void> | void => {
    if (next) {
      fetch(next).then((result) => {
        const newMountains = mountains.concat(result)
        setMountains(newMountains)
      })
    }
  }
  const fetch = (page: number): Promise<MountainListItemFragment[]> => {
    return fetchMore({
      variables: {
        perPage: 5,
        page,
        where: {
          name: {
            contains: keyword ? String(keyword) : '',
          },
        },
      },
    }).then((result) => {
      onSearched()
      if (!result.data) {
        return []
      }
      const nextValue = result.data.mountainsPagination!.meta!.next
      setNext(nextValue)
      return result.data.mountainsPagination.data
    })
  }

  useEffect(() => {
    if (shouldSearch()) {
      fetch(1).then((result) => {
        setMountains(result)
      })
    }
  }, [fetch, shouldSearch])

  return (
    <>
      <Sidebar>
        <div className={`mountain-list-sidebar`}>
          <div style={{ padding: '10px' }}>
            <MountainListForm onSubmit={onSearch} />
          </div>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              bgcolor: 'background.paper',
            }}
          >
            {loading ? (
              <Loading />
            ) : (
              <MountainList
                hasNext={!!next}
                mountains={mountains}
                loadMoreItems={loadMoreItems}
                onMouseEnterListItemButton={(id) => setActive(id)}
                onMouseLeaveListItemButton={() => setActive(-1)}
                onClickListItem={(id) => router.push(`/mountains/${id}`)}
                active={active}
                isItemLoaded={(index) => !!mountains[index]}
              />
            )}
          </Box>
          <div className={`mountain-list-sidebar__footer`}>
            <Button variant='contained' onClick={() => router.push(`/mountains/new`)}>
              Add New Mountain
            </Button>
          </div>
        </div>
      </Sidebar>
      {mountains.map((mountain) => (
        <MountainMarker
          key={mountain.id}
          active={mountain.id === active}
          data={filter(MountainMarkerFragmentDoc, mountain)}
        />
      ))}
    </>
  )
}

export default ListMountainsPage
