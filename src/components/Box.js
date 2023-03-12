import React from "react";

export default function Box({ controls }) {
  const { xPosition, yPosition, zPosition, color } = controls;
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxGeometry attach="geometry" args={[xPosition, yPosition, zPosition]} />
      <meshLambertMaterial color={color.hex} />
    </mesh>
  );
}
