import React from 'react'
import { FormControlContainer } from '../FormControlContainer'

function Label(props) {
  const { label, name } = props
  return (
    <FormControlContainer>
      <label htmlFor={name}>{label}</label>
    </FormControlContainer>
  )
}

export default Label
