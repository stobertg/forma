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
})

interface DropdownProps {

}

export const Dropdown = ({}:DropdownProps) => {
  return(

    <DropdownWrap>
      <DropdownTrigger>
        <Avatar 
          nameHidden
          image="/people/christine.png"
          name="Christine Dailey"
        />

        <Icon size="l1" icon="caret-down" />
      </DropdownTrigger>
    </DropdownWrap>
      
  )
}