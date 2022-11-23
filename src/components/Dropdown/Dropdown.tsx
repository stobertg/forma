import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { styled } from '@theme'
import { Avatar } from '@components'

const DropdownWrap = styled(DropdownMenu.Root, {

})

const DropdownTrigger = styled(DropdownMenu.Trigger, {

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
      </DropdownTrigger>
    </DropdownWrap>
      
  )
}