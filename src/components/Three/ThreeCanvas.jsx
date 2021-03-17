import React, { useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import Particle from "./Particle";

function randomParticleCanvas(topLeftPosition) {
  let middleResult = [];
  let result = [];
  let [x, y, z] = topLeftPosition;

  for (let i = 0; i < 10; i++) {
    x += Math.random() + 0.3;
    middleResult.push([x, y, z]);
  }

  middleResult.forEach((el) => {
    for (let i = 0; i < 10; i++) {
      [x, y, z] = el;
      y -= Math.random() * 4;
      z += (Math.random() - 0.5) * 5;
      result.push([x, y, z]);
    }
  });

  return result;
}

function farRandomParticleCanvas(topLeftPosition) {
  let middleResult = [];
  let result = [];
  let [x, y, z] = topLeftPosition;

  for (let i = 0; i < 20; i++) {
    x += Math.random() + 1.5;
    middleResult.push([x, y, z]);
  }

  middleResult.forEach((el) => {
    for (let i = 0; i < 35; i++) {
      [x, y, z] = el;
      y -= Math.random() * 20;
      z += (Math.random() - 0.5) * 15;
      result.push([x, y, z]);
    }
  });

  return result;
}

const canvasPattern = randomParticleCanvas([-5, 2, 0]);
const farCanvasPattern = farRandomParticleCanvas([-20, 9, -10]);

export default function ThreeCanvas(props) {
  return (
    <div className="canvasWrapper">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {canvasPattern.map((el) => (
          <Particle position={el} />
        ))}

        {farCanvasPattern.map((el) => (
          <Particle position={el} />
        ))}
      </Canvas>
    </div>
  );
}
