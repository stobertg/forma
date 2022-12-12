import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, StageBlocks, StageBlockRow, Illustration, Tooltip, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Illustrations"
          figmaLink="https://www.figma.com/file/mebc7LtV1mavpIfDdpte9S/3.-Forma---Components?node-id=7261%3A11077&t=udzfpmo3qQyIp8z6-1"
          storybookLink="https://ui.joinforma.com/?path=/story/media-illustrations--illustrations&globals=theme:Light"
          googleDriveLink='https://drive.google.com/drive/u/1/folders/1Z0e618-b_rdPhJytGpY7dFSKi0GT7YDT'
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
          <StageBlocks columns="5">
            <StageBlockRow>
              <Tooltip tooltipText="account-childcare"><div><Illustration size="l1" image="/benefits/account-childcare.svg" /></div></Tooltip>
              <Tooltip tooltipText="account-commuter"><div><Illustration size="l1" image="/benefits/account-commuter.svg" /></div></Tooltip>
              <Tooltip tooltipText="account-custom"><div><Illustration size="l1" image="/benefits/account-custom.svg" /></div></Tooltip>
              <Tooltip tooltipText="account-family"><div><Illustration size="l1" image="/benefits/account-family.svg" /></div></Tooltip>
              <Tooltip tooltipText="account-food"><div><Illustration size="l1" image="/benefits/account-food.svg" /></div></Tooltip>
            </StageBlockRow>

            <StageBlockRow>
              <Tooltip tooltipText="account-fsa"><div><Illustration size="l1" image="/benefits/account-fsa.svg" /></div></Tooltip>
              <Tooltip tooltipText="account-healthcheck"><div><Illustration size="l1" image="/benefits/account-healthcheck.svg" /></div></Tooltip>
              <Tooltip tooltipText="account-hra"><div><Illustration size="l1" image="/benefits/account-hra.svg" /></div></Tooltip>
              <Tooltip tooltipText="account-hsa"><div><Illustration size="l1" image="/benefits/account-hsa.svg" /></div></Tooltip>
              <Tooltip tooltipText="account-learning"><div><Illustration size="l1" image="/benefits/account-learning.svg" /></div></Tooltip>
            </StageBlockRow>

            <StageBlockRow>
              <Tooltip tooltipText="account-lifestyle"><div><Illustration size="l1" image="/benefits/account-lifestyle.svg" /></div></Tooltip>
              <Tooltip tooltipText="account-mentalhealth"><div><Illustration size="l1" image="/benefits/account-mentalhealth.svg" /></div></Tooltip>
              <Tooltip tooltipText="account-parking"><div><Illustration size="l1" image="/benefits/account-parking.svg" /></div></Tooltip>
              <Tooltip tooltipText="account-pets"><div><Illustration size="l1" image="/benefits/account-pets.svg" /></div></Tooltip>
              <Tooltip tooltipText="account-recognition"><div><Illustration size="l1" image="/benefits/account-recognition.svg" /></div></Tooltip>
            </StageBlockRow>

            <StageBlockRow>
              <Tooltip tooltipText="account-teambuilding"><div><Illustration size="l1" image="/benefits/account-teambuilding.svg" /></div></Tooltip>
              <Tooltip tooltipText="account-transit"><div><Illustration size="l1" image="/benefits/account-transit.svg" /></div></Tooltip>
              <Tooltip tooltipText="account-vision"><div><Illustration size="l1" image="/benefits/account-vision.svg" /></div></Tooltip>
              <Tooltip tooltipText="account-wellness"><div><Illustration size="l1" image="/benefits/account-wellness.svg" /></div></Tooltip>
              <Tooltip tooltipText="account-workathome"><div><Illustration size="l1" image="/benefits/account-workathome.svg" /></div></Tooltip>
            </StageBlockRow>

            <StageBlockRow>
              <Tooltip tooltipText="account-teambuilding"><div><Illustration size="l1" image="/girl-waving.png" /></div></Tooltip>
              <Tooltip tooltipText="account-transit"><div><Illustration size="l1" image="/snap.png" /></div></Tooltip>
              <Tooltip tooltipText="account-vision"><div><Illustration size="l1" image="/why-switch.png" /></div></Tooltip>
              <Tooltip tooltipText="account-vision"><div><Illustration size="l1" image="/advantages-platform.png" /></div></Tooltip>
              <Tooltip tooltipText="account-vision"><div><Illustration size="l1" image="/advantages-global.png" /></div></Tooltip>
            </StageBlockRow>

            <StageBlockRow>
              <Tooltip tooltipText="account-teambuilding"><div><Illustration size="l1" image="/cv-never-settle.png" /></div></Tooltip>
              <Tooltip tooltipText="account-transit"><div><Illustration size="l1" image="/cv-own-your-work.png" /></div></Tooltip>
              <Tooltip tooltipText="account-vision"><div><Illustration size="l1" image="/cv-got-you.png" /></div></Tooltip>
              <Tooltip tooltipText="account-vision"><div><Illustration size="l1" image="/cv-raise-the-bar.png" /></div></Tooltip>
              <Tooltip tooltipText="account-vision"><div><Illustration size="l1" image="/people.png" /></div></Tooltip>
            </StageBlockRow>

            <StageBlockRow>
              <Tooltip tooltipText="account-teambuilding"><div><Illustration size="l1" image="/member-feedback-1.png" /></div></Tooltip>
              <Tooltip tooltipText="account-transit"><div><Illustration size="l1" image="/member-feedback-2.png" /></div></Tooltip>
              <Tooltip tooltipText="account-vision"><div><Illustration size="l1" image="/signin-employers.png" /></div></Tooltip>
              <Tooltip tooltipText="account-vision"><div><Illustration size="l1" image="/signin-employees.png" /></div></Tooltip>
              <Tooltip tooltipText="account-vision"><div><Illustration size="l1" image="/why-switch-admin.png" /></div></Tooltip>
            </StageBlockRow>

            <StageBlockRow>
              <Tooltip tooltipText="account-teambuilding"><div><Illustration size="l1" image="/why-switch-competition.png" /></div></Tooltip>
              <Tooltip tooltipText="account-transit"><div><Illustration size="l1" image="/why-forma.png" /></div></Tooltip>
              <div></div>
              <div></div>
              <div></div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Icon</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>size</CodeBlue>=<CodeOrange>&#34;l0&#34; | &#34;l1&#34; | &#34;l2&#34; | &#34;l3&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>icon</CodeBlue>=<CodeOrange>&#34;icon-name&#34;</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
