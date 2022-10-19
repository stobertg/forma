import React from 'react'
import { styled } from '@theme'

const RowWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  width: '100%',

  '> *': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: '100%',
    minHeight: 100,
    '&:not(:last-child)': { borderRight: '1px solid $border' }
  }
})

interface StageBlockRowProps {
  children: React.ReactNode
} 

// ---------- This is the end of declarations ---------- //

export const StageBlockRow = ({ children }:StageBlockRowProps) => {
  
  return(

    <RowWrap>{ children }</RowWrap>
    
  )
}
