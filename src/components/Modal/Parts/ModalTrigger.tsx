import React from 'react'
import { styled } from '@theme'
import { Button } from '@components'
import * as DialogPrimitive from '@radix-ui/react-dialog'

const TriggerWrap = styled(DialogPrimitive.Trigger, {
  display: 'inline-flex',
  flexDirection: 'row',
})

interface TriggerProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'disabled'
  size?: 'l0'
  title: string
}

export const ModalTrigger = ({
    variant,
    size,
    title
  }:TriggerProps) => {
  
  return(

    <TriggerWrap asChild>
      <Button {...{ variant, size, title }} />
    </TriggerWrap>

  )
}