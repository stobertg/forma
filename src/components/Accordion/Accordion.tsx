import React from 'react'
import { styled, keyframes } from '@theme'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Icon } from '@components'

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

// For the master container of the Accordion
// This contains the always-visible trigger buttons and the content of the accordion that shows when clicked

const AccordionRoot = styled(AccordionPrimitive.Root, {
	position: 'relative',
	width: '100%',
  backgroundColor: '$bgPrimary'
})

// For the container of the individual accordion
// This hols the button trigger with the content showing up once the button is clicked

const AccordionItem = styled(AccordionPrimitive.Item, {
	position: 'relative',
	width: '100%',
  // overflow: 'hidden',

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 0 2px $textPrimary`,
  },
})

// For the master container of the trigger section
// This is the button list that is always visible - clicking will reveal the content of the accordion

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: 'unset',
  display: 'flex',
	position: 'relative',
	width: '100%'
})

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
	display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
	position: 'relative',
	width: '100%',
	height: 45,
  backgroundColor: '$bgPrimary',
  padding: '0 20px',
  '&:hover': { backgroundColor: '$bgSecondary' },
})


const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  color: '$textPrimary',
  backgroundColor: '$bgPrimary',

  '&[data-state="open"]': {
    animation: `${ slideDown } 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${ slideUp } 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
})

const StyledContentText = styled('div', {
  padding: '15px 20px',
})

// -------------- Typescript declarations -------------- //

interface AccordionProps {

}

// ---------- This is the end of declarations ---------- //

export const Accordion = ({}:AccordionProps) => {
  return(

		<AccordionRoot type="single" defaultValue="item-1" collapsible>
			<AccordionItem value="item-1">

				<StyledHeader>
					<StyledTrigger>
						Is it accessible?
						<Icon size="l0" icon="plus" aria-hidden />
					</StyledTrigger>
				</StyledHeader>

				<StyledContent>
    			<StyledContentText>
						Yes. It adheres to the WAI-ARIA design pattern.
					</StyledContentText>
				</StyledContent>
			</AccordionItem>

			<AccordionItem value="item-2">
				<StyledTrigger>
					Is it unstyled?
					<Icon size="l0" icon="plus" aria-hidden />
				</StyledTrigger>

				<StyledContent>
    			<StyledContentText>
						Yes. It's unstyled by default, giving you freedom over the look and feel. 
					</StyledContentText>
				</StyledContent>
			</AccordionItem>

			<AccordionItem value="item-3">
				<StyledTrigger>
					Can it be animated?
					<Icon size="l0" icon="plus" aria-hidden />
				</StyledTrigger>

				<StyledContent>
    			<StyledContentText>
						Yes! You can animate the Accordion with CSS or JavaScript.
					</StyledContentText>
				</StyledContent>
			</AccordionItem>
		</AccordionRoot>

	)
}