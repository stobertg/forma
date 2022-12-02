import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, Tooltip, StageBlocks, StageBlockRow, Code } from '@components'
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
            columns="3"
            titles={[
              { title: 'Default' },
              { title: 'All Caps' },
              { title: 'Small' },
            ]}
          >
            <StageBlockRow>
              <div><Tooltip tooltipText="This is the content">This is the trigger</Tooltip></div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Chip</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>size</CodeBlue>=<CodeOrange>"small"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>bgColor</CodeBlue>=<CodeOrange>"gray" | "orange"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>text</CodeBlue>=<CodeOrange>"allCaps"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>title</CodeBlue>=<CodeOrange>"Callout"</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page