import React from 'react'
import { Tbody, Td, Tr, Intro, Heading, Button, Text, Divider, EmailBlock, Spacing, Image, List } from '@email'

interface RecieptProps {
  emailTitle: string | number | React.ReactNode
  recieptType?: 'subscription' | 'failure' | 'canceled'
  intro?: string | number | React.ReactNode
  buttonLink: string
  productImage?: any
  productTitle?: any
  orderItems?: {
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
                { recieptType == 'canceled' ? null : <Divider spacing="medium" /> }
            </Intro>
            
            { recieptType == 'failure' ? (
              
              <>
                <EmailBlock sideSpacing="small">
                  <Heading bold size="small" title="To keep your subscription active:" />
                  <List
                    listItems={[
                      { title: 'Log in to your Forma account and link a personal credit card' },
                      { title: <>Reach out to our Forma Support team via live chat or email at <a href="mailto:support@joinforma.com">support@joinforma.com</a> and tell them you added credit card</> }
                    ]}
                  />
                  <Text spacing="small">
                    We&apos;ll <strong>cancel your subscription 4 days from today</strong> if you don&apos;t link a credit card.
                  </Text>
                </EmailBlock>

                <EmailBlock spacingTop="medium" sideSpacing="small">
                  <Heading bold size="small" title="If you still owe a subscription fee:" />
                  <List
                    listItems={[
                      { title: "We'll first try to take the fees from another eligible spending account" },
                      { title: "If there isn't another eligible account, we'll take it from your {this.wallet_name} account next time it renews" }
                    ]}
                  />
                </EmailBlock>
              </>

            ) : recieptType == 'canceled' ? (
              
              null

            ) : (

              <EmailBlock 
                sideSpacing="small"
                title={ recieptType == 'subscription' ? 'Order details' : 'Your order item'  }
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
                        { orderItems?.map(( list, i ) => (
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

            )}
          </Tr>
        </Tbody>
      </table>
    </Td>

  )
}