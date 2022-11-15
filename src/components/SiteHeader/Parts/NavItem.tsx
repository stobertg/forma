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

const NavigationMenuTrigger = styled(NavigationMenu.Trigger, {
  all: 'unset',
  padding: '8px 12px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 15,
  color: '$textPrimary',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
  '&:focus': { boxShadow: `0 0 0 2px $textPrimary` },
  '&:hover': { backgroundColor: '$bgPrimary' },
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

const NavigationMenuLink = styled(NavigationMenu.Link, {
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

    <NavigationMenu.Item>
      { links ? (

        <>
          <NavigationMenuTrigger>
            <div>{ triggerTitle }</div>
            <Icon size="l0" icon="caret-down" />
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            { links ? ( <List {...{ callout, layout, links }} /> ) : children }
          </NavigationMenuContent>
        </>

      ) : (
        <Button {...{ href, pageLink, onClick }}>{ title }</Button>
      )}
    </NavigationMenu.Item>

  )
}