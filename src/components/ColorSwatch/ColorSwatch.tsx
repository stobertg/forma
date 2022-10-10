import React from 'react'
import { styled } from '@theme'
import { List, Heading } from '@components'

const ColorWrap = styled('div', {

  li: {
    padding: '12px 0',
    borderBottom: '1px solid $border',

    // Here we add a botder to the top of the first child

    '&:first-child': {
      borderTop: '1px solid $border'
    }
  }
})

const Swatch = styled('div', {
  display: 'flex',
  flexDirction: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'realtive'
})

const SwatchTitle = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
})  

const SwatchColor = styled('div', {
  position: 'relative',
  width: 50,
  height: 50,
  borderRadius: '50%',
  marginRight: 16
})

const SwatchHsl = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '12px 24px',
  borderRadius: '$pill',
  background: '$blue50'
})

// -------------- Typescript declarations -------------- //

interface ColorSwatchProps {
  colorSwatches: {
    color: string
    title: string
    hexCode: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const ColorSwatch = ({
    colorSwatches
  }: ColorSwatchProps ) => {
  
  return(

    <ColorWrap>
      <List>
        { colorSwatches.map(( swatch, i ) => (
          
          <li>
            <Swatch>
              <SwatchTitle>
                <SwatchColor style={{ backgroundColor: swatch.color }} />
                <Heading bold title={ swatch.title } />
              </SwatchTitle>
              <SwatchHsl><Heading size="l0" title={ swatch.hexCode } /></SwatchHsl>
            </Swatch>
          </li>

        )) }
      </List>
    </ColorWrap>
    
  )
}
