import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { styled, keyframes } from '@stitches/react';
import { Icon, Button, ButtonContainer } from '@components'
import { List, ListItem } from './Parts'

export const SiteHeader = () => {
  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenu.Item>
          <NavigationMenuTrigger>
            Learn <Icon icon="caret-down" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <List>
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <Callout href="/">
                    <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <CalloutHeading>Radix Primitives</CalloutHeading>
                    <CalloutText>Unstyled, accessible components for React.</CalloutText>
                  </Callout>
                </NavigationMenu.Link>
              </li>

              <ListItem 
                href="https://stitches.dev/" 
                title="Stitches"
                descp="CSS-in-JS with best-in-class developer experience."
              />

              <ListItem 
                href="/colors" 
                title="Colors"
                descp="Beautiful, thought-out palettes with auto dark mode."
              />

              <ListItem 
                href="https://icons.radix-ui.com/" 
                title="Icons" 
                descp="A crisp set of 15x15 icons, balanced and consistent."
              />
            </List>
          </NavigationMenuContent>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenuTrigger>
            Overview <Icon icon="caret-down" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <List 
              layout="two"
              links={[
                {  
                  href: '/docs/primitives/overview/introduction',
                  title: 'LSA',
                  descp: 'Lifestyle Spending Accounts'
                },
                {  
                  href: '/docs/primitives/overview/getting-started',
                  title: 'Pretax Accounts',
                  descp: 'HSA, FSA, and more'
                },
                {  
                  href: '/docs/primitives/overview/introduction',
                  title: 'HRA',
                  descp: 'Health Reimbursement Arrangements'
                },
                {  
                  href: '/docs/primitives/overview/introduction',
                  title: 'Rewards & Recognition',
                  descp: 'Lorem ipsum sit dolor'
                },
              ]}
            />
           
          </NavigationMenuContent>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenuLink href="https://github.com/radix-ui">Github</NavigationMenuLink>
        </NavigationMenu.Item>

        <NavigationMenuIndicator>
          <Arrow />
        </NavigationMenuIndicator>
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenuRoot>
  );
};

const enterFromRight = keyframes({
  from: { transform: 'translateX(200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const enterFromLeft = keyframes({
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(200px)', opacity: 0 },
});

const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-200px)', opacity: 0 },
});

const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
});

const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const NavigationMenuRoot = styled(NavigationMenu.Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  zIndex: 1,
});

const NavigationMenuList = styled(NavigationMenu.List, {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'white',
  padding: 4,
  borderRadius: 6,
  listStyle: 'none',
  boxShadow: `0 2px 10px $bgPrimary`,
  margin: 0,
});

const itemStyles = {
  padding: '8px 12px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 15,
  color: '$textPrimary',
  '&:focus': { boxShadow: `0 0 0 2px $textPrimary` },
  '&:hover': { backgroundColor: '$bgPrimary' },
};

const NavigationMenuTrigger = styled(NavigationMenu.Trigger, {
  all: 'unset',
  ...itemStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
});

const NavigationMenuLink = styled(NavigationMenu.Link, {
  ...itemStyles,
  display: 'block',
  textDecoration: 'none',
  fontSize: 15,
  lineHeight: 1,
});

const NavigationMenuContent = styled(NavigationMenu.Content, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  '@media only screen and (min-width: 600px)': { width: 'auto' },
  animationDuration: '250ms',
  animationTimingFunction: 'ease',
  '&[data-motion="from-start"]': { animationName: enterFromLeft },
  '&[data-motion="from-end"]': { animationName: enterFromRight },
  '&[data-motion="to-start"]': { animationName: exitToLeft },
  '&[data-motion="to-end"]': { animationName: exitToRight },
});

const NavigationMenuIndicator = styled(NavigationMenu.Indicator, {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: '100%',
  overflow: 'hidden',
  zIndex: 1,
  transition: 'width, transform 250ms ease',
  '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
  '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
});

const NavigationMenuViewport = styled(NavigationMenu.Viewport, {
  position: 'relative',
  transformOrigin: 'top center',
  marginTop: 10,
  width: '100%',
  backgroundColor: 'white',
  borderRadius: 6,
  overflow: 'hidden',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  height: 'var(--radix-navigation-menu-viewport-height)',
  transition: 'width, height, 300ms ease',
  '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
  '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  '@media only screen and (min-width: 600px)': {
    width: 'var(--radix-navigation-menu-viewport-width)',
  },
});

const ListItemLink = styled('a', {
  display: 'block',
  outline: 'none',
  textDecoration: 'none',
  userSelect: 'none',
  padding: 12,
  borderRadius: 6,
  fontSize: 15,
  lineHeight: 1,
  '&:focus': { boxShadow: `0 0 0 2px $bgPrimary` },
  '&:hover': { backgroundColor: '$bgPrimary' },
});

const ListItemHeading = styled('div', {
  fontWeight: 500,
  lineHeight: 1.2,
  marginBottom: 5,
  color: '$textPrimary',
});

const ListItemText = styled('p', {
  all: 'unset',
  color: '$textPrimary',
  lineHeight: 1.4,
  fontWeight: 'initial',
});

const Callout = styled('a', {
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  background: `linear-gradient(135deg, '$textPrimary' 0%, '$textPrimary' 100%);`,
  borderRadius: 6,
  padding: 25,
  textDecoration: 'none',
  outline: 'none',
  userSelect: 'none',
  '&:focus': { boxShadow: `0 0 0 2px '$textPrimary'` },
})

const CalloutHeading = styled('div', {
  color: 'white',
  fontSize: 18,
  fontWeight: 500,
  lineHeight: 1.2,
  marginTop: 16,
  marginBottom: 7,
})

const CalloutText = styled('p', {
  all: 'unset',
  color: '$textPrimary',
  fontSize: 14,
  lineHeight: 1.3,
})

const ViewportPosition = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  top: '100%',
  left: 0,
  perspective: '2000px',
})

// For the arrow on top of the container
// This follows the user from dropdown to dropdown, animating between them

const Arrow = styled('div', {
  position: 'relative',
  top: '70%',
  width: 10,
  height: 10,
  borderTopLeftRadius: 2,
  backgroundColor: 'white',
  transform: 'rotate(45deg)'
})