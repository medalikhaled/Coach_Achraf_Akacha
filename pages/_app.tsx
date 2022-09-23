import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Suspense, useState, useEffect, FC } from 'react'
import Navigation from '../components/Navigation'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  //to avoid Hydration mismatch
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  if (typeof window === 'undefined') {
    return null
  } else {
    return (
      <ThemeProvider
        enableSystem={true}
        attribute="class"
        defaultTheme="system"
      >
        <Suspense fallback={<h1>Loading...</h1>}>
          <Head>
            <title>Coach Achraf Akacha</title>
            <meta
              name="description"
              content="The Portfolio of the achraf akacha, a proffessional certified personal gym trainer"
            />
          </Head>

          <Navigation />
          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} />
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    )
  }
}

export default MyApp
