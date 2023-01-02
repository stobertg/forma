import React from 'react'
import { styled } from '@theme'
import { Logo } from '@components'
import { MenuButton } from './MenuButton'

const NavHeaderWrap = styled('div', {
  position: 'relative',
  width: '100%',
  background: '$brandPrimary'
})

const NavHeaderImg = styled('div', {
  width: '50%',
  margin: '0 auto',

  img: { width: '100%' },

  '@smallDesktop': { display: 'none' }
})

// For the container of the logo within the navigation

const LogoContain = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '60%',
  margin: '0 auto',

  // For the changes on the smaller desktop - conserving space for the components
  // Here we remove the left nav and place the logo smaller on the top of the page, full width

  '@smallDesktop': {
    margin: 0,
    width: 'auto',

    // Here we remove the wordmark on mobile breakpoints

    '> div > div > div:last-child': {
      display: 'none'
    }
  }
})

const NavHeaderContent = styled('div', {
  position: 'relative',
  width: '80%',
  margin: '0 auto',
  padding: '32px 0',

  // For the automated spacing between elements within the container
  // This will add the spacing to the bottom of the containers 

  '> *:not(:last-child)': {
    marginBottom: 4
  },

  '@smallDesktop': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    padding: '16px 0'
  }
})

interface NavProps {
  onMenuClick: React.MouseEventHandler<HTMLButtonElement>
}

// ---------- This is the end of declarations ---------- //

export const NavHeader = ({ onMenuClick }:NavProps) => {
  
  return(

    <NavHeaderWrap>
      <NavHeaderContent>
        <NavHeaderImg><img src="/illustration/why-switch.png" /></NavHeaderImg>
        <LogoContain><Logo wordMarkColor="light" /></LogoContain>
        <MenuButton onClick={ onMenuClick } />
      </NavHeaderContent>
    </NavHeaderWrap>
    
  )
}
