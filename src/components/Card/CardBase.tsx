import React from 'react'
import { styled } from '@theme'
import { Image, Heading } from '@components'

// For the master container of the card
// The card can have many variantions, including a lot of custom ones
// Here we solve for all types, as well as use for customization

const CardWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  maxWidth: 325,
  padding: '32px 0',
  borderRadius: '$r1',

  variants: {
    bgColor: {
      white200: { backgroundColor: '$white200' },
      cyan100: { backgroundColor: '$cyan100' },
      pink100: { backgroundColor: '$pink100' }
    }
  }
})

// For the content of the card - for the instance of a premade card
// If a card is custom, such as in the case of SnapShot component, it will not be wrapped in this content div

const CardContent = styled('div', {
  position: 'relative',
  width: '80%',
  margin: '0 auto'
})

const CardHeading = styled('div', {
  position: 'relative',
  width: '100%',

  '> *:not(:last-child)': {
    marginBottom: 12
  }
})

const CardImage = styled('div', {
  position: 'relative',
  width: '90%',
  margin: '50px auto 0'
})

// -------------- Typescript declarations -------------- //

interface CardProps {
  title?: string
  subTitle?: string
  bgColor?: 'white200' | 'cyan100' | 'pink100'
  children?: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const CardBase = ({ 
    title,
    subTitle,
    bgColor,
    children
  }:CardProps) => {
  
  return(

    <CardWrap {...{ bgColor }}>
      <CardContent>
        { children ? (
          <>{ children }</>
        ) : (
          <>
            <CardHeading>
              <Heading size="l3" {...{ title }} />
              <Heading size="l1" color="gray" title={ subTitle } />
            </CardHeading>

            <CardImage>
              <Image image="/illustration/girl-waving.png" alt="Forma Illustration" />
            </CardImage>
          </>
        )}
      </CardContent>
    </CardWrap>
      
  )
}
