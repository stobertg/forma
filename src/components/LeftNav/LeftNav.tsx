import React from 'react'
import { styled } from '@theme'
import { Logo, List } from '@components'

const NavWrap = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: 300,
  height: '100vh',
  background: '$bgSecondary'
})

const NavHeader = styled('div', {

})

const NavHeaderContent = styled('div', {

})

// -------------- Typescript declarations -------------- //

export interface LeftNavProps {

}

// ---------- This is the end of declarations ---------- //

export const LeftNav = ({

  }: LeftNavProps ) => {
  
  return(

    <NavWrap>
      <NavHeader>
        <NavHeaderContent>
          <Logo variant="logo-full" />
        </NavHeaderContent>
      </NavHeader>
      
      <List>
      </List>
    </NavWrap>
    
  )
}
