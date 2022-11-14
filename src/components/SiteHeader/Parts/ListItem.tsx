import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { Heading, Button } from '@components'

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
  title: string
  descp?: string
  href?: string
  pageLink?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const ListItem = ({ 
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
          <Heading {...{ title }} />
          <Heading title={ descp } />
        </Button>
      </NavigationMenu.Link>
    </li>

  )
}