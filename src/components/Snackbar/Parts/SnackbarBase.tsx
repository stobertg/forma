import React from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

const ToastContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  maxWidth: 500,
  padding: '16px 20px',
  background: '$brandPrimary',
  borderRadius: '$r0',
  color: '$white50'
})  

const SnackTitle = styled(ToastPrimitive.Title, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

  '> *:not(:last-child)': {
    marginRight: 12
  }
})

const SnackButtons = styled('div', {
  position: 'relative',
  paddingLeft: 12,

  button: {
    whiteSpace: 'nowrap',
    padding: '6px 10px',
    borderRadius: '$r0',
    transition: '$s1',

    '&:hover': {
      background: '$buttonHover'
    }
  }
})

// -------------- Typescript declarations -------------- //

interface SnackbarProps {
  status?: 'success' | 'error' | 'warning' | 'download'
  title: string
  actionTitle?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

// ---------- This is the end of declarations ---------- //

export const SnackbarBase = ({
    status,
    title,
    actionTitle,
    onClick
  }:SnackbarProps) => {
  return(

    <ToastContent>
      <SnackTitle>
        { status ? ( 
          <Icon 
            size={ status == 'download' ? 'l0' : 'l1'} 
            icon={
              status == 'success' ? 'check-circle' :
              status == 'error' ? 'minus-circle' : 
              status == 'warning' ? 'exclamation' : 
              status == 'download' ? 'download' : 'check-circle'
            } 
          />
        ) : null }
        <Heading size="l1" {...{ title }} />
      </SnackTitle>

      { status == 'download' ? (

        <SnackButtons>
          <ToastPrimitive.Action asChild altText="Goto schedule to undo">
            <button {...{ onClick }}><Heading bold size="l1" title="Cancel" /></button>
          </ToastPrimitive.Action>
        </SnackButtons>

      ) : actionTitle == 'Dismiss' ? (
        
        <SnackButtons>
          <ToastPrimitive.Close>
            <Heading bold size="l1" title="Dismiss" />
          </ToastPrimitive.Close>
        </SnackButtons>
        
      ) : actionTitle ? (
        
        <SnackButtons>
          <ToastPrimitive.Action asChild altText="Goto schedule to undo">
            <button {...{ onClick }}><strong>{ actionTitle }</strong></button>
          </ToastPrimitive.Action>
        </SnackButtons>

      ) : null }
    </ToastContent>

  )
}