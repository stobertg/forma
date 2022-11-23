import React from 'react'
import { Intro, Heading, Text, Image, ProductHero, ProductThumb, Button, Perks } from '@email'
import { Email } from './Email'

const story = {
  title: 'email/Email',
  component: Email
}
export default story

export const TemplateOne = () => (

  <Email>
    <Intro 
      spacingTop="small"
      logoOnDarkBg
      sideSpacing="medium"
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

export const TemplateTwo = () => (

  <Email>
    <Intro 
      logoOnDarkBg
      bgColor="#150050"
    >
      <Heading 
        bold
        spacing="medium"
        size="large" 
        title={ <>Thanks for activating <span style={{ color: '#fa9bfa' }}>your Forma account</span></> } 
      />

      <Heading 
        color="gray"
        spacing="medium"
        size="small" 
        title={ 
          <>
            Hi Astro, 
            <br/><br/>
            We hope you&apos;re enjoying using Forma for all your benefits and life&apos;s needs. We&apos;re here to support and 
            offer you guidance, so you can take full advantage of your benefits and features available on Forma. Check out the 
            quickstart guide or chat with us online. Thank you for being a valued Forma member! 
          </>
        }
      />   

      {/* <Button variant="primary" title="Sign In" />  */}
    </Intro>

    <Perks 
      spacingTop="large"
      sideSpacing="medium"
    />
  </Email>

)

export const Layout2 = () => (

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


export const TemplateFour = () => (

  <Email>
    <Intro padding="large">
      <Heading 
        bold
        spacing="medium"
        size="large" 
        title="Consolidate your HSA for exclusive Forma benefits"
      />

      <Heading 
        color="gray"
        spacing="large"
        title="Hi Chris," 
        size="medium"
      />

      <Text color="gray" spacing="small" fontSize="large">
        Happy HSA enrollment! We&apos;re reaching out about your 2021/2022 HSA. If you enroll in an HSA plan in 2023 we can 
        consolidate your money into your new account so it&apos;s in one place. 
      </Text>

      <Button 
        spacing="medium"
        href="https://drive.google.com/file/d/1IFvk3SFHOhlSXkzM101DaxGh2n0Zkk46/view" 
        variant="primary" 
        title="More about consolidating HSA" 
      /> 

      <Heading
        bold
        spacing="large"
        size="medium"
        title="Why should I consolidate my HSA money?"
      />

      <Text color="gray" spacing="medium" fontSize="large">
        It&apos;s easier! You can manage your cash and investments directly from Forma without being redirected to another 
        platform. You keep the same benefits you have now plus new perks exclusive to Forma:
      </Text>

      <Text color="gray" spacing="medium" fontSize="medium">
        <ul style={{ marginLeft: 16 }}>
          <li>Earn 0.15% APY on your HSA cash balance</li>
          <li>Use your Forma HSA Debit Card to spend your pre-tax money directly on medical expenses</li>
          <li>Invest HSA your money for tax-free growth</li>
        </ul>
      </Text>

      <Heading
        bold
        spacing="large"
        size="medium"
        title="How do I consolidate my HSA?"
      />

      <Text color="gray" spacing="medium" fontSize="large">
        <strong>Starting January 30, 2023</strong> you&apos;ll see a link at the top of your Forma account to opt-in to the automatic transfer, 
        then we&apos;ll take it from there! We&apos;re attaching a guide that takes you through all the details of how it works.
      </Text>

      <Text color="gray" spacing="medium" fontSize="large">
        If you have any questions you can always reach out to the Forma Support Team at&nbsp; 
        <a style={{ color: '#4967E5' }} href="mailto:support@joinforma.com">support@joinforma.com</a>.
      </Text>

      <Button 
        spacing="medium"
        href="https://drive.google.com/file/d/1IFvk3SFHOhlSXkzM101DaxGh2n0Zkk46/view?usp=sharing" 
        variant="primary" 
        title="More about consolidating HSA" 
      /> 
    </Intro>
  </Email>

)