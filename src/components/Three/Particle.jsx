import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";

export default function Particle(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.position.y = mesh.current.position.y + Math.sin(time * 2) / 2000;
    // mesh.current.position.x = props.mousePosition.x > 100 ? 0 : 10
    mesh.current.rotation.y = mesh.current.rotation.y += 0.05;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [0.3, 0.4, 0.2] : [0.15, 0.15, 0.15]}
      onClick={(event) => {
        setActive(!active);
      }}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      {/* <boxBufferGeometry args={[1, 1, 1]} /> */}
      <sphereBufferGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color={hovered ? "#ffffff" : "#11ffff"} />
    </mesh>
  );
}
