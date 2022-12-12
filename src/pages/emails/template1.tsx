import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, ProjectInfo, StageBlocks, StageBlockRow, Code } from '@components'
import { Email, Intro, Heading, Text, Image, ProductHero, ProductThumb, Button, Perks } from '@email'
import { CodeBlue, CodeGreen, CodeOrange } from '@codeColors'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block>
        <ProjectInfo
          title="Email Template One"
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
            columns="1"
            titles={[
              { title: 'Template One' }
            ]}
          >
            <StageBlockRow>
              <div>

                <Email>
                  <Intro padding="large">
                    <Heading 
                      spacing="medium"
                      bold
                      size="large" 
                      title="Bring play, creativity, flow to your home office."
                    />

                    <Text spacing="medium" fontSize="medium">
                      There is a symbiotic relationship between work and home. We asked Formies to pick the best products 
                      that balance work and play and keep them in movement and flow. You are eligible for these handpicked 
                      products, and we highly encourage you to use your benefit funds on some of these products.   
                    </Text>
                  </Intro>

                  <ProductHero
                    sideSpacing="small"
                    productWidth="small"
                    image="/products/sony/sony-noise-canceling.png"
                    deal="Save 10%"
                    title="Sony inteligent industry-leading noise canceling headphones - black"
                    buttonTitle="Hurry up, limited time offer"
                  />

                  <ProductThumb 
                    productList={[
                      { 
                        href: 'http://tylerstober.com',
                        marginRight: 6, 
                        productImage: "/products/sony/earbuds-noisecancelling.png",
                        product: 'Sony Earbuds',
                        buttonTitle: 'Shop Forma Store'
                      },
                      { 
                        href: 'http://tylerstober.com',
                        marginLeft: 6, 
                        productImage: "/products/sony/earbuds-noisecancelling.png",
                        product: 'Sony Earbuds',
                        buttonTitle: 'Shop Forma Store'
                      },
                    ]}
                  />

                  <ProductHero
                    spacingTop="small"
                    sideSpacing="small"
                    image="/products/fluidstance/board.png"
                    deal="Best Deal"
                    title="FluidStance Springboard Active-Standing Mat"
                    buttonTitle="Hurry up, limited time offer"
                  />

                  <ProductThumb 
                    productList={[
                      { 
                        href: 'http://tylerstober.com',
                        productHeight: 150,
                        marginRight: 6, 
                        productImage: "/products/fluidstance/naturalwood.png",
                        product: 'Sont Earbuds',
                        buttonTitle: 'Shop Forma Store'
                      },
                      { 
                        href: 'http://tylerstober.com',
                        productHeight: 150,
                        marginLeft: 6, 
                        productImage: "/products/fluidstance/graphite.png",
                        product: 'Sont Earbuds',
                        buttonTitle: 'Shop Forma Store'
                      },
                      { 
                        href: 'http://tylerstober.com',
                        productHeight: 63,
                        marginRight: 6, 
                        productImage: "/products/fluidstance/dryerase.png",
                        product: 'Sont Earbuds',
                        buttonTitle: 'Shop Forma Store'
                      },
                      { 
                        href: 'http://tylerstober.com',
                        productHeight: 63,
                        marginLeft: 6, 
                        productImage: "/products/fluidstance/whiteboard.png",
                        product: 'Sont Earbuds',
                        buttonTitle: 'Shop Forma Store'
                      }
                    ]}
                  />
                </Email>

              </div>
            </StageBlockRow>
          </StageBlocks>
        </BlockItem>
      </Block>
    </SiteContainer>

  )
}

export default Page