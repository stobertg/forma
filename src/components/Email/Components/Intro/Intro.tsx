import React from 'react'

// -------------- Typescript declarations -------------- //

interface IntroProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Intro = ({
    children
  }: IntroProps ) => {
  
  return(

    <div>
      <div>
        { children }
      </div>
    </div>
    
  )
}
