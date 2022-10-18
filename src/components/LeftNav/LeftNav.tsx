import React from 'react'
import { NavWrap, NavHeader, NavLinks } from './Parts'

// -------------- Typescript declarations -------------- //

export interface LeftNavProps {
  links: {
    title: string
    href: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const LeftNav = ({
    links
  }: LeftNavProps ) => {
  
  return(

    <NavWrap>
      <NavHeader />
      <NavLinks title="Components" {...{ links }} />
    </NavWrap>
    
  )
}
