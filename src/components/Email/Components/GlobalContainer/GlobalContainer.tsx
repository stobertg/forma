import React from 'react'
import { Tbody, Footer } from '@email'

const TableStyles = {
  display: 'table',
  maxWidth: 560,
  width: '100%',
  margin: '0 auto',
  backgroundColor: '#fdf9f4'
}

// -------------- Typescript declarations -------------- //

interface GlobalContainerProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const GlobalContainer = ({
    children
  }: GlobalContainerProps ) => {
  
  return(

    <table style={ TableStyles }>
      <Tbody>
        { children }
        <Footer />
      </Tbody>
    </table>
    
  )
}
