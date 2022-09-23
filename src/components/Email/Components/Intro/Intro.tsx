import React from 'react'
import { Table, Logo } from '@email'

const IntroStyle = {
  width: '100%'
}

const IntroHasBg = {
  ...IntroStyle,
  color: '#fff',
  borderRadius: 32
}

const IntroContent = {
  width: '100%'
}

const IntroContentHasBg = {
  width: '85%',
  margin: '0 auto',
  padding: '50px 0'
}
 
// -------------- Typescript declarations -------------- //

interface IntroProps {
  contentWidth?: 'small' | 'medium'
  bgColor?: string
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Intro = ({
    contentWidth,
    bgColor,
    children
  }: IntroProps ) => {
  
  return(

    <Table {...{ contentWidth }}>
      <div style={ bgColor ? { ...IntroHasBg, backgroundColor: bgColor } : IntroStyle }>
        <div style={ bgColor ? IntroContentHasBg : IntroContent }>
          <Logo />
          { children }
        </div>
      </div>
    </Table>
    
  )
}
