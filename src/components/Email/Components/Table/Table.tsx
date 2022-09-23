import React from 'react'
import { Tbody } from '@email'

const tableStyles = {

}

// -------------- Typescript declarations -------------- //

interface TableProps {
  contentWidth?: 'small' | 'medium'
  bgColor?: string
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Table = ({
    contentWidth,
    bgColor,
    children
  }: TableProps ) => {
  
  return(

    <table>
      <Tbody width={ contentWidth } bgColor={ bgColor }>
        { children }
      </Tbody>
    </table>
     
  )
}
