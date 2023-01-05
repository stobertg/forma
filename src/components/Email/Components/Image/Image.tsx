import React from 'react'
import { Spacing } from '@email'

// -------------- Typescript declarations -------------- //

interface ImageProps {
  src: string
  alt: string
  spacing?: 'large' | 'medium' | 'small'
  alignment?: 'center'
  height?: number
}

// ---------- This is the end of declarations ---------- //

export const Image = ({
    src,
    alt,
    spacing,
    alignment,
    height
  }: ImageProps ) => {
  
  return(

    <Spacing {...{ spacing, alignment }}>
      <img 
        style={{ maxWidth: '100%', width: 'auto', height: height }} 
        src={ src } 
        alt={ alt } 
      />
    </Spacing>

  )
}
