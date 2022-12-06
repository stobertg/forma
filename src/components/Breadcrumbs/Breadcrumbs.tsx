import React from 'react'
import Link from 'next/link'
import { styled } from '@theme'
import { List, Icon } from '@components'

const CrumbWrap = styled('div', {
  position: 'relative',

  '*': { 
    color: '$textSecondary',
    transition: '$s1'
  },

  a: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',

    '> *:not(:last-child)': {
      marginRight: 8
    },

    '&:hover': {
      textDecoration: 'underline',
      '&, *': { color: '$textLink' }
    }
  },

  li: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',

    '&:not(:last-child)': {
      marginRight: 12
    },

    '&:last-child': {
      pointerEvents: 'none',
      '*': { color: '$textPrimary' },
      '> *:last-child': { display: 'none' }
    },

    '> *:not(:last-child)': {
      marginRight: 10
    }
  },

  variants: {
    variant: {
      truncated: {
        li: { 
          '&:not(:first-child , &:nth-child(2), :last-child )': { display: 'none' }, 
          '&:nth-child(2)': { 
            '&:before': {
              content: '•••',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              width: 40,
              marginRight: 12,
              padding: '4px 0 6px',
              background: '$bgSecondary',
              borderRadius: '$r0',
            },
            '> *:not(:last-child)': { display: 'none' }
          }
        }
      }
    }
  }
})

interface BreadcrumbProps {
  variant?: 'truncated'
  divider?: 'slashes'
  links: {
    pageLink: string
    icon?: string
    title: string
  }[]
}

export const Breadcrumbs = ({ variant, links, divider }:BreadcrumbProps) => {
  return(

    <CrumbWrap {...{ variant }}>
      <List direction="horizontal">
        { links.map(( link:any, i:any ) => (

          <li key={`link-${ i }`}>
            <Link href={ link.pageLink }>
              <a>
                { link.icon ? <Icon size="l0" icon={ link.icon } /> : null }
                <span>{ link.title }</span>
              </a>
            </Link>
            { divider == "slashes" ? <span>/</span> : <Icon size="l0" icon="chevron-right" /> }
          </li>

        ))}
      </List>
    </CrumbWrap>
      
  )
}