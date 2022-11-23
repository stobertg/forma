import React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { styled } from '@theme'
import { truncateCryptoAddress } from '../../lib/utils'
import { Heading } from '@components'

/* 
  *** ReadMe ***

  The avatar component is used as a primitive from RadixUi component library. This is not used at the moment but is there for 
  scalable solution if the microsite is built out. 

  The component contains the following features: 
  • Profile image
  • Profile image fallback if no image is present
  • Name, username, or crypto address the user wants to identify as

  *** End ReadMe ***
*/

// For the master container of the avatar component
// This contains the image on the left of the container and the name, userName, or CryptoAddress on the right of the container

const AvatarWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative'
})

// For the container of the image on the left of the container
// This holds the profile image within the center of a circled container

const AvatarImage = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 32,
  width: 32,
  minHeight: 32,
  height: 32,
  borderRadius: '50%',
  backgroundColor: '$white',
  overflow: 'hidden',
  userSelect: 'none',
  fontFamily: '$sansSerif',
  
  // If there is a name or username attached to avatar
  // This would always be to the right of the image or the fallback initials

  '+ span': { marginLeft: 12 },

  // This is unused at the moment but adding support for the different sizes of the avatar image
  // We can add more sizes by using the level theory to

  variants: {
    size: {
      l0: {},
      l1: {}
    }
  }
})

// For the styling of the image within the AvatarImage master container
// This positions the image within the center of the container, taking up the full width and height

const Image = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

// For the fallback of the profile image
// This is for when the image is not present and the fallback displays the initals of the user

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$white',
  color: '$black',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  fontFamily: '$serif'
})

// For the name of the user attached with the avatar, on the right side of the container
// This holds the name, username, or crypto address

const AvatarName = styled('span', {
  position: 'relative',
  width: '100%',
  whiteSpace: 'nowrap'
})

// -------------- Typescript declarations -------------- //

interface AvatarProps {
  size?: 'l0' | 'l1'
  image?: string
  imageAlt?: string
  name?: string
  userName?: string
  cryptoAddress?: any
  nameHidden?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Avatar = ({
    image, // Optional - for the image of the user
    imageAlt, // Optional - for the accessibilty alt text of the image used for the user
    name, // Optional - Supporting the name of the user
    userName, // Optional - Supporting the username of the user
    cryptoAddress, // Optional - Supporting the user to be identified by their crypto address
    size, // Optional - For the size of the image container of the user
    nameHidden // Optional - If the name needs to be hidden and only the image is present
  }:AvatarProps) => {

  const fullName = name ? name : null
  const firstName = fullName?.split(' ')[0]
  const lastName = fullName?.split(' ')[1]
  
  return(

    <AvatarWrap aria-label={ name || userName || cryptoAddress } {...{ size }}>
      <AvatarImage>
        <Image src={ image } alt={ imageAlt } />
        <AvatarFallback delayMs={600}>
          { name ? ( <strong>{ firstName?.[0] }{ lastName?.[0] }</strong> ) 
          : userName ? ( <Heading title={ userName[0] } bold /> ) 
          : ( <>{ cryptoAddress[0] }</> )
          }
        </AvatarFallback>
      </AvatarImage>

      { nameHidden ? null : (
        <AvatarName>
          { name ? ( <strong>{ firstName } { lastName }</strong> ) 
          : userName ? ( <Heading title={ userName } bold /> ) 
          : ( <strong>{ truncateCryptoAddress( cryptoAddress ) }</strong> )
          }
        </AvatarName> 
      )}
    </AvatarWrap>
    
  )
}
