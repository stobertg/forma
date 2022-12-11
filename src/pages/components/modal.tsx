import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, StageBlocks, StageBlockRow, Modal, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange, CodePurple, CodeYellow } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Modal"
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
            columns="4"
            titles={[
              { title: 'Default' },
              { title: 'Small' },
              { title: 'Medium' },
              { title: 'Large' }
            ]}
          >

            <StageBlockRow>
              <div>
                <Modal 
                  triggerTitle="Modal"
                  title="Edit Profile"
                  descp={ <>Allow payment of <strong>$999.99</strong> to <strong>Enyinnaya Chinedu</strong> to be processed in payment batch #T0728, and unflag employee?</> }
                  actionButtonTitle="Modal"
                >
                  This is some content
                </Modal>
              </div>

              <div>
                <Modal 
                  triggerTitle="Modal"
                  triggerButtonVariant="primary"
                  title="Edit Profile"
                  descp={ <>Allow payment of <strong>$999.99</strong> to <strong>Enyinnaya Chinedu</strong> to be processed in payment batch #T0728, and unflag employee?</> }
                  actionButtonTitle="Modal"
                  width="small"
                >
                  This is some content
                </Modal>
              </div>

              <div>
                <Modal 
                  triggerTitle="Modal"
                  triggerButtonVariant="secondary"
                  title="Edit Profile"
                  descp="Allow payment of $999.99 to Enyinnaya Chinedu to be processed in payment batch #T0728, and unflag employee?"
                  actionButtonTitle="Modal"
                  width="medium"
                >
                  This is some content
                </Modal>
              </div>

              <div>
                <Modal 
                  triggerTitle="Modal"
                  triggerButtonVariant="danger"
                  title="Edit Profile"
                  descp="Allow payment of $999.99 to Enyinnaya Chinedu to be processed in payment batch #T0728, and unflag employee?"
                  actionButtonTitle="Modal"
                  width="large"
                >
                  This is some content
                </Modal>
              </div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Tabs</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>tabSize</CodeBlue>=<CodeOrange>"tiny" | "small"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>defaultTab</CodeBlue>=<CodeBlue>&#123;</CodeBlue>&nbsp;<CodePurple>2</CodePurple>&nbsp;<CodeBlue>&#125;</CodeBlue>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>triggers</CodeBlue>=<CodeBlue>&#123;</CodeBlue><CodeYellow>&#91;</CodeYellow>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>'Tab One'</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>'Tab Two'</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>'Tab Three'</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>'Tab Four'</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeYellow>&#93;</CodeYellow><CodeBlue>&#125;</CodeBlue>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>tabContent</CodeBlue>=<CodeBlue>&#123;</CodeBlue><CodeYellow>&#91;</CodeYellow>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>'This is the content for tab 1'</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>'This is the content for tab 2'</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>'This is the content for tab 3'</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>'This is the content for tab 4'</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeYellow>&#93;</CodeYellow><CodeBlue>&#125;</CodeBlue>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
