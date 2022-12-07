import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, StageBlocks, StageBlockRow, ProjectInfo, Card, Code } from '@components'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Card Templates"
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
            columns="3"
            titles={[
              { title: 'Default' },
              { title: 'All Caps' },
              { title: 'Small' },
            ]}
          >
            <StageBlockRow align="top">
              <div>
                <Card 
                  bgColor="white200" 
                  title="Nothing out of pocket"
                  subTitle="Employees can choose how to use their benefits and spend anywhere Visa is accepted."
                  image="/illustration/girl-waving.png"
                />
              </div>

              <div>
                <Card 
                  bgColor="cyan100"
                  title="Automated approval"
                  subTitle="Most eligible payments smartly auto-adjudicate without receipts. For corner cases when a receipt is required, employees can quickly submit through desktop or mobile." 
                  image="/illustration/snap.png"
                />
              </div>

              <div>
                <Card 
                  bgColor="pink100" 
                  title="Virtual and physical cards"
                  subTitle="Employees can have a Forma Card mailed to them, use a virtual card online and with mobile wallets, or both."
                />
              </div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Card</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>title</CodeBlue>=<CodeOrange>"Nothing out of pocket"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>subTitle</CodeBlue>=<CodeOrange>"Employees can choose how to use their benefits and spend anywhere Visa is accepted."</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>image</CodeBlue>=<CodeOrange>"/path-to-image"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>bgColor</CodeBlue>=<CodeOrange>'white200' | 'pink100' | 'cyan 100'</CodeOrange>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
