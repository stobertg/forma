import React, { useState } from 'react'
import { styled } from '@theme'
import { Logo, ButtonContainer, List } from '@components'

const HeaderWrap = styled('header', {
  position: 'relative',
  width: '100%'
})

const Nav = styled('nav', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  margin: '0 auto',

  // Align the last buttons on the right to be aligned to the right side of the container

  '> *:last-child > *': {
    justifyContent: 'flex-end'
  }
})  

const NavMiddle = styled('div', {
  position: 'relative',
  width: '70%'
})

const NavSide = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  width: '30%'
})

// ---------- This is the end of declarations ---------- //

export const SiteHeader = () => {
  return(

    <HeaderWrap>
      <Nav>
        <NavSide><Logo size="l0" /></NavSide>

        <List direction="horizontal" spacing="l2r">
          <li><a href="/">Products</a></li>
          <li><a href="/">Platform</a></li>
          <li><a href="/">Resources</a></li>
          <li><a href="/">Customers</a></li>
        </List>

        <NavSide>
          <ButtonContainer 
            buttons={[
              { size: 'l0', title: 'Log in' },
              { size: 'l0', variant: 'primary', title: 'Book a Demo' }
            ]}
          />
        </NavSide>
      </Nav>
    </HeaderWrap>

  )
}
