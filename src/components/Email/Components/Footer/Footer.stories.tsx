import React from 'react';
import { SiteContainer, Block } from '@components'
import { Footer } from '@email';

const story = {
  title: 'email/components/Footer',
  component: Footer
}
export default story

export const Primary = () => (

  <SiteContainer>
    <Block width="tiny" alignment="center">
      <Footer>This is some content</Footer>
    </Block>
  </SiteContainer>

)

