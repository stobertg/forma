import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { LeftNav } from '@components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LeftNav />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  )
}

export default MyApp
