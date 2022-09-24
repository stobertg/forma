import React from 'react'
import { Table, Tr, Td, Logo } from '@email'

const IntroStyle = {
  width: '100%'
}

const IntroHasBg = {
  ...IntroStyle,
  color: '#fff',
  borderRadius: 32
}

const IntroContent = {
  width: '100%'
}

const IntroContentHasBg = {
  width: '85%',
  margin: '0 auto',
  padding: '50px 0'
}
 
// -------------- Typescript declarations -------------- //

interface IntroProps {
  logoOnDarkBg?: boolean
  contentWidth?: 'small' | 'medium'
  bgColor?: string
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Intro = ({
    logoOnDarkBg,
    contentWidth,
    bgColor,
    children
  }: IntroProps ) => {
  
  return(

    <Table {...{ contentWidth }}>
      <Tr>
        <Td>
          <div style={ bgColor ? { ...IntroHasBg, backgroundColor: bgColor } : IntroStyle }>
            <div style={ bgColor ? IntroContentHasBg : IntroContent }>
              <Logo onDarkBg={ logoOnDarkBg } />
              { children }
            </div>
          </div>
        </Td>
      </Tr>
    </Table>
    
  )
}
