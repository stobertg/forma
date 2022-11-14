import React from 'react'
import { styled, keyframes } from '@theme'
import { Overlay } from './Overlay';
import { Button } from '@components'
import * as DialogPrimitive from '@radix-ui/react-dialog'

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const ModalMaster = styled(DialogPrimitive.Portal, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 9999
})

// For the main wrapper of the modal
// This is within the center of the container with the overlay in the background

const ModalMain = styled( DialogPrimitive.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: '90vw',
  maxWidth: 610,
  maxHeight: '85vh',
  backgroundColor: 'white',
  borderRadius: '$r2',
  boxShadow: '( 0 2px 10px rgba( 0, 0, 0, 0.5 ))',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  '&:focus': { outline: 'none' },

  // For the animation 
  
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${ contentShow } 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  
  // For the different variations of the width for the modal wrap
  // This has a default but these variants allow for different widths depending on the context

  variants: {
    width: {
      small: { maxWidth: 400 },
      medium: { maxWidth: 800 },
      large: { maxWidth: 1024 },
      fullWidth: { width: '100vw', height: '100vh' }
    }
  }
})

const ModalContent = styled('div', {
  position: 'realitive',
  width: '85%',
  margin: '0 auto',
  padding: '50px 0'
})

const CloseModal = styled('div', {
  position: 'absolute',
  top: 14,
  right: 14
})

// -------------- Typescript declarations -------------- //

interface ModalProps {
  width?: 'small' | 'medium' | 'large' | 'fullWidth'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const ModalWrap = ({
    width,
    children
  }:ModalProps ) => {
  
  return(

    <ModalMaster>
      <ModalMain {...{ width }}>
        <ModalContent>{ children }</ModalContent>
        <DialogPrimitive.Close asChild>
          <CloseModal><Button icon="close" /></CloseModal>
        </DialogPrimitive.Close>
      </ModalMain>

      <Overlay />
    </ModalMaster>

  )
}
