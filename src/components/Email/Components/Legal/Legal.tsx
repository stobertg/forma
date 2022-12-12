import React from 'react'
import { Tr, Td, Text } from '@email'

// -------------- Typescript declarations -------------- //

interface LegalProps {
  items: {
    title: string | React.ReactNode
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Legal = ({
    items
  }: LegalProps ) => {
  
  return(

    <Td spacingTop="small">
      <div style={{ fontSize: 14, lineHeight: 1.3, color: '#67677C' }}>
        { items.map(( item, i ) => (
          <div key={`item-${ i }`}>{ item.title }</div>
        ))}
      </div>
    </Td>

            
  )
}
