import React from 'react'
import { useForm } from "react-hook-form"
import { styled } from '@theme'
import { Input, Heading, Text, Textarea, InputCheckbox, InputSelect, Button } from '@components'

// For the master container of the form component
// This holds the option title and intro on the top and the form fields below

const FormContain = styled('div', {
  position: 'relative',
  maxWidth: 640,
  width: '100%',

  input: {
    appearance: 'none',
    border: 'none',
    background: 'none',
    outline: 'none',
  },

  '::placeholder': { color: '$white', opacity: 1 },
  ':-ms-input-placeholder': { color: '$white', opacity: 1 },
  '::-webkit-input-placeholder': { color: '$white', opacity: 1 }, 

  'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus, select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus': {
    boxShadow: "0 0 0px 1000px #ffffff inset !important",
    borderRadius: 24
  }
})

// For the header container within the form
// This contains the title of the form, with the heading on top and the optional description below

const FormHeader = styled('div', {
  position: 'relative',
  marginBottom: 32,

  '> *:not(:last-child)': {
    marginBottom: 16
  }
})

// For the container of the form itself
// This holds all of the inputs within the form flow

const FormContent = styled('form', {
  position: 'relative',
  width: '100%',

  // Here we automate the spacing between each of the inputs within the form
  // This is to make all the spacing uniform in one single line

  '> *:not(:last-child)': {
    marginBottom: 12
  },

  '> *:last-child': {
    marginTop: 20
  }
})

// -------------- Typescript declarations -------------- //

interface FormProps {
  title?: string
  descp?: string
}

// ---------- This is the end of declarations ---------- //

export const Form = ({
    title,
    descp
  }: FormProps ) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = ( data:any ) => console.log(data);
  
  return(

    <FormContain>
      <FormHeader>  
        <Heading size="l5" bold {...{ title }} />
        <Text><p>{ descp }</p></Text>
      </FormHeader>

      <FormContent onSubmit={ handleSubmit(onSubmit) }>
        <Input id="name" type="text" label="Full name" />
        <Input inputSize="small" id="emamil" type="text" label="Email" />
        <Input id="website" type="text" label="Website" />
        <InputSelect 
          category="Contact reason"
          placeholder="I want to ..."
          options={[
            { title: 'Lend' },
            { title: 'Borrow' },
            { title: 'Launch a pool' },
            { title: 'Make a press enquiry' },
            { title: 'Other' }
          ]}
        />
        <Textarea />
        <InputCheckbox 
          listItems={[
            { id: 'newsletter', label: "Sign me up for Continuum Digital's newletter" },
            { id: 'terms', label: <>I consent to the <a href="http://tylerstober.com">Terms &amp; Conditions</a> and <a href="http://tylerstober.com">Privacy Policy</a></> }
          ]}
        />
        <Button variant="primary" title="Submit" />
      </FormContent>
    </FormContain>
    
  )
}
