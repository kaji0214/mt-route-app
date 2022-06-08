import React, { useEffect, useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { Form, FormProps } from '@/src/core/components/Form'
import { LabeledTextField } from '@/src/core/components/LabeledTextField'
import { z } from 'zod'
import { useMountainFormHook } from '@/src/hooks/mountain/useMountainFormHook/useMountainFormHook'
import { useCenterContextUpdater } from '@/src/contexts/CenterContext/CenterContextProvider'

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
        <Paper
          component='div'
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <InputBase
            fullWidth={true}
            sx={{ ml: 1, flex: 1 }}
            placeholder='Search Google Maps'
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
            <SearchIcon />
          </IconButton>
        </Paper>
      </Autocomplete>
      <LabeledTextField name='name' label='Name' placeholder='Name' />
      <LabeledTextField name='lat' label='Lat' placeholder='Lat' type='number' />
      <LabeledTextField name='lng' label='Lng' placeholder='Lng' type='number' />
    </Form>
  )
}
export default MountainForm
