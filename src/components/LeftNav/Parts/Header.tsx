import React from 'react'
import { styled } from '@theme'
import { Logo, Input } from '@components'

const NavHeaderWrap = styled('div', {
  position: 'relative',
  width: '100%',
})

const NavHeaderContent = styled('div', {
  position: 'relative',
  width: '80%',
  margin: '0 auto',
  padding: '32px 0',

  // For the automated spacing between elements within the container
  // This will add the spacing to the bottom of the containers 

  '> *:not(:last-child)': {
    marginBottom: 16
  }
})

// ---------- This is the end of declarations ---------- //

export const NavHeader = () => {
  
  return(

    <NavHeaderWrap>
      <NavHeaderContent>
        <Logo variant="logo-full" />
        <Input height="small" id="search" label="Search" type="text" />
      </NavHeaderContent>
    </NavHeaderWrap>
    
  )
}
