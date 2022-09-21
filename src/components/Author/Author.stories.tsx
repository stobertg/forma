import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Author } from '@components';

const story = {
  title: 'atoms/Author',
  component: Author,
  argTypes: {
    // outline: { control: 'boolean' },
    // disabled: { control: 'boolean' },
    // level: {
    //   options: [0, 1, 2],
    //   control: { type: 'select' },
    // },
    // glyph: {
    //   options: { '— none —': undefined, ...glyphKey },
    //   control: { type: 'select' },
    // },
  },
}
export default story

export const Primary = () => (
  <Author 
    author="René Pinnell" 
    authorLink="https://twitter.com/RJPinnell?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" 
    date="May 29, 1989" 
    readTime={ 5 } 
  />
)

