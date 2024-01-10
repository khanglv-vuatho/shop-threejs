'use clinet'

import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'
import CameraRig from '../CameraRig'
import Backdrop from '../Backdrop'
import Shirt from '../Shirt'

const CanvasModel = () => {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <Environment preset='city' />
        {/* <CameraRig>
          <Backdrop /> */}
        <Center>
          <Shirt />
        </Center>
        {/* </CameraRig> */}
      </Canvas>
    </div>
  )
}

export default CanvasModel
