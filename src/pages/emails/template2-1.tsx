import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, StageBlocks, StageBlockRow, Code } from '@components'
import { Email, EmailBlock, Intro, Heading, Text, Image, ProductHero, ProductThumb, Button, Perks } from '@email'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Email Template Two"
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
              { title: 'Template Two' }
            ]}
          >
            <StageBlockRow spacing="removeOnMobile">
              <div>
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
              </div>

            </StageBlockRow>
          </StageBlocks>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page