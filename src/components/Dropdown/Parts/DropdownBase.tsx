import React from 'react'
import { styled } from '@theme'
import { List, Heading } from '@components'

// For the master contaienr of the dropdown

const DropdownWrap = styled('div', {
  position: 'relative',
  minWidth: 200,
  borderRadius: '$r0',
  boxShadow: '0 2px 10px rgba( 0, 0, 0, 0.1 )',

  '*': {
    width: '100%'  
  },

  '> *:not(:last-child)': {
    paddingBottom: 8,
    borderBottom: '1px solid $border'
  }
})

const DropdownList = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '8px 0',
  
  '*': {
    justifyContent: 'flex-start !important',
    color: '$textPrimary !important',
    borderRadius: '0 !important'
  }
})

const DropdownTitle = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '16px 20px'
})

interface DropdownProps {
  menu?: {
    href?: string
    pageLink?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    icon?: string
    title: string
  }[]
  listItems?: {
    href?: string
    pageLink?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    icon?: string
    title: string
  }[]
}

export const DropdownBase = ({ 
    menu,
    listItems
  }:DropdownProps) => {

  return(

    <DropdownWrap>
      { menu ? (
        <DropdownList>
          <DropdownTitle><Heading size="l1" bold title="Forma Experience" /></DropdownTitle>
          <List listItems={ menu } />
        </DropdownList>
      ) : null }

      <DropdownList>
        { menu ? ( <DropdownTitle><Heading size="l1" bold title="Manage your profile" /></DropdownTitle> ) : null }
        <List {...{ listItems }} />
      </DropdownList>
    </DropdownWrap>

  )
}