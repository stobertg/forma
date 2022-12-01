import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, Icon, StageBlocks, StageBlockRow, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Icons"
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
          <StageBlocks columns="5">
            <StageBlockRow>
              <div><Icon size="l1" icon="user-plus" /></div>
              <div><Icon size="l1" icon="user" /></div>
              <div><Icon size="l1" icon="users" /></div>  
              <div><Icon size="l1" icon="visible" /></div>
              <div><Icon size="l1" icon="invisible" /></div>
              <div><Icon size="l1" icon="folder" /></div>
              <div><Icon size="l1" icon="clipboard" /></div>
              <div><Icon size="l1" icon="subscriptions" /></div>
            </StageBlockRow>

            <StageBlockRow>
              <div><Icon size="l1" icon="transactions" /></div>
              <div><Icon size="l1" icon="documents" /></div>
              <div><Icon size="l1" icon="search" /></div>
              <div><Icon size="l1" icon="notification" /></div>
              <div><Icon size="l1" icon="link" /></div>
              <div><Icon size="l1" icon="star" /></div>
              <div><Icon size="l1" icon="heart" /></div>
              <div><Icon size="l1" icon="store" /></div>
            </StageBlockRow>

            <StageBlockRow>
              <div><Icon size="l1" icon="lock" /></div>
              <div><Icon size="l1" icon="unlock" /></div>
              <div><Icon size="l1" icon="camera" /></div>
              <div><Icon size="l1" icon="calendar" /></div>
              <div><Icon size="l1" icon="help" /></div>
              <div><Icon size="l1" icon="circle" /></div>
              <div><Icon size="l1" icon="sync" /></div>
              <div><Icon size="l1" icon="timer" /></div>
            </StageBlockRow>

            <StageBlockRow>
              <div><Icon size="l1" icon="settings" /></div>
              <div><Icon size="l1" icon="trash" /></div>
              <div><Icon size="l1" icon="exit" /></div>
              <div><Icon size="l1" icon="dashboard" /></div>
              <div><Icon size="l1" icon="mobile" /></div>
              <div><Icon size="l1" icon="dots" /></div>
              <div><Icon size="l1" icon="web" /></div>
              <div><Icon size="l1" icon="location" /></div>
            </StageBlockRow>

            <StageBlockRow>
              <div><Icon size="l1" icon="map-1" /></div>
              <div><Icon size="l1" icon="map" /></div>
              <div><Icon size="l1" icon="wallet" /></div>
              <div><Icon size="l1" icon="credit-card" /></div>
              <div><Icon size="l1" icon="bank" /></div>
              <div><Icon size="l1" icon="money" /></div>
              <div><Icon size="l1" icon="email" /></div>
              <div><Icon size="l1" icon="edit" /></div>
            </StageBlockRow>

            <StageBlockRow>
              <div><Icon size="l1" icon="revision" /></div>
              <div><Icon size="l1" icon="config" /></div>
              <div><Icon size="l1" icon="custom-attributes" /></div>
              <div><Icon size="l1" icon="hamburger" /></div>
              <div><Icon size="l1" icon="filters" /></div>
              <div><Icon size="l1" icon="pause" /></div>
              <div><Icon size="l1" icon="back" /></div>
              <div><Icon size="l1" icon="upload" /></div>
            </StageBlockRow>

            <StageBlockRow>
              <div><Icon size="l1" icon="download" /></div>
              <div><Icon size="l1" icon="compare" /></div>
              <div><Icon size="l1" icon="arrow-left" /></div>
              <div><Icon size="l1" icon="arrow-right" /></div>
              <div><Icon size="l1" icon="arrow-top-right" /></div>
              <div><Icon size="l1" icon="chevron-left" /></div>
              <div><Icon size="l1" icon="chevron-right" /></div>
              <div><Icon size="l1" icon="chevron-down" /></div>
            </StageBlockRow>
            
            <StageBlockRow>
              <div><Icon size="l1" icon="chevron-up" /></div>
              <div><Icon size="l1" icon="caret-down" /></div>
              <div><Icon size="l1" icon="caret-right" /></div>
              <div><Icon size="l1" icon="caret-up" /></div>   
              <div><Icon size="l1" icon="close" /></div>
              <div><Icon size="l1" icon="cancel" /></div>
              <div><Icon size="l1" icon="plus" /></div>
              <div><Icon size="l1" icon="plus-circle" /></div>
            </StageBlockRow>

            <StageBlockRow>
              <div><Icon size="l1" icon="minus" /></div>
              <div><Icon size="l1" icon="minus-circle" /></div>
              <div><Icon size="l1" icon="check" /></div>
              <div><Icon size="l1" icon="check-circle" /></div>
              <div><Icon size="l1" icon="check-circle-filled" /></div>
              <div><Icon size="l1" icon="exclamation" /></div>
              <div><Icon size="l1" icon="megaphone" /></div>
              <div><Icon size="l1" icon="stethoscope" /></div>
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
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>onClick</CodeBlue>=<CodeBlue>&#123;</CodeBlue><CodeOrange>&#40;&#41;</CodeOrange><CodeBlue>&#61;&#62;</CodeBlue>&nbsp;<CodeOrange>function</CodeOrange>&nbsp;<CodeBlue>&#125;</CodeBlue>
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
