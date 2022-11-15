import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, SiteHeader, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

import { styled } from '@theme'
import { Illustration, Heading } from '@components'

const LinksWrap = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 40,
  position: 'relative',
  width: '100%',

})

const LinkWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

  '> *:not(:last-child)': {
    marginRight: 12
  }
})

const LinkText = styled('div', {

  '> *:not(:last-child)': {
    marginBottom: 4
  }
})

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Site Header"
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
          {/* <SiteHeader /> */}

          <LinksWrap>
            <LinkWrap>
              <Illustration size="l0" image="account-teambuilding" />
              <LinkText>
                <Heading size="l2" bold title="Forma Research" />
                <Heading size="l1" color="gray" title="Lorem ipsum sit dolor emit" />
              </LinkText>
            </LinkWrap>

            <LinkWrap>
              <Illustration size="l0" image="account-workathome" />
              <LinkText>
                <Heading size="l2" bold title="Events & Webinars" />
                <Heading size="l1" color="gray" title="Lorem ipsum sit dolor" />
              </LinkText>
            </LinkWrap>

            <LinkWrap>
              <Illustration size="l0" image="account-learning" />
              <LinkText>
                <Heading size="l2" bold title="Blog" />
                <Heading size="l1" color="gray" title="Lorem ipsum sit dolor" />
              </LinkText>
            </LinkWrap>
          </LinksWrap>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>BenefitCard</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>illustration</CodeBlue>=<CodeOrange>"account-custom"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>title</CodeBlue>=<CodeOrange>"Benefit Program Name"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>chipTitle</CodeBlue>=<CodeOrange>"Program Status"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>text</CodeBlue>=<CodeOrange>"Add one to three lines of text to describe the purpose and usage of this benefit program."</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
