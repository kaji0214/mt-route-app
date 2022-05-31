import React from 'react'
import { MountainListItemFragment } from '@/graphql/generated/client'
import AutoSizer from '@/src/components/layout/AutoSizer'
import { FixedSizeList, ListChildComponentProps } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Loading from '@/src/components/layout/Loading'

export type MountainListProps = {
  mountains: MountainListItemFragment[]
  loadMoreItems: () => Promise<void> | void
  hasNext: boolean
  onClickListItem: (id: number) => void
  onMouseEnterListItemButton: (id: number) => void
  onMouseLeaveListItemButton: () => void
  active: number
  isItemLoaded: (index: number) => boolean
}
const MountainList = ({
  mountains,
  loadMoreItems,
  hasNext,
  onClickListItem,
  onMouseEnterListItemButton,
  onMouseLeaveListItemButton,
  isItemLoaded,
  active,
}: MountainListProps) => {
  const renderRow = ({ index, style }: ListChildComponentProps<MountainListItemFragment[]>) => {
    if (!isItemLoaded(index)) {
      return <Loading />
    }
    const { id, name } = mountains[index]

    const isActive = active === id
    return (
      <ListItem
        style={style}
        onClick={() => onClickListItem(id)}
        component='div'
        data-testid={`mountain-list-item-${id}`}
        disablePadding
        className={isActive ? 'mountain active' : 'mountain'}
      >
        <ListItemButton
          data-testid={`mountain-list-item-button-${id}`}
          onMouseEnter={() => onMouseEnterListItemButton(id)}
          onMouseLeave={() => onMouseLeaveListItemButton()}
        >
          <ListItemText primary={name} />
        </ListItemButton>
      </ListItem>
    )
  }
  return (
    <AutoSizer>
      {({ height, width }) => (
        <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={1000} loadMoreItems={loadMoreItems}>
          {({ onItemsRendered, ref }) => (
            <FixedSizeList
              className='List'
              height={height}
              width={width}
              itemSize={50}
              itemCount={hasNext ? mountains.length + 1 : mountains.length}
              onItemsRendered={onItemsRendered}
              ref={ref}
            >
              {renderRow}
            </FixedSizeList>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  )
}

export default MountainList
