import React, { useEffect, useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { Form, FormProps } from '@/src/core/components/Form'
import { z } from 'zod'
import { useMountainFormHook } from '@/src/hooks/mountain/useMountainFormHook/useMountainFormHook'
import { useCenterContextUpdater } from '@/src/contexts/CenterContext/CenterContextProvider'
import { Field } from 'react-final-form'
import { TextField } from 'mui-rff'

const MountainForm = <S extends z.ZodType<any, any>>(props: FormProps<S>) => {
  const { initialValues, ...rest } = props
  const setCenter = useCenterContextUpdater()
  const { values: formValues, onLoad, onPlaceChanged } = useMountainFormHook()

  const [values, setValues] = useState(initialValues)

  useEffect(() => {
    if (formValues) {
      setValues(formValues)
      setCenter({ lat: formValues.lat, lng: formValues.lng })
    }
  }, [formValues, setCenter])

  return (
    <Form<S> {...rest} initialValues={values}>
      <Autocomplete onLoad={onLoad} onPlaceChanged={() => onPlaceChanged()}>
        <Paper component='div' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
          <Field name='keyword'>
            {({ input, meta }) => (
              <InputBase
                {...input}
                name='keyword'
                onSubmit={() => console.log('submit')}
                sx={{ ml: 1, flex: 1 }}
                placeholder='Search Mountain'
                inputProps={{ 'aria-label': 'search mountains' }}
              />
            )}
          </Field>
          <IconButton
            type='submit'
            sx={{ p: '10px' }}
            aria-label='search'
            onSubmit={() => console.log('submit button')}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Autocomplete>
      <TextField
        label='Name'
        name='name'
        required={true}
        margin='normal'
        inputProps={{
          'data-testid': 'name-input',
        }}
      />
      <TextField
        label='Lat'
        name='lat'
        required={true}
        margin='normal'
        inputProps={{
          'data-testid': 'lat-input',
        }}
      />
      <TextField
        label='Lng'
        name='lng'
        required={true}
        margin='normal'
        inputProps={{
          'data-testid': 'lng-input',
        }}
      />
    </Form>
  )
}
export default MountainForm
