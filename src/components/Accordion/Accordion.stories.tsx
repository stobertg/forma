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
      { id: 1, title: 'This is the title', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quos eius, aliquid maxime incidunt aspernatur aut esse. Consequuntur blanditiis a unde, modi magni aliquam adipisci minima aut. Nostrum, voluptatum nulla?' },
      { id: 2, title: 'This is the title', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quos eius, aliquid maxime incidunt aspernatur aut esse. Consequuntur blanditiis a unde, modi magni aliquam adipisci minima aut. Nostrum, voluptatum nulla?' },
      { id: 3, title: 'This is the title', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quos eius, aliquid maxime incidunt aspernatur aut esse. Consequuntur blanditiis a unde, modi magni aliquam adipisci minima aut. Nostrum, voluptatum nulla?' }
    ]}
  /> 
)