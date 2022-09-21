import React from 'react'
import { styled } from '../../../../stitches.config'
import { FreeRoss } from '@components'

// For the container of Ross lockup for the first version
// This shows Ross with his neice on his sholder, and the circle in the background

const RossWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: 1042,
  userSelect: 'none',

  '@media( max-width: 767px )': {
    width: 700
  },

  // For the sizing of the image within the container
  // This is of Ross holding his niece

  img: {
    position: 'relative',
    width: 300,
    zIndex: 1,

    '@media( max-width: 767px )': {
      width: 220
    }
  }
})

// For the circle in the center of the container
// This holds the animation of Ross' art work that animates in an out

const RossCircle = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  bottom: 90,
  width: 550,
  height: 550,
  margin: 'auto',
  borderRadius: '50%',
  border: '2px solid rgba( 255, 255, 255, 0.3 )',
  zIndex: 0,
  overflow: 'hidden',

  '@media( max-width: 767px )': {
    width: 400,
    height: 400
  }
})

// ---------- This is the end of declarations ---------- //

export const Ross1 = () => {
  return(

    <RossWrap>
      <img src="/ross/ross.png" alt="Ross Ulbritch" />
      <RossCircle />
      <FreeRoss />
    </RossWrap>
    
  )
}
