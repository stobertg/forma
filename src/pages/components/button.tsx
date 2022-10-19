import type { NextPage } from 'next'
import { styled } from '@theme'
import { SiteContainer, Block, BlockItem, ProjectInfo, Button, Heading, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const StageBlockTitles = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  width: '100%',
  marginBottom: 20,
  textAlign: 'center',

  '> *': {
    width: '20%'
  }
})

const StageBlocks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  border: '1px solid $border',
  borderRadius: '$r1',

  '> *': {
    minHeight: 100,
    '&:not(:last-child)': { borderBottom: '1px solid $border' }
  }
})

const StageBlockRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  width: '100%',

  '> *': {
    width: '20%',
    minHeight: 100,
    '&:not(:last-child)': { borderRight: '1px solid $border' }
  }
})

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Button"
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
          <StageBlockTitles>
            <Heading bold size="l0" color="gray" title="Default" />
            <Heading bold size="l0" color="gray" title="Primary" />
            <Heading bold size="l0" color="gray" title="Secondary" />
            <Heading bold size="l0" color="gray" title="Danger" />
            <Heading bold size="l0" color="gray" title="Disabled" />
          </StageBlockTitles>

          <StageBlocks>
            <StageBlockRow>
              <Button title="Action" />
              <Button variant="primary" title="Action" />
              <Button variant="secondary" title="Action" />
              <Button variant="danger" title="Action" />
              <Button variant="disabled" title="Action" />
            </StageBlockRow>

            <StageBlockRow>
              <Button icon="config" title="Action" />
              <Button icon="plus-circle" variant="primary" title="Action" />
              <Button icon="plus-circle" variant="secondary" title="Action" />
              <Button icon="trash" variant="danger" title="Action" />
              <Button icon="download" variant="disabled" title="Action" />
            </StageBlockRow>

            <StageBlockRow>
              <Button iconPlacement="right" icon="config" title="Action" />
              <Button iconPlacement="right" icon="plus-circle" variant="primary" title="Action" />
              <Button iconPlacement="right" icon="plus-circle" variant="secondary" title="Action" />
              <Button iconPlacement="right" icon="trash" variant="danger" title="Action" />
              <Button iconPlacement="right" icon="download" variant="disabled" title="Action" />
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Button</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>title</CodeBlue>=<CodeOrange>"Action"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>icon</CodeBlue>=<CodeOrange>"icon-name"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>iconPlacement</CodeBlue>=<CodeOrange>"right"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>variant</CodeBlue>=<CodeOrange>"primary" | "secondary" | "danger" | "disabled"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>onClick</CodeBlue>=<CodeOrange>""</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>pageLink</CodeBlue>=<CodeOrange>"/path-to-internal-page"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>href</CodeBlue>=<CodeOrange>"https://url-to-external-site"</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
