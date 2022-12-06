import React, { useState } from 'react'
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
      info: { background: '$bgInformation' },
      warning: { background: '$bgWarning' },
      error: { background: '$bgNegative' }
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

const BannerClose = styled('div', {
  position: 'absolute',
  right: 4,

  '*': {
    color: '$textPrimary'
  }
})

// -------------- Typescript declarations -------------- //

interface BannerProps {
  status?: 'info' | 'warning' | 'error'
  title: string | React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Banner = ({ title, status }:BannerProps) => {
  const [ close, setClose ] = useState( false )
  const closeBanner = () => { setClose( true )}

  return(

    <BannerWrap {...{ status }} style={{ display: close ? 'none' : 'flex' }}>
      <BannerContent>
        <Icon size="l0" icon="exclamation" />
        <Heading size="l1" {...{ title }} />
      </BannerContent>

      <BannerClose><Button onClick={ closeBanner } circle="l0" size="l0" icon="close" /></BannerClose>
    </BannerWrap>

  )
}