import React from 'react'
import Image from 'next/image'
import { styled } from '@theme'
import { Heading } from '@components'

const DropdownCallout = styled('div', {
  position: 'relative',
  marginRight: 50,
  paddingRight: 8,
  borderRight: '1px solid $border',
  width: '35%'
})

const CalloutImage = styled('figure', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

  '> *:not(:last-child)': {
    marginRight: 20
  },

  img: {
    position: 'relative',
    width: 112,
    zIndex: 1
  }
})

// For the container of the hero on the left side of the text
// This shows the image on top and the blob svg behind, in the background

const CalloutHero = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: 112
})

// For the blob behind the featured image - on the block to the right

const CalloutBg = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  width: '120%',
  height: '120%',
  zIndex: 0,

  svg: {
    position: 'absolute'
  }
})

const CalloutText = styled('p', {
  all: 'unset',
  color: '$textPrimary',
  fontSize: 14,
  lineHeight: 1.3,
})

// -------------- Typescript declarations -------------- //

interface CalloutProps {

}

// ---------- This is the end of declarations ---------- //

export const Callout = ({}:CalloutProps) => {
  return(

    <DropdownCallout>
      <CalloutImage>
        <CalloutHero>
          <CalloutBg>
            <svg width="165" height="172" viewBox="0 0 165 172" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M145.735 144.849C131.175 161.473 110.813 172.803 91.9276 171.956C72.9368 171.108 55.423 158.191 41.6019 145.484C27.7808 132.672 17.7579 120.284 10.267 105.248C2.7762 90.2126 -2.07701 72.5298 0.877119 54.7412C3.72574 37.0585 14.5927 19.2699 30.5239 9.21082C46.4551 -0.848223 67.556 -3.17769 82.4322 4.76366C97.4139 12.5991 106.065 30.7054 120.941 45.6351C135.818 60.5649 156.918 72.3181 163.038 89.2596C169.157 106.095 160.295 128.119 145.735 144.849Z" fill="#F5F5F7"/>
            </svg>
          </CalloutBg>

          <Image layout="fill" src="/header/roi.png" alt="roi" />
        </CalloutHero>

        <CalloutText>
          <Heading bold color="gray" title="Featured" />
          <Heading size='l1' title="2022 Lifestyle Spending accounts (LSA) benchmark support" />
        </CalloutText>
      </CalloutImage>
    </DropdownCallout>

  )
}