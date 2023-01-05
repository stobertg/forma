import React from 'react'
import { Spacing, Heading } from '@email'

interface ChipProps {
  bgColor?: 'cyan' | 'yellow'
  spacing?: 'small' | 'medium' | 'large'
  title?: string | number
  benefitName?: string
}

export const OfferChipBase = ({ 
    spacing,
    bgColor,
    title,
    benefitName
  }:ChipProps) => {

  return(

    <Spacing {...{ spacing }}>
      <div
        className="mobile__spacing--small"
        style={{
          backgroundColor: bgColor == 'cyan' ? '#bbeaf7' : bgColor == 'yellow' ? '#fdeca3' : bgColor,
          padding: 32,
          borderRadius: 16
        }}
      >
        <Heading alignment="center" size="large" bold {...{ title }} />
        <Heading spacing="small" alignment="center" size="small" title={ benefitName } />
      </div>
    </Spacing>

  )
}