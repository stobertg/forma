import React from 'react'
import { Tbody, Td, Tr } from '@email'

interface BlockProps {
  spacingTop?: 'small' | 'medium' | 'large'
  sideSpacing?: 'small' | 'medium'
  padding?: 'small' | 'medium' | 'large'
  contentWidth?: 'small' | 'medium'
  bgColor?: string
  color?: string
  children: React.ReactNode
}

export const EmailBlock = ({
    spacingTop,
    sideSpacing,
    padding,
    bgColor, 
    color,
    children
  }:BlockProps ) => {

  return(

    <Td className="mobile__margin--none mobile__spacing--small" {...{ spacingTop, sideSpacing, padding }}>
      <table 
        style={{ 
          backgroundColor: bgColor, 
          width: '100%',
          color: color ? color : '#150050'
        }}
      >
        <Tbody>
          <Tr>
            <Td>{ children }</Td>
          </Tr>
        </Tbody>
      </table>
    </Td>

  )
}