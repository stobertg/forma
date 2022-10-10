import React from 'react'
import { styled } from '@theme'

const StageWrap = styled('section', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: 'calc( 100vw - 300px )'
})

const StageContent = styled('div', {
  position: 'realtive',
  maxWidth: '80%',
  width: '100%',
  margin: '0 auto',
  padding: '100px 0'
})

// -------------- Typescript declarations -------------- //

interface StageProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Stage = ({ children }: StageProps) => {
  return (

    <StageWrap>
      <StageContent>{ children }</StageContent>
    </StageWrap>
    
  )
}
