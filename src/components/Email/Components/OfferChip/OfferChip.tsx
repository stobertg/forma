import React from 'react'
import { Spacing, Heading } from '@email'
import { OfferChipBase } from '../OfferChip/Parts/Base'

interface ChipProps {
  bgColor?: 'cyan' | 'yellow'
  spacing?: 'small' | 'medium' | 'large'
  title?: string | number
  benefitName?: string
  chips?: {
    bgColor?: 'cyan' | 'yellow'
    title: string | number
    benefitName: string
  }[]
}

export const OfferChip = ({ 
    spacing,
    bgColor,
    title,
    benefitName,
    chips
  }:ChipProps) => {

  return(

    <Spacing {...{ spacing }}>
      { chips ? (
        <>
          { chips.map(( chip, i ) => (

            <OfferChipBase 
              key={`chip-${ i }`}
              spacing="small"
              bgColor={ chip.bgColor } 
              title={ chip.title } 
              benefitName={ chip.benefitName } 
            />

          ))}
        </>
      ) : ( 
        <OfferChipBase {...{ bgColor, title, benefitName }} /> 
      )}
    </Spacing>

  )
}