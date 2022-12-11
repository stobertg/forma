import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, Progress, StageBlocks, StageBlockColumn, Code } from '@components'
import { CodeBlue, CodeGreen, CodePurple } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Steps"
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
            rows="3"
            titles={[
              { title: '0%' },
              { title: '50%' },
              { title: '100%' },
            ]}
          >
            <StageBlockColumn>
              <div><Progress value={ 0 } /></div>
              <div><Progress value={ 50 } /></div>
              <div><Progress value={ 100 } /></div>
            </StageBlockColumn>
          </StageBlocks>
          
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Progress</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>value</CodeBlue>=<CodePurple>&#123;&nbsp;<CodeBlue>50</CodeBlue>&nbsp;&#125;</CodePurple>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
