import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, StageBlocks, StageBlockRow, ProjectInfo, List, Avatar, Accordion, Code } from '@components'
import { CodeBlue, CodeGreen, CodePurple, CodeOrange, CodeYellow } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Accordion"
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
            columns="3"
            titles={[
              { title: 'Accordion open' },
              { title: 'Default' },
              { title: 'With complex children' }
            ]}
          >
            <StageBlockRow align="top">
              <div>
                <Accordion 
                  accordionOpen={ 1 }
                  accordions={[
                    { id: 1, title: 'Accordion title one', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quos eius, aliquid maxime incidunt aspernatur aut esse?' },
                    { id: 2, title: 'Accordion title two', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quos eius, aliquid maxime incidunt aspernatur aut esse?' },
                    { id: 3, title: 'Accordion title three', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quos eius, aliquid maxime incidunt aspernatur aut esse?' }
                  ]}
                />
              </div>

              <div>
                <Accordion 
                  accordions={[
                    { id: 1, title: 'Accordion title one', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quos eius, aliquid maxime incidunt aspernatur aut esse?' },
                    { id: 2, title: 'Accordion title two', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quos eius, aliquid maxime incidunt aspernatur aut esse?' },
                    { id: 3, title: 'Accordion title three', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quos eius, aliquid maxime incidunt aspernatur aut esse?' }
                  ]}
                />
              </div>

              <div>
                <Accordion 
                  accordions={[
                    { 
                      id: 1, 
                      title: 'Accordion title one', 
                      content: 
                        <List spacing="l1">
                          <li><Avatar image="/people/christine.png" name="Christine Dailey" /></li>
                          <li><Avatar image="/people/chris.png" name="Chris Consroe" /></li>
                          <li><Avatar image="/people/jan.png" name="Jan Sundar" /></li>
                        </List>
                    },
                    { 
                      id: 2, 
                      title: 'Accordion title two', 
                      content: 
                        <List spacing="l1">
                          <li><Avatar image="/people/christine.png" name="Christine Dailey" /></li>
                          <li><Avatar image="/people/chris.png" name="Chris Consroe" /></li>
                          <li><Avatar image="/people/jan.png" name="Jan Sundar" /></li>
                        </List>
                    },
                    { 
                      id: 3, 
                      title: 'Accordion title three', 
                      content: 
                        <List spacing="l1">
                          <li><Avatar image="/people/christine.png" name="Christine Dailey" /></li>
                          <li><Avatar image="/people/chris.png" name="Chris Consroe" /></li>
                          <li><Avatar image="/people/jan.png" name="Jan Sundar" /></li>
                        </List>
                    }
                  ]}
                />
              </div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Accordion</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>accordionOpen</CodeBlue>=<CodeOrange><CodeBlue>&#123;</CodeBlue><CodeBlue>&nbsp;1&nbsp;</CodeBlue><CodeBlue>&#125;</CodeBlue></CodeOrange> / Allows for accordion to be opened by default
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>accordions</CodeBlue>=<CodeBlue>&#123;</CodeBlue><CodeYellow>&#91;</CodeYellow>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>id:</CodeBlue>&nbsp;<CodeOrange>1,</CodeOrange>&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>&apos;Accordion title one&apos;,</CodeOrange>&nbsp;<CodeBlue>content:</CodeBlue>&nbsp;<CodeOrange>&apos;This can be static text or a component&apos;</CodeOrange>&nbsp;&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>id:</CodeBlue>&nbsp;<CodeOrange>2,</CodeOrange>&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>&apos;Accordion title two&apos;,</CodeOrange>&nbsp;<CodeBlue>content:</CodeBlue>&nbsp;<CodeOrange>&apos;This can be static text or a component&apos;</CodeOrange>&nbsp;&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>id:</CodeBlue>&nbsp;<CodeOrange>3,</CodeOrange>&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>&apos;Accordion title three&apos;,</CodeOrange>&nbsp;<CodeBlue>content:</CodeBlue>&nbsp;<CodeOrange>&apos;This can be static text or a component&apos;</CodeOrange>&nbsp;&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeYellow>&#93;</CodeYellow><CodeBlue>&#125;</CodeBlue>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
