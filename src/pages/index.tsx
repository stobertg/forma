import type { NextPage } from 'next'
import { SiteContainer, Block, Heading, Button } from '@components'

const Home: NextPage = () => {
  return (
    
    <SiteContainer>
      <Block width="medium" blockItemSpacing="l1">
        <div>This is some content</div>
        <Heading bold="heavy" title="This is the heading" />
        <Button variant="primary" title="Action" />
      </Block>
    </SiteContainer>

  )
}

export default Home
