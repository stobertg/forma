import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LeftNav } from '@components'

const story = {
  title: 'atoms/LeftNav',
  component: LeftNav,
  layout: 'fullscreen',
  argTypes: {}
}
export default story

export const Primary = () => (

  <LeftNav />
  
)
