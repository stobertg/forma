import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, Tooltip, StageBlocks, StageBlockRow, List, Code, Avatar } from '@components'
import { CodeBlue, CodeGreen, CodePurple, CodeYellow, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="List default"
          figmaLink="https://www.figma.com/file/mebc7LtV1mavpIfDdpte9S/3.-Forma---Components?node-id=7361%3A11097"
          storybookLink="/"
          githubLink="/"
        >
          <p>
            From a development perspective, the list component is a important foundational component used throughout the site. 
            The list component not only supports numbers, bullets, and alphabetical rendering, but also every other instance 
            of list formats.
          </p>
        </ProjectInfo>
      </Block>

      <Block blockItemSpacing="l0">
        <BlockItem>
          <StageBlocks 
            columns="4"
            titles={[
              { title: 'Default' },
              { title: 'Numbered' },
              { title: 'Bulleted' },
              { title: 'Alphabetical' }
            ]}
          >
            <StageBlockRow>
              <div>
                <List 
                  spacing="l0"
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
                  listStyle="numbered"
                  spacing="l0"
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
                  listStyle="bulleted"
                  spacing="l0"
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
                  listStyle="alphabetical"
                  spacing="l0"
                  listItems={[
                    { title: 'List item one' },
                    { title: 'List item two' },
                    { title: 'List item three' },
                    { title: 'List item four' },
                    { title: 'List item five' }
                  ]}
                />
              </div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <StageBlocks 
            columns="4"
            titles={[
              { title: 'With icons' },
              { title: 'With dividers' },
              { title: 'With icon & dividers' },
              { title: 'Custom' }
            ]}
          >
            <StageBlockRow>
              <div>
                <List 
                  spacing="l1"
                  listItems={[
                    { icon: 'documents', title: 'List item one' },
                    { icon: 'transactions', title: 'List item two' },
                    { icon: 'folder', title: 'List item three' },
                    { icon: 'store', title: 'List item four' },
                    { icon: 'wallet', title: 'List item five' }
                  ]}
                />
              </div>

              <div>
                <List 
                  decoration="dividers"
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
                  spacing="l1"
                  decoration="dividers"
                  listItems={[
                    { icon: 'documents', title: 'List item one' },
                    { icon: 'transactions', title: 'List item two' },
                    { icon: 'folder', title: 'List item three' },
                    { icon: 'store', title: 'List item four' },
                    { icon: 'wallet', title: 'List item five' }
                  ]}
                />
              </div>

              <div>
                <List spacing="l1">
                  <li>
                    <Avatar
                      image="/people/christine.png"
                      name="Christine Daley"
                    />
                  </li>

                  <li>
                    <Avatar
                      firstNameOnly
                      image="/people/christine.png"
                      name="Christine"
                    />
                  </li>

                  <li>
                    <Avatar
                      image="/people/christine.png"
                      name="Christine Daley"
                    />
                  </li>
                </List>
              </div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <StageBlocks 
            columns="4"
            titles={[
              { title: 'Spacing default' },
              { title: 'Spacing l0' },
              { title: 'Spacing l1' },
              { title: 'Spacing l2' }
            ]}
          >
            <StageBlockRow>
              <div>
                <List 
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
                  spacing="l0"
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
                  spacing="l1"
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
                  spacing="l2"
                  listItems={[
                    { title: 'List item one' },
                    { title: 'List item two' },
                    { title: 'List item three' },
                    { title: 'List item four' },
                    { title: 'List item five' }
                  ]}
                />
              </div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>List</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>listStyle</CodeBlue>=<CodeOrange>&#34;bulleted&#34; | &#34;numbered&#34; | &#34;alphabetical&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>spacing</CodeBlue>=<CodeOrange>&#34;l0&#34; | &#34;l1&#34; | &#34;l2&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>decoration</CodeBlue>=<CodeOrange>&#34;dividers&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>listItems</CodeBlue>=<CodeBlue>&#123;</CodeBlue><CodeYellow>&#91;</CodeYellow>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>icon:</CodeBlue>&nbsp;<CodeOrange>&apos;documents&apos;</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>&apos;List item one&apos;</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>icon:</CodeBlue>&nbsp;<CodeOrange>&apos;transactions&apos;</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>&apos;List item two&apos;</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>icon:</CodeBlue>&nbsp;<CodeOrange>&apos;folder&apos;</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>&apos;List item three&apos;</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>icon:</CodeBlue>&nbsp;<CodeOrange>&apos;store&apos;</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>&apos;List item four&apos;</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>icon:</CodeBlue>&nbsp;<CodeOrange>&apos;wallet&apos;</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>&apos;List item five&apos;</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeYellow>&#93;</CodeYellow><CodeBlue>&#125;</CodeBlue>
            <br/>&#47;&gt;

            <br/><br/>// If the default list doesn't provide the need, we use the custom format for more complex cases
            <br/>// The attributes still remain the same, but custom list removes the need for "listItem"

            <br/><br/>&lt;<CodeGreen>List</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>listStyle</CodeBlue>=<CodeOrange>&#34;bulleted&#34; | &#34;numbered&#34; | &#34;alphabetical&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>spacing</CodeBlue>=<CodeOrange>&#34;l0&#34; | &#34;l1&#34; | &#34;l2&#34;</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>decoration</CodeBlue>=<CodeOrange>&#34;dividers&#34;</CodeOrange>
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