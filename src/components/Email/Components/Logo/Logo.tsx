import React from 'react'
import { Td, Image, Heading } from '@email'

const WordMarkStyle = {
  display: 'inline-block',
  width: 80,
  marginLeft: 12,
  transform: 'translateY( -25% )',
}

// -------------- Typescript declarations -------------- //

interface LogoProps {
  spacingTop?: 'small' | 'medium' | 'large'
  text?: string
  noWordMark?: boolean
  logoSize?: 'large' | 'medium'
  onDarkBg?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Logo = ({
    spacingTop,
    text,
    noWordMark,
    logoSize,
    onDarkBg
  }: LogoProps ) => {
  
  return(

    <Td {...{ spacingTop }}>
      <div 
        style={{
          display: 'inline-block',
          width: logoSize == 'large' ? 60 : logoSize == 'medium' ? 40 : 32,
        }}
      >
        <Image src="https://forma-formads.vercel.app/global/logo/logomark.png" alt="Forma Logomark" />
      </div>
      
      <>
        { noWordMark ? null : (
          <>
            { onDarkBg ? (

              <>
                <div style={ WordMarkStyle }>
                  <Image src="https://forma-formads.vercel.app/global/logo/wordmark-white.png" alt="Forma wordmark" />
                </div>
                { text ? <Heading spacing="small" size="tiny" title={ text } /> : null }
              </>

            ) : (

              <>
                <div style={ WordMarkStyle }>
                  <Image src="https://forma-formads.vercel.app/global/logo/wordmark-indigo.png" alt="Forma wordmark" />
                </div>
                { text ? <Heading spacing="small" size="tiny" title={ text } /> : null }
              </>

            )}
          </>
        )}
      </>
    </Td>
    
  )
}
