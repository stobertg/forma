import React from 'react'
import { Spacing } from '@email'

// -------------- Typescript declarations -------------- //

interface HeadingProps {
  color?: 'white' | 'gray'
  spacing?: 'small' | 'medium' | 'large'
  alignment?: 'center' | 'right'
  title: string | React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'tiny'
  bold?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Heading = ({
    title,
    size,
    alignment,
    bold,
    color,
    spacing
  }: HeadingProps ) => {
  
  return(

    <Spacing {...{ spacing }}>
      <div
        style={{
          fontFamily: 'Labil Grotesk',
          fontSize: size == "xlarge" ? 56 : size == 'large' ? 44 : size == 'medium' ? 24 : size == 'small' ? 18 : size == 'tiny' ? 14 : 16,
          lineHeight: size == 'large' ? 1 : size == 'medium' ? 1.2 : size == 'small' ? 1.5 : size == 'tiny' ? 1.1 : 1,
          textAlign: alignment == 'center' ? 'center' : alignment == 'right' ? 'right' : 'initial',
          color: color == 'gray' ? '#67677C' : color == 'white' ? '#fff' : '#150050'
        }}
      >
        { bold ? ( 
          <strong>{ title }</strong>
        ) : (

          <span style={{
            color: color == 'gray' ? '#67677C' : color == 'white' ? '#fff' : '#150050'
          }}>
            { title }
          </span> 
        )}
      </div>
    </Spacing>
    
  )
}
