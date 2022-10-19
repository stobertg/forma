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
        title="Brand" 
        links={[
          { href: '/', title: 'Colors' },
          { href: '/', title: 'Logo' },
          { href: '/', title: 'Typography' }
        ]} 
      />

      <NavLinks 
        title="Components" 
        links={[
          { href: '/', title: 'Autocomplete' },
          { href: '/', title: 'Banners' },
          { href: '/components/benefit-card', title: 'Benefit Card' },
          { href: '/components/button', title: 'Button' },
          { href: '/', title: 'Breadcrumbs' },
          { href: '/components/chip', title: 'Chip' },
          { href: '/', title: 'Modal' },
          { href: '/', title: 'Templates' },
          { href: '/', title: 'Upload Card' }
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
