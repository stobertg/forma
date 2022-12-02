import React from 'react'
import { Tooltip } from '@components'

const story = {
  title: 'atoms/Tooltip',
  component: Tooltip,
  argTypes: {},
}
export default story
export const Primary = () => ( 
  <Tooltip tooltipText="This is some content">This is the trigger</Tooltip>
)

