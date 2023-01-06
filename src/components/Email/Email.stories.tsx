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
      logoSize="medium"
      padding="large"
    >
      <Heading 
        spacing="medium"
        bold
        size="large" 
        title="Your Pre-tax Forma Card is on the way"
      />

      <Heading 
        spacing="medium"
        size="small" 
        title="Hey {{ insert first_name 'default=valued member' }}!"
      />
    </Intro>

    <EmailBlock sideSpacing="small">
      <Image 
        src="/card/debit-card-1.png" 
        alt="Forma card" 
      />

      <Text color="gray" spacing="medium" fontSize="medium">
        Use this card to spend money on any of your pre-tax benefits. Depending on what benefits you get from 
        your employer, this includes HSA, FSA, LPFSA, DCFSA, Transit, and Parking. You might only have some of these 
        benefits depending on your employer.
      </Text>

      <Heading spacing="medium" size="medium" title="What do I do when it arrives?" />
      <Text color="gray" spacing="small" fontSize="medium">
        Call the number on the back of the card to activate it and set your PIN. It should arrive in 5-7 business 
        days. Check out more 
        <a href="https://support.joinforma.com/en/articles/6542665-new-forma-card-activation">card FAQs.</a>
      </Text>

      <Heading spacing="medium" size="medium" title="What if I have dependents?" />

      <Text color="gray" spacing="small" fontSize="medium">
        You can request a card for them, too! First add them as dependents to your Forma account and we&apos;ll 
        send them a card.
      </Text>

      <Text color="gray" spacing="small" fontSize="medium">
        You&apos;ll be able to manage their cards from your accounts settings in case they&apos;re lost or stolen.
      </Text>

      <Button href="https://client.joinforma.com/login" spacing="large" variant="primary" title="Sign in to Forma" />

      <Text color="gray" spacing="large" fontSize="medium">
        If you have any questions, reach out to member support via live chat or 
        <a href="mailto:support@joinforma.com">support@joinforma.com</a>
      </Text>
    </EmailBlock>
  </Email>

)

export const Template3 = () => {


}
