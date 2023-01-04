import React from 'react'
import { Spacing } from '@email'
import { OfferCardBase } from './Parts/Base'

interface CardProps {
  spacing?: 'small' | 'medium' | 'large' | undefined
  bgColor?: 'cyan' | 'green' | 'yellow'
  deal?: any
  category?: string
  company?: string
  image?: any
  primaryButtonTitle?: any
  primaryButtonLink?: any
  secondaryButtonTitle?: any
  secondaryButtonLink?: string
  cards?: {
    bgColor?: 'cyan' | 'green' | 'yellow'
    deal: any
    category?: string
    company?: string
    image: any
    primaryButtonTitle: string
    primaryButtonLink: any
    secondaryButtonTitle?: any
    secondaryButtonLink?: string
  }[]
}

export const OfferCard = ({ 
    spacing,
    cards,
    bgColor,
    deal,
    category,
    company,
    image,
    primaryButtonTitle,
    primaryButtonLink,
    secondaryButtonTitle,
    secondaryButtonLink
  }:CardProps) => {

  return(

    <>
      { cards ? (

        <>
          { cards.map(( card, i ) => (
            
            <Spacing spacing="small" key={`card-${ i }`}>
              <OfferCardBase 
                bgColor={ card.bgColor }
                image={ card.image }
                deal={ card.deal }
                category={ card.category }
                company={ card.company }
                primaryButtonTitle={ card.primaryButtonTitle }
                primaryButtonLink={ card.primaryButtonLink }
                secondaryButtonTitle={ card.secondaryButtonTitle }
                secondaryButtonLink={ card.secondaryButtonLink }
              />
            </Spacing>

          ))}
        </>

      ) : (

        <Spacing {...{ spacing }}>
          <OfferCardBase 
            {...{ 
              bgColor, 
              deal, 
              category, 
              company, 
              image, 
              primaryButtonTitle,
              primaryButtonLink, 
              secondaryButtonTitle,
              secondaryButtonLink 
            }}
          />
        </Spacing>

      )}
    </>

  )
}