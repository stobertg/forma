import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { THead } from '@email';

const story = {
  title: 'email/components/THead',
  component: THead
}
export default story

export const Primary = () => (
  <THead>This is some content</THead>
)

