import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from '@components'

const story = {
  title: 'atoms/Avatar',
  component: Avatar,
  layout: 'fullscreen',
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
  }
}
export default story

export const Default = () => ( <Avatar image="/people/christine.png" name="Christine Dailey" /> )
export const FirstNameOnly = () => ( <Avatar firstNameOnly image="/people/christine.png" name="Christine Dailey" /> )
export const NameHidden = () => ( <Avatar nameHidden image="/people/christine.png" name="Christine Dailey" /> )
export const Fallback = () => ( <Avatar name="Christine Dailey" /> )
