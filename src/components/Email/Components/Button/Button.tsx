import React from 'react'

const ButtonStyles = {
  fontFamily: 'Labil Grotesk',
  padding: '16px 20px',
  borderRadius: 8,
  color: '#4967e5'
}

const ButtonPrimary = {
  ...ButtonStyles,
  backgroundColor: '#150050',
  color: '#fff'
}

const ButtonSecondary = {
  ...ButtonStyles,
  border: '1px solid #4967E5'
}

// -------------- Typescript declarations -------------- //

interface ButtonProps {
  href?: string
  title: string
  variant?: 'primary' | 'secondary'
}

// ---------- This is the end of declarations ---------- //

export const Button = ({
    href,
    title,
    variant
  }: ButtonProps ) => {

  const ButtonBase = () => {
    return(
      <strong style={ 
        variant == 'primary' ? ButtonPrimary :
        variant == 'secondary' ? ButtonSecondary :
        ButtonStyles 
      }>{ title }</strong>
    )
  }
  
  return(

    <>
      { href 
        ? ( <a href={ href }><ButtonBase /></a> ) 
        : ( <><ButtonBase /></> )
      }
    </>
    
  )
}
