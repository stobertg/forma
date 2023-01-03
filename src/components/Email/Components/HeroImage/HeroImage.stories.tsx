import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from '@email';

const story = {
  title: 'email/components/Heading',
  parameters: { layout: 'centered' },
  component: Heading
}
export default story

export const Default = () => ( <Heading bold title="This is the title" /> )