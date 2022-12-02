import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, StageBlocks, StageBlockRow, Icon, Tooltip, Code } from '@components'
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
              <Tooltip tooltipText="user-plus"><div><Icon size="l1" icon="user-plus" /></div></Tooltip>
              <Tooltip tooltipText="user"><div><Icon size="l1" icon="user" /></div></Tooltip>
              <Tooltip tooltipText="users"><div><Icon size="l1" icon="users" /></div></Tooltip>  
              <Tooltip tooltipText="visible"><div><Icon size="l1" icon="visible" /></div></Tooltip>
              <Tooltip tooltipText="invisible"><div><Icon size="l1" icon="invisible" /></div></Tooltip>
              <Tooltip tooltipText="folder"><div><Icon size="l1" icon="folder" /></div></Tooltip>
              <Tooltip tooltipText="clipboard"><div><Icon size="l1" icon="clipboard" /></div></Tooltip>
              <Tooltip tooltipText="subscriptions"><div><Icon size="l1" icon="subscriptions" /></div></Tooltip>
            </StageBlockRow>

            <StageBlockRow>
              <Tooltip tooltipText="transactions"><div><Icon size="l1" icon="transactions" /></div></Tooltip>
              <Tooltip tooltipText="documents"><div><Icon size="l1" icon="documents" /></div></Tooltip>
              <Tooltip tooltipText="search"><div><Icon size="l1" icon="search" /></div></Tooltip>
              <Tooltip tooltipText="notification"><div><Icon size="l1" icon="notification" /></div></Tooltip>
              <Tooltip tooltipText="link"><div><Icon size="l1" icon="link" /></div></Tooltip>
              <Tooltip tooltipText="star"><div><Icon size="l1" icon="star" /></div></Tooltip>
              <Tooltip tooltipText="heart"><div><Icon size="l1" icon="heart" /></div></Tooltip>
              <Tooltip tooltipText="store"><div><Icon size="l1" icon="store" /></div></Tooltip>
            </StageBlockRow>

            <StageBlockRow>
              <Tooltip tooltipText="lock"><div><Icon size="l1" icon="lock" /></div></Tooltip>
              <Tooltip tooltipText="unlock"><div><Icon size="l1" icon="unlock" /></div></Tooltip>
              <Tooltip tooltipText="camera"><div><Icon size="l1" icon="camera" /></div></Tooltip>
              <Tooltip tooltipText="calendar"><div><Icon size="l1" icon="calendar" /></div></Tooltip>
              <Tooltip tooltipText="help"><div><Icon size="l1" icon="help" /></div></Tooltip>
              <Tooltip tooltipText="circle"><div><Icon size="l1" icon="circle" /></div></Tooltip>
              <Tooltip tooltipText="sync"><div><Icon size="l1" icon="sync" /></div></Tooltip>
              <Tooltip tooltipText="timer"><div><Icon size="l1" icon="timer" /></div></Tooltip>
            </StageBlockRow>

            <StageBlockRow>
              <Tooltip tooltipText="settings"><div><Icon size="l1" icon="settings" /></div></Tooltip>
              <Tooltip tooltipText="trash"><div><Icon size="l1" icon="trash" /></div></Tooltip>
              <Tooltip tooltipText="exit"><div><Icon size="l1" icon="exit" /></div></Tooltip>
              <Tooltip tooltipText="dashboard"><div><Icon size="l1" icon="dashboard" /></div></Tooltip>
              <Tooltip tooltipText="mobile"><div><Icon size="l1" icon="mobile" /></div></Tooltip>
              <Tooltip tooltipText="dots"><div><Icon size="l1" icon="dots" /></div></Tooltip>
              <Tooltip tooltipText="web"><div><Icon size="l1" icon="web" /></div></Tooltip>
              <Tooltip tooltipText="location"><div><Icon size="l1" icon="location" /></div></Tooltip>
            </StageBlockRow>

            <StageBlockRow>
              <Tooltip tooltipText="map-1"><div><Icon size="l1" icon="map-1" /></div></Tooltip>
              <Tooltip tooltipText="map"><div><Icon size="l1" icon="map" /></div></Tooltip>
              <Tooltip tooltipText="wallet"><div><Icon size="l1" icon="wallet" /></div></Tooltip>
              <Tooltip tooltipText="credit-card"><div><Icon size="l1" icon="credit-card" /></div></Tooltip>
              <Tooltip tooltipText="bank"><div><Icon size="l1" icon="bank" /></div></Tooltip>
              <Tooltip tooltipText="money"><div><Icon size="l1" icon="money" /></div></Tooltip>
              <Tooltip tooltipText="email"><div><Icon size="l1" icon="email" /></div></Tooltip>
              <Tooltip tooltipText="edit"><div><Icon size="l1" icon="edit" /></div></Tooltip>
            </StageBlockRow>

            <StageBlockRow>
              <Tooltip tooltipText="revision"><div><Icon size="l1" icon="revision" /></div></Tooltip>
              <Tooltip tooltipText="config"><div><Icon size="l1" icon="config" /></div></Tooltip>
              <Tooltip tooltipText="custom-attributes"><div><Icon size="l1" icon="custom-attributes" /></div></Tooltip>
              <Tooltip tooltipText="hamburger"><div><Icon size="l1" icon="hamburger" /></div></Tooltip>
              <Tooltip tooltipText="filters"><div><Icon size="l1" icon="filters" /></div></Tooltip>
              <Tooltip tooltipText="pause"><div><Icon size="l1" icon="pause" /></div></Tooltip>
              <Tooltip tooltipText="back"><div><Icon size="l1" icon="back" /></div></Tooltip>
              <Tooltip tooltipText="upload"><div><Icon size="l1" icon="upload" /></div></Tooltip>
            </StageBlockRow>

            <StageBlockRow>
              <Tooltip tooltipText="download"><div><Icon size="l1" icon="download" /></div></Tooltip>
              <Tooltip tooltipText="compare"><div><Icon size="l1" icon="compare" /></div></Tooltip>
              <Tooltip tooltipText="arrow-left"><div><Icon size="l1" icon="arrow-left" /></div></Tooltip>
              <Tooltip tooltipText="arrow-right"><div><Icon size="l1" icon="arrow-right" /></div></Tooltip>
              <Tooltip tooltipText="arrow-top-right"><div><Icon size="l1" icon="arrow-top-right" /></div></Tooltip>
              <Tooltip tooltipText="chevron-left"><div><Icon size="l1" icon="chevron-left" /></div></Tooltip>
              <Tooltip tooltipText="chevron-right"><div><Icon size="l1" icon="chevron-right" /></div></Tooltip>
              <Tooltip tooltipText="chevron-down"><div><Icon size="l1" icon="chevron-down" /></div></Tooltip>
            </StageBlockRow>
            
            <StageBlockRow>
              <Tooltip tooltipText="chevron-up"><div><Icon size="l1" icon="chevron-up" /></div></Tooltip>
              <Tooltip tooltipText="caret-down"><div><Icon size="l1" icon="caret-down" /></div></Tooltip>
              <Tooltip tooltipText="caret-right"><div><Icon size="l1" icon="caret-right" /></div></Tooltip>
              <Tooltip tooltipText="caret-up"><div><Icon size="l1" icon="caret-up" /></div></Tooltip>   
              <Tooltip tooltipText="close"><div><Icon size="l1" icon="close" /></div></Tooltip>
              <Tooltip tooltipText="cancel"><div><Icon size="l1" icon="cancel" /></div></Tooltip>
              <Tooltip tooltipText="plus"><div><Icon size="l1" icon="plus" /></div></Tooltip>
              <Tooltip tooltipText="plus-circle"><div><Icon size="l1" icon="plus-circle" /></div></Tooltip>
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
            &lt;<CodeGreen>Icon</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>size</CodeBlue>=<CodeOrange>"l0" | "l1" | "l2" | "l3"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>icon</CodeBlue>=<CodeOrange>"icon-name"</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
