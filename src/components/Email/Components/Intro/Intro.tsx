import React from 'react'
import { Tr, Td, Tbody, Logo } from '@email'

const IntroStyle = {
  width: '100%',
  color: '#000'
}

const IntroHasBg = {
  ...IntroStyle,
  color: '#fff',
  // borderRadius: 32
}

const IntroContent = {
  width: '100%'
}

const IntroContentHasBg = {
  width: '85%',
  margin: '0 auto',
  padding: '50px 0'
}
 
// -------------- Typescript declarations -------------- //

interface IntroProps {
  spacingTop?: 'small' | 'medium' | 'large'
  sideSpacing?: 'small' | 'medium'
  padding?: 'small' | 'medium' | 'large'
  logoOnDarkBg?: boolean
  contentWidth?: 'small' | 'medium'
  bgColor?: string
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Intro = ({
    logoOnDarkBg,
    spacingTop,
    sideSpacing,
    padding,
    bgColor, 
    children
  }: IntroProps ) => {
  
  return(
    
    <Td className="mobile__spacing--small" {...{ spacingTop, sideSpacing, padding }}>
      <table style={ bgColor ? { ...IntroHasBg, backgroundColor: bgColor } : IntroStyle }>
        <Tbody>
          <Tr>
            <Logo onDarkBg={ logoOnDarkBg } />
            <Td>{ children }</Td>
          </Tr>
        </Tbody>
      </table>
    </Td>
  
  )
}
