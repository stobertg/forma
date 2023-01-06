import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, StageBlocks, StageBlockRow, Code } from '@components'
import { Email, EmailBlock, Heading, Text, Reciept, Button, List } from '@email'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Email - Subscription canceled"
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
              { title: 'Subscription canceled' }
            ]}
          >
            <StageBlockRow spacing="removeOnMobile">
              <div>
                
                <Email bgColor="gray" removeFooterTopSpacing>
                  <Reciept 
                    recieptType="canceled"
                    emailTitle="There was a problem renewing your subscription"
                    intro={
                      <>
                        <Text spacing="medium" fontSize="medium">
                          Hi &#123;&nbsp;first name&nbsp;&#125;,
                        </Text>

                        <Text spacing="medium" fontSize="medium">
                          We tried to renew your &#123;&nbsp;subscription_title&nbsp;&#125; for the third time, but we 
                          couldn&apos;t because of a problem with your linked credit card so your subscription was cancelled.
                        </Text>

                        <Text spacing="medium" fontSize="medium">
                          If you still owe overdue fees:
                        </Text>

                        <List 
                          spacing="medium"
                          listItems={[
                            { title: "We'll first try to take the fees from another eligible spending account" },
                            { title: "If we can't take it from another account, we'll collect it on your {this.wallet_name} account next time it renews until all fees are paid" },
                            { title: "You can't start a new subscription to { vendor_name } until the overdue fees are paid" }
                          ]}
                        />

                        <Text spacing="medium" fontSize="medium">
                          If you&apos;d like to keep the subscription active, please contact our Forma Support team via 
                          live chat or at <a href="mailto:support@joinforma.com">support@joinforma.com</a>.
                        </Text>

                        <Button href="https://joinforma.com" spacing="medium" variant="primary" title="Contact support" />
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