import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, StageBlocks, StageBlockRow, Code } from '@components'
import { Email, EmailBlock, Intro, Heading, Text, OfferCard, PartnerCallout } from '@email'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Email Template Three"
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
              { title: 'Template Three' }
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
                      title="Use your benefits money before it expires!"
                    />

                    <Text color="gray" spacing="medium" fontSize="medium">
                      The money in your benefits accounts expires <strong>September 30th at 11:59 PT</strong>. Shop the Forma Store and submit 
                      any claims to use your remaining balance before it&apos;s gone!
                    </Text>
                  </Intro>

                  <EmailBlock sideSpacing="small">
                    <OfferCard
                      cards={[
                        { 
                          bgColor: 'green', 
                          image: '/illustration/benefits/account-custom.svg', 
                          deal: '+$200', 
                          category: 'PerFi Wellbeing',
                          primaryButtonTitle: 'Shop Forma store',
                          primaryButtonLink: '/',
                          secondaryButtonTitle: "What's eligible?",
                          secondaryButtonLink: '/'
                        },
                        { 
                          bgColor: 'cyan', 
                          image: '/illustration/benefits/account-gym.svg', 
                          deal: '+$200', 
                          category: 'Sweaty Pursuits',
                          primaryButtonTitle: 'Shop Forma store',
                          primaryButtonLink: '/',
                          secondaryButtonTitle: "What's eligible?",
                          secondaryButtonLink: '/'
                        }
                      ]}
                    />
                  </EmailBlock>

                  <EmailBlock bgColor="#5e85fe" color="#fff" spacingTop="large">
                    <PartnerCallout 
                      title="No second guessing, no claims required*"
                    />
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