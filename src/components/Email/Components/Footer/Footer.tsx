import React from 'react'
import { Table, Tbody, Tr, Td, Heading, Text, Button } from '@email'

const FooterStyles = {
}

// -------------- Typescript declarations -------------- //

interface FooterProps {

}

// ---------- This is the end of declarations ---------- //

export const Footer = ({

  }: FooterProps ) => {
  
  return(

    <Table>
      <Tbody>

        <Tr>
          <Td>
            <div style={ FooterStyles }>
              <Heading spacing="small" size="medium" title="Find help" />
              <Text spacing="small">Visit our detailed Help Center to find answers to commonly asked questions</Text>
              <Button spacing="small" variant="secondary" title="Visit Help Center" />
            </div>
          </Td>
        </Tr>

        <Tr spacing="large">
          <Td>
            <div style={ FooterStyles }>
              <Heading spacing="small" size="medium" title="Chat with us" />
              <Text spacing="small">Chat with our support team online 24/7 when you login to Forma, or email support@joinforma.com</Text>
              <Button spacing="small" variant="secondary" title="Got to Forma" />
            </div>
          </Td>
        </Tr>
      </Tbody>
    </Table>
    
  )
}
