import React from 'react'
import { Breadcrumbs } from '@components'

const story = {
  title: 'atoms/Breadcrumbs',
  component: Breadcrumbs,
  layout: 'fullscreen',
  argTypes: {}
}
export default story

export const Default = () => ( 
    <Breadcrumbs 
      links={[
        { pageLink: '/', title: 'title' },
        { pageLink: '/', title: 'title' },
        { pageLink: '/', title: 'title' }
      ]}
    /> 
)