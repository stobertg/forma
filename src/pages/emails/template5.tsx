import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, StageBlocks, StageBlockRow, Code } from '@components'
import { Email, Intro, Heading, Text, Reciept, OfferChip, Image, EmailBlock, Features } from '@email'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Email Template - Order Confirmation"
          figmaLink="https://www.figma.com/file/mebc7LtV1mavpIfDdpte9S/3.-Forma---Components?node-id=7361%3A11097"
          storybookLink="/"
          githubLink="/"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non erat nibh. Sed eget posuere sapien. Nullam ut 
            justo volutpat, consequat ligula et, cursus erat. Nulla vitae mattis ligula. Ut et nisi at ipsum tempor dapibus. 
            Maecenas luctus nisl leo, sit amet bibendum sem tempor commodo. Nullam quis viverra augue.
          </p>
        </ProjectInfo>
      </Block>

      <Block blockItemSpacing="l0">
        <BlockItem>
          <StageBlocks 
            columns="1"
            titles={[
              { title: 'Order confirmation' }
            ]}
          >
            <StageBlockRow spacing="removeOnMobile">
              <div>

                <Email bgColor="gray" removeFooterTopSpacing>
                  <Reciept 
                    emailTitle="Thanks for your order!"
                    productImage="/products/fitbit/fitbit-watch.png"
                    productTitle="Fitbit Versa 3"
                    intro={
                      <>
                        <Text spacing="medium" fontSize="medium">
                          Hi &#123;&nbsp;first name&nbsp;&#125;,
                        </Text>

                        <Text spacing="small" fontSize="medium">
                          Thank you for shopping at Forma Store! We&apos;re working on getting everything ready. Your order will be 
                          shipped in 5-10 business days* directly to you.
                        </Text>

                        <Text spacing="medium" fontSize="medium">
                          <strong>Order Number:</strong> <a href="https://joinforma.com">W1150150997</a>
                        </Text>

                        <Text fontSize="medium">
                          <strong>Order Date:</strong> July 20, 2022
                        </Text> 
                      </>
                    }
                    orderItems={[
                      {
                        title: 'Fitbit Versa 3',
                        items: [{ title: '$219.00' }, { title: 'You saved $60 with Forma 🎉' }]
                      },
                      {
                        title: 'Shipping Address',
                        items: [{ title: '6095 Heron Ave' }, { title: 'Unit B' }, { title: 'Ewa Beach HI 96706' }]
                      },
                      {
                        title: 'Shipment Notifications',
                        items: [{ title: <a href="mailto:christine@joinforma.com">christine@joinforma.com</a> }]
                      },
                      {
                        title: 'Shipping Method',
                        items: [{ title: 'Standard 7-10 business days' }]
                      }
                    ]} 
                    buttonLink="https://joinforma.com" 
                  />    
                </Email>

              </div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page