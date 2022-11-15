import React from 'react'
import { NavWrapper, NavItem } from './Parts'

export const SiteHeader = () => {
  return (
    
    <NavWrapper>
      <NavItem
        triggerTitle="Learn"
        links={[
          {}
        ]}
      />

      <NavItem
        callout
        triggerTitle="Resources"
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
        triggerTitle="Products"
        layout="two"
        links={[
          {  
            illustration: 'account-lifestyle',
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

    </NavWrapper>
  
  )
}
