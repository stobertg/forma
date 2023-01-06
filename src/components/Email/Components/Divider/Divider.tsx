import React from 'react'
import { Spacing } from '@email'

interface DividerProps {
  spacing?: 'small' | 'medium' | 'large'
}

export const Divider = ({ spacing }:DividerProps) => {
  return(

    <Spacing {...{ spacing }}>
      <hr 
        style={{ 
          display: 'block', 
          width: '100%',
          borderTop: '1px solid #ccccd3',
          borderLeft: 'none',
          borderRight: 'none',
          borderBottom: 'none'
        }} 
      />
    </Spacing>

  )
}