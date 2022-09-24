import React from 'react'
import { Image } from '@email'

const LogoMarkStyle = {
  display: 'inline-block',
  width: 32
}

const WordMarkStyle = {
  display: 'inline-block',
  width: 80,
  marginLeft: 12,
  transform: 'translateY( -25% )'
}

// -------------- Typescript declarations -------------- //

interface LogoProps {
  noWordMark?: boolean
  onDarkBg?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Logo = ({
    noWordMark,
    onDarkBg
  }: LogoProps ) => {
  
  return(

    <div>
      <div style={ LogoMarkStyle }><Image src="/global/logo/logomark.png" alt="Forma Logomark" /></div>
      
      <>
        { noWordMark ? null : (
          <>
            { onDarkBg ? (

              <div style={ WordMarkStyle }>
                <Image src="/global/logo/wordmark-white.png" alt="Forma wordmark" />
              </div>

            ) : (

              <div style={ WordMarkStyle }>
                <Image src="/global/logo/wordmark-indigo.png" alt="Forma wordmark" />
              </div>

            )}
          </>
        )}
      </>
    </div>
    
  )
}
