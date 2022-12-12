import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, List, StageBlocks, StageBlockColumn, Heading, Chip, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Font Sizes"
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
            rows="11"
            titles={[
              { title: 'Display 1' },
              { title: 'Display 2' },
              { title: 'Display 3' },
              { title: 'Headline 1' },
              { title: 'Headline 2' },
              { title: 'Headline 3' },
              { title: 'Headline 4' },
              { title: 'Headline 5' },
              { title: 'Headline 6' },
              { title: 'Subheader 1' },
              { title: 'Subheader 2' }
            ]}
          >
            <StageBlockColumn>
              <div><Heading size="l10" title="Labil Grotesk 64px" /><Chip title="l11" /><Chip title="$s10" /></div>
              <div><Heading size="l9" title="Labil Grotesk 56px" /></div>
              <div><Heading size="l8" title="Labil Grotesk 44px" /></div>
              <div><Heading size="l7" title="Labil Grotesk 36px" /></div>
              <div><Heading size="l6" title="Labil Grotesk 28px" /></div>
              <div><Heading size="l5" title="Labil Grotesk 24px" /></div>
              <div><Heading size="l4" title="Labil Grotesk 22px" /></div>
              <div><Heading size="l3" title="Labil Grotesk 18px" /></div>
              <div><Heading size="l2" title="Labil Grotesk 17px" /></div>
              <div><Heading size="l1" title="Labil Grotesk 14px" /></div>
              <div><Heading size="l0" title="Labil Grotesk 12px" /></div>
            </StageBlockColumn>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Heading</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>bold</CodeBlue>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>title</CodeBlue>=<CodeOrange>&#34;Title&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>size</CodeBlue>=<CodeOrange>&#34;l0&#34; | &#34;l1&#34; | &#34;l2&#34; | &#34;l3&#34; | &#34;l4&#34; | &#34;l5&#34; | &#34;l6&#34; | &#34;l7&#34; | &#34;l8&#34; | &#34;l9&#34; | &#34;l10&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>color</CodeBlue>=<CodeOrange>&#34;white&#34; | &#34;gray&#34; | &#34;indigo&#34;</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
