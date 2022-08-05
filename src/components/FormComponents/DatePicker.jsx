import React from 'react'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'
import { FormControlContainer } from '../FormControlContainer'

function DatePicker(props) {
  const { label, name, ...rest } = props
  return (
    <FormControlContainer>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={val => setFieldValue(name, val)}
            />
          )
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </FormControlContainer>
  )
}

export default DatePicker
