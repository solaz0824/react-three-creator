import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedSphere({ color, controls }) {
  console.log(controls);
  const { distort, speed, roughness, scale } = controls;
  return (
    <Sphere visible args={[1, 100]} scale={scale}>
      <MeshDistortMaterial
        color={color.hex}
        distort={distort}
        speed={speed}
        roughness={roughness}
        attach="material"
      />
    </Sphere>
  );
}
