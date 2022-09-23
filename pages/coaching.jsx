// import CardFlip from '../components/Card'
import MainLayout from '../components/Layouts/mainLayout'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ProgressBar from '../components/ProgressBar'
import { InView } from 'react-intersection-observer'
import Scrolling from '../components/Scrolling'
import { variants } from './index'

const Data = [
  { id: '1', url: '/photos/transformations/transform1.png' },
  { id: '2', url: '/photos/transformations/transform2.png' },
  { id: '3', url: '/photos/transformations/transform3.png' },
  { id: '4', url: '/photos/transformations/transform4.png' },
  { id: '5', url: '/photos/transformations/transform5.png' },
  { id: '6', url: '/photos/transformations/transform6.png' },
  { id: '7', url: '/photos/transformations/transform7.png' },
  { id: '8', url: '/photos/transformations/transform8.png' },
  { id: '9', url: '/photos/transformations/transform9.png' },
  { id: '10', url: '/photos/transformations/transform10.png' },
  { id: '11', url: '/photos/transformations/transform11.png' },
  { id: '12', url: '/photos/transformations/transform12.png' },
  { id: '13', url: '/photos/transformations/transform13.png' },
  { id: '14', url: '/photos/transformations/transform14.png' },
  { id: '15', url: '/photos/transformations/transform15.png' },
  { id: '17', url: '/photos/transformations/transform17.png' },
  { id: '19', url: '/photos/transformations/transform19.png' },
  { id: '20', url: '/photos/transformations/transform20.png' },
  { id: '21', url: '/photos/transformations/transform21.png' },
  { id: '22', url: '/photos/transformations/transform22.png' },
]

const Important = [
  {
    id: '1',
    url: '/photos/transformation1.png',
    delay: '.4',
    dir: 'x',
  },
  {
    id: '2',
    url: '/photos/transformation2.png',
    delay: '1.6',
    dir: 'y',
  },
  {
    id: '3',
    url: '/photos/transformation3.png',
    delay: '.6',
    dir: 'x',
  },
]

const Coaching = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear', duration: 0.5 }}
    >
      <MainLayout>
        <ProgressBar />
        <Scrolling position={'40vh'} />
        <section className="my-24">
          <h1 className="w-full pb-6 text-center font-teko text-4xl md:text-8xl">
            Transformations
          </h1>
          <div className="mb-10 flex h-full w-full flex-row flex-wrap items-center justify-center gap-6">
            {Important.map((item) => (
              <motion.div
                key={item.id}
                initial={
                  item.id === '1'
                    ? { opacity: 0, [item.dir]: -100 }
                    : { opacity: 0, [item.dir]: 100 }
                }
                animate={{ opacity: 1, [item.dir]: 0 }}
                transition={{
                  delay: item.delay,
                  duration: 1,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  style={{ borderRadius: '30px' }}
                  width={400}
                  height={400}
                  src={item.url}
                />
              </motion.div>
            ))}
          </div>
          <div className="flex h-full w-full flex-row flex-wrap items-center justify-center gap-6">
            {Data.map((item) => (
              <InView key={item.id} threshold={0.25} triggerOnce>
                {({ inView, ref }) => (
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView && { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeIn' }}
                  >
                    <Image
                      style={{ borderRadius: '10px' }}
                      width={300}
                      height={300}
                      src={item.url}
                    />
                  </motion.div>
                )}
              </InView>
            ))}
          </div>
        </section>
      </MainLayout>
    </motion.div>
  )
}

export default Coaching
