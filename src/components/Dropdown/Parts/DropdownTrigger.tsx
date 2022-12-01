import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { styled } from '@theme'
import { Avatar, Icon } from '@components'

const TriggerWrap = styled(DropdownMenu.Trigger, {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  // For the spacing between the icon or text, and the dropdown icon on the right
  // This automates any container within here

  '&:not(:last-child)': {
    marginRight: 12
  }
})

interface TriggerProps {

}

export const DropdownTrigger = ({}:TriggerProps) => {
  return(

    <TriggerWrap>
      <Avatar 
        nameHidden
        image="/people/christine.png"
        name="Christine Dailey"
      />

      <Icon size="l1" icon="caret-down" />
    </TriggerWrap>

  )
}