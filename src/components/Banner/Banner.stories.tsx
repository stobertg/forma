import React from 'react'
import { Banner } from '@components'

const story = {
  title: 'modules/Banner',
  component: Banner,
  layout: 'centered',
  argTypes: {}
}
export default story

export const DefaultHorizontal = () => (

  <Banner title={ <><strong>Your program policy was updated.</strong> <span>Check out what's new or have changed effective July 31, 2021</span></> } />
  
)

