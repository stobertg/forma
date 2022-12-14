import React from 'react'
import { Tbody, Tr, Td, Image, Button } from '@email'

const ProductImage = {
  width: 150,
  margin: '0 auto'
}

// -------------- Typescript declarations -------------- //

interface ProductThumbProps {
  productList: {
    href: string
    product: string
    productImage: string
    marginLeft?: number
    marginRight?: number
    buttonTitle: string
    productHeight?: number
  }[]
}

// ---------- This is the end of declarations ---------- //

export const ProductThumb = ({
    productList
  }: ProductThumbProps ) => {
  
  return(

    <Td>
      <table style={{ display: 'table' }} align="center">
        <Tbody>
          <Tr 
            className="mobile__margin--none"
            sideSpacing="small"
            align="center"
          > 

              { productList.map(( product, i ) => (

                <Td 
                  className="thumbnail"
                  key={`product-${ i }`}
                  display="inline"
                  spacingTop="small"
                  bgColor="#fff"
                  padding="medium"
                  marginLeft={ product.marginLeft }
                  marginRight={ product.marginRight }
                >
                  <a href={ product.href }>
                    <div style={ ProductImage }>
                      <Image 
                        height={ product.productHeight }
                        src={ product.productImage } 
                        alt={ product.product } 
                      />
                    </div>
                    <Button spacing="small" title={ product.buttonTitle } />
                  </a>
                </Td>

              ))}
          
          </Tr>
        </Tbody>
      </table>
    </Td>

  )
}
