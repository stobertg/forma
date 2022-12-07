import React from 'react'
import { styled } from '@theme'
import { Button, Icon } from '@components'

// For the master container of the list component
// This container supports the list for custom, bullets, numbers, and alphabetical list layouts 

const ListWrap = styled('div', {
  position: 'relative',

  // For the container of the list itself, with the li being held within the container
  // Here automates a few things such as the horizontal direction, list style, and the spacing between the li

  ul: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    padding: 0,
    listStyle: 'none'
  },

  // The variants supported for the component
  // These contains support for direction, list style, and spacing

  variants: {

    decoration: {
      dividers: { 
        '> ul > li': { 
          padding: '16px 0',
          borderBottom: '1px solid $border',
          '&:first-child': { borderTop: '1px solid $border' }
        }
      }
    },

    // Supporting the horizontal layout of lists
    // This lays out the li in a horizontal orientation, instead of vertical by default

    direction: {
      vertical: {},
      horizontal: { ul: { flexDirection: 'row' }}
    },

    // Supporting the different list style if needed
    // This will create the list to be bulleted, numbered, or alphabetcal

    listStyle: {
      bulleted: { ul: { listStyle: 'disc', paddingLeft: 20 }},
      numbered: { ol: {listStyle: 'numbered', paddingLeft: 20 }},
      alphabetical: { ol: { listStyle: 'lower-alpha', paddingLeft: 20 }}
    },

    // Supporting the spacing between the li within a list

    spacing: {
      l0: { li: { padding: '4px 0' }},
      l0r: { 'li:not(:last-child)': { marginRight: 8 }},
      l1: { li: { padding: '8px 0' }},
      l1r: { 'li:not(:last-child)': { marginRight: 12 }},
      l2: { li: { padding: '12px 0' }},
      l2r: { 'li:not(:last-child)': { marginRight: 20 }},
      l3: { li: { padding: '20px 0' } },
      l3r: { 'li:not(:last-child)': { marginRight: 40 }},
    }
  }
})

const LiWithIcon = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

  '> *:not(:last-child)': {
    marginRight: 12
  }
})

// -------------- Typescript declarations -------------- //

export interface ListProps {
  listItems?: {
    href?: string
    pageLink?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    icon?: string
    title: string
  }[]
  decoration?: 'dividers'
  direction?: 'vertical' | 'horizontal'
  listStyle?: 'numbered' | 'bulleted' | 'alphabetical'
  spacing?: 'l0' | 'l0r' | 'l1' | 'l1r' | 'l2' | 'l2r' | 'l3' | 'l3r'
  children?: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const List = ({
    listItems, // Automated the list within a json format
    direction, // Supporting the horizontal layout of a list 
    decoration,
    listStyle, // Supporting bulleted, numbered, or alphabetical
    spacing, // For the spacing of the lis within the list
    children // For the content within the list container
  }: ListProps ) => {
  
  return(

    <ListWrap {...{ direction, listStyle, spacing, decoration }}>
      { listItems ? (

        <>
          { listStyle == 'numbered' || listStyle == 'alphabetical' ? (

            <ol>
              { listItems.map(( item: any, i ) => (
                <li key={ `item${ i }` }>
                  { item.title }
                </li>
              ))}
            </ol>

          ) : (

            <ul>
              { listItems.map(( item: any, i ) => (
                <>
                  { item.href || item.pageLink || item.onClick ? (

                    <li key={ `item${ i }` }>

                      <Button
                        href={ item.href }
                        pageLink={ item.pageLink }
                        onClick={ item.onClick }
                      >
                        { item.icon ? 

                          // Here we add support for the icon wihtin the list items
                          // This will always be on the left of the container

                          ( <LiWithIcon><Icon size="l0" icon={ item.icon } /><span>{ item.title }</span></LiWithIcon> ) : 
                          ( <>{ item.title }</> )
                        }
                      </Button>
                      
                    </li>

                  ) : (

                    <li key={ `item${ i }` }>
                      { item.icon ? 

                        // Here we add support for the icon wihtin the list items
                        // This will always be on the left of the container

                        ( <LiWithIcon><Icon size="l1" icon={ item.icon } /><span>{ item.title }</span></LiWithIcon> ) : 
                        ( <>{ item.title }</> )
                      }
                    </li>

                  )}
                </>
              ))}
            </ul>

          )}
          
        </>

      ) : listStyle == 'numbered' || listStyle == 'alphabetical' ? (
        <ol>{ children }</ol>
      ) : (
        <ul>{ children }</ul>
      )}
    </ListWrap>
    
  )
}
