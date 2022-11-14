import React from 'react'
import { styled } from '@theme'
import { ListItem } from './ListItem'

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
          width: 500,
          gridTemplateColumns: '.75fr 1fr',
        },
      },
      two: {
        '@media only screen and (min-width: 600px)': {
          width: 600,
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

interface ListProps {
  links?: {
    title: string
    descp?: string
    href?: string
    pageLink?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }[]
  layout?: 'one' | 'two'
  children?: React.ReactNode
}

export const List = ({ 
    links, 
    layout,
    children
  }:ListProps) => {

  return(

    <ListWrap {...{ layout }}>
      { links ? (
        <>
          { links.map(( link, i ) => (

            <ListItem 
              key={`link-${ i}`}
              title={ link.title }
              descp={ link.descp }
              href={ link.href }
              pageLink={ link.pageLink }
              onClick={ link.onClick }
            />

          ))}
        </>
      ) : children }
    </ListWrap>

  )
}