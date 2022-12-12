import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, List, ProjectInfo, Chip, StageBlocks, StageBlockRow, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Chip"
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
              <div><Chip bgColor="gray" title="Callout" /></div>
              <div><Chip text="allCaps" bgColor="gray" title="Callout" /></div>
              <div><Chip size="small" bgColor="gray" title="Callout" /></div>
            </StageBlockRow>

            <StageBlockRow>
              <div><Chip title="Callout" /></div>
              <div><Chip text="allCaps" title="Callout" /></div>
              <div><Chip size="small" title="Callout" /></div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Chip</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>size</CodeBlue>=<CodeOrange>&#34;small&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>bgColor</CodeBlue>=<CodeOrange>&#34;gray&#34; | &#34;orange&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>text</CodeBlue>=<CodeOrange>&#34;allCaps&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>title</CodeBlue>=<CodeOrange>&#34;Callout&#34;</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page