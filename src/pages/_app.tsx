import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/globals'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

function MyApp({ Component, pageProps }: AppProps) {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
