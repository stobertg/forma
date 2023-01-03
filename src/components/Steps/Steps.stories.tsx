import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Steps } from '@components'

const story = {
  title: 'modules/Steps',
  component: Steps,
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

  <Steps 
    steps={[
      { status: 'completed', title: 'Step one', subTitle: 'Summary if needed' },
      { status: 'active', title: 'Step two', subTitle: 'Summary if needed' },
      { status: 'disabled', title: 'Step three', subTitle: 'Very long summary if needed, which is two lines' },
      { status: 'disabled', title: 'Step four', subTitle: 'Summary if needed' }
    ]} 
  />
  
)
