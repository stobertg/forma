import React from 'react'
import Link from 'next/link'
import { styled } from '@theme'
import { LogoFull, LogoMark, WordMark } from './Variants/'

const LogoWrap = styled('div', {
  display: 'inline-flex',
  position: 'relative',
  width: '100%',
  height: 32,

  img: {
    height: '100%',
    width: 'auto'
  },

  variants: {
    size: {
      l0: { height: 32 },
      l1: { height: 50 }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface LogoProps {
  variant?: 'logo-mark' | 'logo-full' | 'word-mark'
  size?: 'l0' | 'l1'
}

// ---------- This is the end of declarations ---------- //

export const Logo = ({
    variant,
    size
  }: LogoProps ) => {
  
  return(

    <LogoWrap {...{ size }}>
      { 
        variant == 'logo-mark' ? <LogoMark /> : 
        variant == 'logo-full' ? <LogoFull /> : 
        variant == 'word-mark' ? <WordMark /> : 
        <LogoFull /> 
      }
    </LogoWrap>

  )
}
