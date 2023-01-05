import React from 'react'
import { Heading, Image } from '@email'

interface TextProps {
  title: string
  items: {
    title: string
  }[]
}

export const Text = ({ items, title }:TextProps) => {
  return(

    <div 
      style={{ 
        display: 'inline-block', 
        width: '70%', 
        paddingLeft: 20,
        position: 'relative',
        height: 133
      }}
    >
      <div
        style={{
          margin: 0,
          position: 'absolute',
          top: '50%',
          transform: 'translateY( -50% )'
        }}
      >
        <Heading size="medium" {...{ title }} />

        { items.map(( item, i ) => (

          <div key={`item-${ i }`} style={{ display: 'block', marginTop: 12 }}>
            <div style={{ display: 'inline-block', width: 20, marginTop: 1 }}>
              <Image src="/emails/icons/check-cyan-filled.png" alt="Forma checkmark" />
            </div>

            <div 
              style={{ 
                display: 'inline-block', 
                width: '80%', 
                verticalAlign: 'top', 
                marginLeft: 8
              }}
            >
              <Heading size="tiny" title={ item.title } />
            </div>
          </div>

        ))}
      </div>
    </div>

  )
}