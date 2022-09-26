import React from 'react'

// -------------- Typescript declarations -------------- //

interface TrProps {
  sideSpacing?: 'small' | 'medium'
  padding?: 'small' | 'medium' | 'large'
  spaceAndWidth?: 'small' | 'medium'
  style?: any
  width?: 'small' | 'medium'
  spacingTop?: 'large' | 'medium' | 'small'
  bgColor?: string
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Tr = ({
    sideSpacing,
    padding,
    bgColor,
    spacingTop,
    children
  }: TrProps ) => {
  
  return(

    <tr 
      style={{ 
        display: 'block',
        borderCollapse: 'collapse',
        marginTop: spacingTop == 'small' ? 12 : spacingTop == 'medium' ? 32 : spacingTop == 'large' ? 50 :  0,
        marginLeft: sideSpacing == 'small' ? 50 : sideSpacing == 'medium' ? 20 : 0,
        marginRight: sideSpacing == 'small' ? 50 : sideSpacing == 'medium' ? 20 : 0,
        padding: padding == 'small' ? 12 : padding == 'medium' ? 32 : padding == 'large' ? 50 : 0,
        borderRadius: 16,
        backgroundColor: bgColor,
      }}
    >
      { children }
    </tr>
    
  )
}
