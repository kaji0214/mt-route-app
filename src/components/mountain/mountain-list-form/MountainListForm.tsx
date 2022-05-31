import React, { memo } from 'react'
import { Form } from 'react-final-form'
import { IconButton, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { LabeledTextField } from '@/src/core/components/LabeledTextField'

type OnSubmitProps = { keyword: string }
export type OnSearchMountainList = (values: OnSubmitProps) => void
type Props = {
  onSubmit: OnSearchMountainList
}
const MountainListForm = ({ onSubmit }: Props) => {
  const onSubmitHandle = (values: { keyword: string }) => {
    onSubmit(values)
  }
  return (
    <Form
      onSubmit={onSubmitHandle}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div style={{ padding: '10px' }}>
            <Paper
              component='div'
              sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <LabeledTextField name='keyword' label='Keyword' placeholder='Keyword' />
              <IconButton
                onClick={() => handleSubmit()}
                type='submit'
                sx={{ p: '10px' }}
                aria-label='search'
                data-testid={'Submit'}
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
        </form>
      )}
    />
  )
}

export default memo(MountainListForm)
