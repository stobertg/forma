import React from 'react'
import { styled } from '@theme'
import { Heading, Text, SourceFile } from '@components'

const IntroWrap = styled('section', {

})

const IntroHeader = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  marginBottom: 50,
  paddingBottom: 24,
  borderBottom: '1px solid $border'
})

const IntroContent = styled('div', {

  '> *:not(:last-child)': {
    marginBottom: 20
  }
})

// -------------- Typescript declarations -------------- //

interface ProjectInfoProps {
  title: string
  children?: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const ProjectInfo = ({
    title,
    children
  }: ProjectInfoProps ) => {
  
  return(

    <IntroWrap>
      <IntroHeader>
        <Heading size="l0" color="gray" title="Last Updated: 10.04.2022" />
        <SourceFile />
      </IntroHeader>
      <IntroContent>
        <Heading bold size="l4" title={ title } />
        { children ? ( <Text>{ children }</Text> ) : null }
      </IntroContent>
    </IntroWrap>
    
  )
}
