import React from 'react'
import { styled } from '@theme'
import { Heading, Chip } from '@components'

const SourceWrap = styled('div', {

})

const SourceImage = styled('div', {
  
})

const SourceText = styled('div', {

})

// -------------- Typescript declarations -------------- //

interface SourceFileProps {

}

// ---------- This is the end of declarations ---------- //

export const SourceFile = ({

  }: SourceFileProps ) => {
  
  return(

    <SourceWrap>
      <SourceImage><img src="/global/sources/figma.svg" alt="Figma Logo" /></SourceImage>
      <SourceText>
        <Heading bold title="Figma" />
        <Chip>Component</Chip>
      </SourceText>
    </SourceWrap>
    
  )
}
