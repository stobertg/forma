import React, { useState } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { styled, keyframes } from '@theme'
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
  position: 'relative',
  padding: 20,
  listStyle: 'none',

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
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

  '> div': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    '> *:not(:last-child)': {
      marginRight: 12
    }
  }
})

const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  top: 30,
  left: 0,
  right: 0,
  margin: 'auto',
  maxWidth: 550,
  background: '$brandPrimary',
  boxShadow: '0 10px 20px rgba( 0, 0, 0, 0.2 )',
  borderRadius: '$r0',
  color: '$white50'
})

interface SnackbarProps {

}

export const Snackbar = ({ }:SnackbarProps) => {
  const [ open, setOpen ] = useState( true )

  return(

    <ToastPrimitive.Provider swipeDirection="right">
      <Button variant="primary" title="Action" />

      <ToastContent open={true} onOpenChange={setOpen}>
        <SnackTitle>
          <div>
            <Icon size="l0" icon="check-circle" />
            <Heading size="l1" title="851 Cypress St, Monterey CA 93940 was saved as your primary residential address" />
          </div>

          <ToastPrimitive.Action asChild altText="Goto schedule to undo">
            <button><strong>Undo</strong></button>
          </ToastPrimitive.Action>
          {/* <ToastPrimitive.Close>Cancel</ToastPrimitive.Close> */}
        </SnackTitle>
      </ToastContent>
      
      <ToastViewport />
    </ToastPrimitive.Provider>
      
  )
}