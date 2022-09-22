import React from 'react'

// -------------- Typescript declarations -------------- //

interface THeadProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const THead = ({
    children
  }: THeadProps ) => {
  
    return(

     <table>{ children }</table>
     
    )
}
