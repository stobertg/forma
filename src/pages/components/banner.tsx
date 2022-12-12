import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, StageBlocks, StageBlockColumn, ProjectInfo, Banner, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Banners"
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
            rows="4"
            titles={[
              { title: 'Default' },
              { title: 'Info' },
              { title: 'Warning' },
              { title: 'Error' }
            ]}
          >
            <StageBlockColumn>
              <div>
                <Banner 
                  title={ <><strong>Your program policy was updated.</strong> <span>Check out what's new or have changed effective July 31, 2021</span></> }
                />
              </div>

              <div>
                <Banner 
                  status="info" 
                  title={ <><strong>Your program policy was updated.</strong> <span>Check out what's new or have changed effective July 31, 2021</span></> }
                />
              </div>

              <div>
                <Banner 
                  status="warning" 
                  title={ <><strong>Your program policy was updated.</strong> <span>Check out what's new or have changed effective July 31, 2021</span></> }
                />
              </div>

              <div>
                <Banner 
                  status="error" 
                  title={ <><strong>Your program policy was updated.</strong> <span>Check out what's new or have changed effective July 31, 2021</span></> }  
                />
              </div>
            </StageBlockColumn>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Banner</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>Status</CodeBlue>=<CodeOrange>&#34;info&#34; | &#34;warning&#34; | &#34;error&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>Title</CodeBlue>=<CodeOrange>&#34;Can be a string or component&#34;</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
