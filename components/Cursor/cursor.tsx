import { useEffect, useState } from 'react'
import styles from './cursor.module.css'
import { motion } from 'framer-motion'
import { FC, ReactNode } from 'react'

type Props = {
  bgColor?: string
  children: ReactNode
}

const Cursor: FC<Props> = ({
  children,
  bgColor = 'rgb(234 179 8)',
}: Props): JSX.Element => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  const [cursorVariant, setCursorVariant] = useState('default')
  const [inArea, setInArea] = useState(false)

  useEffect(() => {
    const mouseMove = (e: any) => {
      e.preventDefault()
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants: any = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },

    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: { bgColor },
      mixBlendMode: 'difference',
    },
  }

  function textEnterHandler() {
    setCursorVariant('text')
  }

  function textLeaveHandler() {
    setCursorVariant('default')
  }

  function handleMouseEnter() {
    setInArea(true)
  }

  function handleMouseLeave() {
    setInArea(false)
  }

  return (
    <div
      className="grid h-full min-h-full w-full min-w-full place-content-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.h1
        onMouseEnter={textEnterHandler}
        onMouseLeave={textLeaveHandler}
      >
        {children}
      </motion.h1>

      <motion.div
        className={`${inArea || 'hidden'} ${styles.cursor}`}
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  )
}

export default Cursor
