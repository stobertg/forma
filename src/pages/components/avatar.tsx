import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, Tooltip, StageBlocks, StageBlockRow, Avatar, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Avatar"
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
            columns="3"
            titles={[
              { title: 'Default' },
              { title: 'First name only' },
              { title: 'Name hidden' }
            ]}
          >
            <StageBlockRow>
              <div>
                <Avatar
                  image="/people/christine.png"
                  name="Christine Dailey"
                />
              </div>

              <div>
                <Avatar
                  firstNameOnly
                  image="/people/christine.png"
                  name="Christine Dailey"
                />
              </div>

              <div>
                <Avatar
                  nameHidden
                  image="/people/christine.png"
                  name="Christine Dailey"
                />
              </div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Avatar</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>firstNameOnly | nameHidden</CodeBlue>&nbsp;&nbsp;// Optional booleans
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>image</CodeBlue>=<CodeOrange>"/path-to-image"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>name</CodeBlue>=<CodeOrange>"Christine Dailey"</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page