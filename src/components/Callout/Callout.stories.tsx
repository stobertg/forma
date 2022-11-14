import React from 'react'
import { Callout } from '@components'

const story = {
  title: 'modules/Callout',
  component: Callout,
  layout: 'centered',
  argTypes: {}
}
export default story

export const DefaultHorizontal = () => (

  <Callout descp="Ello" />
  
)

