import React from 'react'
import { styled } from '@theme'
import { Card, Heading, Text, Illustration, Chip } from '@components'

const ContentWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: 'calc( 100% - 48px )',
  margin: '0 auto'
})

const ContentHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  '> *:not(:last-child)': {
    marginRight: 12
  }
})

const ContentLeft = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative'
})

const ContentLeftText = styled('div', {
  position: 'relative',
  width: '70%',
  marginLeft: 24,

  '> *': {
    marginBottom: 8
  }
})

const ContentRight = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  marginRight: 32,

  '> *:not(:last-child)': {
    marginRight: 32
  },

  '> div > *:not(:last-child)': {
    marginBottom: 8
  }
})

const LinkContainer = styled('div', {
  position: 'relative',
  marginTop: 20,

  a: {
    marginRight: 32,
    fontSize: '$s0'
  }
})

// -------------- Typescript declarations -------------- //

interface BenefitCardProps {
  illustration?: any
  title: string
  chipTitle?: string
  text: string
}

// ---------- This is the end of declarations ---------- //

export const BenefitCard = ({
    illustration,
    title,
    text,
    chipTitle
  }: BenefitCardProps ) => {
  
  return(

    <Card>  
      <ContentWrap>
        <ContentLeft>
          <Illustration size="l1" image={ illustration ? illustration : 'account-wellness' } />

          <ContentLeftText>
            <ContentHeader>
              <Heading bold size="l1" title={ title } />
              <Chip size="small" text="allCaps" bgColor="gray">{ chipTitle }</Chip>
            </ContentHeader>

            <Text fontSize="l0">{ text }</Text>

            <LinkContainer>
              <a href="/">View Account</a>
              <a href="/">What&apos;s Eligible</a>
            </LinkContainer>
          </ContentLeftText>
        </ContentLeft>

        <ContentRight>
          <div>
            <Heading title="999.99" />
            <Heading color="gray" size="l0" title="available balace" />
          </div>

          <div>
            <Heading title="mm/dd/yyyy" />
            <Heading color="gray" size="l0" title="new funds added" />
          </div>
        </ContentRight>
      </ContentWrap>
    </Card>
    
  )
}
