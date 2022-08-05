import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'
import { FormControlContainer } from '../FormControlContainer'

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props
  return (
    <FormControlContainer>
      <label>{label}</label>
      <Field name={name} >
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type='checkbox'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={Boolean(field.value.includes(option.value))}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </FormControlContainer>
  )
}

export default CheckboxGroup
