import React from 'react'
import { Spacing } from '@email'

const TrStyles = { display: 'table', width: '100%' }
const SpacingLarge = { display: 'table', width: '100%', marginTop: 50 }
const SpacingMedium = { display: 'table', width: '100%', marginTop: 32 }
const SpacingSmall = { display: 'table', width: '100%', marginTop: 12 }

const TrWidthSmall = {
  display: 'block',
  margin: '0 50px',
  background: '#fff',
  borderRadius: 16
} 

const TrWidthMedium = {
  display: 'block',
  margin: '0 20px',
  
  borderRadius: 16
} 

const SWMedium = {
  display: 'block',
  margin: '0 20px',
  padding: 50,
  background: '#fff',
  borderRadius: 16
}

// -------------- Typescript declarations -------------- //

interface TrProps {
  spaceAndWidth?: 'small' | 'medium'
  style?: any
  width?: 'small' | 'medium'
  spacing?: 'large' | 'medium' | 'small'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Tr = ({
    width,
    spaceAndWidth,
    spacing,
    children
  }: TrProps ) => {
  
  return(

    <tr 
      // @ts-ignore: Unreachable code error
      style={
        spacing == "large" ? SpacingLarge :
        spacing == "medium" ? SpacingMedium :
        spacing == "small" ? SpacingSmall :
        width == "small" ? TrWidthSmall :
        width == "medium" ? TrWidthMedium :
        spaceAndWidth == "medium" ? SWMedium :
        TrStyles 
      }
    >
      { children }
    </tr>
    
  )
}
