import React from 'react'
import { Tbody, Td, Tr } from '@email'

const IntroStyle = {
  width: '100%',
  color: '#000'
}

interface BlockProps {
  spacingTop?: 'small' | 'medium' | 'large'
  sideSpacing?: 'small' | 'medium'
  padding?: 'small' | 'medium' | 'large'
  contentWidth?: 'small' | 'medium'
  bgColor?: string
  children: React.ReactNode
}

export const EmailBlock = ({
    spacingTop,
    sideSpacing,
    padding,
    bgColor, 
    children
  }:BlockProps ) => {

  return(

    <Td className="mobile__margin--none mobile__spacing--small" {...{ spacingTop, sideSpacing, padding }}>
      <table style={ bgColor ? { backgroundColor: bgColor } : IntroStyle }>
        <Tbody>
          <Tr>
            <Td>{ children }</Td>
          </Tr>
        </Tbody>
      </table>
    </Td>

  )
}