import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, StageBlocks, StageBlockRow, Dropdown, Avatar, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange, CodePurple, CodeYellow } from '@codeColors'
import { DropdownBase } from 'src/components/Dropdown/Parts'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Menu"
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
            columns="3"
            titles={[
              { title: 'Default' },
              { title: 'With Icons' },
              { title: 'With Categories' }
            ]}
          >
            <StageBlockRow align="top">
              <div>
                <DropdownBase 
                  listItems={[
                    { pageLink: '/', title: 'List item 1' },
                    { pageLink: '/', title: 'List item 2' },
                    { pageLink: '/', title: 'List item 3' },
                    { pageLink: '/', title: 'List item 4' },
                    { pageLink: '/', title: 'List item 5' },
                  ]}
                />
              </div>

              <div>
                <DropdownBase 
                  listItems={[
                    { pageLink: '/', icon: 'settings', title: 'Settings' },
                    { pageLink: '/', icon: 'timer', title: 'History' },
                    { pageLink: '/', icon: 'documents', title: 'Program Policy' },
                    { pageLink: '/', icon: 'help', title: 'Help & Support' },
                    { pageLink: '/', icon: 'exit', title: 'Sign Out' },
                  ]}
                />
              </div>

              <div>
                <DropdownBase 
                  menu={[
                    { pageLink: '/', icon: 'store', title: 'Store' },
                    { pageLink: '/', icon: 'wallet', title: 'Account' },
                    { pageLink: '/', icon: 'transactions', title: 'Claim' }
                  ]}

                  listItems={[
                    { pageLink: '/', icon: 'settings', title: 'Settings' },
                    { pageLink: '/', icon: 'timer', title: 'History' },
                    { pageLink: '/', icon: 'documents', title: 'Program Policy' },
                    { pageLink: '/', icon: 'help', title: 'Help & Support' },
                    { pageLink: '/', icon: 'exit', title: 'Sign Out' },
                  ]}
                />
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
