import Header from '../components/Header'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const SlideOne = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('photos/achraf2.png');
  background-position: 0 100 0 0;
  background-size: cover;
  background-repeat: no-repeat;
`

const data = []

const Test = () => {
  return (
    <div className="grid h-full min-h-screen w-screen place-content-center">
      <motion.div
        className="container h-[150px] w-[150px] bg-red-500"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
      />
    </div>
  )
}

export default Test

// <div className="mt-16 h-[500px] min-h-[500px] w-full">
// <Header />
// </div>
