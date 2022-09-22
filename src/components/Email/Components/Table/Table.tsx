import React from 'react'
import { Tbody } from '@email'

// -------------- Typescript declarations -------------- //

interface TableProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Table = ({
    children
  }: TableProps ) => {
  
  return(

    <table>
      <Tbody>
        { children }
      </Tbody>
    </table>
     
  )
}
