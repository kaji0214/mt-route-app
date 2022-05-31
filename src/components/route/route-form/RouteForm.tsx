import React from 'react'
import { Form, FormProps } from '../../../core/components/Form'
import { LabeledTextField } from '../../../core/components/LabeledTextField'
import { z } from 'zod'

const RouteForm = <S extends z.ZodType<any, any>>(props: FormProps<S>) => {
  return (
    <Form<S> {...props}>
      <LabeledTextField name='name' label='Name' placeholder='Name' />
      <LabeledTextField name='time' label='Time' placeholder='Time' type='number' />
    </Form>
  )
}
export default RouteForm
