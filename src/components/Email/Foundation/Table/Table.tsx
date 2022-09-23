import React from 'react'
import { Tbody } from '@email'

const tableStyles = {
}

const TableWidthSmall = {
  padding: '40px 50px',
}

const TableWidthMedium = {
  padding: 20,
}

// -------------- Typescript declarations -------------- //

interface TableProps {
  tableWidth?: 'small' | 'medium'
  contentWidth?: 'small' | 'medium'
  bgColor?: string
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Table = ({
    tableWidth,
    contentWidth,
    bgColor,
    children
  }: TableProps ) => {
  
  return(

    <table
      // @ts-ignore: Unreachable code error
      style={
        tableWidth == 'small' ? TableWidthSmall : 
        tableWidth == 'medium' ? TableWidthMedium : 
        null
      }
    >
      <Tbody width={ contentWidth } {...{ bgColor }}>
        { children }
      </Tbody>
    </table>
     
  )
}
