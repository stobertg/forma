import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, StageBlocks, StageBlockRow, Dropdown, Avatar, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange, CodePurple, CodeYellow } from '@codeColors'
import { DropdownBase } from 'src/components/Dropdown/Parts'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Dropdown"
          figmaLink="https://www.figma.com/file/mebc7LtV1mavpIfDdpte9S/3.-Forma---Components?node-id=3162%3A8812"
          storybookLink="https://ui.joinforma.com/?path=/story/forms-button--primary"
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
            columns="3"
            titles={[
              { title: 'With text' },
              { title: 'With image' },
              { title: 'With text and image' }
            ]}
          >
            <StageBlockRow>
              <div>
                <Dropdown 
                  trigger="Trigger"
                />
              </div>

              <div>
                <Dropdown 
                  trigger={ <Avatar nameHidden image="/people/christine.png" name="Christine Dailey" /> }
                />
              </div>

              <div>
                <Dropdown 
                  trigger={ <Avatar firstNameOnly image="/people/christine.png" name="Christine Dailey" /> }
                />
              </div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Dropdown</CodeGreen>
            &#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
