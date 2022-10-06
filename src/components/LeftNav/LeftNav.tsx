import React from 'react'
import Link from 'next/link'
import { styled } from '@theme'
import { List, Heading, Icon } from '@components'
import { NavHeader } from './Parts'

const NavWrap = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: 300,
  height: '100vh',
  background: '$bgSecondary'
})

// For the container of the links within the left nav

const NavLinks = styled('nav', {

  // For the spacing of all of the a links within the navigation
  // Here we want the whole row area of a link to be clickable but make sure the spacing is individual so the correct
  // alignment is observed 

  a: {
    display: 'flex',
    flexDrection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '10px 32px',

    // For the background of the link background that shows up on hover
    // Here we need a pseudo element because we don't want the background to cover the full width of the clickable link

    '&:before': {
      content: '',
      position: 'absolute',
      width: '90%',
      height: 'calc( 100% + 8px )',
      background: '$bgPrimary',
      borderRadius: '$r1',
      zIndex: 0,
      transition: '$s1',
      opacity: 0
    },

    // For the main content within the a link
    // This is needed so that the content of the link can sit above the background on hover

    '> span:first-child': {
      display: 'inline-flex',
      justifyContent: 'space-between',
      position: 'relative',
      width: '100%',
      zIndex: 1
    },

    // For the position of the arrow on the right side of the container
    // By default, the arrow is hidden and shows up once the user hovers a link

    '> span:last-child': {
      transform: 'translateX( -10px )',
      transition: '$s1',
      opacity: 0
    },

    // On hover, we show the background of the link
    // This is to give the afforance that the link is clickable

    '&:hover': {
      '*': { color: '$textLink' },
      '&:before': { opacity: 1 },
      '> span:last-child': { transform: 'translateX( 0 )', opacity: 1}
    }
  }
})

// For the header of the nav links block

const NavLinksHeading = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '0 32px',
  marginBottom: 16
})

// -------------- Typescript declarations -------------- //

export interface LeftNavProps {
  links: {
    title: string
    href: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const LeftNav = ({
    links
  }: LeftNavProps ) => {
  
  return(

    <NavWrap>
      <NavHeader />
      
      <NavLinks>
        <NavLinksHeading><Heading bold size="l1" title="Components" /></NavLinksHeading>
        <List>
          { links.map(( link, i ) => (

            <li>
              <Link href={ link.href }>
                <a>
                  <span><Heading size="l0" title={ link.title } /></span>
                  <Icon size="l0" icon="arrow-right" />
                </a>
              </Link>
            </li>

          ))}
        </List>
      </NavLinks>
    </NavWrap>
    
  )
}
