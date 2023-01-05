import React from 'react'
import { GlobalContainer } from '@email'

// -------------- Typescript declarations -------------- //

interface EmailProps {
  contentWidth?: 'small' | 'medium'
  children: React.ReactNode
  supportInFooter?: boolean
  withoutFooter?: boolean
  bgColor?: 'white'
  removeFooterTopSpacing?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Email = ({
    contentWidth,
    children,
    supportInFooter,
    withoutFooter,
    bgColor,
    removeFooterTopSpacing
  }: EmailProps ) => {
  
  return(

    <>
      <style>
        {`
          table * { font-family: Labil Grotesk, Arial, Helvetica, sans-serf !important }
          body{ margin: 0 }
          @media(max-width: 600px) {
            .mobile__add--br { border-radius: 16px }
            .mobile__margin--small { margin-left: 10px !important; margin-right: 10px !important; }
            .mobile__margin--none { margin-left: 0px !important; margin-right: 0px !important; }
            .mobile__spacing--small { padding-left: 20px !important; padding-right: 20px !important; }
            .mobile__spacing--medium { padding-left: 30px !important; padding-right: 30px !important; }
            .mobile__padding--bottom-none { padding-bottom: 0 !important }
            .thumbnail { padding: 20px 0 !important; font-size: 14px !important; }
            .thumbnail img { max-width: 100px !important; }
          }
        `}
      </style>

      <GlobalContainer {...{ contentWidth, supportInFooter, withoutFooter, bgColor, removeFooterTopSpacing }}>
        { children }
      </GlobalContainer>
    </>
    
  )
}
