import React, { useState } from 'react'
import { styled, keyframes } from '@theme'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { Icon, Button, Heading } from '@components'

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 20px))` },
  to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + 20px))` },
});

const SnackWrap = styled(ToastPrimitive.Provider, {

})

const ToastContent = styled(ToastPrimitive.Root, {

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
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

const SnackTitle = styled(ToastPrimitive.Title, {

})

const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  margin: 'auto'
})

interface SnackbarProps {

}

export const Snackbar = ({ }:SnackbarProps) => {
  const [ open, setOpen ] = useState( false )

  return(

    <ToastPrimitive.Provider swipeDirection="right">
      <Button variant="primary" title="Action" />

      <ToastContent>
        <SnackTitle>
          <Icon icon="check" />
          <Heading title="This is the title" />
        </SnackTitle>
      </ToastContent>
      
      <ToastViewport />
    </ToastPrimitive.Provider>
      
  )
}