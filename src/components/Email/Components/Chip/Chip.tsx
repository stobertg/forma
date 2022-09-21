import React from 'react'

const ChipStyles = {
  display: 'inline-block',
  background: '#ffcc95',
  borderRadius: 9999,
  padding: '12px 20px',
  color: '#000',
  fontSize: 14,
  fontFamily: 'Labil Grotesk'
}

// -------------- Typescript declarations -------------- //

interface ChipProps {
  title: string
}

// ---------- This is the end of declarations ---------- //

export const Chip = ({
    title
  }: ChipProps ) => {
  
  return(

    <div style={ ChipStyles }><strong>{ title }</strong></div>
    
  )
}
