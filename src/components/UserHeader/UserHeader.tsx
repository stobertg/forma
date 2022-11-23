import React from 'react'
import { styled } from '@theme'
import { Logo, Avatar, ButtonContainer } from '@components'

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



interface UserProps {

}

export const UserHeader = ({}:UserProps) => {
  return(

    <HeaderWrap>
      <nav>
        <Logo size="l0" />
        <ButtonContainer
          buttons={[
            { icon: 'store', title: 'Store' },
            { icon: 'store', title: 'Accounts' },
            { icon: 'store', title: 'Claims' }
          ]}
        />

        <Avatar 
          nameHidden
          image="/people/christine.png" 
          name="Christine Dailey" 
        />
      </nav>
    </HeaderWrap>
      
  )
}