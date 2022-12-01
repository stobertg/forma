import React from 'react'
import { CardBase } from './CardBase'
import { Button } from '@components'

/* 
  *** ReadMe ***

  The card is a bit of an unfinished component at the moment because it was not used in the final splash page
  This was intended to be used for thumbnails for blog post for the user to click to go to the blog page
  As for the moment, this component holds three features:

  • Hero image
  • Title
  • Subtitle

  *** End ReadMe ***
*/

// -------------- Typescript declarations -------------- //

interface CardProps {
  title?: string
  subTitle?: string
  href?: string
  pageLink?: string
  bgColor?: 'white200' | 'cyan100' | 'pink100'
  children?: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Card = ({
    title,
    subTitle,
    href, // Optional - If the button is clickable, take the user to an external website
    pageLink, // Optional - If the button is clickable and takes the user to an internal page
    bgColor,
    children
  }: CardProps ) => {
  
  return(

    <>
      { href ? (

        // Here we are adding support for the button to be clickable, and take the user
        // To an external site, outside of the FreeRossDAO, such as Snapshot - opens a new window

        <Button {...{ href }} target="_blank">
          <CardBase {...{ title, subTitle, bgColor }}>{ children }</CardBase>
        </Button>
      
      ) : pageLink ? (

        // Here we add support for the button to be clickable and take the user to another
        // page that is within the FreeRossDAO site, such as a Blog Post

        <Button {...{ pageLink }}>
          <CardBase {...{ title, subTitle, bgColor }}>{ children }</CardBase>
        </Button>

      ) : (

        // Here we are supporting a fallback if no button is needed
        // This will render a static card, for instances where multiple parts of the card is clickable
        // This could be something such as Snapshot card, where only one spot of the card should be clickable
        // Or a static card used for presentation, although in most cases, the card is clickable

        <CardBase {...{ title, subTitle, bgColor }}>{ children }</CardBase>

      )}
    </>

  )
}
