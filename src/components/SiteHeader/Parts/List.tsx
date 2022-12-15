import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { styled } from '@theme'
import { Callout, ListItem } from './index'

const DropdownContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%'
})

// For the master container of the links within the dropdown

const ListWrap = styled('ul', {
  display: 'grid',
  padding: 22,
  margin: 0,
  columnGap: 10,
  listStyle: 'none',
  variants: {
    layout: {
      one: {
        '@media only screen and (min-width: 600px)': {
          width: 1200,
          gridTemplateColumns: '.75fr 1fr',
        },
      },
      two: {
        '@media only screen and (min-width: 600px)': {
          width: 1200,
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(3, 1fr)',
        },
      },
    },
  },
  defaultVariants: {
    layout: 'one',
  },
})

// const Callout = styled('a', {
//   display: 'flex',
//   justifyContent: 'flex-end',
//   flexDirection: 'column',
//   width: '100%',
//   height: '100%',
//   background: `linear-gradient(135deg, '$textPrimary' 0%, '$textPrimary' 100%);`,
//   borderRadius: 6,
//   padding: 25,
//   textDecoration: 'none',
//   outline: 'none',
//   userSelect: 'none',
//   '&:focus': { boxShadow: `0 0 0 2px '$textPrimary'` },
// })

const CalloutHeading = styled('div', {
  color: 'white',
  fontSize: 18,
  fontWeight: 500,
  lineHeight: 1.2,
  marginTop: 16,
  marginBottom: 7,
})

// -------------- Typescript declarations -------------- //

interface ListProps {
  links?: {
    illustration?: string
    title: string
    descp?: string
    href?: string
    pageLink?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }[]
  layout?: 'one' | 'two'
  callout?: any
  children?: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const List = ({ 
    links, 
    layout,
    callout,
    children
  }:ListProps) => {

  return(

    <ListWrap {...{ layout }}>
      <DropdownContent>

        { callout ? ( <Callout /> ) : null }

        { links ? (
          <>
            { links.map(( link, i ) => (

              <ListItem 
                key={`link-${ i }`}
                illustration={ link.illustration }
                title={ link.title }
                descp={ link.descp }
                href={ link.href }
                pageLink={ link.pageLink }
                onClick={ link.onClick }
              />

            ))}
          </>
        ) : children }

      </DropdownContent>
    </ListWrap>

  )
}