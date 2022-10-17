import type { NextPage } from 'next'
import { SiteContainer, Block, BlockItem, Heading, Text, BenefitCard } from '@components'

const Page: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l1">
      <Block blockItemSpacing='l0'>
        <BlockItem><Heading bold size="l6" title="Benefit Card" /></BlockItem>

        <BlockItem>
          <Text fontSize="l1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non erat nibh. Sed eget posuere sapien. Nullam ut 
              justo volutpat, consequat ligula et, cursus erat. Nulla vitae mattis ligula. Ut et nisi at ipsum tempor dapibus. 
              Maecenas luctus nisl leo, sit amet bibendum sem tempor commodo. Nullam quis viverra augue.
            </p>
          </Text>
        </BlockItem>
      </Block>

      <Block blockItemSpacing="l1">
        <BenefitCard 
          illustration="account-custom"
          title="Benefit Program Name"
          chipTitle="Program Status"
          text="Add one to three lines of text to describe the purpose and usage of this benefit program."
        />
      </Block>
    </SiteContainer>

  )
}

export default Page
