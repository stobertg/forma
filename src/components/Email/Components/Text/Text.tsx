import React from 'react'
import { Spacing } from '@email'

// -------------- Typescript declarations -------------- //

interface TextProps {
  fontSize?: 'large' | 'medium' | 'small'
  color?: 'gray'
  children: React.ReactNode
  bold?: boolean
  spacing?: 'large' | 'medium' | 'small'
}

// ---------- This is the end of declarations ---------- //

export const Text = ({
    fontSize,
    color,
    children,
    bold,
    spacing
  }: TextProps ) => {
  
  return(

    <>
      { spacing ? (

        <Spacing {...{ spacing }}>
          <div 
            style={{
              fontFamily : 'Labil Grotesk',
              fontSize: fontSize == 'large' ? 20 : fontSize == 'medium' ? 18 : fontSize == 'small' ? 14 : 16,
              lineHeight: fontSize == 'large' ? 1.4 : fontSize == 'medium' ? 1.4 : fontSize == 'small' ? 1.4 : 1.3,
              color: color == 'gray' ? '#67677C' : 'inherit'
            }}
          >
            <p>{ bold ? ( <strong>{ children }</strong> ) : <>{ children }</> }</p>
          </div>
        </Spacing>

      ) : (

        <div 
          style={{
            fontFamily : 'Labil Grotesk',
            fontSize: fontSize == 'large' ? 20 : fontSize == 'medium' ? 18 : fontSize == 'small' ? 14 : 16,
            lineHeight: fontSize == 'large' ? 1.4 : fontSize == 'medium' ? 1.4 : fontSize == 'small' ? 1.4 : 1.3,
            color: color == 'gray' ? '#67677C' : 'inherit'
          }}
        >
          <p>{ bold ? ( <strong>{ children }</strong> ) : <>{ children }</> }</p>
        </div>

      )}
    </>
    
  )
}
