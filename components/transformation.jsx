import styled from 'styled-components'
import imageOne from '../public/photos/transformation1.png'
import imageTwo from '../public/photos/transformation2.png'
import Image from 'next/image'
import Button from './Button'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'
import { Fragment } from 'react'

const Img = styled(motion.div)`
  background: url('/photos/transformation2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-position: top;
  }
`

export default function Transformation() {
  return (
    <Fragment>
      <div className="flex h-full min-h-full w-full flex-col-reverse items-center justify-center gap-2 bg-white  dark:bg-darkfirst md:flex-row-reverse">
        <div className="flex h-1/2 w-full flex-col items-center justify-center gap-1 md:h-full md:w-1/2">
          <p className="w-1/2 text-center font-poppins font-light">
            I'm Proud that I have succeded to guid many clients to get in shape,
            boost their confidence and even to be a proffessional athletes.{' '}
            <br /> You can view some of the transformations that some clients
            agreed to share:
          </p>
          <Button link={'/coaching'}>Check Transformations</Button>
        </div>

        <InView threshold={0.25} triggerOnce>
          {({ inView, ref }) => (
            <Img
              ref={ref}
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: 'easeInOut',
              }}
              className="h-1/2 w-full md:h-full md:w-1/2"
              src={imageTwo}
            />
          )}
        </InView>
      </div>
    </Fragment>
  )
}
