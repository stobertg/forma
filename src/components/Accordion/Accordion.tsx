import React from 'react'
import { styled, keyframes } from '@theme'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Heading, Icon } from '@components'

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

	'&[data-state="open"]': {
    '> *:last-child': {
			'&:after': { transform: 'rotate( 180deg )' }
		}
  },
})

// For the content of the accordion
// This is the content shown when the title of the accordion is clicked

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
	fontSize: '1rem',
	lineHeight: 1.5
})

const AccordionIcon = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'relative',
	width: 14,
	height: 14,

	'&:before, &:after': {
		content: '',
		position: 'absolute',
		width: '100%',
		height: 2,
		background: '$textPrimary',
		borderRadius: 2,
		transition: '$s1'
	},

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

					<StyledContent><StyledContentText>{ accordion.content }</StyledContentText></StyledContent>
				</AccordionItem>

			))}
		</AccordionRoot>

	)
}