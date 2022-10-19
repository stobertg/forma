import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, Button, StageBlocks, StageBlockRow, Logo, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Logo"
          figmaLink="https://www.figma.com/file/mebc7LtV1mavpIfDdpte9S/3.-Forma---Components?node-id=3162%3A8812"
          storybookLink="https://ui.joinforma.com/?path=/story/forms-button--primary"
          githubLink="/"
          googleDriveLink="/"
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
              { title: 'Full Logo' },
              { title: 'Logo Mark' },
              { title: 'Word Mark' },
            ]}
          >

            <StageBlockRow>
              <div><Logo /></div>
              <div><Logo variant="logo-mark" /></div>
              <div><Logo variant="word-mark" /></div>
            </StageBlockRow>

            <StageBlockRow>
              <div><Button icon="config" title="Action" /></div>
              <div><Button icon="plus-circle" variant="primary" title="Action" /></div>
              <div><Button icon="plus-circle" variant="secondary" title="Action" /></div>
            </StageBlockRow>

            <StageBlockRow>
              <div><Button iconPlacement="right" icon="config" title="Action" /></div>
              <div><Button iconPlacement="right" icon="plus-circle" variant="primary" title="Action" /></div>
              <div><Button iconPlacement="right" icon="plus-circle" variant="secondary" title="Action" /></div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Logo</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>title</CodeBlue>=<CodeOrange>"Action"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>icon</CodeBlue>=<CodeOrange>"icon-name"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>iconPlacement</CodeBlue>=<CodeOrange>"right"</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
