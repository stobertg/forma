import React from 'react'
import { styled, keyframes } from '@theme'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Heading } from '@components'

// For the animations of the accordions
// This will animated the content section, below the title that shows and hides the accordion content

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

// For the trigger of the animation of the accordion
// This contains the title on the left and the plus icon on the right of the contianer

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

	// When the accordion is opened, chage the background of the content within the accordion

	'&[data-state="open"]': {
    '> *:last-child': {
			'&:after': { transform: 'rotate( 180deg )' }
		}
  },
})

// For the content of the accordion
// This is the content shown when the title of the accordion is clicked

const StyledContent = styled(AccordionPrimitive.Content, {
	padding: '15px 20px',
  overflow: 'hidden',
  color: '$textPrimary',
	fontSize: '1rem',
	lineHeight: 1.5,
  backgroundColor: '$bgPrimary',

	// For the animation of the content within the accordion when the state is opened
	// This expands the accordion to show the content

  '&[data-state="open"]': {
    animation: `${ slideDown } 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },

	// For the animation of the content within the accordion when the state is closed
	// This expands the accordion to hide the content

  '&[data-state="closed"]': {
    animation: `${ slideUp } 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
})

// For the plus and minus icon on the right side of the trigger container
// This contains the + when the accordion is collapsed and the minus when it is opened

const AccordionIcon = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'relative',
	width: 14,
	height: 14,

	// For the lines to show the icon as a plus or minus, depending on the state
	// These are shared between the hotizontal and verical lines that make the icon

	'&:before, &:after': {
		content: '',
		position: 'absolute',
		width: '100%',
		height: 2,
		background: '$textPrimary',
		borderRadius: 2,
		transition: '$s1'
	},

	// Here we rotate the line to be horizontal for the plus icon when the accordion is collapsed

	'&:after': { transform: 'rotate( 90deg )' }
})

// -------------- Typescript declarations -------------- //

interface AccordionProps {
	accordionOpen?: any
	accordions: {
		id: any
		title: string
		content: any
	}[]
}

// ---------- This is the end of declarations ---------- //

export const Accordion = ({ accordionOpen, accordions }:AccordionProps) => {
  return(

		<AccordionRoot type="single"  defaultValue={ accordionOpen } collapsible>
			{ accordions.map(( accordion, i ) => (

				<AccordionItem key={`accordion-${ i }`} value={ accordion.id }>
					<StyledHeader>
						<StyledTrigger>
							<Heading size="l2" title={ accordion.title } />
							<AccordionIcon />
						</StyledTrigger>
					</StyledHeader>

					<StyledContent>{ accordion.content }</StyledContent>
				</AccordionItem>

			))}
		</AccordionRoot>

	)
}