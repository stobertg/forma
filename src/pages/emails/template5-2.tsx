import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, StageBlocks, StageBlockRow, Code } from '@components'
import { Email, Intro, Heading, Text, Reciept, OfferChip, Image, EmailBlock, Features } from '@email'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Email Template - Subscription renewal"
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
              { title: 'Subscription renewal' }
            ]}
          >
            <StageBlockRow spacing="removeOnMobile">
              <div>
                
                <Email bgColor="gray" removeFooterTopSpacing>
                  <Reciept 
                    recieptType="subscription"
                    emailTitle="Your {vendor_title} subscription was renewed"
                    productImage="/products/headspace/headspace.png"
                    productTitle="Headspace"
                    intro={
                      <>
                        <Text spacing="medium" fontSize="medium">
                          Hi &#123;&nbsp;first name&nbsp;&#125;,
                        </Text>

                        <Text spacing="medium" fontSize="medium">
                          Your &#123;&nbsp;vendor_title&nbsp;&#125; subscription was renewed and charged to your 
                          &#123;&nbsp;this.wallet_name&nbsp;&#125;. We took care of everything, there&apos;s nothing to do on your end!
                        </Text>

                        <Text spacing="medium" fontSize="medium">
                          <strong>Order Number:</strong> <a href="https://www.joinforma.com">W1736300082</a>
                        </Text> 
                        
                        <Text fontSize="medium">
                          <strong>Order Date:</strong> September 30, 2022
                        </Text> 
                      </>
                    }
                    orderItems={[
                      {
                        title: 'Headspace',
                        items: [{ title: '$9.99/month' }, { title: 'You save $10 every month with Forma ????' }]
                      },
                      {
                        title: 'Shipment Notifications',
                        items: [{ title: <a href="mailto:christine@joinforma.com">christine@joinforma.com</a> }]
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