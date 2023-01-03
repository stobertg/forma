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
  logoSize?: 'large'
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
          width: logoSize == 'large' ? 60 : 32,
        }}
      >
        <Image src="/global/logo/logomark.png" alt="Forma Logomark" />
      </div>
      
      <>
        { noWordMark ? null : (
          <>
            { onDarkBg ? (

              <>
                <div style={ WordMarkStyle }>
                  <Image src="/global/logo/wordmark-white.png" alt="Forma wordmark" />
                </div>
                { text ? <Heading spacing="small" size="tiny" title={ text } /> : null }
              </>

            ) : (

              <>
                <div style={ WordMarkStyle }>
                  <Image src="/global/logo/wordmark-indigo.png" alt="Forma wordmark" />
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
