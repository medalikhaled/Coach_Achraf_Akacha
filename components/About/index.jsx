import styles from './about.module.css'
import Image from 'next/image'
import achraf from '../../public/photos/achraf1.png'
import Button from '../Button'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import { InView } from 'react-intersection-observer'
import Link from 'next/link'

// function getStaticPorps() {}

const About = () => {
  return (
    <main
      id="about"
      className={`${styles.main}  my-28 bg-white text-darkfirst dark:bg-darkfirst dark:text-white`}
    >
      <div
        className={`${styles.imgAnimation}  mt-6 block items-center justify-center md:mt-0 md:flex md:w-1/2 `}
      >
        <Image
          src={achraf}
          aria-label="my photo"
          alt="my photo"
          width={500}
          height={500}
        />
      </div>

      <div
        id="about"
        className="isolate z-50 flex flex-col items-center justify-center px-10  md:ml-16 md:block md:w-1/2"
      >
        <p className={styles.paragraph}>
          <span
            aria-placeholder="About me"
            className="text-poppins block text-black  dark:text-white md:mb-2"
          >
            <span className="flex flex-col">
              <span className="ml-2 text-center font-mono text-sm font-extralight md:text-left ">
                <span className={styles.span2}>
                  <span className="inline md:hidden">____ </span>Achraf
                </span>
                <span className={styles.span1}> Akacha ____</span>
              </span>
              <span className="text-center text-6xl font-bold transition-all duration-300 ease-in-out  hover:text-[#cb1a5b] md:text-left">
                About Me <span className="hidden md:inline">💪</span>
              </span>
            </span>
          </span>

          <span className="inline-block text-center text-2xl font-light leading-8 md:w-[85%] md:text-left">
            I'am a certified Professional{' '}
            <RoughNotation
              type="underline"
              show={true}
              color={'hsl(338deg, 77%, 45%)'}
              iterations={4}
              animationDuration={3000}
              order={1}
              animationDelay={1000}
            >
              Personal Trainer
            </RoughNotation>{' '}
            with five years of coaching experience. I offer a wide range variety
            of services to help you get the results you seek. I am also a{' '}
            <RoughNotation
              type="box"
              animate={true}
              show={true}
              color={'#DF00FF'}
              iterations={4}
              brackets={'left'}
              animationDuration={3000}
              order={2}
              animationDelay={1000}
            >
              certified nutritionist
            </RoughNotation>{' '}
            that can help you with your diet and nutrition.
          </span>
        </p>

        <Button
          link="https://api.whatsapp.com/send/?phone=21624670205&text&type=phone_number&app_absent=0&fbclid=IwAR2cvkQWSzyt5o00BjpZyhMjsG8-0bkqauXBOXr74TTwpLzj5g7jv3VQEao"
          tailwindClasses={'z-[99] bg-red-500'}
        >
          Contact Me
        </Button>
      </div>
    </main>
  )
}

export default About
