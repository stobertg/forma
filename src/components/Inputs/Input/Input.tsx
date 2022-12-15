import React, { useState } from 'react'
import { InputStatus } from '@components' 
import { InputWrap, InputBase } from './Parts'

// -------------- Typescript declarations -------------- //

interface InputProps {
  label: string
  width?: 'small'
  value?: any
  type?: 'email' | 'text' | 'number'
  initialValue?: any
}

// ---------- This is the end of declarations ---------- //

export const Input = ( props: InputProps ) => {
  const [ active, setActive ] = useState( false )
  const [ value, setValue ] = useState( props.value || props.initialValue)

  return(

    // This is the content that does into the thing that we wwere talking about before
    <InputWrap
      inputSize={ props.width }
      state={ value ? 'active' : 'inactive' }
    >
      <input 
        
      />
    </InputWrap>

  )
}