import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'
import { FormControlContainer } from '../FormControlContainer'

function Textarea(props) {
  const { label, name, ...rest } = props
  return (
    <FormControlContainer>
      <label htmlFor={name}>{label}</label>
      <Field as='textarea' id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </FormControlContainer>
  )
}

export default Textarea
