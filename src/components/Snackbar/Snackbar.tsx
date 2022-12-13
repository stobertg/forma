import React, { useState } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { styled, keyframes } from '@theme'
import { Button } from '@components'
import { SnackbarBase } from './Parts/SnackbarBase'

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { opacity: 0, transform: `translateY(calc(-100% + 20px))` },
  to: { opacity: 1, transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateY(calc(-100% + 20px))` },
})

const ToastContent = styled(ToastPrimitive.Root, {
  listStyle: 'none',

  '&[data-state="open"]': {
    animation: `${slideIn} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})  

const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  width: 'auto',
  maxWidth: 550,
  margin: 'auto',
  padding: 20,
  zIndex: 9999
})

// -------------- Typescript declarations -------------- //

interface SnackbarProps {
  status?: 'success' | 'error' | 'warning' | 'download'
  title: string
  triggerTitle?: string
  actionTitle?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

// ---------- This is the end of declarations ---------- //

export const Snackbar = ({ 
    status,
    title,
    triggerTitle,
    actionTitle,
    onClick
  }:SnackbarProps) => {
  const [ open, setOpen ] = useState( false )

  return(

    <ToastPrimitive.Provider swipeDirection="down">
      { triggerTitle ? (
        <Button 
          variant="primary" 
          title={ triggerTitle } 
          onClick={() => { setOpen( true ) }}
        />
      ) : null}

      <ToastContent open={ open } onOpenChange={ setOpen }>
        <SnackbarBase {...{ status, title, actionTitle, onClick }} />
      </ToastContent>
      
      <ToastViewport />
    </ToastPrimitive.Provider>
      
  )
}