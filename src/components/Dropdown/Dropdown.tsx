import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { styled } from '@theme'
import { Avatar, Icon } from '@components'

const DropdownWrap = styled(DropdownMenu.Root, {

})

const DropdownTrigger = styled(DropdownMenu.Trigger, {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  // For the spacing 

  '> *:not(:last-child)': {
    marginRight: 8
  }
})

interface DropdownProps {
  trigger: string | React.ReactNode
}

export const Dropdown = ({ 
    trigger 
  }:DropdownProps) => {

  return(

    <DropdownWrap>
      <DropdownTrigger>
        <span>{ trigger }</span>
        <Icon size="l0" icon="chevron-down" />
      </DropdownTrigger>
    </DropdownWrap>
      
  )
}