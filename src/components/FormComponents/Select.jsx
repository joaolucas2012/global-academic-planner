import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'
import { FormControlContainer } from '../FormControlContainer'

function Select(props) {
  const { label, name, options, ...rest } = props
  return (
    <FormControlContainer>
      <label htmlFor={name}>{label}</label>
      <Field as='select' id={name} name={name} {...rest} >
        {
          options.map(option => {
            return (
              <option key={option.value} value={option.value}>{option.key}</option>
            )
          })
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </FormControlContainer>
  )
}

export default Select
