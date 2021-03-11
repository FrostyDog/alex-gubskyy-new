import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.position.y = mesh.current.position.y + (Math.sin(time * 2) / 200);
    mesh.current.rotation.y = mesh.current.rotation.x += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      // scale={active ? [1.5, 1.5, 1.5] : [0.5, 0.5, 0.5]}
      scale={active ? [0.3, 0.4, 0.2] : [0.15, 0.15, 0.15]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "orange" : "blue"} />
    </mesh>
  );
}

//  Utility
function rightDiag(startPosition) {
  let sum = [];
  let [x, y, z] = startPosition;

  for (let i = 0; i < 10; i++) {
    x += 0.2;
    y += 0.5;
    sum.push([x, y, z]);
  }
  return sum;
}

function leftDiag(startPosition) {
  let sum = [];
  let [x, y, z] = startPosition;

  for (let i = 0; i < 10; i++) {
    x += 0.2;
    y -= 0.5;
    sum.push([x, y, z]);
  }
  return sum;
}

//

export default function ThreeCanvas(props) {
  return (
    <div className="canvasWrapper">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {rightDiag([-2.5, -3, 0]).map((el) => (
          <Box position={el} />
        ))}
        {rightDiag([-2.6, -2.8, 0]).map((el) => (
          <Box position={el} />
        ))}

        {leftDiag([-0.55, 2.7, 0]).map((el) => (
          <Box position={el} />
        ))}
        {leftDiag([-0.65, 2.5, 0]).map((el) => (
          <Box position={el} />
        ))}
      </Canvas>
    </div>
  );
}
