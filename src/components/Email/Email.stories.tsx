import React from 'react';
import { Intro, Heading, Text, Image, ProductHero } from '@email'
import { Email } from './Email';

const story = {
  title: 'email/Email',
  component: Email
}
export default story

export const Layout1 = () => (

  <Email supportInFooter>
    <Intro 
      logoOnDarkBg
      contentWidth="mediumIntro"
      bgColor="#150050"
    >
      <Heading 
        spacing="medium"
        size="large" 
        title={ <>Jane, treat yourself to <span style={{ color: '#fa9bfa' }}>reinvigorate your body, mind, and soul</span></> } 
      />

      <Image 
        spacing="small" 
        src="/illustration/why-switch.png" 
        alt="Forma Illustration" 
      />

      <Text spacing="small">
        We have hand picked few top quality eligible wellness products with great discounts.   
      </Text>
    </Intro>
  </Email>

)

export const Layout2 = () => (

  <Email supportInFooter>
    <Intro contentWidth="small">
      <Heading 
        spacing="medium"
        bold
        size="large" 
        title="Bring play, creativity, flow to your home office."
      />

      <Text spacing="medium" fontSize="medium">
        There is a symbiotic relationship between work and home. We asked Formies to pick the best products 
        that balance work and play and keep them in movement and flow. You are eligible for these handpicked 
        products, and we highly encourage you to use your benefit funds on some of these products.   
      </Text>
    </Intro>

    <ProductHero
      spacing="large"
      image="/products/sony/sony-noise-canceling.png"
      imageAlt="Sony noise canceling headphones"
      deal="Save 10%"
      title="Sony inteligent industry-leading noise canceling headphones - black"
      buttonTitle="Hurry up, limited time offer"
    />
  </Email>

)

