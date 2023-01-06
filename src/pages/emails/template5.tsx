import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, StageBlocks, StageBlockRow, Code } from '@components'
import { Email, Intro, Heading, Text, Reciept, OfferChip, Image, EmailBlock, Features } from '@email'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Email Template Five"
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
              { title: 'Template Five' }
            ]}
          >
            <StageBlockRow spacing="removeOnMobile">

              <div>
                <Email bgColor="gray" removeFooterTopSpacing>

                    <Reciept 
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