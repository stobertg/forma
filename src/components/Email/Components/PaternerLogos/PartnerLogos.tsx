import React from 'react'
import { Spacing, Image } from '@email'

interface ListProps {
  spacing?: 'small' | 'medium' | 'large'
  logos: {
    image: string
  }[]
}

export const PartnerLogos = ({ 
    spacing,
    logos
  }:ListProps) => {
  return(

    <Spacing {...{ spacing }}>
      <div>
        { logos.map(( logo, i ) => (

          <div 
            key={`logo-${ i }`}
            style={{ 
              display: 'inline-block', 
              position: 'relative',
              width: '33%',
              padding: 20,
              height: 125,
              verticalAlign: 'top',
              textAlign: 'center'
            }}
          >

              <Image src={ logo.image } alt="Forma partner" />

          </div>

        ))}
      </div>
    </Spacing>

  )
}