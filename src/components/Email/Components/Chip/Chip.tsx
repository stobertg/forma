import React from 'react'
import { Spacing } from '@email'

// -------------- Typescript declarations -------------- //

interface ChipProps {
  title: string | React.ReactNode
  spacing?: 'large' | 'medium' | 'small'
}

// ---------- This is the end of declarations ---------- //

export const Chip = ({
    title,
    spacing
  }: ChipProps ) => {
  
  return(

    <Spacing {...{ spacing }}>
      <div 
        style={{
          display: 'inline-block',
          background: '#ffcc95',
          borderRadius: 9999,
          padding: '12px 20px',
          color: 'hsl( 256, 100%, 16% )',
          fontSize: 14,
          fontFamily: 'Labil Grotesk'
        }}>
          <strong>{ title }</strong>
        </div>
    </Spacing>

  )
}
