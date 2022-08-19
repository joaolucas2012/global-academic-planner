import React from 'react'
import { ErrorDiv } from './styles'

export default function TextError(props) {
  return (
    <ErrorDiv>{props.children}</ErrorDiv>
  )
}
