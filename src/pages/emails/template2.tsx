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
                      Feel free to reach out to our member experience team via live chat, or at <a href="mailto:support@joinforma.com">support@joinforma.com</a>.
                    </Text>

                    <Button href="https://client.joinforma.com/login" spacing="medium" variant="primary" title="Sign in to Forma" />
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