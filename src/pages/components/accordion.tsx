import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, StageBlocks, StageBlockColumn, ProjectInfo, Accordion, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Accordion"
          figmaLink="https://www.figma.com/file/mebc7LtV1mavpIfDdpte9S/3.-Forma---Components?node-id=1768%3A6213&t=gmpAun8Hp21agt1Q-1"
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
            columns="2"
            titles={[
              { title: 'Default' },
              { title: 'With complex children' }
            ]}
          >
            <StageBlockColumn>
              <div>
                <Accordion 
                  accordionOpen={ 2 }
                  accordions={[
                    { id: 1, title: 'This is the title', content: 'This is the content' },
                    { id: 2, title: 'This is the title', content: 'This is the content' },
                    { id: 3, title: 'This is the title', content: 'This is the content' }
                  ]}
                />
              </div>
            </StageBlockColumn>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Banner</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>title</CodeBlue>=<CodeOrange>&#34;Nothing out of pocket&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>subTitle</CodeBlue>=<CodeOrange>&#34;Employees can choose how to use their benefits and spend anywhere Visa is accepted.&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>image</CodeBlue>=<CodeOrange>&#34;/path-to-image&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>bgColor</CodeBlue>=<CodeOrange>&#34;white200&#34; | &#34;pink100&#34; | &#34;cyan 100&#34;</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
