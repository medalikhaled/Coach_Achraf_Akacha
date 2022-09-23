import Button from '../components/Button'
import Link from 'next/link'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useIsSmall, useIsMedium } from '../components/mediaQuery'
import { variants } from './index'

const Data = [
  {
    id: '01',
    title: 'Diet Plan Only',
    img: '/images/diet.png',
    price: '50',
    delay: '.3',
  },
  {
    id: '02',
    title: 'Workout Plan Only',
    img: '/images/workout.png',
    price: '50',
    delay: '.5',
  },

  {
    id: '03',
    title: 'Workout + Diet Plan',
    img: '/images/imageex.png',
    price: '70',
    delay: '.7',
  },
]

const Online = () => {
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
      <h1 className="mb-4 flex items-center justify-center text-center font-teko text-3xl font-semibold uppercase tracking-wide text-darkfirst dark:text-white md:text-left md:text-5xl md:tracking-wider">
        Online Training Offers{' '}
      </h1>
      <main className="flex w-full flex-col items-center justify-center  gap-4 px-10 md:flex-row">
        {Data.map((data, index) => (
          <Card data={data} key={index}>
            {data.price}
          </Card>
        ))}
      </main>
      {/* <Button>
        <Link href={'/'}>Go Back</Link>
      </Button> */}
    </motion.div>
  )
}

export default Online

export const Card = ({ children, data }) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeIn', delay: `${data.delay}` }}
      className="card relative min-h-[500px] w-96 self-start rounded-lg bg-white shadow-xl dark:bg-darkfirst"
    >
      <figure className="px-10 pt-10">
        <img src={data.img} alt="" className="rounded-xl" />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title py-1 text-center font-poppins font-bold uppercase">
          {data.title}
          <br />
          {data.titlerest && ` ${data.titlerest}`}
        </h2>
        <h1 className="font-teko text-6xl font-extrabold">
          {children} <span className="text-sm">DT</span>
        </h1>
        {/* <p>{data.content}</p> */}
        <div className="card-actions">
          <button className="btn btn-primary mt-4 mb-8 rounded-lg border-[1px] border-[#ff1b6b] py-1 px-2">
            Reserve Now
          </button>
        </div>
      </div>
    </CardContainer>
  )
}

const CardContainer = styled(motion.div)`
  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: linear-gradient(-45deg, #45caff 0%, #ff1b6b 100%);
    transform: translate3d(0px, 20px, 0) scale(0.95);
    filter: blur(20px);
    opacity: var(0.7);
    transition: opacity 0.3s;
    border-radius: inherit;
  }

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: inherit;
    border-radius: inherit;
  }
`
