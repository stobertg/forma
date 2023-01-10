import React from 'react'
import { Tr, Td, Heading, Spacing, Image } from '@email'

const WrapStyle = {
  width: '100%',
  padding: '32px 0',
  borderTop: '1px solid #eeeff2',
  borderBottom: '1px solid #eeeff2'
}

const ButtonContainer = {
  width: '100%'
}

const ButtonStyle = {
 display: 'inline-block',
 width: 125
}

// -------------- Typescript declarations -------------- //

interface DownloadAppProps {
  title: string
  appProviders: {
    href: string
    provider: string
    title: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const DownloadApp = ({
    title,
    appProviders
  }: DownloadAppProps ) => {
  
  return(

    <Td spacingTop="small">
      <div style={ WrapStyle }>
        <Heading bold size="small" title={ title } />

        <Spacing spacing="small">
          <div style={ ButtonContainer }>
            { appProviders.map(( provider, i ) => (
              <a 
                key={`provider-${ i }`}
                style={{ ...ButtonStyle, marginRight: 12 }} 
                href={ provider.href }
              >
                <Image src={
                  provider.provider == 'apple' ? 'https://forma-formads.vercel.app/appstore/apple.png' : 
                  provider.provider == 'google' ? 'https://storage.googleapis.com/assets.twicapp-production.twic.ai/sendgrid/member-stipend/AnimaPackage-Web-PJgaj/img/large-reminder-expiration-download-store-play-37D4ED26-D807-486B-B077-331820EDD4FF@2x.png' :
                  `/appstore/${ provider.provider }.png`
                } alt={ provider.title } />
              </a>
            ))}
          </div>
        </Spacing>
      </div>
    </Td>
    
  )
}
