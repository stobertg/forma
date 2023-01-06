import React from 'react'
import { Tbody, Thead, Td, Tr, Heading } from '@email'

interface BlockProps {
  spacingTop?: 'small' | 'medium' | 'large'
  sideSpacing?: 'small' | 'medium'
  padding?: 'small' | 'medium' | 'large'
  contentWidth?: 'small' | 'medium'
  bgColor?: string
  color?: string
  title?: string
  children: React.ReactNode
}

export const EmailBlock = ({
    spacingTop,
    sideSpacing,
    padding,
    bgColor, 
    color,
    title,
    children
  }:BlockProps ) => {

  return(

    <Td className="mobile__margin--none mobile__spacing--small" {...{ spacingTop, sideSpacing, padding }}>
      <table 
        className="mobile__add--br"
        style={{ 
          backgroundColor: bgColor, 
          width: '100%',
          color: color ? color : '#150050'
        }}
      >
        { title ? ( <thead><tr><th><Heading bold size="medium" {...{ title }} /></th></tr></thead> ) : null }
        
        <Tbody>
          <Tr>
            <Td>{ children }</Td>
          </Tr>
        </Tbody>
      </table>
    </Td>

  )
}