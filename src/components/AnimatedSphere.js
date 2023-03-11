import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedSphere({ color }) {
  console.log(color);
  return (
    <Sphere visible args={[1, 50, 200]} scale={1}>
      <MeshDistortMaterial
        color={color.hex}
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0.5}
      />
    </Sphere>
  );
}
