import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductThumb } from '@email';

const story = {
  title: 'email/components/ProductThumb',
  component: ProductThumb
}
export default story

export const Primary = () => (
  <ProductThumb>This is some content</ProductThumb>
)

