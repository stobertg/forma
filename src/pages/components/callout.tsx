import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, StageBlocks, StageBlockColumn, Callout, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange, CodePurple, CodeYellow } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Callouts"
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
            rows="4"
            titles={[
              { title: 'Default' },
              { title: 'Success' },
              { title: 'Warning' },
              { title: 'Error' }
            ]}
          >
            <StageBlockColumn>
              <div>
                <Callout  
                  descp="An attempt was made to perform an operation that is not permitted: More than 10% employees are being terminated."
                />
              </div>

              <div>
                <Callout  
                  status="success"
                  descp="An attempt was made to perform an operation that is not permitted: More than 10% employees are being terminated."
                />
              </div>

              <div>
                <Callout  
                  status="warning"
                  descp="An attempt was made to perform an operation that is not permitted: More than 10% employees are being terminated."
                />
              </div>

              <div>
                <Callout 
                  status="error" 
                  descp="An attempt was made to perform an operation that is not permitted: More than 10% employees are being terminated."
                />
              </div>
            </StageBlockColumn>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Callout</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>status</CodeBlue>=<CodeOrange>&#34;success&#34; | &#34;warning&#34; | &#34;error&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>descp</CodeBlue>=<CodeOrange>&#34;An attempt was made to perform...&#34;</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
