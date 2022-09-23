import React from 'react'
import { Table, Tbody, Tr, Td, Heading, Text, Button, DownloadApp } from '@email'

// -------------- Typescript declarations -------------- //

interface FooterProps {

}

// ---------- This is the end of declarations ---------- //

export const Footer = ({

  }: FooterProps ) => {
  
  return(

    <Table bgColor="#fff" contentWidth="small">
      <Tr>
        <Td>
          <Heading 
            spacing="small" 
            size="medium" 
            title="Find help" 
          />

          <Text 
            spacing="small"
          >
            Visit our detailed Help Center to find answers to commonly asked questions
          </Text>

          <Button 
            spacing="small" 
            variant="secondary" 
            title="Visit Help Center" 
            href="https://client.joinforma.com/explore/massage_envy/membership?utm_source=one_time_send&utm_medium=email&utm_campaign=user_massage"
          />
        </Td>
      </Tr>

      <Tr spacing="medium">
        <Td>
          <Heading 
            spacing="small" 
            size="medium" 
            title="Chat with us" 
          />

          <Text 
            spacing="small"
          >
            Chat with our support team online 24/7 when you login to Forma, or email support@joinforma.com
          </Text>
          
          <Button 
            spacing="small" 
            variant="secondary" 
            title="Got to Forma" 
            href="https://client.joinforma.com/explore/massage_envy/membership?utm_source=one_time_send&utm_medium=email&utm_campaign=user_massage"
          />
        </Td>
      </Tr>

      <DownloadApp />
    </Table>
    
  )
}
