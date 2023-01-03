import React from 'react'
import { Td, Image } from '@email'

interface HeroProps {
  spacingTop?: 'large' | 'medium' | 'small'
  sideSpacing?: 'small' | 'medium'
  src: string
  alt: string
}

export const HeroImage = ({ 
    spacingTop,
    sideSpacing,
    src, 
    alt 
  }:HeroProps) => {

  return(

    <Td {...{ spacingTop, sideSpacing }}>
      <Image {...{ src, alt }} />
    </Td>

  )
}