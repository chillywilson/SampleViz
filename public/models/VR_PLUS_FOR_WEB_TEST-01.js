/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/VR_PLUS_FOR_WEB_TEST-01.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="floor" geometry={nodes.floor.geometry} material={materials.concreate} position={[-0.64, -0.04, 0.57]} />
        <mesh name="beams" geometry={nodes.beams.geometry} material={materials['wood.001']} position={[-1.24, 0.65, 0.08]} />
        <mesh name="ground" geometry={nodes.ground.geometry} material={materials.dirt} position={[-0.64, -0.04, -0.42]} />
        <mesh name="foam" geometry={nodes.foam.geometry} material={materials.Cinder_Block_mat} position={[-0.48, 0.46, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <group name="vrplus" position={[-0.64, 0.69, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials.FiolWhite} />
          <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={materials['Fi-fiol']} />
          <mesh name="Plane001_2" geometry={nodes.Plane001_2.geometry} material={nodes.Plane001_2.material} />
        </group>
        <group name="drywall" position={[-0.64, 0.69, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials.wall} />
          <mesh name="Plane002_1" geometry={nodes.Plane002_1.geometry} material={nodes.Plane002_1.material} />
        </group>
        <mesh name="wall001" geometry={nodes.wall001.geometry} material={materials.foam} position={[-0.48, 0.46, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/VR_PLUS_FOR_WEB_TEST-01.gltf')
