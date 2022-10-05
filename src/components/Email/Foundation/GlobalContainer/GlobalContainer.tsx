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
  supportInFooter?: boolean
  children: React.ReactNode
  withoutFooter?: boolean
}

// ---------- This is the end of declarations ---------- //

export const GlobalContainer = ({
    children,
    withoutFooter
  }: GlobalContainerProps ) => {
  
  return(

    <table style={{ ...TableStyles, paddingBottom: 32 }}>
      <Tbody>
        { children }
        <Footer {...{ withoutFooter }} />
      </Tbody>
    </table>
    
  )
}
