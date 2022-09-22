import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Thead } from '@email';

const story = {
  title: 'email/components/Thead',
  component: Thead
}
export default story

export const Primary = () => (
  <Thead>This is some content</Thead>
)

