import React from 'react'
import { CenterDiv } from './styles'

export const Centralizer = (props) => {
  return (
    <div className="App">
      <CenterDiv className="center">
        {props.children}
      </CenterDiv>
    </div>
  )
}
