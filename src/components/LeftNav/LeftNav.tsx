import React from 'react'
import { styled } from '@theme'
import { NavWrap, NavHeader, NavLinks } from './Parts'

const NavLinkWrap = styled('div', {
  position: 'relative',
  height: 'calc( 100% - 178px )',
  paddingBottom: 50,
  overflow: 'scroll'
})

const Links = [
  { category: 'brand', title: 'Colors', href: '/brand/colors' },
  { category: 'brand', title: 'Logo', href: '/brand/logo' },
  { category: 'brand', title: 'Typeface', href: '/brand/typeface' },
  { category: 'brand', title: 'Font Sizes', href: '/brand/font-sizes' },

  { category: 'components', href: '/components/accordion', title: 'Accordion' },
  { category: 'components', href: '/components/avatar', title: 'Avatar' },
  { category: 'components', href: '/components/banner', title: 'Banner' },
  { category: 'components', href: '/components/breadcrumbs', title: 'Breadcrumbs' },
  { category: 'components', href: '/components/button', title: 'Button' },
  { category: 'components', href: '/components/card', title: 'Card Templates' },
  { category: 'components', href: '/components/chip', title: 'Chip' },
  { category: 'components', href: '/components/icons', title: 'Icons' },
  { category: 'components', href: '/components/illustrations', title: 'Illustrations' },
  { category: 'components', href: '/components/input', title: 'Input' },
  { category: 'components', href: '/components/checkbox', title: 'Input - Checkbox' },
  { category: 'components', href: '/components/list', title: 'List' },
  { category: 'components', href: '/components/list-horizontal', title: 'List - Horizontal' },
  { category: 'components', href: '/components/progress', title: 'Progress' },
  { category: 'components', href: '/components/snackbar', title: 'Snackbar' },
  { category: 'components', href: '/components/switch', title: 'Switch' },
  { category: 'components', href: '/components/tabs', title: 'Tabs' },
  { category: 'components', href: '/components/tooltip', title: 'Tooltip' },

  { category: 'modules', href: '/components/benefit-card', title: 'Benefit Card' },
  { category: 'modules', href: '/components/callout', title: 'Callout' },
  { category: 'modules', href: '/components/dropdown', title: 'Dropdown' },
  { category: 'modules', href: '/components/menu', title: 'Menu' },
  { category: 'modules', href: '/components/modal', title: 'Modal' },            
  { category: 'modules', href: '/', title: 'Upload Card' },

  { category: 'foundation', href: '/foundation/site-header', title: 'Site Header' },
  { category: 'foundation', href: '/foundation/user-header', title: 'User Header' },
]

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

      <NavLinkWrap>
        <NavLinks 
          title="Brand" 
          links={[
            { href: '/brand/colors', title: 'Colors' },
            { href: '/brand/logo', title: 'Logo' },
            { href: '/brand/typeface', title: 'Typeface' }
          ]} 
        />

        <NavLinks 
          title="Foundation" 
          links={[
            { href: '/foundation/font-sizes', title: 'Font Sizes' },
            { href: '/foundation/site-header', title: 'Site Header' },
            { href: '/foundation/user-header', title: 'User Header' },
          ]} 
        />

        <NavLinks 
          title="Components" 
          links={[
            { href: '/components/accordion', title: 'Accordion' },
            { href: '/components/avatar', title: 'Avatar' },
            { href: '/components/banner', title: 'Banner' },
            { href: '/components/benefit-card', title: 'Benefit Card' },
            { href: '/components/breadcrumbs', title: 'Breadcrumbs' },
            { href: '/components/button', title: 'Button' },
            { href: '/components/callout', title: 'Callout' },
            { href: '/components/card', title: 'Card Templates' },
            { href: '/components/chip', title: 'Chip' },
            { href: '/components/dropdown', title: 'Dropdown' },
            { href: '/components/icons', title: 'Icons' },
            { href: '/components/illustrations', title: 'Illustrations' },
            { href: '/components/input', title: 'Input' },
            { href: '/components/checkbox', title: 'Input - Checkbox' },
            { href: '/components/list', title: 'List' },
            { href: '/components/list-horizontal', title: 'List - Horizontal' },
            { href: '/components/menu', title: 'Menu' },
            { href: '/components/modal', title: 'Modal' },   
            { href: '/components/progress', title: 'Progress' },
            { href: '/components/snackbar', title: 'Snackbar' },
            { href: '/components/switch', title: 'Switch' },
            { href: '/components/tabs', title: 'Tabs' },
            { href: '/components/tooltip', title: 'Tooltip' }
          ]} 
        />

        <NavLinks 
          title="Emails" 
          links={[
            { href: '/emails/template1', title: 'Template 1' },
            { href: '/emails/template1', title: 'Template 2' },
            { href: '/emails/template1', title: 'Template 3' }
          ]} 
        />
      </NavLinkWrap>
    </NavWrap>
    
  )
}
