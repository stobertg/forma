import React from 'react'
import { Tbody } from '@email'

const tableStyles = {

}

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
