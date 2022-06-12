import React from 'react'
import { Form, FormProps } from '../../../core/components/Form'
import { z } from 'zod'
import { TextField } from 'mui-rff'

const RouteForm = <S extends z.ZodType<any, any>>(props: FormProps<S>) => {
  return (
    <Form<S> {...props}>
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
        label='Time'
        name='time'
        required={true}
        margin='normal'
        type={'number'}
        inputProps={{
          'data-testid': 'time-input',
        }}
      />
    </Form>
  )
}
export default RouteForm
