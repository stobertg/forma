import React from 'react'

const IntroStyle = {
  backgroundColor: '#150050',
  color: '#fff',
  width: '100%',
  borderRadius: 32
}

const IntroContent = {
  width: '80%',
  margin: '0 auto',
  padding: '50px 0'
}
 
// -------------- Typescript declarations -------------- //

interface IntroProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Intro = ({
    children
  }: IntroProps ) => {
  
  return(

    <div style={ IntroStyle }>
      <div style={ IntroContent }>
        { children }
      </div>
    </div>
    
  )
}
