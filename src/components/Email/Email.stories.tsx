import React from 'react'
import { Intro, EmailBlock, Heading, Text, Image, HeroImage, ProductHero, ProductThumb, Button, Perks } from '@email'
import { Email } from './Email'

const story = {
  title: 'email/Email',
  component: Email,
  
}
export default story

export const Template1 = () => (

  <Email>
    <Intro padding="large">
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
      sideSpacing="small"
      productWidth="small"
      image="/products/sony/sony-noise-canceling.png"
      deal="Save 10%"
      title="Sony inteligent industry-leading noise canceling headphones - black"
      buttonTitle="Hurry up, limited time offer"
    />

    <ProductThumb 
      productList={[
        { 
          href: 'http://tylerstober.com',
          marginRight: 6, 
          productImage: "/products/sony/earbuds-noisecancelling.png",
          product: 'Sony Earbuds',
          buttonTitle: 'Shop Forma Store'
        },
        { 
          href: 'http://tylerstober.com',
          marginLeft: 6, 
          productImage: "/products/sony/earbuds-noisecancelling.png",
          product: 'Sony Earbuds',
          buttonTitle: 'Shop Forma Store'
        },
      ]}
    />

    <ProductHero
      spacingTop="small"
      sideSpacing="small"
      image="/products/fluidstance/board.png"
      deal="Best Deal"
      title="FluidStance Springboard Active-Standing Mat"
      buttonTitle="Hurry up, limited time offer"
    />

    <ProductThumb 
      productList={[
        { 
          href: 'http://tylerstober.com',
          productHeight: 150,
          marginRight: 6, 
          productImage: "/products/fluidstance/naturalwood.png",
          product: 'Sont Earbuds',
          buttonTitle: 'Shop Forma Store'
        },
        { 
          href: 'http://tylerstober.com',
          productHeight: 150,
          marginLeft: 6, 
          productImage: "/products/fluidstance/graphite.png",
          product: 'Sont Earbuds',
          buttonTitle: 'Shop Forma Store'
        },
        { 
          href: 'http://tylerstober.com',
          productHeight: 63,
          marginRight: 6, 
          productImage: "/products/fluidstance/dryerase.png",
          product: 'Sont Earbuds',
          buttonTitle: 'Shop Forma Store'
        },
        { 
          href: 'http://tylerstober.com',
          productHeight: 63,
          marginLeft: 6, 
          productImage: "/products/fluidstance/whiteboard.png",
          product: 'Sont Earbuds',
          buttonTitle: 'Shop Forma Store'
        }
      ]}
    />
  </Email>

)

export const Template2 = () => (

  <Email>
    <Intro 
      noWordMark 
      logoSize="large"
      padding="large"
    >
      <Heading 
        spacing="medium"
        bold
        size="large" 
        title="Your Forma card is on the way"
      />

      <Heading 
        spacing="medium"
        size="small" 
        title="Hello Micky,"
      />
    </Intro>

    <EmailBlock sideSpacing="small">
      <Image 
        src="/card/debit-card-1.png" 
        alt="Forma card" 
      />

      <Text color="gray" spacing="medium" fontSize="medium">
        Your card should arrive in 2-3 business days. When it arrives, call the number on the back of the card to activate 
        it and set your PIN.
      </Text>

      <Text color="gray" spacing="medium" fontSize="medium">
        Feel free to reach out to our member experience team via live chat, or at support@joinforma.com.
      </Text>

      <Button href="https://client.joinforma.com/login" spacing="medium" variant="primary" title="Sign in to Forma" />
    </EmailBlock>
  </Email>

)
