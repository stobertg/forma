import React from 'react'
import { Spacing } from '@email'

const ImageStyle = {
  width: '100%'
}


// -------------- Typescript declarations -------------- //

interface ImageProps {
  src: string
  alt: string
  spacing?: 'large' | 'medium' | 'small'
}

// ---------- This is the end of declarations ---------- //

export const Image = ({
    src,
    alt,
    spacing
  }: ImageProps ) => {
  
  return(

    <Spacing {...{ spacing }}>
      <img style={ ImageStyle } src={ src } alt={ alt } />
    </Spacing>

  )
}
