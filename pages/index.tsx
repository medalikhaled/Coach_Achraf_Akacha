import type { NextPage } from 'next'
// import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import MainLayout from '../components/Layouts/mainLayout'
import Pricing from '../components/Pricing'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Model from '../components/ThreeModel'
import Cursor from '../components/Cursor/cursor'
import Social from '../components/social'
import Scrolling from '../components/Scrolling'
import Transformation from '../components/transformation'
import Header from '../components/Header'

export const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}
const Home: NextPage = () => {
  const { theme } = useTheme()

  return (
    <motion.div
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'linear', duration: 0.5 }}
      className="relative"
    >
      <Scrolling position={'160vh'} />
      <Scrolling position={'25vh'} />

      <Header />
      <About />

      <Gallery />

      <MainLayout>
        <div className="grid h-full min-h-full place-content-center border-t-[0.5px] border-t-darkfirst dark:border-t-white">
          <Pricing />
        </div>
      </MainLayout>

      <MainLayout>
        <div className="h-full min-h-full w-full min-w-full ">
          <Transformation />
        </div>
      </MainLayout>

      <div className="flex h-screen max-h-screen min-h-screen w-full flex-col-reverse md:flex-row">
        <div className="container relative flex h-1/2 w-full min-w-[50%] flex-col  items-center justify-center text-center text-2xl text-black dark:text-white md:h-full md:w-1/2 md:text-4xl">
          <div className="grid h-1/2 w-full place-content-center pt-10 md:pt-24">
            <Cursor>My Social Media</Cursor>
          </div>
          <div className="grid h-1/2 w-full place-content-center">
            <Social />
          </div>
        </div>
        <div className="h-[50%] w-full md:h-full md:w-1/2">
          <Model
            modelPath={'/models/DumbellModel/scene.gltf'}
            contentPosition={[0, 251.7, 1]}
            children={'Commit, Perform, Succeed.'}
            canvasColor={'#121212'}
          />
        </div>
      </div>

      <div className="fixed bottom-4 left-4 z-[999] grid h-10 w-10 place-content-center rounded-full bg-darkfirst hover:cursor-pointer dark:bg-white ">
        <Link href={'#'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={theme === 'dark' ? 'black' : 'white'}
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

export default Home
