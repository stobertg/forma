import React from 'react'
import { StageBlockColumn, Button } from '@components'

const story = {
  title: 'foundation/StageBlockColumn',
  component: StageBlockColumn,
  layout: 'fullscreen',
  argTypes: {}
}
export default story

export const Primary = () => (

  <StageBlockColumn>
    <div><Button title="Action" /></div>
    <div><Button variant="primary" title="Action" /></div>
    <div><Button variant="secondary" title="Action" /></div>
    <div><Button variant="danger" title="Action" /></div>
    <div><Button variant="disabled" title="Action" /></div>
  </StageBlockColumn>
  
)