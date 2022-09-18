import { Section } from './section'
import state from './state'
import { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, useGLTF } from '@react-three/drei'
import { textGradient } from '../Pricing'

const ModelLoader = ({ modelPath }) => {
  const gltf = useGLTF(modelPath, true)
  return <primitive object={gltf.scene} dispose={null} />
}

const Content = ({ children, modelPath, position }) => {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.y += 0.01))

  return (
    <Section factor={1.5} offset={1}>
      <group position={position}>
        <mesh ref={ref} position={[0, 0, 115]}>
          <ModelLoader modelPath={modelPath} />
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

const Model = ({
  modelPath = '/models/SkullModel/scene.gltf',
  canvasColor = '#121212',
  contentPosition = [0, 252.7, 1],
  children = 'Kιʅʅ, Sʅαყ, Eαƚ.',
}) => {
  return (
    <>
      <Canvas
        flat
        linear
        camera={{ position: [0, 0, 120], fov: 70 }}
        style={{ display: 'block', zIndex: 0 }}
      >
        <color attach="background" args={[0, 0, 0]} />
        <Lights />
        <Suspense fallback={null}>
          <Content modelPath={modelPath} position={contentPosition}>
            <div className="container flex min-h-screen min-w-full items-center justify-center bg-transparent text-center">
              <h1
                className={`text-poppins mb-60 text-2xl ${textGradient} md:-mb-96 md:text-4xl`}
              >
                {children ? children : 'Nothing Here'}
              </h1>
            </div>
          </Content>
        </Suspense>
      </Canvas>
    </>
  )
}

export default Model
