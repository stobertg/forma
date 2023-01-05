import React from 'react'
import { Image } from '@email'
import { Text } from './Text'

interface FeaturesProps {
  list: {
    title: string
    image: string
    items: {
      title: string
    }[]
  }[]
}

export const FeaturesBase = ({ 
    list
  }:FeaturesProps) => {
  
  return(

    <>
      { list.map(( item, i ) => (

        <div key={`item-${ i }`} style={{ marginTop: 32 }}>
          <div>
            <div style={{ display: 'inline-block', width: '30%' }}>
              <Image src={ item.image } alt={ item.title } />
            </div>
            
            <Text 
              title={ item.title }
              items={ item.items }
            />
          </div>
        </div>

      ))}
    </>

  )
}