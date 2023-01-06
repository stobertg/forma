import React from 'react'
import { Tbody, Td, Tr, Intro, Heading, Button, Text, Divider, EmailBlock, Spacing, Image } from '@email'

interface RecieptProps {
  emailTitle: string | number | React.ReactNode
  recieptType?: 'subscription'
  intro?: string | number | React.ReactNode
  buttonLink: string
  productImage: string
  productTitle: string
  orderItems: {
    title: string | number | React.ReactNode
    items: {
      title: string | number | React.ReactNode
    }[]
  }[]
}

export const Reciept = ({ 
    orderItems, 
    buttonLink,
    emailTitle,
    intro,
    productImage,
    productTitle,
    recieptType
  }:RecieptProps) => {

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
            <Intro smallPaddingBottom >
              <Heading 
                spacing="medium"
                bold
                size="large" 
                title={ emailTitle }
              />

              { intro }

              <Divider spacing="medium" />
            </Intro>
            
            <EmailBlock 
              sideSpacing="small"
              title={ recieptType == 'subscription' ? 'Order details' : 'Your order item' }
            >  
              <table style={{ width: '100%' }}>
                <tbody>
                  <tr style={{ width: '100%' }}>
                    <td style={{ verticalAlign: 'top', width: '35%' }}>
                      <Spacing style={{ marginRight: 22 }} spacing="medium">
                        <div style={{ width: 100 }}>
                          <Image src={ productImage } alt={ productTitle } />
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

                      <Button 
                        spacing="medium" 
                        variant="primary"
                        title={ recieptType == 'subscription' ? 'Manage Subscription' : 'View Order Details' }
                        href={ buttonLink }  
                      />
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