import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const StageBlockTitles = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  width: '100%',
  marginBottom: 20,
  textAlign: 'center',

  '> *': {
    width: '20%'
  }
})

const StageBlocksWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  border: '1px solid $border',
  borderRadius: '$r1',

  '> *': {
    minHeight: 100,
    '&:not(:last-child)': { borderBottom: '1px solid $border' }
  }
})

const StageBlockRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  width: '100%',

  '> *': {
    width: '20%',
    minHeight: 100,
    '&:not(:last-child)': { borderRight: '1px solid $border' }
  }
})

interface StageBlocksProps {
  children: React.ReactNode
} 

// ---------- This is the end of declarations ---------- //

export const StageBlocks = ({ children }:StageBlocksProps) => {
  
  return(

    <>
      <StageBlocks>
          <StageBlockTitles>
            { titles.map(( title, i ) => ( <Heading bold size="l0" color="gray" title="Default" /> ))}
          </StageBlockTitles>
        { children }
      </StageBlocks>
    </>
    
  )
}
