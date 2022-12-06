import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, StageBlocks, StageBlockRow, ProjectInfo, Breadcrumbs, Code } from '@components'
import { CodeBlue, CodeGreen, CodePurple, CodeYellow, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Bredcrumbs"
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
            columns="2"
            titles={[
              { title: 'Default' },
              { title: 'Divider slashes' }
            ]}
          >
            <StageBlockRow>
              <div>
                <Breadcrumbs 
                  links={[
                    { pageLink: '/components/banner', title: 'Link' },
                    { pageLink: '/', title: 'Link' },
                    { pageLink: '/components/button', title: 'Link' }
                  ]}
                /> 
              </div>

              <div>
                <Breadcrumbs 
                  divider="slashes"
                  links={[
                    { pageLink: '/components/banner', title: 'Link' },
                    { pageLink: '/', title: 'Link' },
                    { pageLink: '/components/button', title: 'Link' }
                  ]}
                /> 
              </div>
            </StageBlockRow>
            <StageBlockRow>
              <div>
                <Breadcrumbs 
                  links={[
                    { icon:'star', pageLink: '/components/banner', title: 'Link' },
                    { icon:'star', pageLink: '/', title: 'Link' },
                    { icon:'star', pageLink: '/components/button', title: 'Link' }
                  ]}
                /> 
              </div>

              <div>
                <Breadcrumbs 
                  divider="slashes"
                  links={[
                    { icon:'star', pageLink: '/components/banner', title: 'Link' },
                    { icon:'star', pageLink: '/', title: 'Link' },
                    { icon:'star', pageLink: '/components/button', title: 'Link' }
                  ]}
                /> 
              </div>
            </StageBlockRow>

            <StageBlockRow>
              <div>
                <Breadcrumbs 
                  variant="truncated"
                  links={[
                    { pageLink: '/components/banner', title: 'Link' },
                    { pageLink: '/', title: 'Link' },
                    { pageLink: '/components/button', title: 'Link' },
                    { pageLink: '/components/button', title: 'Link' },
                    { pageLink: '/components/button', title: 'Link' }
                  ]}
                /> 
              </div>

              <div>
                <Breadcrumbs 
                  variant="truncated"
                  divider="slashes"
                  links={[
                    { pageLink: '/components/banner', title: 'Link' },
                    { pageLink: '/', title: 'Link' },
                    { pageLink: '/components/button', title: 'Link' }
                  ]}
                /> 
              </div>
            </StageBlockRow>

            <StageBlockRow>
              <div>
                <Breadcrumbs 
                  variant="truncated"
                  links={[
                    { icon:'star', pageLink: '/components/banner', title: 'Link' },
                    { icon:'star', pageLink: '/', title: 'Link' },
                    { icon:'star', pageLink: '/components/button', title: 'Link' }
                  ]}
                /> 
              </div>

              <div>
                <Breadcrumbs 
                  variant="truncated"
                  divider="slashes"
                  links={[
                    { icon:'star', pageLink: '/components/banner', title: 'Link' },
                    { icon:'star', pageLink: '/', title: 'Link' },
                    { icon:'star', pageLink: '/components/button', title: 'Link' }
                  ]}
                /> 
              </div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>

        <BlockItem>
          <Code>
            &lt;<CodeGreen>Breadcrumbs</CodeGreen>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>variant</CodeBlue>=<CodeOrange>"truncated"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>divider</CodeBlue>=<CodeOrange>"slashes"</CodeOrange>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeBlue>links</CodeBlue>=<CodeBlue>&#123;</CodeBlue><CodeYellow>&#91;</CodeYellow>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>pageLink:</CodeBlue>&nbsp;<CodeOrange>'/path-to-page'</CodeOrange>,&nbsp;&nbsp;<CodeBlue>icon:</CodeBlue>&nbsp;<CodeOrange>'star'</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>'Link'</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>pageLink:</CodeBlue>&nbsp;<CodeOrange>'/path-to-page'</CodeOrange>,&nbsp;&nbsp;<CodeBlue>icon:</CodeBlue>&nbsp;<CodeOrange>'star'</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>'Link'</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>,
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodePurple>&#123;</CodePurple>&nbsp;<CodeBlue>pageLink:</CodeBlue>&nbsp;<CodeOrange>'/path-to-page'</CodeOrange>,&nbsp;&nbsp;<CodeBlue>icon:</CodeBlue>&nbsp;<CodeOrange>'star'</CodeOrange>,&nbsp;&nbsp;<CodeBlue>title:</CodeBlue>&nbsp;<CodeOrange>'Link'</CodeOrange>&nbsp;<CodePurple>&#125;</CodePurple>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CodeYellow>&#93;</CodeYellow><CodeBlue>&#125;</CodeBlue>
            <br/>&#47;&gt;
          </Code>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page
