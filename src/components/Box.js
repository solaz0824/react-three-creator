import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";

import texture from "../images/texture.jpeg";

export default function Box({ controls }) {
  const { xPosition, yPosition, zPosition, color } = controls;
  const textureMap = useLoader(TextureLoader, texture);
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxGeometry attach="geometry" args={[xPosition, yPosition, zPosition]} />
      <meshLambertMaterial color={color.hex} />
    </mesh>
  );
}
