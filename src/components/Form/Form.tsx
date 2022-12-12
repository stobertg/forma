import React, { useRef } from 'react'
import { useForm, Control } from "react-hook-form"
import { FormWrap } from './Parts'
import { Input, InputCheckbox, InputSelect, Textarea } from '@components'
import emailjs from '@emailjs/browser'

// -------------- Typescript declarations -------------- //

type FormValues = {
  name: ""
  email: ""
  message: ""
}

interface FormProps {
  title?: string
  descp?: string
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Form = ({
    title,
    descp,
    children
  }: FormProps ) => {

  const form = useRef<HTMLFormElement>(null);


  
  return(

    <FormWrap   
      formRef={ form }
      {...{ title, descp }}
    >
      { children }
      <Input label="Full name" />
      <Input label="Email" type="email" />
      <Textarea name="message"/>
    </FormWrap> 

  )
}
