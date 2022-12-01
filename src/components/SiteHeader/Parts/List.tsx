import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { styled } from '@theme'
import { ListItem } from './ListItem'
import { Heading } from '@components'

const ListWrap = styled('ul', {
  display: 'grid',
  padding: 22,
  margin: 0,
  columnGap: 10,
  listStyle: 'none',
  variants: {
    layout: {
      one: {
        '@media only screen and (min-width: 600px)': {
          width: 500,
          gridTemplateColumns: '.75fr 1fr',
        },
      },
      two: {
        '@media only screen and (min-width: 600px)': {
          width: 600,
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(3, 1fr)',
        },
      },
    },
  },
  defaultVariants: {
    layout: 'one',
  },
})

const Callout = styled('a', {
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  background: `linear-gradient(135deg, '$textPrimary' 0%, '$textPrimary' 100%);`,
  borderRadius: 6,
  padding: 25,
  textDecoration: 'none',
  outline: 'none',
  userSelect: 'none',
  '&:focus': { boxShadow: `0 0 0 2px '$textPrimary'` },
})

const CalloutHeading = styled('div', {
  color: 'white',
  fontSize: 18,
  fontWeight: 500,
  lineHeight: 1.2,
  marginTop: 16,
  marginBottom: 7,
})

const CalloutText = styled('p', {
  all: 'unset',
  color: '$textPrimary',
  fontSize: 14,
  lineHeight: 1.3,
})

const DropdownCallout = styled('div', {
  position: 'relative',
  marginRight: 50,
  paddingRight: 8,
  borderRight: '1px solid $border',
  width: '35%'
})

const CalloutImage = styled('figure', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

  '> *:not(:last-child)': {
    marginRight: 20
  },

  img: {
    position: 'relative',
    width: 112,
    zIndex: 1
  }
})

// For the container of the hero on the left side of the text
// This shows the image on top and the blob svg behind, in the background

const CalloutHero = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: 112
})

// For the blob behind the featured image - on the block to the right

const CalloutBg = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  width: '120%',
  height: '120%',
  zIndex: 0,

  svg: {
    position: 'absolute'
  }
})

interface ListProps {
  links?: {
    illustration?: string
    title: string
    descp?: string
    href?: string
    pageLink?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }[]
  layout?: 'one' | 'two'
  callout?: any
  children?: React.ReactNode
}

export const List = ({ 
    links, 
    layout,
    callout,
    children
  }:ListProps) => {

  return(

    <ListWrap {...{ layout }}>
      { callout ? (

        <NavigationMenu.Link asChild>
          <DropdownCallout>
            <CalloutImage>
              <CalloutHero>
                <CalloutBg>
                  <svg width="165" height="172" viewBox="0 0 165 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M145.735 144.849C131.175 161.473 110.813 172.803 91.9276 171.956C72.9368 171.108 55.423 158.191 41.6019 145.484C27.7808 132.672 17.7579 120.284 10.267 105.248C2.7762 90.2126 -2.07701 72.5298 0.877119 54.7412C3.72574 37.0585 14.5927 19.2699 30.5239 9.21082C46.4551 -0.848223 67.556 -3.17769 82.4322 4.76366C97.4139 12.5991 106.065 30.7054 120.941 45.6351C135.818 60.5649 156.918 72.3181 163.038 89.2596C169.157 106.095 160.295 128.119 145.735 144.849Z" fill="#F5F5F7"/>
                  </svg>
                </CalloutBg>

                <img src="/header/roi.png" />
              </CalloutHero>

              <CalloutText>
                <Heading bold color="gray" title="Featured" />
                <Heading size='l1' title="2022 Lifestyle Spending accounts (LSA) benchmark support" />
              </CalloutText>
            </CalloutImage>
          </DropdownCallout>
        </NavigationMenu.Link>

      ) : null }

      { links ? (
        <>
          { links.map(( link, i ) => (

            <ListItem 
              key={`link-${ i}`}
              illustration={ link.illustration }
              title={ link.title }
              descp={ link.descp }
              href={ link.href }
              pageLink={ link.pageLink }
              onClick={ link.onClick }
            />

          ))}
        </>
      ) : children }
    </ListWrap>

  )
}