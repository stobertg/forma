import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, StageBlocks, StageBlockColumn, ProjectInfo, Code, Snackbar } from '@components'
import { SnackbarBase } from '../../components/Snackbar/Parts/SnackbarBase'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Snackbar"
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
            rows="1"
            titles={[
              { title: 'Interaction' },
            ]}
          >
            <StageBlockColumn>
              <div>
                <Snackbar 
                  triggerTitle="Show snackbar"
                  status="success" 
                  title="851 Cypress St, Monterey CA 93940 was saved as your primary residential address" 
                />
              </div>
            </StageBlockColumn>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <StageBlocks 
            rows="2"
            titles={[
              { title: 'Default' },
              { title: 'Success' },
              { title: 'Warning' },
              { title: 'Error' },
              { title: 'Download' },
              { title: 'Two lines' }
            ]}
          >
            <StageBlockColumn>
              <div><SnackbarBase title="Card number copied to clipboard" /></div>
              <div><SnackbarBase status="success" title="Card number copied to clipboard" /></div>
              <div><SnackbarBase status="warning" title="Connection timeout" /></div>
              <div><SnackbarBase status="error" title="Your bank account was removed" /></div>
              <div><SnackbarBase status="download" title="Downloading PDF &apos;Zoom_FTE-HSA_2022&apos;" /></div>
              <div><SnackbarBase status="success" title="851 Cypress St, Monterey CA 93940 was saved as your primary residential address" /></div>
            </StageBlockColumn>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <StageBlocks 
            rows="2"
            titles={[
              { title: 'Undo' },
              { title: 'Try again' },
              { title: 'Dismiss' }
            ]}
          >
            <StageBlockColumn>
              <div>
                <SnackbarBase 
                  status="error" 
                  title="Your bank account was removed" 
                  actionTitle="Dismiss" 
                />
              </div>
              <div><SnackbarBase status="warning" title="We couldn't upload your image" actionTitle="Try again" /></div>
              <div><SnackbarBase status="success" title="Your claim was submitted" actionTitle="Undo" /></div>
            </StageBlockColumn>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Snackbar</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>status</CodeBlue>=<CodeOrange>&#34;success&#34; | &#34;warning&#34; | &#34;error&#34; | &#34;download&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>title</CodeBlue>=<CodeOrange>&#34;Card number copied to clipboard&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>actionTitle</CodeBlue>=<CodeOrange>&#34;Dismiss&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>onClick</CodeBlue>=<CodeBlue>&#123;</CodeBlue><CodeOrange>&#40;&#41;</CodeOrange><CodeBlue>&#61;&#62;</CodeBlue>&nbsp;<CodeOrange>function</CodeOrange>&nbsp;<CodeBlue>&#125;</CodeBlue>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
