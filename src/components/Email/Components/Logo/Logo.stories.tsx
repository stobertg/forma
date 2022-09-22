import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from '@email';

const story = {
  title: 'email/components/Logo',
  component: Logo
}
export default story

export const Primary = () => (
  <Logo>This is some content</Logo>
)

