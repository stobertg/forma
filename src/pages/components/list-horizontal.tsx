import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, StageBlocks, StageBlockRow, StageBlockColumn, List, Code, Avatar } from '@components'
import { CodeBlue, CodeGreen, CodePurple, CodeYellow, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="List horizontal"
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
            rows="2"
            titles={[
              { title: 'Default' },
              { title: 'With icon' }
            ]}
          >
            <StageBlockColumn>
              <div>
                <List 
                  direction="horizontal"
                  spacing="l3r"
                  listItems={[
                    { title: 'List item one' },
                    { title: 'List item two' },
                    { title: 'List item three' },
                    { title: 'List item four' },
                    { title: 'List item five' }
                  ]}
                />
              </div>

              <div>
                <List 
                  direction="horizontal"
                  spacing="l3r"
                  listItems={[
                    { icon: 'documents', title: 'List item one' },
                    { icon: 'transactions', title: 'List item two' },
                    { icon: 'folder', title: 'List item three' },
                    { icon: 'store', title: 'List item four' },
                    { icon: 'wallet', title: 'List item five' }
                  ]}
                />
              </div>
            </StageBlockColumn>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>List</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>spacing</CodeBlue>=<CodeOrange>"l0r" | "l1r" | "l2r"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>decoration</CodeBlue>=<CodeOrange>"dividers"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>listItems</CodeBlue>=<CodeBlue>&#123;</CodeBlue><CodeYellow>&#91;</CodeYellow>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>icon:</CodeBlue>&nbsp;<CodeOrange>'documents'</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>'List item one'</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>icon:</CodeBlue>&nbsp;<CodeOrange>'transactions'</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>'List item two'</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>icon:</CodeBlue>&nbsp;<CodeOrange>'folder'</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>'List item three'</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>icon:</CodeBlue>&nbsp;<CodeOrange>'store'</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>'List item four'</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>icon:</CodeBlue>&nbsp;<CodeOrange>'wallet'</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>'List item five'</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeYellow>&#93;</CodeYellow><CodeBlue>&#125;</CodeBlue>
            <br/>&#47;&gt;

            <br/><br/>// If the default list doesn't provide the need, we use the custom format for more complex cases
            <br/>// The attributes still remain the same, but custom list removes the need for "listItem"

            <br/><br/>&lt;<CodeGreen>List</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>spacing</CodeBlue>=<CodeOrange>"l0r" | "l1r" | "l2r"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>decoration</CodeBlue>=<CodeOrange>"dividers"</CodeOrange>
            <br/>&gt;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<CodeGreen>li</CodeGreen>&gt;<CodePurple>&#123;</CodePurple>&nbsp;&nbsp;<CodeBlue>children</CodeBlue>&nbsp;&nbsp;<CodePurple>&#125;</CodePurple>&lt;&#47;<CodeGreen>li</CodeGreen>&gt;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<CodeGreen>li</CodeGreen>&gt;<CodePurple>&#123;</CodePurple>&nbsp;&nbsp;<CodeBlue>children</CodeBlue>&nbsp;&nbsp;<CodePurple>&#125;</CodePurple>&lt;&#47;<CodeGreen>li</CodeGreen>&gt;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<CodeGreen>li</CodeGreen>&gt;<CodePurple>&#123;</CodePurple>&nbsp;&nbsp;<CodeBlue>children</CodeBlue>&nbsp;&nbsp;<CodePurple>&#125;</CodePurple>&lt;&#47;<CodeGreen>li</CodeGreen>&gt;
            <br/>&lt;<CodeGreen>List</CodeGreen>&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page