import React from 'react'
import { Tr, Td, Tbody, Logo, Button } from '@email'

const IntroStyle = {
  width: '100%',
  color: '#000'
}

const IntroHasBg = {
  ...IntroStyle,
  padding: 50,
  color: '#fff',
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
  noWordMark?: boolean
  logoSize?: 'large' | 'medium'
  contentWidth?: 'small' | 'medium'
  bgColor?: string
  buttonTitle?: string
  buttonLink?: string
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Intro = ({
    logoOnDarkBg,
    noWordMark,
    logoSize,
    spacingTop,
    sideSpacing,
    padding,
    bgColor,
    buttonTitle,
    buttonLink, 
    children
  }: IntroProps ) => {
  
  return(
    
    <Td className="mobile__spacing--small" {...{ spacingTop, sideSpacing, padding }}>
      <table 
        className={ bgColor ? 'mobile__spacing--small mobile__add--br' : '' }
        style={ bgColor ? { ...IntroHasBg, backgroundColor: bgColor } : IntroStyle }
      >
        <Tbody>
          <Tr>
            <Logo {...{ noWordMark, logoSize }} onDarkBg={ logoOnDarkBg } />
            <Td>{ children }</Td>
            { buttonTitle ? ( <Td><Button spacing="medium" href={ buttonLink } variant="primary" title={ buttonTitle } /></Td> ) : null }
          </Tr>
        </Tbody>
      </table>
    </Td>
  
  )
}
