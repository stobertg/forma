import React from 'react'

// -------------- Typescript declarations -------------- //

interface TdProps {
  className?: string
  display?: 'inline'
  spacingTop?: 'small' | 'medium' | 'large'
  padding?: 'small' | 'medium' | 'large'
  smallPaddingBottom?: boolean
  sideSpacing?: 'small' | 'medium'
  marginLeft?: any
  marginRight?: any
  bgColor?: string
  width?: 'half'
  children: React.ReactNode
  style?: any
}

// ---------- This is the end of declarations ---------- //

export const Td = ({
    className,
    display,
    spacingTop,
    sideSpacing,
    smallPaddingBottom,
    marginLeft,
    marginRight,
    padding,
    bgColor,
    width,
    style,
    children
  }: TdProps ) => {
  
  return(

    <td 
      {...{ className }}
      style={{ 
        borderCollapse: 'collapse',
        display: display == 'inline' ? 'inline-block' : 'block', 
        width: width == 'half' ? '48.6%' : 'initial',
        marginTop: spacingTop == 'small' ? 12 : spacingTop == 'medium' ? 32 : spacingTop == 'large' ? 50 :  0,
        marginLeft: sideSpacing == 'small' ? 50 : sideSpacing == 'medium' ? 20 : marginLeft,
        marginRight: sideSpacing == 'small' ? 50 : sideSpacing == 'medium' ? 20 : marginRight,
        padding: padding == 'small' ? 12 : padding == 'medium' ? 32 : padding == 'large' ? 50 : smallPaddingBottom ? '50px 50px 20px' : 0,
        backgroundColor: bgColor,
        borderRadius: 16,
        ...style
      }}
    >
      { children }
    </td>
    
  )
}
