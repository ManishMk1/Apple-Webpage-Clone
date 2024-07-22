import React from 'react'
import {OrbitControls, View } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import { AmbientLight } from 'three'
import { Suspense } from 'react'
import Lights from './Lights'
import Iphone from './Iphone'
import * as THREE from 'three'
import Loader from './Loader'
function ModelView({index,groupRef,gsapType,controlRef,setRotationState,size,item}) {
  return (
   <View
    index={index}
    id={gsapType}
    className={` border-red-500 w-full h-full absolute ${index===2?'right-[-100%]':''}`}
   >
    <ambientLight intensity={0.3} />
    <PerspectiveCamera makeDefault position={[0,0,4]}></PerspectiveCamera>
    <Lights></Lights> 
    <OrbitControls 
    makeDefault
    ref={controlRef}
    enableZoom={false}
    enablePan={false}
    rotateSpeed={1}
    target={new THREE.Vector3(0,0,0)}
    onEnd={()=>setRotationState(controlRef.current.getAzimuthalAngle())}
    /> 
    <group ref={groupRef} name={`${index===1}?'small':'large'`} position={[0,0,0]}>
    <Suspense fallback={<Loader/>}>
    <Iphone scale={ index===1?[15,15,15]:[17,17,17]}
      item={item}
      size={size}
    />
    </Suspense>
    </group>
    
    
    
   </View>
  )
}

export default ModelView