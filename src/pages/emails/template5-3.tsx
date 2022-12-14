import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, StageBlocks, StageBlockRow, Code } from '@components'
import { Email, EmailBlock, Heading, Text, Reciept, Button } from '@email'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Email - Subscription renewal failed"
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
              { title: 'Subscription renewal failed' }
            ]}
          >
            <StageBlockRow spacing="removeOnMobile">
              <div>
                
                <Email bgColor="gray" removeFooterTopSpacing>
                  <Reciept 
                    recieptType="failure"
                    emailTitle="There was a problem renewing your subscription"
                    intro={
                      <>
                        <Text spacing="medium" fontSize="medium">
                          Hi &#123;&nbsp;first name&nbsp;&#125;,
                        </Text>

                        <Text spacing="medium" fontSize="medium">
                          We can&apos;t renew your &#123;&nbsp;subscription_title&nbsp;&#125; because it exceeded the balance 
                          of your &#123;&nbsp;this.wallet_name&nbsp;&#125; account. You can link a personal credit card to 
                          Forma to pay for the rest of the fee and renew your subscription.
                        </Text>

                        <Button href="https://joinforma.com" spacing="medium" variant="primary" title="Update credit card" />
                      </>
                    }
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