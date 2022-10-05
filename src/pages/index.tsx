import type { NextPage } from 'next'
import { SiteContainer, Block } from '@components'

const Home: NextPage = () => {
  return (
    
    <SiteContainer>
      <Block width="medium" blockItemSpacing="l1">
        <div>This is some content</div>
      </Block>
    </SiteContainer>

  )
}

export default Home
