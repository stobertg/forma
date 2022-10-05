import React from 'react'
import { styled } from '@theme'

const NavWrap = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: 300,
  height: '100vh',
  background: '$moon'
})

// -------------- Typescript declarations -------------- //

export interface LeftNavProps {

}

// ---------- This is the end of declarations ---------- //

export const LeftNav = ({

  }: LeftNavProps ) => {
  
  return(

    <NavWrap>This is some content</NavWrap>
    
  )
}
