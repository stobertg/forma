import React from 'react'
import { Tr, Heading } from '@email'

// -------------- Typescript declarations -------------- //

interface PerksProps {
  spacingTop?: 'small' | 'medium' | 'large'
  sideSpacing?: 'small' | 'medium'
}

// ---------- This is the end of declarations ---------- //

export const Perks = ({
    spacingTop,
    sideSpacing 
  }: PerksProps ) => {
  
  return(

    <Tr {...{ spacingTop, sideSpacing }}>
      <Heading alignment="center" size="medium" title="Take advantage of your benefits" />
    </Tr>
    
  )
}
