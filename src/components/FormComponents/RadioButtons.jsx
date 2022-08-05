import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'
import { FormControlContainer } from '../FormControlContainer'

function RadioButtons(props) {
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
                  type='radio'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </FormControlContainer>
  )
}

export default RadioButtons
