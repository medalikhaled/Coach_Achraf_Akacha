import { Section } from './section'
import state from './state'
import { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, useGLTF } from '@react-three/drei'

const Model = ({ modelPath }) => {
  const gltf = useGLTF(modelPath, true)
  return <primitive object={gltf.scene} dispose={null} />
}

const HtmlContent = ({ children, modelPath, position }) => {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.y += 0.01))

  return (
    <Section factor={1.5} offset={1}>
      <group position={position}>
        <mesh ref={ref} position={[0, 0, 115]}>
          <Model modelPath={modelPath} />
        </mesh>
        <Html fullscreen={true}>{children}</Html>
      </group>
    </Section>
  )
}

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight intensity={1} position={[10, 10, 50]} />
      <directionalLight intensity={1.5} position={[0, 10, 20]} />
      <spotLight intensity={1} position={[500, 0, 0]} color={'#dc143c'} />
    </>
  )
}

export const Skull = () => {
  const scrollArea = useRef()

  const onScroll = (e) => {
    state.top.current = e.target.scrollTop
  }

  useEffect(() => void onScroll({ target: scrollArea.current }), [])

  return (
    <>
      <Canvas flat linear camera={{ position: [0, 0, 120], fov: 70 }}>
        <color attach="background" args={['#000']} />
        <Lights />
        <Suspense fallback={null}>
          <HtmlContent
            modelPath="/SkullModel/scene.gltf"
            position={[0, 252.7, 0]}
          >
            <div className="container flex min-h-screen min-w-full items-center justify-center bg-transparent text-center">
              <h1 className="text-poppins mb-80 text-2xl text-[crimson] md:-mb-96 md:text-6xl">
                Kill, Pray, Eat.
              </h1>
            </div>
          </HtmlContent>
        </Suspense>
      </Canvas>
    </>
  )
}

export default Dumbell
