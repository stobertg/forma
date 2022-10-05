import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card } from '@components'

const story = {
  title: 'modules/Card',
  component: Card,
  layout: 'fullscreen',
  argTypes: {}
}
export default story

export const Primary = () => (

  <Card  
    image="https://freeross.org/wp-content/uploads/2022/03/Grow_in_the_Dark_Animation_frame_152.jpeg"
    title="Grow in the Dark"
    subTitle="Digital colorized animation made up of 318 individual black-and-white drawings created by Ross in prison."
  />
  
)
