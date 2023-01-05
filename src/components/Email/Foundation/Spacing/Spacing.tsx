import React from 'react'

// -------------- Typescript declarations -------------- //

interface SpacingProps {
  children: React.ReactNode
  spacing?: 'small' | 'medium' | 'large' | undefined
  alignment?: 'center'
}

// ---------- This is the end of declarations ---------- //

export const Spacing = ({
    children,
    spacing,
    alignment
  }: SpacingProps ) => {
  
  return(

    <div 
      style={{
        marginTop: spacing == "large" ? 50 : spacing == "medium" ? 32 : spacing == "small" ? 12 : 0,
        textAlign: alignment == 'center' ? 'center' : 'initial'
      }}
    >
      { children }
    </div>
     
  )
}
