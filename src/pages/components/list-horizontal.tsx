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
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>direction</CodeBlue>=<CodeOrange>&#34;horizontal&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>spacing</CodeBlue>=<CodeOrange>&#34;l0r&#34; | &#34;l1r&#34; | &#34;l2r&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>listItems</CodeBlue>=<CodeBlue>&#123;</CodeBlue><CodeYellow>&#91;</CodeYellow>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>icon:</CodeBlue>&nbsp;<CodeOrange>&apos;documents&apos;</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>&apos;List item one&apos;</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>icon:</CodeBlue>&nbsp;<CodeOrange>&apos;transactions&apos;</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>&apos;List item two&apos;</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>icon:</CodeBlue>&nbsp;<CodeOrange>&apos;folder&apos;</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>&apos;List item three&apos;</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>icon:</CodeBlue>&nbsp;<CodeOrange>&apos;store&apos;</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>&apos;List item four&apos;</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>icon:</CodeBlue>&nbsp;<CodeOrange>&apos;wallet&apos;</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>&apos;List item five&apos;</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeYellow>&#93;</CodeYellow><CodeBlue>&#125;</CodeBlue>
            <br/>&#47;&gt;

            <br/><br/>!! If the default list doesn&apos;t provide the need, we use the custom format for more complex cases
            <br/>!! The attributes still remain the same, but custom list removes the need for &quot;listItem&quot;

            <br/><br/>&lt;<CodeGreen>List</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>direction</CodeBlue>=<CodeOrange>&#34;horizontal&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>spacing</CodeBlue>=<CodeOrange>&#34;l0r&#34; | &#34;l1r&#34; | &#34;l2r&#34;</CodeOrange>
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