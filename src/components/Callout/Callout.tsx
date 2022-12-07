import React from 'react'
import { styled } from '@theme'
import { Icon } from '@components'

// For the master container of the callout
// This contains the background with the border radius and dictates the status of each of the callouts

const CalloutWrap = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: 680,
  background: '$bgInformation',
  borderRadius: '$r1',
  lineHeight: 1.3,

  // For the different variants of the callouts for the status of the message
  // By default this has the blue background but can be switches to Success, Warning, or Error

  variants: {
    status: {
      success: { background: '$bgPositive' },
      warning: { background: '$bgWarning' },
      error: { background: '$bgNegative' }
    }
  }
})

// For the container of the content within the callout section
// This sits in the center of the master container with the icon on the left and the text on the right

const CalloutContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: 'calc( 100% - 40px )',
  margin: '0 auto',
  padding: '20px 0',

  // For the auto spacing between the icon on the left and the text on the right

  '> *:not(:last-child)': {
    marginRight: 12,
    alignSelf: 'flex-start'
  }
})

// For the container of the icon on the left of the container
// This is only used to set the alignment of the icon to be to the top of the text to the left

const CalloutIcon = styled('div', { paddingTop: 4 })

// -------------- Typescript declarations -------------- //

interface CalloutProps {
  status?: 'success' | 'warning' | 'error'
  descp: string | number | React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Callout = ({ status, descp }:CalloutProps ) => {
  return(

    <CalloutWrap {...{ status }}>
      <CalloutContent>
        <CalloutIcon>
          <Icon 
            size="l0" 
            icon={ 
              status == 'success' ? 'check-circle' :
              status == 'warning' ? 'exclamation' :
              status == 'error' ? 'cancel' :
              'exclamation'
            } 
          />
        </CalloutIcon>

        <div>{ descp }</div>
      </CalloutContent>
    </CalloutWrap>

  )
}