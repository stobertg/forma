import React from 'react'

// -------------- Typescript declarations -------------- //

interface GlobalContainerProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const GlobalContainer = ({
    children
  }: GlobalContainerProps ) => {
  
    return(

     <table>{ children }</table>
     
    )
}
