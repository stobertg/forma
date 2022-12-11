import React from 'react'
import { Progress } from '@components'

const story = {
  title: 'atoms/Progress',
  component: Progress,
  layout: 'fullscreen',
  argTypes: {}
}
export default story

export const Primary = () => (

  <Progress value={ 66 } />
  
)
