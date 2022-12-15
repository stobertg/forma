import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { styled, keyframes } from '@theme'
import { Viewport } from './index'

// For the animations used for displaying the dropdown menu
// This includes, intro, outro, and left and right transition

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })
const fadeOut = keyframes({ from: { opacity: 1 }, to: { opacity: 0 } })

// For the master container for all of the dropdown links
// This is the container that holds all of the navigation links in the center of the header

const NavigationMenuRoot = styled(NavigationMenu.Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  zIndex: 1,
})

const NavigationMenuList = styled(NavigationMenu.List, {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'white',
  padding: 4,
  borderRadius: 6,
  listStyle: 'none',
  boxShadow: `0 2px 10px $bgPrimary`,
  margin: 0,
})

const NavigationMenuIndicator = styled(NavigationMenu.Indicator, {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: '100%',
  overflow: 'hidden',
  zIndex: 1,
  transition: 'width, transform 250ms ease',
  '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
  '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
})

// For the arrow on top of the container
// This follows the user from dropdown to dropdown, animating between them

const Arrow = styled('div', {
  position: 'relative',
  top: '70%',
  width: 10,
  height: 10,
  borderTopLeftRadius: 2,
  backgroundColor: 'white',
  transform: 'rotate(45deg)'
})

// -------------- Typescript declarations -------------- //

interface NavProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const NavWrapper = ({ children }:NavProps) => {
  return(

    <NavigationMenuRoot>
      <NavigationMenuList>
        { children }
        <NavigationMenuIndicator><Arrow /></NavigationMenuIndicator>
      </NavigationMenuList>

      <Viewport />
    </NavigationMenuRoot>

  )
}