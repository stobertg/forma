import React, { useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { styled, globalStyles, lightTheme, darkTheme } from '@theme'
import { LeftNav } from '@components'

const SiteWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  position: 'relative',
  width: '100vw'
})

const ContentStage = styled('div', {
  position: 'relative',
  width: 'calc( 100vw - 300px )'
})

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => { globalStyles() }, [])

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: lightTheme, dark: darkTheme }}
      enableSystem={ false }
    >
      <SiteWrap>
        <LeftNav 
          links={[
            { href: '/', title: 'Button' },
            { href: '/', title: 'Chip' },
            { href: '/', title: 'Icon' },
            { href: '/', title: 'Image' },
            { href: '/', title: 'List' },
            { href: '/', title: 'Logo' },
            { href: '/', title: 'Menu Button' },
          ]}
        />
        <ContentStage><Component {...pageProps} /></ContentStage>
        {/* <Footer /> */}
      </SiteWrap>
    </ThemeProvider>
  )

}


export default MyApp
