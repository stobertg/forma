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

}

// ---------- This is the end of declarations ---------- //

export const DownloadApp = ({

  }: DownloadAppProps ) => {
  
  return(

    <Tr spacing="medium">
      <Td>
        <div style={ WrapStyle }>
          <Heading bold size="small" title="Benefits on the go with the Forma app" />

          <Spacing spacing="small">
            <div style={ ButtonContainer }>
              <a style={{ ...ButtonStyle, marginRight: 12 }} href="https://storage.googleapis.com/assets.twicapp-production.twic.ai/sendgrid/member-stipend/AnimaPackage-Web-PJgaj/img/large-reminder-expiration-download-store-ios-531F0136-FE67-41EA-9836-1446029E3D85@2x.png">
                <Image src="/appstore/apple.png" alt="Download from the App Store" />
              </a>

              <a style={ ButtonStyle } href="https://storage.googleapis.com/assets.twicapp-production.twic.ai/sendgrid/member-stipend/AnimaPackage-Web-PJgaj/img/large-reminder-expiration-download-store-play-37D4ED26-D807-486B-B077-331820EDD4FF@2x.png">
                <Image src="/appstore/google.png" alt="Download from the Google Play Store" />
              </a>
            </div>
          </Spacing>
        </div>
      </Td>
    </Tr>
    
  )
}
