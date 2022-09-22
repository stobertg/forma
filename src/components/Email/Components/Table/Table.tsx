import React from 'react'

// -------------- Typescript declarations -------------- //

interface TableProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Table = ({
    children
  }: TableProps ) => {
  
  return(

    <table>{ children }</table>
     
  )
}
