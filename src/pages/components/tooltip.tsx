import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, Tooltip, StageBlocks, StageBlockRow, Avatar, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Tooltip"
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
            columns="4"
            titles={[
              { title: 'Top' },
              { title: 'Right' },
              { title: 'Bottom' },
              { title: 'left' }
            ]}
          >
            <StageBlockRow>
              <div>
                <Tooltip tooltipText="This is the content">Trigger</Tooltip>
              </div>

              <div>
                <Tooltip side="right" tooltipText="Christine Dailey">
                  <Avatar
                    nameHidden
                    image="/people/christine.png"
                    name="Christine Dailey"
                  />
                </Tooltip>
              </div>

              <div>
                <Tooltip side="bottom" tooltipText="This is the content">Trigger</Tooltip>
              </div>

              <div>
                <Tooltip side="left" tooltipText="Christine Dailey">
                  <Avatar
                    nameHidden
                    image="/people/christine.png"
                    name="Christine Dailey"
                  />
                </Tooltip>
              </div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Tooltip</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>side</CodeBlue>=<CodeOrange>&#34;top&#34; | &#34;right&#34; | &#34;bottom&#34; | &#34;left&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>tooltipText</CodeBlue>=<CodeOrange>&#34;Tooltip text&#34;</CodeOrange>
            <br/>&gt;
            <br/>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Child example
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<CodeGreen>Avatar</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>nameHidden</CodeBlue>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>image</CodeBlue>=<CodeOrange>&#34;/path-to-image&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>name</CodeBlue>=<CodeOrange>&#34;Christine Dailey&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#47;&gt;
            <br/>
            <br/>&lt;&#47;<CodeGreen>Tooltip</CodeGreen>&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page