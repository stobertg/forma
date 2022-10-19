import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, List, ProjectInfo, Chip, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Chip"
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
          <List spacing="l1">
            <li><Chip text="allCaps" title="Save 10%" /></li>
            <li><Chip size="small" title="Save 10%" /></li>
            <li><Chip size="small" text="allCaps" title="Save 10%" /></li>
            <li><Chip bgColor="gray" title="Program Status" /></li>
            <li><Chip size="small" bgColor="gray" title="Program Status" /></li>
            <li><Chip size="small" bgColor="gray" text="allCaps" title="Program Status" /></li>
          </List>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Chip</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>size</CodeBlue>=<CodeOrange>"small"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>bgColor</CodeBlue>=<CodeOrange>"gray" | "orange"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>text</CodeBlue>=<CodeOrange>"allCaps"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>title</CodeBlue>=<CodeOrange>"Program Status"</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page