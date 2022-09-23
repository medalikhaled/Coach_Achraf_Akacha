import { Fragment } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'
import Link from 'next/link'

export const textGradient =
  'text-transparent bg-gradient-to-r from-[#45caff] to-[#ff1b6b] bg-clip-text'

const Pricing = () => {
  return (
    <InView threshold={0.25} triggerOnce>
      {({ inView, ref }) => (
        <Fragment>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            ref={ref}
            transition={{ ease: 'easeInOut', duration: 1.2 }}
            className={`mb-10 w-full text-center font-teko text-4xl font-semibold  text-white md:text-8xl ${textGradient}`}
          >
            Pricing Offers
          </motion.h1>

          <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-6">
            <Link href={'/online'}>
              <Card
                initial={{ y: 100, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                ref={ref}
                transition={{ ease: 'easeOut', duration: 1.2 }}
              >
                <h1
                  className={`${textGradient} font-teko text-2xl font-normal md:text-4xl`}
                >
                  Online
                </h1>
                <h3 className={`${textGradient} text-8xl`}>
                  70
                  <span className={`${textGradient} text-lg font-light`}>
                    DT
                  </span>
                </h3>
              </Card>
            </Link>

            <Link href={'/private'}>
              <Card
                initial={{ y: 100, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                ref={ref}
                transition={{ ease: 'easeOut', duration: 1.2 }}
              >
                <h1
                  className={`${textGradient} font-teko text-2xl font-normal md:text-4xl`}
                >
                  Personal
                </h1>
                <h3 className={`${textGradient} text-8xl`}>
                  150<span className="text-lg font-light">DT</span>
                </h3>
              </Card>
            </Link>
          </div>
        </Fragment>
      )}
    </InView>
  )
}

export default Pricing

export const Card = styled(motion.div)`
  position: relative;
  background-color: #f5f5f5;
  padding: 30px 0;
  margin-bottom: 30px;
  width: 500px;
  height: 350px;
  border-radius: 10px;
  color: #333;
  display: grid;
  place-content: center;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 768px) {
    width: 300px;
    height: 200px;
  }

  &:hover {
    cursor: pointer;
  }

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

//Finished
