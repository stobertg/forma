import React, { useState } from 'react'
import { InputBase } from './_base'

// -------------- Typescript declarations -------------- //

interface InputProps {
  height?: 'small'
  id: string
  type: string
  label: string
  inputSize?: 'small'
}

// ---------- This is the end of declarations ---------- //

export const Input = ({
    height,
    id,
    type,
    inputSize,
    label
  }: InputProps ) => {

  const [ active, setActive ] = useState()
  
  return(

    <InputBase {...{ id, type, inputSize, label, height }} />
    
  )
}
