import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Ross1 } from '@components'

const story = {
  title: 'Ross/Ross1',
  component: Ross1,
  layout: 'fullscreen',
  argTypes: {
    
    // outline: { control: 'boolean' },
    // disabled: { control: 'boolean' },
    // level: {
    //   options: [0, 1, 2],
    //   control: { type: 'select' },
    // },
    // glyph: {
    //   options: { '— none —': undefined, ...glyphKey },
    //   control: { type: 'select' },
    // },
  }
}
export default story

export const Primary = () => (

  <Ross1 />
  
)
