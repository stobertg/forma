import React from 'react'
import { GlobalContainer } from '@email'

// -------------- Typescript declarations -------------- //

interface EmailProps {
  contentWidth?: 'small' | 'medium'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Email = ({
    contentWidth,
    children
  }: EmailProps ) => {
  
  return(
      
    <GlobalContainer {...{ contentWidth }}>
      { children }
    </GlobalContainer>
    
  )
}
