/* eslint-disable prettier/prettier */

import { motion, useScroll } from 'framer-motion'
import styles from '../styles/Home.module.css'

export default function ProgressBar() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className={styles.progressbar}
      style={{ scaleX: scrollYProgress }}
    />
  )
}
