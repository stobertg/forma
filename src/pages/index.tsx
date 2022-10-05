import type { NextPage } from 'next'
import { SiteContainer, Block, Heading } from '@components'

const Home: NextPage = () => {
  return (
    
    <SiteContainer>
      <Block width="medium" blockItemSpacing="l1">
        <div>This is some content</div>
        <Heading bold="heavy" title="This is the heading" />
      </Block>
    </SiteContainer>

  )
}

export default Home
