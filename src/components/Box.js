import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";

import texture from "../images/texture.jpeg";

export default function Box() {
  const textureMap = useLoader(TextureLoader, texture);
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxGeometry attach="geometry" args={[3, 3, 3]} />
      <meshLambertMaterial map={textureMap} />
    </mesh>
  );
}
