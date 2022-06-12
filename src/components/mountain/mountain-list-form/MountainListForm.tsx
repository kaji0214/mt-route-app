import React, { memo } from 'react'
import { Field, Form } from 'react-final-form'
import { IconButton, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'

export type OnSubmitProps = { keyword: string }
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
            <Paper component='div' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
              <Field name='keyword'>
                {({ input }) => (
                  <InputBase
                    {...input}
                    name='keyword'
                    sx={{ ml: 1, flex: 1 }}
                    placeholder='Search Mountain'
                    inputProps={{
                      'aria-label': 'search mountains',
                      'data-testid': 'keyword-input',
                    }}
                  />
                )}
              </Field>
              <IconButton type='submit' sx={{ p: '10px' }} aria-label='search' data-testid='Submit'>
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
