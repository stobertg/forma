import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

// For the master container of the stage wrap
// This holds all the visual content for the content of the component
// For example, you can find this on the logo page - the areas with all of the logos in the boxes

const StageWrap = styled('section', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  width: '100%',

  variants: {
    columns: {
      5: { flexDirection: 'column' },
      4: { flexDirection: 'column' },
      3: { flexDirection: 'column' },
      2: { flexDirection: 'column' },
      1: { flexDirection: 'column' }
    }
  }
})

// For the master container of the Block Titles

const StageBlockTitles = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  width: '10%',
  marginBottom: 20,
  textAlign: 'center',

  variants: {
    rows: {
      1: { width: '10%', height: '100%', '> *': { display: 'flex', alignItems: 'center', height: '100%' }},
      2: { width: '10%', height: '100%', '> *': { display: 'flex', alignItems: 'center', height: '50%' }},
      3: { width: '10%', height: '100%', '> *': { display: 'flex', alignItems: 'center', height: '33.33%' }},
      4: { width: '10%', height: '100%', '> *': { display: 'flex', alignItems: 'center', height: '25%' }},
      5: {},
      11: { width: '10%', height: '100%', '> *': { display: 'flex', alignItems: 'center', height: '9.09%' }}
    },

    columns: {
      5: { width: '100%', flexDirection: 'row', '> *': { width: '20%' }},
      4: { width: '100%', flexDirection: 'row', '> *': { width: '25%' }},
      3: { width: '100%', flexDirection: 'row', '> *': { width: '33.33%' }},
      2: { width: '100%', flexDirection: 'row', '> *': { width: '50%' }},
      1: { width: '100%', flexDirection: 'row', '> *': { width: '100%' }}
    }
  },

  // For the layout changes on mobile breakpoints
  // This is for the titles to stack on top of the component 

  '@tablet': {
    display: 'none'
  }
})

const StageBlocksWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  position: 'relative',
  border: '1px solid $border',
  borderRadius: '$r1',
  overflow: 'hidden',

  '> *': {
    minHeight: 100,
    '&:not(:last-child)': { borderBottom: '1px solid $border' }
  },

  variants: {
    columns: {
      5: { '> * > *': { flexDirection: 'row', width: '20%' }},
      4: { '> * > *': { flexDirection: 'row', width: '25%' }},
      3: { '> * > *': { flexDirection: 'row', width: '33.33%' }},
      2: { '> * > *': { flexDirection: 'row', width: '50%' }},
      1: { '> * > *': { flexDirection: 'row', width: '100%' }}
    }
  }
})

interface StageBlocksProps {
  titles?: {
    title: string
  }[]
  children: React.ReactNode
  columns?: '1' | '2' | '3' | '4' | '5'
  rows?: '1' | '2' | '3' | '4' | '5' | '11'
} 

// ---------- This is the end of declarations ---------- //

export const StageBlocks = ({ titles, rows, columns, children }:StageBlocksProps) => {
  
  return(

    <StageWrap {...{ columns }}>
      { titles ? (
        <StageBlockTitles {...{ rows, columns }}>
          { titles.map(( title, i ) => ( 
            <Heading key={`title-${ i }`} bold size="l0" color="gray" title={ title.title } /> 
          ))}
        </StageBlockTitles>
      ) : null }

      <StageBlocksWrap {...{ columns }}>{ children }</StageBlocksWrap>
    </StageWrap>
    
  )
}
