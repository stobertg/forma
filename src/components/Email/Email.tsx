import React from 'react'
import { GlobalContainer } from '@email'

// -------------- Typescript declarations -------------- //

interface EmailProps {
  contentWidth?: 'small' | 'medium'
  children: React.ReactNode
  supportInFooter?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Email = ({
    contentWidth,
    children,
    supportInFooter
  }: EmailProps ) => {
  
  return(
      
    <GlobalContainer {...{ contentWidth, supportInFooter }}>
      { children }
    </GlobalContainer>
    
  )
}
