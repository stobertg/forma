import React from 'react';
import { SiteContainer, Block } from '@components'
import { ProductHero } from '@email';

const story = {
  title: 'email/components/ProductHero',
  component: ProductHero
}
export default story

export const Primary = () => (

  <SiteContainer>
    <Block width="tiny" alignment="center">
      <ProductHero 
        image="/products/sony/sony-noise-canceling.png"
        imageAlt="Sony noise canceling headphones"
        deal="Save 10%"
        title="Sony intelligent industry-leading noise canceling headphones - black"
        buttonTitle="Hurry up, limited time offer"
      />
    </Block>
  </SiteContainer>
  
)

