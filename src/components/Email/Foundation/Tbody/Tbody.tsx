import React from 'react'

const BodyStyles = {
  display: 'table',
  borderRadius: 16
}

const BodyWidthSmall = {
  ...BodyStyles,
  padding: '40px 50px',
}

const BodyWidthMedium = {
  ...BodyStyles,
  padding: 20,
}

// -------------- Typescript declarations -------------- //

interface TbodyProps {
  bgColor?: string
  width?: 'small' | 'medium'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Tbody = ({
    bgColor,
    width,
    children
  }: TbodyProps ) => {
  
  return(

    <tbody 
      style={
        width == 'small' ? { ...BodyWidthSmall, backgroundColor: bgColor }: 
        width == 'medium' ? { ...BodyWidthMedium, backgroundColor: bgColor } : 
        { ...BodyStyles, backgroundColor: bgColor }
      }
    >
      { children }
    </tbody>
    
  )
}
