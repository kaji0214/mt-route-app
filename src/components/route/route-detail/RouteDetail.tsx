import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { memo } from 'react'
import { RouteDetailFragment } from '@/graphql/generated/client'
export type RouteDetailProps = {
  data: RouteDetailFragment
  canEdit: boolean
  canDelete: boolean
  onClickEditRoute: () => void
  onClickDeleteRoute: () => void
}
const RouteDetail = ({
  data,
  canEdit,
  canDelete,
  onClickEditRoute,
  onClickDeleteRoute,
}: RouteDetailProps) => {
  const { id, name, mountain } = data

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div' data-test-id={'route-name'}>
          {name}
        </Typography>
        <Typography data-test-id={'mountain-name'}>{mountain.name}</Typography>
      </CardContent>
      <CardActions>
        {/*<Link href={`/mountains/${mountain.id}/routes/${id}/edit`} passHref>*/}
        {/*  <Button variant='contained' size='small'>*/}
        {/*    Edit Route*/}
        {/*  </Button>*/}
        {/*</Link>*/}
        <Button variant='contained' size='small' disabled={!canEdit} onClick={onClickEditRoute}>
          Edit
        </Button>
        <Button variant='contained' size='small' disabled={!canDelete} onClick={onClickDeleteRoute}>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default memo(RouteDetail)
