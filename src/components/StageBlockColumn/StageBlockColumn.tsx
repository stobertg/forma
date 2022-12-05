import React from 'react'
import { styled } from '@theme'

const ColumnWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',

  '> *': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    minHeight: 100,
    padding: '20px',
    '&:not(:last-child)': { borderBottom: '1px solid $border' }
  },

  variants: {
    bgColor: {
      light: { background: '$brandSecondary' },
      dark: { background: '$brandPrimary' }
    },

    align: {
      top: { '> *': { alignItems: 'flex-start' }}
    }
  }
})

interface StageBlockColumnProps {
  align?: 'top'
  bgColor?: 'light' | 'dark'
  children: React.ReactNode
} 

// ---------- This is the end of declarations ---------- //

export const StageBlockColumn = ({ align, bgColor, children }:StageBlockColumnProps) => {
  
  return(

    <ColumnWrap {...{ align, bgColor }}>{ children }</ColumnWrap>
    
  )
}
