import React from 'react'
import { StyledButton } from './styles'

export function Button(props, ...rest) {
  return (
    <StyledButton type='submit' className='button' {...rest}>{props.children}</StyledButton>
  )
}
