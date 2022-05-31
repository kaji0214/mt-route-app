import React from 'react'
import {
  MountainDetailFragment,
} from '@/graphql/generated/client'
import { Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

export type MountainDetailProps = {
  data: MountainDetailFragment
  onClickAddRoute: () => void
  onClickEditMountain: () => void
  onClickDeleteMountain: () => void
  canEdit: boolean
  canDelete: boolean
}
const MountainDetail = ({
  data,
  onClickAddRoute,
  onClickEditMountain,
  onClickDeleteMountain,
  canDelete,
  canEdit,
}: MountainDetailProps) => {
  const { name } = data
  return (
    <Card>
      <CardMedia component='img' height='140' image={`/no-image.png`} alt='no-image' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div' data-testid={'mountain-name'}>
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          size='small'
          data-testid={'add-route-button'}
          onClick={() => onClickAddRoute()}
        >
          Add Route
        </Button>
        <Button
          variant='contained'
          size='small'
          disabled={!canEdit}
          data-testid={'edit-mountain-button'}
          onClick={() => onClickEditMountain()}
        >
          Edit
        </Button>
        <Button
          variant='contained'
          size='small'
          disabled={!canDelete}
          data-testid={'delete-mountain-button'}
          onClick={() => onClickDeleteMountain()}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default MountainDetail
