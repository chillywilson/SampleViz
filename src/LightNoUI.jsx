import * as THREE from 'three'
import { useMemo, useRef, useState} from 'react'
// import { DirectionalLightHelper, SpotLightHelper } from 'three'
// import { useHelper } from '@react-three/drei'
// import { Environment } from '@react-three/drei'


export default function LightsNOUi(){

    const spotRef = useRef()
    // useHelper(spotRef,SpotLightHelper,10,'green')
    
return(
    <>
        <spotLight ref={spotRef} visible={true} intensity={0.3} position={[-2.02,2.53,2.85]} distance={4.50} decay={0.17} angle={.5} penumbra={0.37} castShadow/>   
    
    </>
)





}