import React from 'react'

// -------------- Typescript declarations -------------- //

interface TrProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Tr = ({
    children
  }: TrProps ) => {
  
    return(

     <table>{ children }</table>
     
    )
}
