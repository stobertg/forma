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
    padding: '20px',
    '&:not(:last-child)': { borderRight: '1px solid $border' }
  },

  variants: {
    bgColor: {
      light: { background: '$brandSecondary' },
      dark: { background: '$brandPrimary' }
    },

    align: {
      top: { '> *': { alignItems: 'flex-start' }}
    },

    spacing: {
      removeOnMobile: { '@mobile': { '> *': { padding: 0 } }}
    }
  }
})

interface StageBlockRowProps {
  align?: 'top'
  bgColor?: 'light' | 'dark'
  children: React.ReactNode
  spacing?: 'removeOnMobile'
} 

// ---------- This is the end of declarations ---------- //

export const StageBlockRow = ({ align, bgColor, children, spacing }:StageBlockRowProps) => {
  
  return(

    <RowWrap {...{ align, bgColor, spacing }}>{ children }</RowWrap>
    
  )
}
