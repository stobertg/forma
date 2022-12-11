import React from 'react'
import { styled } from '@theme'
import * as RadioGroup from '@radix-ui/react-radio-group'

const RadioList = styled('div', {

})

// For the master container of the radio item
// This holds the radio button and the label within the container

const RadioWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  position: 'relative',

  // By default, the label is on the right of the radio button
  // Adding the variant to place the label on the left side of the container

  variants: {
    labelPlacement: {
      left: { '> *': { flexDirection: 'row' }}
    }
  }
})

// For the container of the radio graphic itself
// This component does not hold the label and only the radio graphic

const RadioContent = styled(RadioGroup.Root, {

})

const RadioItem = styled(RadioGroup.Item, {

})

const RadioIndicator = styled(RadioGroup.Indicator, {

})

// -------------- Typescript declarations -------------- //

interface RadioProps {
  labelPlacement?: 'left'
  radioList: {
    id: any
    label: string
    value: any
  }[]
}

// ---------- This is the end of declarations ---------- //

export const InputRadio = ({ labelPlacement, radioList }:RadioProps) => {
  return(

    <RadioList {...{ labelPlacement }}>
      { radioList.map(( radio, i ) => (
        
        <RadioWrap key={`radio-${ i }`}>
          <label htmlFor={ radio.id }>{ radio.label }</label>
          <RadioContent>
            <RadioItem id={ radio.id } value={ radio.value }>
              <RadioIndicator />
            </RadioItem>
          </RadioContent>
        </RadioWrap>

      ))}
    </RadioList>
      
  )
}