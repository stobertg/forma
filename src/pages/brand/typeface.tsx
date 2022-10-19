import type { NextPage } from 'next'
import { SiteContainer, Block, ProjectInfo, Heading } from '@components'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Typeface - Labil Grotesk"
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
        <Heading bold size="l7" title="ABCDEFGHIJKLMNOPQRSTUVWXYZ" />
        <Heading bold size="l7" title="abcdefghijklmnopqrstuvwxyz" />
        <Heading bold size="l7" title="1234567890" />
      </Block>

      <Block blockItemSpacing="l0">
        <Heading size="l7" title="ABCDEFGHIJKLMNOPQRSTUVWXYZ" />
        <Heading size="l7" title="abcdefghijklmnopqrstuvwxyz" />
        <Heading size="l7" title="1234567890" />
      </Block>
    </SiteContainer>

  )
}

export default Page
