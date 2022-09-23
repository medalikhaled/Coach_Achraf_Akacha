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
    <main className="mt-24">
      <div className="h-screen min-h-[95vh] w-full bg-[#242424]">
        <SlideOne data={data} />
      </div>
      <div className="mt-16 h-[500px] min-h-[500px] w-full">
        <Header />
      </div>
    </main>
  )
}

export default Test
