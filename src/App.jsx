import { Canvas, useFrame  } from '@react-three/fiber'

import { Stats, OrbitControls, ContactShadows, useGLTF, useHelper, PerspectiveCamera, Stage } from '@react-three/drei'
// import { useControls, button } from 'leva'
import { Suspense, useMemo, useRef } from 'react'

import Model from "./vrPlus"
import Lights from './Lights'

import { Environment } from '@react-three/drei'
import LightsNOUi from './LightNoUI'

export default function App() {

  // const [x , setX]= useState(true)

  // const controls = useControls(
  //   {
  //     "Seperate": button(() => {
        
  //       setX(current => !current) 
  //       console.log(x)
  //     })
  //   },
  //   [x]
  // );


  return (
  
    <Canvas  camera= {{position: [-1.748, 1.446, 1.471],rotation:[-36.14, -46.58, -27.94],fov:90}}shadows>
    <Environment preset="forest" />
      <Lights  />      
      <Suspense fallback={null}> 
      <Model castShadow receiveShadow/>
      <ContactShadows
          scale={50}
          position={[-0.01, -0.13, 0.1]}
          opacity={2}
          color="#ffffff"
        />
      </Suspense>    
      <OrbitControls />
      <Stats />
    </Canvas>

   
  )
}
