import React from 'react'
import { Tbody, Tr, Footer } from '@email'

// -------------- Typescript declarations -------------- //

interface GlobalContainerProps {
  supportInFooter?: boolean
  children: React.ReactNode
  withoutFooter?: boolean
  bgColor?: 'white' | 'gray'
  removeFooterTopSpacing?: boolean
}

// ---------- This is the end of declarations ---------- //

export const GlobalContainer = ({
    children,
    withoutFooter,
    bgColor,
    removeFooterTopSpacing
  }: GlobalContainerProps ) => {
  
  return(

    <table 
      className="mobile__padding--bottom-none" 
      cellPadding="0" 
      cellSpacing="0" 
      role="presentation"
      style={{ 
        display: 'table',
        maxWidth: 560,
        width: '100%',
        margin: '0 auto',
        paddingBottom: 20,
        backgroundColor: bgColor == 'white' ? '#fff' : bgColor == 'gray' ? '#f5f5f7' : '#fdf9f4',
        border: bgColor == 'white' ? '1px solid #e5e5e5' : 'none',
        borderRadius: 20
      }} 
    >

      <Tbody>
        <Tr>{ children }</Tr>
        <Footer 
          {...{ withoutFooter }} 
          removeTopSpacing={ removeFooterTopSpacing } 
        />
      </Tbody>
    </table>

  )
}
