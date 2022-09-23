import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DownloadApp } from '@email';

const story = {
  title: 'email/components/DownloadApp',
  component: DownloadApp
}
export default story

export const Primary = () => (
  <DownloadApp>This is some content</DownloadApp>
)

