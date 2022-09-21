import React from 'react'
import { styled } from '../../../stitches.config'
import { ReadingBar, Heading, Author, SocialShare, Image } from '@components'

/* 
  *** ReadMe ***

  The article component is used throughout the website for long-form content, typically for pages such as blog posts
  This component comes with a variety of features which include:

  • Article Title
  • Author, date of article, and the how long it takes to read
  • Social share to Facebook, Twitter, LinkedIn, and copied link
  • Reading bar that complete once the user reaches the bottom of the page
  • Featured Image
  
  The article component is created to create design consistancy among all long-form content and creates limitations
  and necessary limitations to uphold the design integrity. The component also allows for children content to input and automate
  text, images, quotes, links, headings, ect.

  *** End ReadMe ***
*/

// For the master container of the foundational Article component
// This component is used to automate spacing, sizes, widths, ect for components wrapped within this components

const ArticleWrap = styled('article', {
  position: 'relative',
  maxWidth: 1100,
  width: '100%',
  maring: '0 auto'
})

// For the spacing between the text, image and the text below the hero image
// This automates the spacing on the bottom of each container

const ArticleHero = styled('div', {
  '> div': { marginBottom: 50 }
})

// For the introduction of the article on the very top of the article page
// This holds the title of the article, the author info and the social share on the bottom of the container

const ArticleIntro = styled('div', {
  position: 'relative',
  maxWidth: 800,
  margin: '0 auto',
})

// -------------- Typescript declarations -------------- //

interface ArticleProps {
  title: string
  author: string
  authorLink?: string
  date: string
  readTime: number
  image?: string
  alt?: string
  socialShare?: any
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Article = ({
    title, // Required - For the title of the article
    author, // Required - For the author of the article
    authorLink, // Optional - For the link of the author(s) such as twitter links or website
    date, // Required - date of the article
    readTime, // Required - read time of the article
    socialShare, // Optional - share links for the article to Facebook, Twitter, LinkedIn, and copied link
    image, // Optional - For the featured image of the article, below the Title
    alt, // Required if image is present - For the accessibilty and SEO of the featured image
    children // Required - For the rest of the content within the article ( the article content that makes it an article )
  }: ArticleProps ) => {
  
  return(

    <ArticleWrap>
      <ReadingBar />
      <ArticleHero>
        <ArticleIntro>
          <Heading bold="heavy" size="l7" { ...{ title }} />
          <Author {...{ author, authorLink, date, readTime }} />
          <SocialShare socials={ socialShare } />
        </ArticleIntro>

        { image ? ( <Image {...{ image, alt }} variant="hero" /> ) : null }
      </ArticleHero>
      { children }
    </ArticleWrap>
    
  )
}
