import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, StageBlocks, StageBlockRow, Code } from '@components'
import { Email, Intro, Heading, Text, OfferChip, Image, EmailBlock, Features } from '@email'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Email Template Four"
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
              { title: 'Template Four' }
            ]}
          >
            <StageBlockRow spacing="removeOnMobile">

              <div>
                <Email bgColor="gray" removeFooterTopSpacing>
                  <div
                    style={{
                      marginLeft: 20,
                      marginRight: 20,
                      background: '#fff'
                    }}
                  >
                    <Intro 
                      padding="large"
                      logoSize="medium"
                    >
                      <Heading 
                        spacing="medium"
                        bold
                        size="large" 
                        title="Thanks for your order!"
                      />

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
                    </Intro>
                  </div>

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