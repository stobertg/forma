import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, Heading, Text, Tabs } from '@components'

const Home: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block width="medium" blockItemSpacing='l0'>
        <BlockItem><Heading bold size="l3" title="Product Hero" /></BlockItem>

        <BlockItem>
          <Text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim tellus at sem tempus 
              tristique. Fusce nec turpis vestibulum, molestie dui sit amet, hendrerit arcu. Cras quis rutrum ante. 
              Sed egestas urna egestas, hendrerit justo non, iaculis odio. Donec mattis nibh elit. Suspendisse 
              semper arcu in nulla euismod dignissim.
            </p>
          </Text>
        </BlockItem>
      </Block>

    </SiteContainer>

  )
}

export default Home
