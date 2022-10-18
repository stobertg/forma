import React from 'react'
import { styled } from '@theme'
import { List, Heading, Chip } from '@components'

const SourceWrap = styled('div', {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  minHeight: 36,
  padding: 4,
  background: '$white50',
  borderRadius: '$r1',
  border: '1px solid $border'
})

const SourceImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 36,
  height: 36,
  background: '$peach200',
  borderRadius: 12,

  img: {
    height: '50%'
  }
})

const SourceText = styled('div', {
  position: 'relative',
  margin: '0 16px 0 12px',
  fontSize: 12
})

// -------------- Typescript declarations -------------- //

interface SourceFileProps {

}

// ---------- This is the end of declarations ---------- //

export const SourceFile = ({

  }: SourceFileProps ) => {
  
  return(

    <List direction="horizontal" spacing="l1r">
      <li>
        <SourceWrap>
          <SourceImage><img src="/global/sources/figma.svg" alt="Figma Logo" /></SourceImage>
          <SourceText>
            <div>Figma</div>
          </SourceText>
        </SourceWrap>
      </li>

      <li>
        <SourceWrap>
          <SourceImage><img src="/global/sources/storybook.svg" alt="Storybook Logo" /></SourceImage>
          <SourceText>
            <div>Storybook</div>
          </SourceText>
        </SourceWrap>
      </li>

      <li>
        <SourceWrap>
          <SourceImage><img src="/global/sources/github.svg" alt="Figma Logo" /></SourceImage>
          <SourceText>
            <div>Github</div>
          </SourceText>
        </SourceWrap>
      </li>
    </List>
    
  )
}
