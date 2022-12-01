import React from 'react'
import { styled } from '@theme'
import { List, Icon } from '@components'

// For the master contaienr of the dropdown

const DropdownWrap = styled('div', {
  position: 'relative',
  borderRadius: '$r0',
  boxShadow: '0 2px 10px rgba( 0, 0, 0, 0.1 )',

  '*': {
    width: '100%',
    color: '$textPrimary'
  }
})

const DropdownContent = styled('div', {

})

const DropdownList = styled('div', {

})

interface DropdownProps {
  links?: {

  }[]
}

export const DropdownBase = ({ 
    links 
  }:DropdownProps) => {

  return(

    <DropdownWrap>
      <DropdownContent>
        <DropdownList>
          <List
            listItems={[
              { pageLink: '/', icon: 'settings', title: 'Settings' },
              { pageLink: '/', icon: 'timer', title: 'History' },
              { pageLink: '/', icon: 'documents', title: 'Program Policy' },
              { pageLink: '/', icon: 'help', title: 'Help & Support' },
              { pageLink: '/', icon: 'exit', title: 'Sign Out' },
            ]}
          />
        </DropdownList>
      </DropdownContent>
    </DropdownWrap>

  )
}