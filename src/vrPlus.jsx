/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import React, { useEffect, useRef, useState, useMemo  } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { AnimationMixer, AnimationAction } from 'three'
import { useControls } from 'leva'

export default function  Model(props ) {
  
  const group = useRef()
  const { nodes,   materials, animations } = useGLTF('./models/VR_PLUS_FOR_WEB_TEST-01.gltf')
  const previousAction = usePrevious(props);
  const { actions, names, } = useAnimations(animations, group)
  const j = new AnimationMixer()


  


  const act1 = actions[names[1]]

 
  const [bool1, setBool1] = useState(false)


  function test(){
    if(previousAction){
      setBool1(current => !current)
     
    }
    setBool1(true)
    console.log('Setting bol '+bool1)
  }


  const DryWall = useMemo(() => {
    return{
      Wall:{ value:0.12, min: 0.12, max: .8, step: 0.01 },   
    }     
  },[])

  const VR = useMemo(() => {
    return{
      Product:{ value:0.1, min: 0.1, max: .5, step: 0.01 },   
    }     
  },[])

    const beams = useMemo(() => {
      return{
        wood:{ value:0.08, min: 0.08, max: .37, step: 0.01 },
        
      }     
    },[])

    const pC = useControls('DryWall',DryWall)
    const pB = useControls('VR', VR)
    const pA = useControls('Beams', beams)

   


  
  const snapBeams= [-1.24,0.65,pA.wood]
  const snapVR= [-0.64, 0.69, pB.Product]
  const snapDry= [-0.64, 0.69, pC.Wall]
  return (
    <group ref={group} {...props} dispose={null}>
      
      <group name="Scene">
        <mesh name="floor" geometry={nodes.floor.geometry} material={materials.concreate} position={[-0.64, -0.04, 0.57]} />
        <mesh name="beams" geometry={nodes.beams.geometry} material={materials['wood.001']} position={snapBeams} />
        <mesh name="ground" geometry={nodes.ground.geometry} material={materials.dirt} position={[-0.64, -0.04, -0.42]} />
        <mesh name="foam" geometry={nodes.foam.geometry} material={materials.Cinder_Block_mat} position={[-0.48, 0.46, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <group name="vrplus" position={snapVR} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials.FiolWhite} />
          <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={materials['Fi-fiol']} />
          <mesh name="Plane001_2" geometry={nodes.Plane001_2.geometry} material={nodes.Plane001_2.material} />
        </group>
        <group name="drywall" position={snapDry} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials.wall} />
          <mesh name="Plane002_1" geometry={nodes.Plane002_1.geometry} material={nodes.Plane002_1.material} />
        </group>
        <mesh name="wall001" geometry={nodes.wall001.geometry} material={materials.foam} position={[-0.48, 0.46, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

;

useGLTF.preload('./models/VR_PLUS_FOR_WEB_TEST-01.gltf')

function usePrevious(value) {


  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  // Store current value in ref
  useEffect(() => {
    //console.log(value)   

    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}