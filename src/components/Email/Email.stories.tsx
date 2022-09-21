import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Email } from './Email';

const story = {
  title: 'email/Email',
  component: Email
}
export default story

export const Primary = () => (
  <Email />
)

