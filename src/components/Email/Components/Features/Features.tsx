import React from 'react'
import { Spacing, Heading, Image } from '@email'

interface FeaturesProps {

}

export const Features = ({ }:FeaturesProps) => {
  return(

    <Spacing>
      <div style={{ padding: '50px 0' }}>
        <Heading size="medium" alignment="center" title="Your benefits features" />
      </div>

      <div>
        <Heading size="medium" title="Forma Store" />
        <div>
          <div>
            <div style={{ display: 'inline-block', width: 150, marginTop: 2 }}><Image src="/emails/store-page.png" alt="Forma store" /></div>
            <div>
              <div style={{ display: 'block', verticalAlign: 'top' }}>
                <div style={{ display: 'inline-block', marginTop: 2 }}><Image src="/emails/icons/check-cyan-filled.png" alt="Forma checkmark" /></div>
                <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: 8 }}><Heading size="small" title="Savings with best in class vendors at Forma" /></div>
              </div>

              <div style={{ display: 'block', verticalAlign: 'top' }}>
                <div style={{ display: 'inline-block', marginTop: 2 }}><Image src="/emails/icons/check-cyan-filled.png" alt="Forma checkmark" /></div>
                <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: 8 }}><Heading size="small" title="Guaranteed eligibility and 24/7 support" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Spacing>

  )
}