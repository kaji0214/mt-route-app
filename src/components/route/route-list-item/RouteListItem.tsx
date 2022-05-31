import * as React from 'react'
import { CSSProperties, memo } from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import { RouteListItemFragment } from '@/graphql/generated/client'

export type RouteListItemProps = {
  active?: boolean
  style: CSSProperties
  data: RouteListItemFragment
  onClickListItem: () => void
  onMouseEnterListItemButton: () => void
  onMouseLeaveListItemButton: () => void
}
const RouteListItem = ({
  active = false,
  style,
  data,
  onClickListItem,
  onMouseEnterListItemButton,
  onMouseLeaveListItemButton,
}: RouteListItemProps) => {
  const { id, name, time } = data

  return (
    <ListItem
      style={style}
      onClick={() => onClickListItem()}
      component='div'
      disablePadding
      data-testid={`route-list-item-${id}`}
      className={active ? 'route active' : ''}
    >
      <ListItemButton
        onMouseEnter={() => onMouseEnterListItemButton()}
        onMouseLeave={() => onMouseLeaveListItemButton()}
        style={{ height: '100%' }}
        data-testid={`route-list-item-button-${id}`}
      >
        <Grid container wrap='nowrap' spacing={2} style={{ height: '100%' }}>
          <Grid item style={{ height: '100%' }}>
            <Typography noWrap>{name}</Typography>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>
              時間: {Math.floor(time / 60)}時間 {time % 60}分
            </Typography>
          </Grid>
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}

export default memo(RouteListItem)
