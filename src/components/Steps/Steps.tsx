import React, { useState } from 'react'
import { styled } from '@theme'
import { List, Icon, Heading } from '@components'

/* 
  *** ReadMe ***

  The Steps component is always static but can be used in two different ways. First, in the Artizen protocol, it is used to
  shows which steps a user is in within the donation flow, meaning how far the are along from start to finish. The other
  way the component is used is for static, graphical representation to promote a CTA for usuing the donation serivce of the DAO.

  The steps come with two features:
  • Icon
  • Title

  *** End ReadMe ***
*/

// For the master container of the steps
// This holds the horizontal and vertical formats of the steps, both look a bit different than one another

const StepsWrap = styled('div', {
  position: 'relative',
  maxWidth: 250,
  // width: '100%',

  // For the container of each of the list items within the steps container
  // This holds the icon on the left and the title to the right

  li: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',

    // Here we remove the line connector from the last child on the last child
    
    '&:last-child': {
      '> *:first-child': { 
        paddingBottom: 0,
        '&:after': { display: 'none' },
      },
      '*': { minHeight: 'auto', paddingBottom: '0px !important' }
    }
  },

  variants: {
    direction: {
      horizontal: {
        maxWidth: '100%',
        width: '100%',
        textAlign: 'center',
        overflow: 'scroll',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',

        '&::-webkit-scrollbar': {
          display: 'none'
        },

        ul: {
          justifyContent: 'space-between'
        },

        li: {
          flex: 1,
          flexDirection: 'column',
          minWidth: 197,
          '&:first-child': { '> *:first-child:before': { display: 'none' }},
          '> *:last-child': { margin: '8px auto 0' },

          '*': {
            minHeight: 'auto', 
            marginLeft: 0,
            paddingBottom: '0px !important' 
          },

          '> *:first-child': {
            alignItems: 'center',

            '&:before, &:after': {
              width: 'calc( 50% - 32px )',
              height: 1,
              bottom: 'auto',
            },

            '&:before': { display: 'block', left: 0 },
            '&:after': { right: 0 }
          }
        }
      }
    }
  }
})

// For the container of the icons on the left of the container
// This contains the outlined circle with the icon in the center of the container

const GraphicWrap = styled('div', {
  display: 'inline-flex',
  justifyContent: 'center',
  position: 'relative',
  minHeight: 62,
  paddingBottom: 32,
  background: '$white',

  // For the line that connects each of the steps together
  // This is shown on the top of the first icon circle, and continues to the bottom of the last one

  '&:before, &:after': {
    content: '',
    position: 'absolute',
    bottom: 6,
    width: 1,
    height: 'calc( 100% - 40px )',
    background: '$bgDivider',
    zIndex: 0
  },

  '&:before': { display: 'none' }
})

// If there is any text to the right of the icon than this is where we automate the spacing
// If the icon is stand-alone, then there will be no spacing added

const StepText = styled('div', {
  maxWidth: 212,
  marginLeft: 12,
  padding: '3px 0 24px'
})

// For the container of the icon on the right of the contianer
// This has the icon within a circle, placed in the center

const StepGraphic = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'realative',
  width: 26,
  minWidth: 26,
  height: 26,
  minHeight: 26,
  paddingBottom: 1,
  borderRadius: '50%',
  color: '$white50',
  background: '$iconDisabled',
  lineHeight: 1,
  textAlign: 'center',

  svg: {
    width: '88%',
    marginTop: 2,
  },

  variants: {
    status: {
      disabled: { background: '$iconDisabled' },
      active: { background: '$buttonPrimary' },
      completed: { background: '$brandPrimary'}
    }
  }
})

// -------------- Typescript declarations -------------- //

interface StepsProps {
  direction?: 'horizontal'
  steps: {
    status?: 'disabled' | 'completed' | 'active'
    title?: string
    subTitle?: string | number
    icon?: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Steps = ({ steps, direction }: StepsProps ) => {
  return(

    <StepsWrap {...{ direction }}>
      <List {...{ direction }}>
        { steps.map(( step:any, i:number ) => (
          <li key={`step-${ i }`}>

            <GraphicWrap>
              <StepGraphic status={ step.status }>
                { step.status == 'completed' 
                  ? ( <Icon size="l0" icon="check" /> ) 
                  : ( <strong>{ i + 1 }</strong> )
                }
              </StepGraphic>
            </GraphicWrap>

            <StepText>
              <Heading 
                bold 
                size="l2" 
                color={ step.status == 'completed' ? 'gray' : step.status == 'active' ? 'primary' : 'disabled' } 
                title={ step.title } 
              />
              
              { step.subTitle ? (
                <Heading 
                  size="l1" 
                  color={ step.status == 'completed' ? 'gray' : step.status == 'active' ? 'gray' : 'disabled' }  
                  title={ step.subTitle } 
                />
              ) : null }
            </StepText>

          </li>
        ))}
      </List>
    </StepsWrap>
    
  )
}
