import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';

function MyScene() {
  const boxRef = useRef();
  return (
    <Canvas>
      <mesh ref={boxRef}>
        <boxBufferGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
}

export default MyScene;
