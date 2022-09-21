import Image from 'next/image'
import Button from '../Button'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

const data = [
  {
    id: '01',
    title: 'PLAN NUTRITION & PLAN DE suppléments',
    imgUrl: '/photos/achraf3.png',
    reverse: false,
    button: 'contactez-nous',
    paragraph:
      'Afin de maximiser vos résultats à la salle de sport, vous devez vous concentrer sur votre alimentation, votre hydratation et votre récupération. Nous vous proposons un plan nutritionnel et un plan de suppléments adaptés à vos objectifs et à votre budget.',
  },

  {
    id: '02',
    title: 'DES ENTRAINEMENTS PERSONNALISÉS',
    imgUrl: '/photos/achraf5.png',
    reverse: true,
    button: 'contactez-nous',
    paragraph:
      'Afin de maximiser vos résultats à la salle de sport, vous devez vous concentrer sur votre alimentation, car manger les mauvais aliments peut nuire à vos résultats de musculation Adopter le bon régime alimentaire fera la différence dans la réalisation de vos objectifs.',
  },

  {
    id: '03',
    title: 'COACHING PRIVÉ',
    imgUrl: '/photos/achraf8.png',
    reverse: false,
    button: 'contactez-nous',
    paragraph:
      'C’est un fait connu que les gens travaillent plus dur en présence des autres. Avoir un entraîneur à vos côtés peut vous fournir l&apos;encouragement, l&apos;énergie et la motivation dont vous avez besoin pour démarrer votre parcours de remise en forme.',
  },

  {
    id: '04',
    title: 'COACHING Online',
    imgUrl: '/photos/achraf1.png',
    reverse: true,
    button: 'contactez-nous',
    paragraph:
      'Coaching a distance avec des instructions bien détaillées et des vidéos pour vous guider dans vos exercices. Vous pouvez également vous entraîner à la maison avec des exercices simples et efficaces.',
  },
]

const ImageContainer = styled(motion.div)`
  background-image: url(${({ url }) => url.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 50%;
  min-height: 800px;

  @media (max-width: 768px) {
    height: 50%;
    width: 100%;
    /* background-position: 0 0rem; */
    min-height: 600px;
  }
`

export default function Gallery() {
  return (
    <>
      <h1 className="mb-4 text-center font-teko text-3xl font-semibold uppercase tracking-wide text-darkfirst dark:text-white md:text-left md:text-5xl md:tracking-wider">
        Nos Services :{' '}
      </h1>
      <main
        id="services"
        className="isolate grid min-h-fit place-content-center"
      >
        {data.map((dataObject) => (
          <Card dataObject={dataObject} key={dataObject.id} />
        ))}
      </main>
    </>
  )
}

const Card = ({ dataObject }) => {
  return (
    <InView threshold={0.25} triggerOnce={true}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={`flex ${
            dataObject.reverse
              ? 'flex-col md:flex-row-reverse'
              : ' flex-col md:flex-row'
          }  w-[99vw] items-center justify-center overflow-hidden`}
        >
          <ImageContainer
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            url={dataObject}
          />

          <div className="relative grid h-1/2 min-h-[500px] w-full place-content-center bg-white px-16 py-6 dark:bg-[#272727] md:h-full md:min-h-full md:w-[50%]">
            <div
              id="watermark"
              className="absolute left-12 top-8  h-1/2 min-h-fit font-teko text-4xl font-semibold text-darksecond opacity-30 dark:text-white md:left-24 md:h-full md:text-9xl"
            >
              {dataObject.id}
            </div>
            <h1 className="text-center font-teko text-3xl font-semibold uppercase tracking-wide text-darkfirst dark:text-white md:text-left md:text-5xl md:tracking-wider">
              {dataObject.title}
            </h1>
            <p className="my-1 w-full text-center font-[Ubunto] text-sm font-light leading-7 text-darksecond dark:text-[#9c9c9c] md:my-3 md:w-[80%] md:text-left md:text-[17px]">
              {dataObject.paragraph}
            </p>

            <Button>View More</Button>
          </div>
        </div>
      )}
    </InView>
  )
}

///Finished: Needs some refinement and change the data
