import React from 'react'
import { NavWrap, NavHeader, NavLinks } from './Parts'

// -------------- Typescript declarations -------------- //

export interface LeftNavProps {
  links?: {
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
      <NavLinks 
        title="Components" 
        links={[
          { href: '/components/benefit-card', title: 'Benefit Card' },
          { href: '/components/chip', title: 'Chip' },
          { href: '/', title: 'Templates' },
          { href: '/', title: 'Upload Card' },
          { href: '/', title: 'Breadcrumbs' },
          { href: '/', title: 'Autocomplete' },
          { href: '/', title: 'Buttons' },
          { href: '/', title: 'Banners' },
          { href: '/', title: 'Modal' },
        ]} 
      />

      <NavLinks 
        title="Emails" 
        links={[
          { href: '/', title: 'Product Hero' },
          { href: '/', title: 'Chip' },
          { href: '/', title: 'Colors' },
          { href: '/', title: 'Icon' },
          { href: '/', title: 'Image' },
          { href: '/', title: 'List' },
          { href: '/', title: 'Logo' },
          { href: '/', title: 'Menu Button' },
          { href: '/', title: 'Chip' },
        ]} 
      />
    </NavWrap>
    
  )
}
