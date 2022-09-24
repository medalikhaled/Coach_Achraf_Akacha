import { Card } from './online'
import Button from '../components/Button'
import Link from 'next/link'
import { useIsSmall, useIsMedium } from '../components/mediaQuery'
import { motion } from 'framer-motion'
import { variants } from './index'

const Data = [
  {
    id: '01',
    title: 'Solo Private',
    titlerest: 'Session',
    price: '20',
    img: 'photos/transformation1.png',
  },
  {
    id: '02',
    title: 'Workout + Diet',
    price: '150',
    titlerest: '1 month',
    img: 'photos/transform4.png',
  },
]

export default function Private() {
  const isSmall = useIsSmall()

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear', duration: 0.5 }}
      className="mt-20 w-full"
    >
      <div className="mt-80 md:mt-0">
        <h1 className="mb-4 flex items-center justify-center py-4 text-center font-teko text-3xl font-semibold uppercase tracking-wide text-darkfirst dark:text-white  md:mb-0 md:py-0 md:text-left md:text-5xl md:tracking-wider">
          Personal Training Offers{' '}
        </h1>
        <main className="flex h-screen max-h-screen w-full flex-col items-center justify-center gap-4  px-10 md:mt-0 md:flex-row">
          {Data.map((data, index) => (
            <div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeIn', delay: 0.5 }}
            >
              <Card data={data}>{data.price}</Card>
            </div>
          ))}
        </main>
      </div>
      {/* <Button>
        <Link href={'/'}>Go Back</Link>
      </Button> */}
    </motion.div>
  )
}
