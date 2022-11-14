import React from 'react'
import { styled } from '@theme'
import { Button, ButtonContainer } from '@components'
import * as DialogPrimitive from '@radix-ui/react-dialog'

// For the master container of the button actions on the bottom of the modal
// This will always contain the cancel button on the left and an action button on the right 
// This will always be aligned on the right of the container

const ActionsWrap = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'flex-end',
	alignItems: 'center',
	position: 'relative',
	width: '100%'
})

// -------------- Typescript declarations -------------- //

interface ButtonProps {
	actionButtonTitle: string
  actionButtonHref?: string
  actionButtonPageLink?: string
  actionButtonOnClick?: React.MouseEventHandler<HTMLButtonElement>
}

// ---------- This is the end of declarations ---------- //

export const ModalActions = ({ 
		actionButtonTitle,
    actionButtonOnClick,
		actionButtonHref, 
		actionButtonPageLink
	}:ButtonProps ) => {

	return(

		<ActionsWrap>
			<ButtonContainer alignment="right">
				<DialogPrimitive.Close asChild><Button variant="secondary" title="Cancel" /></DialogPrimitive.Close>
				<Button
          variant="primary"
          title={ actionButtonTitle }
          onClick={ actionButtonOnClick }
          href={ actionButtonHref }
          pageLink={ actionButtonPageLink }
        />
			</ButtonContainer>
		</ActionsWrap>
			
	)
}