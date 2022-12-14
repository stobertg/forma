import React from 'react'
import { Tbody, Tr, Td, Image, Chip, Heading, Button } from '@email'

const ProductStyles = {
  padding: '50px 0',
  borderRadius: 16,
  backgroundColor: '#fff',
  color: '#150050'
}

const ProductImage = {
  maxWidth: 162,
  margin: '0 auto'
}

const ProductImageFull = {
  maxWidth: '100%',
  margin: '0 auto'
}

const ProductContent = {
  width: '75%',
  margin: '0 auto'
}


// -------------- Typescript declarations -------------- //

interface ProductHeroProps {
  productWidth?: 'small'
  spacingTop?: 'large' | 'medium' | 'small'
  sideSpacing?: 'small' | 'medium'
  image: string
  deal?: string
  title: string
  buttonTitle: string
}

// ---------- This is the end of declarations ---------- //

export const ProductHero = ({
    productWidth,
    spacingTop,
    sideSpacing,
    image,
    deal,
    title,
    buttonTitle
  }: ProductHeroProps ) => {
  
  return(

    <Td className="mobile__margin--none" {...{ spacingTop, sideSpacing }}>
      <table>
        <Tbody>
          <Tr>
            <Td>
              <div style={ ProductStyles }>
                <div style={ ProductContent }>
                  <div style={ productWidth == 'small' ? ProductImage : ProductImageFull }><Image src={ image } alt={ title } /></div>
                  <Chip spacing="medium" title={ deal } />
                  <Heading spacing="small" bold size="medium" {...{ title }} />
                  <Button spacing="small" variant="primary" title={ buttonTitle } />
                </div>
              </div>
            </Td>
          </Tr>
        </Tbody>
      </table>
    </Td>
    
  )
}
