import React from 'react'
import { styled } from '@theme'
import { Icon, Heading, Button } from '@components'

const BannerWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  background: '$bgSecondary',

  variants: {
    status: {
      info: {},
      warning: {},
      error: {}
    }
  }
})

const BannerContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  padding: '12px 20px',

  '> *:not(:last-child)': {
    marginRight: 8
  }
})

// -------------- Typescript declarations -------------- //

interface BannerProps {
  status?: 'info' | 'warning' | 'error'
}

// ---------- This is the end of declarations ---------- //

export const Banner = ({ status }:BannerProps) => {
  return(

    <BannerWrap {...{ status }}>
      <BannerContent>
        <Icon size="l0" icon="exclamation" />
        <Heading size="l1" title={ <><strong>Your program policy was updated.</strong> <span>Check out what's new or have changed effective July 31, 2021</span></> } />
      </BannerContent>
    </BannerWrap>

  )
}