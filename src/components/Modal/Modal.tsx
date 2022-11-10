import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ModalTrigger, ModalWrap, ModalContent, ModalHeader, ModalActions } from './Parts'

// -------------- Typescript declarations -------------- //

interface ModalProps {
  title: string
  descp?: string
  triggerButtonVariant?: 'primary' | 'secondary' | 'disabled' | 'danger'
  triggerButtonSize?: 'l0'
  triggerTitle: string
  children: React.ReactNode
  actionButtonTitle: string
  actionButtonHref?: string
  actionButtonPageLink?: string
  actionButtonOnClick?: React.MouseEventHandler<HTMLButtonElement>
}

// ---------- This is the end of declarations ---------- //

export const Modal = ({ 
    title,
    descp,
    triggerButtonVariant,
    triggerButtonSize,
    triggerTitle,
    children,
    actionButtonTitle,
    actionButtonOnClick,
    actionButtonHref,
    actionButtonPageLink
  }:ModalProps ) => {
  return(

    <DialogPrimitive.Root>
      <ModalTrigger 
        variant={ triggerButtonVariant }
        size={ triggerButtonSize }
        title={ triggerTitle }
      />

      <ModalWrap>
        <ModalHeader {...{ title, descp }} />
        { children ? ( <ModalContent>{ children }</ModalContent> ) : null }
        { actionButtonTitle ? ( 
            <ModalActions {...{ 
                actionButtonTitle, 
                actionButtonOnClick, 
                actionButtonHref, 
                actionButtonPageLink 
              }} 
            /> 
          ) : null 
        }
      </ModalWrap>
    </DialogPrimitive.Root>
    
  )
}
