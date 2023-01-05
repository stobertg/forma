import React from 'react'
import { Spacing, Heading, Image } from '@email'
import { Text } from './Parts/Text'
import { FeaturesBase } from './Parts/Base'

interface FeaturesProps {
  spacing?: 'small' | 'medium' | 'large'
  title: string
  list: {
    title: string
    image: string
    items: {
      title: string
    }[]
  }[]
}

export const Features = ({ 
    spacing,
    title,
    list
  }:FeaturesProps) => {
  
  return(

    <Spacing {...{ spacing }}>
      <div style={{ marginLeft: 50, marginRight: 50, padding: '50px 0' }}>
        <Heading size="medium" alignment="center" {...{ title }} />

        <FeaturesBase {...{ list }} />

      </div>
    </Spacing>

  )
}