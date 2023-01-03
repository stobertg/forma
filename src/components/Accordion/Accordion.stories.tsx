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
    accordionOpen={ 1 }
    accordions={[
      { id: 1, title: 'Accordion title one', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quos eius, aliquid maxime incidunt aspernatur aut esse?' },
      { id: 2, title: 'Accordion title two', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quos eius, aliquid maxime incidunt aspernatur aut esse?' },
      { id: 3, title: 'Accordion title three', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quos eius, aliquid maxime incidunt aspernatur aut esse?' }
    ]}
  />
)