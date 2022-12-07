import React from 'react'
import { styled } from '@theme'

const IllusWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center',
  position: 'relative',

  variants: {
    size: {
      l0: { minWidth: 54, height: 54 },
      l1: { minWidth: 72, height: 72 },
      l2: { minWidth: 100, height: 100 },
      l3: {}
    }
  }
})

// -------------- Typescript declarations -------------- //

interface IllustrationProps {
  image: any
  size?: 'l0' | 'l1' | 'l2' | 'l3'
}

// ---------- This is the end of declarations ---------- //

export const Illustration = ({ 
    image,
    size
  }:IllustrationProps) => {
  
  return(

    <IllusWrap {...{ size }}>
      <img src={`/illustration${ image }`} alt={ image } />
    </IllusWrap>
      
  )
}
