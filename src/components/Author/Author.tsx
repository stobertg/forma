import React from 'react'
import { styled } from '@stitches/react'

/* 
  *** ReadMe ***

  The Steps component is always static but can be used in two different ways. First, in the Artizen protocol, it is used to
  shows which steps a user is in within the donation flow, meaning how far the are along from start to finish. The other
  way the component is used is for static, graphical representation to promote a CTA for usuing the donation serivce of the DAO.

  The steps come with two features:
  • Icon
  • Title

  *** End ReadMe ***
*/

// For the master container of the author
// This is used for blog and article post to show who on the team wrote it, and all other relevent info

const AuthorWrap = styled('div', {
  position: 'relative',
  fontFamily: '$primary',
  color: '$gray',

  // For the styling of the link within the container
  // Here we add the link to be underlined by default and the color change to green on hover

  a: {
    textDecoration: 'underline',
    transition: '$s1',

    '&:hover': { color: '$green' }
  },

  // For the autmoated spacing if there is another container directly below the author container
  // This will add spacing to the top of that continer, so if it wasn't there then no spacing will be added

  '+ div': { marginTop: 28 },

  // For the changes within the mobile breakpoint
  // This changes the font-size and spacing for the contents within the container

  '@media( max-width: 628px )': {
    fontSize: '12px',
    marginTop: '18px !important',
    '+ div': { marginTop: 18 },
  }
})

// For the container of all of the content within the Author component
// This holds the name(s), date, and how long it will take the user to read the article

const AuthorContent = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  position: 'relative',

  // This is the automate the • dot in between each of the data points
  // This shows up on the right of the container except for "by" at the beginning and the last child, at the end

  '> span': {
    position: 'relative',
    marginRight: 4,

    // Remove the dot and spacing accomidation of the first and last child

    '&:not(:first-child, :last-child)':{
      paddingRight: 20,

      // This is for the divder between the author, date, and read time'
      // Here we add a bullet to seperate each of the content 

      '&:after': {
        content: '•',
        position: 'absolute',
        right: 4,
        fontFamily: '$primary',
        color: '$gray'
      },

      // For the spacing changes on mobile breakpoints
      // This is a subtle change to the spacing on the right of the container

      '@media( max-width: 628px )': {
        paddingRight: 12,
        '&:after': { right: 2 }
      }
    }
  }
});

// This component is conditional - to support if there is more than one author
// This will automate the spacing and add an & at the end to signal more than one author

const Authors = styled('span', {
  display: 'inline-flex',
  justifyContent: 'center',
  position: 'relative',

  // Here we automatically input the & sign to show multiple authors
  // This is only conditional to the authors.map function, otherwise it will not show for one author

  '&:not(:last-child)': {
    marginRight: 5,
    paddingRight: 6,

    // For the seperators between the author
    // Here we add a , to seperate and then an & for the second to last child

    '&:after': {
      content: ',',
      position: 'absolute',
      right: 0,
      fontWeight: 500,
      fontFamily: '$primary',
      color: '$slate'
    },

    // Here we add the spacing changes and the & for the second to last child
    // The last child will have no divider, so here we add the final divider to be & instead of a ,

    '&:nth-last-child(2)': {
      paddingRight: 16,
      '&:after': { content: '&' }
    },

    // For the spacing changes on mobile breakpoints
    // This adds subtle spacing changes to the right of each container

    '@media( max-width: 628px )': {
      paddingRight: 4,
      '&:nth-last-child(2)': { paddingRight: 12 }
    }
  }
})

// ----------------- Typescript declarations ---------------- //

interface AuthorProps { 
  author?: string
  authorLink?: string
  date?: string
  readTime?: number
  authors?: {
    id: number
    link: string
  }[]
}

// ------------- This is the end of declarations ------------ //

export const Author = ({ 
    author, // Required if one author - supports the name of the writer
    authorLink, // Optional - if the suthors supports an external link such as Twitter or Website
    authors, // Required if multiple authors - supports the names of writers plus the & symbol inbetween
    date, // Required - supports the sate the article was written
    readTime // Required - Info for how long it will typically take the user to read the article
  }:AuthorProps) => {

  return(

    <AuthorWrap>
      <AuthorContent>
        <span>by</span>

        {authors ? (
          <span>
            {authors.map(( author:any, id: number ) => (
              <Authors key={ id }>
                { author.link ? (
                  <a href={ author.link } target="_blank" rel="noreferrer">
                    <strong>{ author.name }</strong>
                  </a>
                ) : (
                  <strong>{ author.name }</strong>
                )}
              </Authors>
            ))}
          </span>

          ) : (
            <>
              { authorLink ? (
                
                <span>
                  <a href={ authorLink } target="_blank" rel="noreferrer">
                    <strong>{ author }</strong>
                  </a>
                </span>

              ) : (

                <span><strong>{ author }</strong></span>

              )}
            </>
          )
        }

        <span>{date}</span>
        <span>{readTime}&nbsp;min read</span>
      </AuthorContent>
    </AuthorWrap>

  )
}