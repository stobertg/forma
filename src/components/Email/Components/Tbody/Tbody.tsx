import React from 'react'

const BodyStyles = {
  display: 'table'
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
  width?: 'small' | 'medium'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Tbody = ({
    width,
    children
  }: TbodyProps ) => {
  
  return(

    <tbody 
      style={
        width == 'small' ? BodyWidthSmall : 
        width == 'medium' ? BodyWidthMedium : 
        BodyStyles 
      }
    >
      { children }
    </tbody>
    
  )
}
