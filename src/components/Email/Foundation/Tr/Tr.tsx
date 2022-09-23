import React from 'react'
import { Spacing } from '@email'

const TrStyles = { display: 'table', width: '100%' }
const SpacingLarge = { display: 'table', width: '100%', marginTop: 50 }
const SpacingMedium = { display: 'table', width: '100%', marginTop: 32 }
const SpacingSmall = { display: 'table', width: '100%', marginTop: 12 }

// -------------- Typescript declarations -------------- //

interface TrProps {
  spacing?: 'large' | 'medium' | 'small'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Tr = ({
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
        TrStyles 
      }
    >
      { children }
    </tr>
    
  )
}
