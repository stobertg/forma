import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, Tooltip, StageBlocks, StageBlockRow, Switch, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Switch"
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
              { title: 'Label right' },
              { title: 'Label hidden' }
            ]}
          >
            <StageBlockRow>
              <div><Switch id="switch" label="I opt into emails" /></div>
              <div><Switch id="switch" label="I opt into emails" labelPlacement="right" /></div>
              <div><Switch id="switch" label="I opt into emails" labelHidden /></div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Switch</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>labelHidden</CodeBlue>&nbsp;&nbsp;// Optional boolean
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>labelPlacement</CodeBlue>=<CodeOrange>"right"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>label</CodeBlue>=<CodeOrange>"I opt into emails"</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page