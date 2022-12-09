import React from 'react'
import { styled } from '@theme'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { Heading, Button, Illustration } from '@components'

const LinkWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  color: '$textPrimary',

  '> *:not(:last-child)': {
    marginRight: 12
  }
})

// const ListItem = React.forwardRef(({ children, title, ...props }, forwardedRef) => (
//   <li>
//     <NavigationMenu.Link asChild>
//       <ListItemLink {...props} ref={forwardedRef}>
//         <ListItemHeading>{title}</ListItemHeading>
//         <ListItemText>{children}</ListItemText>
//       </ListItemLink>
//     </NavigationMenu.Link>
//   </li>
// ))

interface ListProps {
  illustration?: string
  title: string
  descp?: string
  href?: string
  pageLink?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const ListItem = ({ 
    illustration,
    title,
    descp,
    href,
    pageLink,
    onClick
  }:ListProps) => {
  
    return(

    <li>

      <NavigationMenu.Link asChild>
        <Button {...{ href, onClick, pageLink }}>
          <LinkWrap>
            <Illustration size="l0" image={ illustration } />
            <div>
              <Heading bold {...{ title }} />
              <Heading size="l1" title={ descp } />
            </div>
          </LinkWrap>
        </Button>
      </NavigationMenu.Link>
      
    </li>

  )
}