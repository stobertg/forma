import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, StageBlocks, StageBlockRow, Code } from '@components'
import { Email, Intro, Heading, Text, OfferChip } from '@email'
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
                <Email>
                  <Intro 
                    noWordMark
                    bgColor="#150050" 
                    logoSize="medium"
                    buttonTitle="Activate Forma account"
                    buttonLink="https://joinforma.com"
                  >
                    <Heading 
                      spacing="medium"
                      bold
                      color="white"
                      size="large" 
                      title={ <>Don&apos;t forget to activate <span style={{ color: '#fbaffb' }}>your Forma account</span></> }
                    />

                    <Text spacing="medium" fontSize="medium">
                      Hi first name,
                    </Text>

                    <Text spacing="small" fontSize="medium">
                      Just a reminder to activate your Forma account with your work email to start using your emaployee
                      benefits from employer_name
                    </Text>

                    <Text spacing="small" fontSize="medium">
                      If you need help or have any questions, reach out to support@joinforma.com
                    </Text>
                  </Intro>

                  
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