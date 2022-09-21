import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Intro } from '@email';

const story = {
  title: 'email/components/Intro',
  parameters: { layout: 'centered' },
  component: Intro
}
export default story

export const Primary = () => (
  <Intro />
)

