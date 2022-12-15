import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { styled } from '@theme'
import { Heading, Button, Illustration } from '@components'

// For the master container of the link wrap
// This holds the icon/illustration on the left and the title on the right of the container

const LinkWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

  // Here we automate the spacing between any content within the container
  // Currently, it is the spacing between the title on the left and the icon on the right

  '> *:not(:last-child)': { marginRight: 12 }
})

// For the container of the text within the button
// This sits on the right side of the container, next to the icon

const LinkText = styled('div', {
  position: 'relative',
  '> *:not(:last-child)': { marginBottom: 4 }
})

// -------------- Typescript declarations -------------- //

interface ListProps {
  illustration?: string
  title: string
  descp?: string
  href?: string
  pageLink?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

// ---------- This is the end of declarations ---------- //

export const ListItem = ({ 
    illustration, // Optional - for the icon on the left of the container
    title, // Required - for the title of the link
    descp, // Optional - for the subtitle below the title
    href, // Optional - this supports the ability for the click to go to an external link
    pageLink, // Optional - this supports the ability for the click to go to an internal link
    onClick // Optional - this supports the ability for the click to return a function on the current page
  }:ListProps) => {
  
  return(

    <li>

      <NavigationMenu.Link asChild>
        {/* <Button {...{ href, onClick, pageLink }}> */}

          <LinkWrap>
            <Illustration size="l0" image={ illustration } />
            <LinkText>
              <Heading size="l2" bold {...{ title }} />
              <Heading size="l1" color="gray" title={ descp } />
            </LinkText>
          </LinkWrap>

        {/* </Button> */}
      </NavigationMenu.Link>

    </li>

  )
}