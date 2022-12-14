import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { styled, keyframes } from '@theme'
import { Icon, Button } from '@components'
import { List } from './List'

const enterFromRight = keyframes({
  from: { transform: 'translateX(200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const enterFromLeft = keyframes({
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(200px)', opacity: 0 },
});

const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-200px)', opacity: 0 },
});

const NavWrap = styled(NavigationMenu.Item, {

  button: {
    padding: '8px 12px',
  }
})

// For the triggers of the dropdown menu
// This holds the trigger title on the left and the chevron down icon on the right 

const NavigationMenuTrigger = styled(NavigationMenu.Trigger, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  position: 'relative',
  outline: 'none',
  userSelect: 'none',
  
  transition: '$s1',
  '&:focus': { boxShadow: `0 0 0 2px $textPrimary` },

  // Automate the spacing between the title and the icon 
  
  '> *:not(:last-child)': {
    marginRight: 8
  },

  '> *:last-child': {
    minWidth: 10,
    width: 10,
    minHeight: 14,
    height: 14
  },

  // For the hover effect to show the affordance that the use is on that tab
  // This will turn the color of the title and the icon lighter

  '&:hover': {
    color: '$indigo300'
  }
})

const NavigationMenuContent = styled(NavigationMenu.Content, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  '@media only screen and (min-width: 600px)': { width: 'auto' },
  animationDuration: '250ms',
  animationTimingFunction: 'ease',
  '&[data-motion="from-start"]': { animationName: enterFromLeft },
  '&[data-motion="from-end"]': { animationName: enterFromRight },
  '&[data-motion="to-start"]': { animationName: exitToLeft },
  '&[data-motion="to-end"]': { animationName: exitToRight },
})

const NavigationMenuLink = styled( NavigationMenu.Link, {
  display: 'block',
  textDecoration: 'none',
  fontSize: 15,
  lineHeight: 1,
})

interface NavProps {
  layout?: 'one' | 'two'
  links?: any
  callout?: any
  title?: string
  triggerTitle?: string
  children?: React.ReactNode
  href?: string
  pageLink?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const NavItem = ({
    href,
    pageLink,
    onClick,
    links,
    layout,
    callout,
    title,
    triggerTitle,
    children
  }:NavProps) => {
  
    return(

    <NavWrap>
      { links ? (

        <>
          <NavigationMenuTrigger>
            <div>{ triggerTitle }</div>
            <Icon size="l0" icon="chevron-down" />
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            { links ? ( <List {...{ callout, layout, links }} /> ) : children }
          </NavigationMenuContent>
        </>

      ) : (
        <button>{ title }</button>
      )}
    </NavWrap>

  )
}