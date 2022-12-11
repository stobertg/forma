import React, { useState } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { List, Icon } from '@components'
import { styled } from '@theme'

const CheckboxWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'flex-end',
  alignItems: 'center',
  position: 'relative',
  fontFamily: '$sansSerif',
  cursor: 'pointer',

  // For the spacing and styling of the label to the checkbox
  
  label: {
    position: 'relative',
    marginLeft: 8,
    userSelect: 'none'
  },

  a: {
    color: '$white',
    textDecoration: 'underline',
    textUnderlineOffset: 2,
    textDecorationThickness: 0.5,
    transition: '$s1',

    '&:hover': {
      color: '$electric'
    }
  },

  variants: {
    labelPlacement: {
      left: { flexDirecton: 'row' }
    }
  }
})

const Checkbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 20,
  height: 20,
  border: '2px solid $border',
  borderRadius: 4,
  transition: '$s1',

  '&:before': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: '$buttonPrimary',
    borderRadius: 4,
    transition: '$s1',
    transform: 'scale( 0.2 )',
    opacity: 0
  },
  
  '&:hover': { 
    
    '&:before': {
      transform: 'scale( 0.7 )',
      opacity: 1
    }
  },

  '&:focus': { borderColor: '$white' },

  '&[aria-checked = true]': {
    borderColor: '$buttonPrimary !important',

    '&:before': {
      transform: 'scale( 1 ) !important',
      background: '$buttonPrimary',
      borderRadius: 2,
      opacity: 1
    }
  },
})

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  color: '$bgPrimary'
});


 
// -------------- Typescript declarations -------------- //

interface CheckProps {
  defaultChecked?: boolean
  id?: any
  label?: string
  labelPlacement?: 'left'
  listItems?: {
    id: any
    label: any
    defaultChecked?: boolean
  }[]
}

// ---------- This is the end of declarations ---------- //

export const InputCheckbox = ({
    defaultChecked,
    id,
    label,
    labelPlacement,
    listItems
  }: CheckProps ) => {
  
  return(

    <>
      { listItems ? (

        <List spacing="l0">
          { listItems.map(( item, i ) => (

            <li key={`item-${ i }`}>
              <CheckboxWrap {...{ labelPlacement }}>
                <label htmlFor={ item.id }>{ item.label }</label>
                <Checkbox 
                  id={ item.id }
                  defaultChecked={ item.defaultChecked }
                >
                  <CheckboxIndicator><Icon size="l0" icon="check" /></CheckboxIndicator>
                </Checkbox>
              </CheckboxWrap>
            </li>

          ))}
        </List>

      ) : (

        <CheckboxWrap {...{ labelPlacement }}>
          <label htmlFor={ id }>{ label }</label>
          <Checkbox {...{ defaultChecked, id }}>
            <CheckboxIndicator><Icon size="l0" icon="check" /></CheckboxIndicator>
          </Checkbox>
        </CheckboxWrap>

      )}
    </>

  )
}
