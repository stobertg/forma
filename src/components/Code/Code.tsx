import React from 'react'
import { styled } from '@theme'

const CodeWrap = styled('div', {
  position: 'relative',
  width: '100%',
  borderRadius: '$r2',
  background: '#000',
  color: '$gray300'
})

const CodeContent = styled('div', {
  position: 'relative',
  width: '95%',
  margin: '0 auto',
  padding: '50px 32px',
  lineHeight: 1.5,
  
  '*': {
    fontFamily: '$code'
  }
})

// -------------- Typescript declarations -------------- //

interface CodeProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Code = ({
    children
  }: CodeProps ) => {
  
  return(

    <CodeWrap>
      <CodeContent>{ children }</CodeContent>
    </CodeWrap>
    
  )
}
