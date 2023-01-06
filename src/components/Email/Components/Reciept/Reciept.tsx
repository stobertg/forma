import React from 'react'
import { Tbody, Td, Tr, Intro, Heading, Button, Text, Divider, EmailBlock, Spacing, Image } from '@email'

interface RecieptProps {
  buttonLink: string
  orderItems: {
    title: string | number | React.ReactNode
    items: {
      title: string | number | React.ReactNode
    }[]
  }[]
}

export const Reciept = ({ orderItems, buttonLink }:RecieptProps) => {
  return(

    <Td>
      <table
        className="mobile__margin--none"
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          marginBottom: 20,
          paddingBottom: 50,
          background: '#fff',
          borderRadius: 16
        }}
      >
        <Tbody>
          <Tr>
            <Intro 
              smallPaddingBottom
            >
              <Heading 
                spacing="medium"
                bold
                size="large" 
                title="Thanks for your order!"
              />

              <Text spacing="medium" fontSize="medium">
                Hi &#123;&nbsp;first name&nbsp;&#125;,
              </Text>

              <Text spacing="small" fontSize="medium">
                Thank you for shopping at Forma Store! We&apos;re working on getting everything ready. Your order will be 
                shipped in 5-10 business days* directly to you.
              </Text>

              <Text spacing="medium" fontSize="medium">
                <strong>Order Number:</strong> <a href="https://joinforma.com">W1150150997</a>
              </Text>

              <Text fontSize="medium">
                <strong>Order Date:</strong> July 20, 2022
              </Text> 

              <Divider spacing="medium" />
            </Intro>
            
            <EmailBlock 
              sideSpacing="small"
              title="Your order item"
            >  
              <table style={{ width: '100%' }}>
                <tbody>
                  <tr style={{ width: '100%' }}>
                    <td style={{ verticalAlign: 'top', width: '35%' }}>
                      <Spacing spacing="medium">
                        <div style={{ width: 100 }}>
                          <Image src="/products/fitbit/fitbit-watch.png" alt="Fitbit watch" />
                        </div>
                      </Spacing>
                    </td>

                    <Td>
                        { orderItems.map(( list, i ) => (
                          <Spacing spacing="medium" key={`item-${ i }`}>
                            <Heading bold size="small" title={ list.title } />
                            
                            { list.items.map(( item, i ) => (
                              <Heading key={`list-${ i }`} spacing="tiny" title={ item.title } />
                            ))}
                          </Spacing>
                        ))}

                        <Button spacing="medium" href={ buttonLink } variant="primary" title="View Order Details" />
                  
                    </Td>
                  </tr>
                </tbody>
              </table>
            </EmailBlock>
          </Tr>
        </Tbody>
      </table>
    </Td>

  )
}