import React from 'react'

// -------------- Typescript declarations -------------- //

interface SpacingProps {
  children: React.ReactNode
  spacing?: 'tiny' | 'small' | 'medium' | 'large' | undefined
  alignment?: 'center'
  style?: any
}

// ---------- This is the end of declarations ---------- //

export const Spacing = ({
    children,
    spacing,
    alignment,
    style
  }: SpacingProps ) => {
  
  return(

    <div 
      style={{
        marginTop: spacing == "large" ? 50 : spacing == "medium" ? 32 : spacing == "small" ? 12 : spacing == "tiny" ? 4 : 0,
        textAlign: alignment == 'center' ? 'center' : 'inherit',
        ...style
      }}
    >
      { children }
    </div>
     
  )
}
