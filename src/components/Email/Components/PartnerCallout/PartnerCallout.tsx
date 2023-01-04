import React from 'react'
import { Heading, Image, Button } from '@email'

interface PartnerProps {
  title?: string
}

export const PartnerCallout = ({ title }:PartnerProps) => {
  return(

    <div
      className="mobile__spacing--small"
      style={{ padding: 50 }}
    >
      { title ? ( <Heading bold size="large" color="white" {...{ title }} /> ) : null }
      <Image spacing="large" src="/emails/bubbles.png" alt="Forma graphic" />
      <Image spacing="large" src="/emails/partner-logos/logos-1.png" alt="Forma graphic" />
      <div style={{ display: 'block', textAlign: 'center', marginTop: 32 }}><Button variant="primary" title="Shop now" /></div>
      <Heading alignment="center" size="tiny" spacing="medium" color="white" title="*Store products are subject to availability and employer eligibility" />
    </div>

  )
}