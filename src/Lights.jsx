import * as THREE from 'three'
import { Suspense, useMemo, useRef } from 'react'
import { DirectionalLightHelper, SpotLightHelper } from 'three'
import { useControls, button } from 'leva'
import { useHelper } from '@react-three/drei'




export default function Lights(props) {
  
  const ambientRef = useRef()
  const directionalRef = useRef()
  
  const pointRef = useRef()
  const spotRef = useRef()

  useHelper(directionalRef,DirectionalLightHelper,1,'red')
  useHelper(spotRef,SpotLightHelper,10,'green')

 const diroptions = useMemo(() => {
    return {
      

      visible:{value: true,onChange:(v)=>{directionalRef.current.visible = v}},
      
      x: { value: -1.69, min: -5, max: Math.PI * 2, step: 0.01 },
      y: { value: 2.53, min: -5, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: -5, max: Math.PI * 2, step: 0.01 },

      color: {
        value: 'white',
        onChange: (v) => {
          directionalRef.current.color = new THREE.Color(v)
        }
      },
      castShadow: true,

      intensity: {
        value: 1,
        min: 0,
        max: 7,
        step: 0.1,
        onChange: (v) => {
          directionalRef.current.intensity = v
        }
      }       
    }
  }, [])

  const spotOptions = useMemo(() => {
    return {
      
      visible:{value: true,onChange:(v)=>{spotRef.current.visible = v}},
      castShadow: true,

      x: { value: -2.02, min: -5, max: Math.PI * 2, step: 0.01 },
      y: { value: 2.53, min: -5, max: Math.PI * 2, step: 0.01 },
      z: { value: 2.85, min: -5, max: Math.PI * 2, step: 0.01 },
      penumbra: { value: 0.37, min: 0, max: 1, step: 0.01 },
      distance:{ value: 4.50, min: 1, max: 11, step: 0.01 },
      decay:{ value: 0.17, min: 0, max: 2, step: 0.01 },

    

      color: {
        value: 'white',
        onChange: (v) => {
          spotRef.current.color = new THREE.Color(v)
        }
      },

      angle: {      
         value: .5, 
         min: 0, 
         max:Math.PI / 3, 
        step: 0.1,
        onChange: (v) => {
          spotRef.current.angle = v
        }
      },
      
      intensity: {
        value: .6,
        min: 0,
        max: 7.0,
        step: 0.1,
        onChange: (v) => {
          spotRef.current.intensity = v
        }
      },
          
    }
  }, [])

  const pA = useControls('Directional Light', diroptions)
  const pB = useControls('Spot Light', spotOptions)
  
  useControls('Ambient Light', {
    visible: {
      value: false,
      onChange: (v) => {
        ambientRef.current.visible = v
      }
    },
    color: {
      value: 'white',
      onChange: (v) => {
        ambientRef.current.color = new THREE.Color(v)
      }
    }
  })
  
  useControls('Point Light', {
    visible: {
      value: false,
      onChange: (v) => {
        pointRef.current.visible = v
      }
    },
    position: {
      x: .8,
      y: 0,
      z: 0,
      onChange: (v) => {
        pointRef.current.position.copy(v)
      }
    },
    color: {
      value: 'white',
      onChange: (v) => {
        pointRef.current.color = new THREE.Color(v)
      }
    }
  })

  return (
    <>
      <ambientLight ref={ambientRef} />
      <directionalLight ref={directionalRef} position={[pA.x, pA.y, pA.z]}/>   
      <pointLight ref={pointRef} />
      <spotLight ref={spotRef}  decay={[pB.decay]} penumbra={[pB.penumbra]} angle={[pB.angle]} distance ={[pB.distance]} position={[pB.x, pB.y, pB.z]}/>
    </>
  )
}