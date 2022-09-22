import React from 'react'
import { Spacing } from '@email'

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

    <Spacing {...{ spacing }}>
      <table>{ children }</table>
    </Spacing>
    
  )
}
