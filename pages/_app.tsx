import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Suspense, useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import Head from 'next/head'

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
        <Suspense fallback={<div>Loading...</div>}>
          <Head>
            <title>Coach Achraf Akacha</title>
            <meta
              name="description"
              content="The Portfolio of the achraf akacha, a proffessional certified personal gym trainer"
            />
            <link rel="icon" href="/favicon.ico" />
            <link
              href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&family=Poppins:wght@100;300;700&display=swap"
              rel="stylesheet"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin=""
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Teko:wght@300;600;700&display=swap"
              rel="stylesheet"
            />
          </Head>

          <Navigation />
          <Component {...pageProps} />
        </Suspense>
      </ThemeProvider>
    )
  }
}

export default MyApp
