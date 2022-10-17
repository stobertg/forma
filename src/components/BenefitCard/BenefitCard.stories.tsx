import React from 'react'
import { BenefitCard } from '@components'

const story = {
  title: 'atoms/BenefitCard',
  component: BenefitCard,
  argTypes: {},
}
export default story

export const Primary = () => (
  
  <BenefitCard 
    illustration="account-custom"
    title="Benefit Program Name"
    chipTitle="Program Status"
    text="Add one to three lines of text to describe the purpose and usage of this benefit program."
  />

)

