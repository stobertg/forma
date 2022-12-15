import React from 'react'
import { styled } from '@theme'
import { NavWrapper, NavItem } from './Parts'
import { Logo, ButtonContainer } from '@components'

const HeaderContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '100%'
})

const HeaderMiddleLinks = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative'
})

export const SiteHeader = () => {
  return (
  
    <HeaderContent>
      <Logo homeLink />  
     
      <NavWrapper>
        <HeaderMiddleLinks>
          <NavItem
            callout
            triggerTitle="Product"
            layout="two"
            links={[
              {  
                illustration: '/benefits/account-teambuilding.svg',
                href: '/docs/primitives/overview/introduction',
                title: 'LSA',
                descp: 'Forma Research'
              },
              {  
                illustration: '/benefits/account-teambuilding.svg',
                href: '/docs/primitives/overview/introduction',
                title: 'LSA',
                descp: 'Blog'
              },
              {  
                illustration: '/benefits/account-teambuilding.svg',
                href: '/docs/primitives/overview/introduction',
                title: 'LSA',
                descp: 'Events & Webinars'
              }
            ]}
          />

          <NavItem
            callout
            triggerTitle="Platform"
            layout="two"
            links={[
              {  
                illustration: 'account-lifestyle',
                href: '/docs/primitives/overview/introduction',
                title: 'LSA',
                descp: 'Forma Research'
              },
              {  
                illustration: 'account-lifestyle',
                href: '/docs/primitives/overview/introduction',
                title: 'LSA',
                descp: 'Blog'
              },
              {  
                illustration: 'account-lifestyle',
                href: '/docs/primitives/overview/introduction',
                title: 'LSA',
                descp: 'Events & Webinars'
              }
            ]}
          />

          <NavItem
            callout
            triggerTitle="Resources"
            layout="two"
            links={[
              {  
                illustration: '/benefits/account-lifestyle',
                href: '/docs/primitives/overview/introduction',
                title: 'LSA',
                descp: 'Lifestyle Spending Accounts'
              },
              {  
                href: '/docs/primitives/overview/getting-started',
                title: 'Pretax Accounts',
                descp: 'HSA, FSA, and more'
              },
              {  
                href: '/docs/primitives/overview/introduction',
                title: 'HRA',
                descp: 'Health Reimbursement Arrangements'
              },
              {  
                href: '/docs/primitives/overview/introduction',
                title: 'Rewards & Recognition',
                descp: 'Lorem ipsum sit dolor'
              },
            ]}
          />

          <NavItem
            href="https://github.com/radix-ui"
            title="Customers"
          />
        </HeaderMiddleLinks>
      
      </NavWrapper>

      <ButtonContainer
        buttons={[
          { size: 'l0', title: 'Log in' },
          { size: 'l0', variant: 'primary', title: 'Book a demo' }
        ]}
      />
    </HeaderContent>
  
  )
}
