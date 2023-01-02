import React from 'react'
import { styled } from '@theme'

const MenuIcon = styled('button', {
  display: 'none',
  flexDirection: 'row',
  alignItems: 'center',
  color: '$white50',

  '@smallDesktop': { display: 'flex' }
})

const HamburgerIcon = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: 20,
  height: 12,
  marginRight: 12,

  // For the lines that make up the hamburger on the top, middle, and bottom

  '&:before, &:after, span': {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: 1,
    borderRadius: 2,
    background: '$white50'
  },

  '&:before': { content: '', top: 0 },
  '&:after': { content: '', bottom: 0 }
})

interface MenuProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

// ---------- This is the end of declarations ---------- //

export const MenuButton = ({ onClick }:MenuProps) => {
  return(

    <MenuIcon {...{ onClick }}>
      <HamburgerIcon><span></span></HamburgerIcon>
      <span>Menu</span>
    </MenuIcon>
      
  )
}