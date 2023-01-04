import React from 'react'
import { Image, Button, Heading } from '@email'

interface CardProps {
  bgColor?: 'cyan' | 'green' | 'yellow'
  deal: string | number
  category?: string
  company?: string
  image: string
  primaryButtonTitle: string
  primaryButtonLink: string
  secondaryButtonTitle?: any
  secondaryButtonLink?: string
}

export const OfferCardBase = ({ 
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

    <div 
      style={{ 
        width: '100%',
        padding: '40px 0',
        background: bgColor == 'cyan' ? '#bbeaf7' : bgColor == 'yellow' ? '#fdeca3' : bgColor == 'green' ? '#ade0cc' : '#fff', 
        borderRadius: 16 
      }}
    >

      <div style={{ width: '83%', margin: '0 auto' }}>
        <div style={{ display: 'block' }}>
          <div style={{ display: 'inline-block', width: 120 }}>
            <Image src={ image } alt="Forma Illustration" />
          </div>

          <div style={{ float: 'right', display: 'inline-block', verticalAlign: 'top' }}>
            <Heading bold size="xlarge" title={ deal } alignment="right" />
            <Heading spacing="medium" size="medium" title={ category || company } alignment="right" />
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <div style={{ display: 'inline-block' }}>
            <Button href={ primaryButtonLink } variant="primary" title={ primaryButtonTitle } />
          </div>

          { secondaryButtonLink ? (
            <div style={{ display: 'inline-block', marginLeft: 24 }}>
              <Button href={ secondaryButtonLink } title={ secondaryButtonTitle } />
            </div>
          ) : null }
        </div>
      </div>

    </div>

  )
}