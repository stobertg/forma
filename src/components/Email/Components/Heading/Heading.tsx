import React from 'react'

const HeadingStyle = { fontFamily: 'Labil Grotesk', fontSize: 16 }
const HeadingLarge = { ...HeadingStyle, fontSize: 44 }
const HeadingMedium = { ...HeadingStyle, fontSize: 20 }
const HeadingSmall = { ...HeadingStyle, fontSize: 18 }
const HeadingTiny = { ...HeadingStyle, fontSize: 14 }

// -------------- Typescript declarations -------------- //

interface HeadingProps {
  title: string | React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'tiny'
  bold?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Heading = ({
    title,
    size,
    bold
  }: HeadingProps ) => {
  
  return(

    <div
      style={
        size == 'large' ? HeadingLarge :
        size == 'medium' ? HeadingMedium :
        size == 'small' ? HeadingSmall :
        size == 'tiny' ? HeadingTiny :
        HeadingStyle
      }
    >
      { bold ? ( <><strong>{ title }</strong></> ) : <>{ title }</> }
    </div>
    
  )
}
