import { Html } from '@react-three/drei'
import React from 'react'

function Loader() {
  return (
    <Html>
        <div className=' top-0 left-0 w-full h-full flex-center absolute'>
        <div className=' w-[10vw] h-[10vw] rounded-full'>Loading...</div>
        </div>
    </Html>
  )
}

export default Loader