import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, Steps, StageBlocks, StageBlockRow, Code } from '@components'
import { CodeBlue, CodeGreen, CodePurple, CodeOrange, CodeYellow } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Steps"
          figmaLink="https://www.figma.com/file/mebc7LtV1mavpIfDdpte9S/3.-Forma---Components?node-id=3592%3A15901&t=0FxHBJQFavpFBZUB-1"
          storybookLink="https://ui.joinforma.com/?path=/story/layouts-stepper--default&globals=theme:Light"
          githubLink="/"
        >
          <p>
            This component is a design element that is used to display and highlight the steps or stages in a process or 
            workflow. It is typically used to show the progress of a task or to guide a user through a series of actions.
          </p>

          <p>
            Step components are often used in tutorials, onboarding experiences, or other types of interactive content where 
            it is important to convey the order and sequence of actions. They can be presented in various formats, such as a 
            numbered list, a series of dots or circles, or a horizontal bar with markers.
          </p>
        </ProjectInfo>
      </Block>

      <Block blockItemSpacing="l0">
        <BlockItem>
          <StageBlocks
            columns="2"
            titles={[
              { title: 'Vertical' },
              { title: 'Vertical w/o subtitle' },
            ]}
          >
            <StageBlockRow>
              <div>
                <Steps 
                  steps={[
                    { status: 'completed', title: 'Step one', subTitle: 'Summary if needed' },
                    { status: 'active', title: 'Step two', subTitle: 'Summary if needed' },
                    { status: 'disabled', title: 'Step three', subTitle: 'Very long summary if needed, which is two lines' },
                    { status: 'disabled', title: 'Step four', subTitle: 'Summary if needed' }
                  ]} 
                />
              </div>

              <div>
                <Steps 
                  steps={[
                    { status: 'completed', title: 'Step one' },
                    { status: 'active', title: 'Step two' },
                    { status: 'disabled', title: 'Step three' },
                    { status: 'disabled', title: 'Step four' }
                  ]} 
                />
              </div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <StageBlocks
            columns="1"
            titles={[
              { title: 'Horizontal' }
            ]}
          >
            <StageBlockRow>
              <div>
                <Steps 
                  direction="horizontal"
                  steps={[
                    { status: 'completed', title: 'Step one', subTitle: 'Summary if needed' },
                    { status: 'completed', title: 'Step two', subTitle: 'Summary if needed' },
                    { status: 'active', title: 'Step three', subTitle: 'Very long summary if needed, which is two lines' },
                    { status: 'disabled', title: 'Step four', subTitle: 'Summary if needed' },
                    { status: 'disabled', title: 'Step four', subTitle: 'Summary if needed' }
                  ]} 
                />
              </div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <StageBlocks
            columns="1"
            titles={[
              { title: 'Horizontal with scroll' }
            ]}
          >
            <StageBlockRow>
              <div>
                <Steps 
                  direction="horizontal"
                  steps={[
                    { status: 'completed', title: 'Step one', subTitle: 'Summary if needed' },
                    { status: 'completed', title: 'Step two', subTitle: 'Summary if needed' },
                    { status: 'active', title: 'Step three', subTitle: 'Very long summary if needed, which is two lines' },
                    { status: 'disabled', title: 'Step four', subTitle: 'Summary if needed' },
                    { status: 'disabled', title: 'Step five', subTitle: 'Summary if needed' },
                    { status: 'disabled', title: 'Step six', subTitle: 'Summary if needed' },
                    { status: 'disabled', title: 'Step seven', subTitle: 'Summary if needed' }
                  ]} 
                />
              </div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Steps</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>direction</CodeBlue>=<CodeOrange>&#34;horizontal&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>steps</CodeBlue>=<CodeBlue>&#123;</CodeBlue><CodeYellow>&#91;</CodeYellow>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>status:</CodeBlue>&nbsp;<CodeOrange>&apos;completed&apos;</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>&apos;Step one&apos;</CodeOrange>,&nbsp;&nbsp;<CodeBlue>subTitle:</CodeBlue>&nbsp;<CodeOrange>&apos;Summary if needed&apos;</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>status:</CodeBlue>&nbsp;<CodeOrange>&apos;active&apos;</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>&apos;Step two&apos;</CodeOrange>,&nbsp;&nbsp;<CodeBlue>subTitle:</CodeBlue>&nbsp;<CodeOrange>&apos;Summary if needed&apos;</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>status:</CodeBlue>&nbsp;<CodeOrange>&apos;disabled&apos;</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>&apos;Step three&apos;</CodeOrange>,&nbsp;&nbsp;<CodeBlue>subTitle:</CodeBlue>&nbsp;<CodeOrange>&apos;Summary if needed&apos;</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>status:</CodeBlue>&nbsp;<CodeOrange>&apos;disabled&apos;</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>&apos;Step four&apos;</CodeOrange>,&nbsp;&nbsp;<CodeBlue>subTitle:</CodeBlue>&nbsp;<CodeOrange>&apos;Summary if needed&apos;</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>
            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ Adding additional line items here will automate the number and line
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeYellow>&#93;</CodeYellow><CodeBlue>&#125;</CodeBlue>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
