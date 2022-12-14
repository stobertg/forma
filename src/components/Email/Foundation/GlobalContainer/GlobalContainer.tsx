import React from 'react'
import Head from 'next/head'
import { styled } from '@theme'
import { Tbody, Tr, Footer } from '@email'

const TableStyles = {
  display: 'table',
  maxWidth: 560,
  width: '100%',
  margin: '0 auto',
  paddingBottom: 20,
  backgroundColor: '#fff5e5'
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

    <table className="mobile__padding--bottom-none" style={{ ...TableStyles }} cellPadding="0" cellSpacing="0" role="presentation">
      <Tbody>
        <Tr>{ children }</Tr>
        <Footer {...{ withoutFooter }} />
      </Tbody>
    </table>

  )
}
