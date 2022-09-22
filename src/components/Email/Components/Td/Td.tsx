import React from 'react'

// -------------- Typescript declarations -------------- //

interface TdProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Td = ({
    children
  }: TdProps ) => {
  
    return(

     <table>{ children }</table>
     
    )
}
