import React from 'react'
import { Tr, Image, Chip, Heading, Button } from '@email'

const ProductStyles = {
  padding: '50px 0',
  borderRadius: 16,
  backgroundColor: '#fff'
}

const ProductImage = {
  maxWidth: 162,
  margin: '0 auto'
}

const ProductContent = {
  width: '75%',
  margin: '0 auto'
}


// -------------- Typescript declarations -------------- //

interface ProductHeroProps {
  spacingTop?: 'large' | 'medium' | 'small'
  sideSpacing?: 'small' | 'medium'
  image: string
  imageAlt: string
  deal?: string
  title: string
  buttonTitle: string
}

// ---------- This is the end of declarations ---------- //

export const ProductHero = ({
    spacingTop,
    sideSpacing,
    image,
    imageAlt,
    deal,
    title,
    buttonTitle
  }: ProductHeroProps ) => {
  
  return(

    <Tr {...{ spacingTop, sideSpacing }}>
      <div style={ ProductStyles }>
        <div style={ ProductContent }>
          <div style={ ProductImage }><Image src={ image } alt={ imageAlt } /></div>
          <Chip spacing="medium" title={ deal } />
          <Heading spacing="small" bold size="medium" {...{ title }} />
          <Button spacing="small" variant="primary" title={ buttonTitle } />
        </div>
      </div>
    </Tr>
    
  )
}
