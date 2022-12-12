import React from 'react'
import { Accordion } from '@components'

const story = {
  title: 'atoms/Accordion',
  component: Accordion,
  layout: 'fullscreen',
  argTypes: {}
}
export default story

export const Default = () => ( 
  <Accordion 
    accordions={[
      { id: 1, title: 'This is the title', content: 'This is the content' }
    ]}
  /> 
)