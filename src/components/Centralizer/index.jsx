import React from 'react'
import { CenterDiv, AppContainer } from './styles'

export const Centralizer = (props) => {
  return (
    <AppContainer>
      <CenterDiv>
        {props.children}
      </CenterDiv>
    </AppContainer>
  )
}
