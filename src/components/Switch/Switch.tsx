import React from 'react'
import { styled } from '@theme'
import * as SwitchPrimitive from '@radix-ui/react-switch'

const SwitchWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  // width: '100%',
  '> *:not(:last-child)': { marginRight: 12 },

  variants: {
    labelPlacement: {
      default: { },
      right: { 
        flexDirection: 'row-reverse',
        '> *:not(:last-child)': { marginRight: 0 },
        '> *:not(:first-child)': { marginRight: 12 }
      }
    }
  }
})

const SwitchContent = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: '$bgTertiary',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px $textPrimary`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: '$textLink' },
})

const SwitchThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: 'white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px $textPrimary`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
})

interface SwitchProps {
  id: string
  label: string
  labelPlacement?: 'right'
  labelHidden?: boolean
  defaultChecked?: boolean
}

export const Switch = ({ 
    id, 
    label, 
    labelPlacement, 
    defaultChecked,
    labelHidden 
  }:SwitchProps) => {

  return(

    <SwitchWrap {...{ labelPlacement }}>
      { labelHidden ? null : ( <label htmlFor={ id }>{ label }</label> )}
      <SwitchContent {...{ id, defaultChecked }}><SwitchThumb /></SwitchContent>
    </SwitchWrap>
      
  )
}