import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GlobalContainer } from '@email';

const story = {
  title: 'email/components/GlobalContainer',
  component: GlobalContainer
}
export default story

export const Primary = () => (
  <GlobalContainer>This is some content</GlobalContainer>
)

