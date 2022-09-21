import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SiteContainer, Block, Article, Heading, Text, List, Quote } from '@components'

const story = {
  title: 'modules/Article',
  component: Article,
  parameters: { layout: 'fullscreen' },
  argTypes: {}
}
export default story

export const Primary = () => (

  <SiteContainer blockSpacing="l2">
    <Block alignment="center">
      <Article
        title="Ross Ulbricht&apos;s The Growth Collection" 
        author="Jess Jordan" 
        authorLink="https://twitter.com/Schlomo"
        date="May 29, 2022" 
        readTime={ 5 } 
        socialShare={[
          { type: 'Facebook', shareURL: 'https://www.freerossdao.org/' },
          { type: 'Twitter', shareURL: 'https://www.freerossdao.org/' },
          { type: 'LinkedIn', shareURL: 'https://www.freerossdao.org/' }
        ]}
        image="/locations/edinburugh.jpg" 
        alt="Grow in the dark by Ross Ulbritch" 
      >
        <Text fontSize="l1" alignment="center">
          <p>Earlier this year in April, we bought Ross Ulbricht&apos;s second collection “The Growth Collection” at auction.</p>

          <p>
            This collection featured three pieces out of Ross&apos;s <i>Human Blockchain</i> series, which is ongoing and we can 
            expect to see more installments over time, and <i>What Happens to the Cages</i> which features a ruined prison, overgrown 
            with plant life, depicting what a future could potentially look like without the need to imprison others, as well 
            as the animation <i>Grow in the Dark</i>, which is an incredibly moving piece made of 318 individual black-and-white 
            hand-drawn frames by Ross in prison. 
          </p>

          <Quote 
            quote="Organizing is both science and art. It is thinking through a vision, a strategy, and then 
            figuring out who your targets are, always being concerned about power, always being concerned about 
            how you&apos;re going to actually build power in order to be able to push your issues, in order to be 
            able to get the target to actually move in the way that you want to.” What if social transformation 
            and liberation isn&apos;t about waiting for someone else to come along and save us? What if ordinary 
            people have the power to collectively free ourselves? In this timely collection of essays and 
            interviews, Mariame Kaba reflects on the deep work of abolition and transformative political 
            struggle." 
            source="We Do This &apos;Til We Free Us: Abolitionist Organizing and Transformative Justice by 
            Mariame Kaba, Haymarket Books"
          />

          <p>
            Unfortunately, we didn&apos;t win every single piece, but we did win most of them! In doing so, we&apos;ve contributed an 
            additional $500,000 to his legal trust.
          </p>

          <p>
            With the art we purchased, we have created many exciting new projects. Including an immersive exhibit and an 
            NFT Mintpass collection. There are also plans to build a marketplace that will be available to our collectors 
            in the future.
          </p>

          <p>
            Our immersive VR experience just wrapped up its first appearance at NFT.NYC! Everyone who saw it wants you to 
            know that the experience is indescribable (we are struggling with the words ourselves). The hosts reported many 
            visceral reactions among the viewers. We will keep you posted, but It should be available for home viewing on 
            the Oculus soon. Tour dates for the experience are coming soon! If you got a chance to see the exhibit, you have 
            about a month to claim your POAP from Jess via the FreeRossDAO Twitter account DMs or Discord.
          </p>

          <p>
            Our Mintpass is currently minting! 329 original 1 / 1 hand drawn frames from Ross Ulbricht&apos;s <i>Grow in the Dark</i> animation. 
            Each mintpass is priced at .3 eth. You can find the Mintpass at&nbsp; 
            <a href="https://www.freerossdao.org/mintpass/" target="_blank">freerossdao.org/mintpass/</a> 
          </p>

          <Heading title="Each Mintpass NFT contains:" bold="bold" />

          <List
            listStyle="bulleted"
            listItems={[
              { id: 0, title: 'Allowlist access for future pre-release drops as well as use of our upcoming marketplace before the public.' },
              { id: 2, title: 'A chance to receive a special 1 of 1 “remix” by artists teaming up with us for this launch.' },
              { id: 3, title: 'Physical goods package of Ross Ulbricht’s recent creative work' },
              { id: 4, title: 'Allowlist access for future pre-release drops as well as use of our upcoming marketplace before the public.' },
              { id: 5, title: 'Allowlist access for future pre-release drops as well as use of our upcoming marketplace before the public.' }
            ]}
          />
        </Text>
      </Article>
    </Block>
  </SiteContainer>
  
)
