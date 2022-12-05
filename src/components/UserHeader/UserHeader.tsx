import React from 'react'
import { styled } from '@theme'
import { Logo, Avatar, Icon, Dropdown } from '@components'

const HeaderWrap = styled('header', {
  position: 'relative',
  width: '100%',

  // For the container of the content within the nav
  // This has the logo on the left, links to the right of the logo, and the account dropdown on the right

  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    width: '95%',
    margin: '0 auto'
  }
})

const HeaderLeft = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',

  // To automate the spacing on 

  '> *:not(:last-child)': {
    marginRight: 32
  }
})

// For the styling of the links within the container
// These are the links directly to the right of the forma logo

const HeaderLinks = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',

  '> *:not(:last-child)': {
    marginRight: 40
  },

  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: '$textSecondary',

    '> *:not(:last-child)': {
      marginRight: 8
    }
  }
})

// -------------- Typescript declarations -------------- //

interface UserProps {

}

// ---------- This is the end of declarations ---------- //

export const UserHeader = ({}:UserProps) => {
  return(

    <HeaderWrap>
      <nav>
        <HeaderLeft>
          <Logo size="l0" />
          <HeaderLinks>
            <button><Icon size="l0" icon="store" /><strong>Store</strong></button>
            <button><Icon size="l0" icon="wallet" /><strong>Accounts</strong></button>
            <button><Icon size="l0" icon="transactions" /><strong>Claims</strong></button>
          </HeaderLinks>
        </HeaderLeft>

        <Dropdown
          trigger={ <Avatar nameHidden image="/people/christine.png" name="Christine Dailey" /> }
        />
      </nav>
    </HeaderWrap>
      
  )
}