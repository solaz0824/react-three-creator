import React, { Suspense, useRef, useState } from "react";
import "./App.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

import AnimatedSphere from "./components/AnimatedSphere";

function App() {
  const [color, setColor] = useColor("hex", "#74e8eb");
  const [distort, setDistort] = useState(0.5);
  const [attach, setAttach] = useState("material");
  const [speed, setSpeed] = useState(1.5);
  const [roughness, setRoughness] = useState(0.5);

  return (
    <div className="App">
      <div className="configuration">
        <ColorPicker
          className="color-picker"
          width={300}
          height={200}
          color={color}
          onChange={setColor}
          hideHSV
          dark
        />
        <div></div>
      </div>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <AnimatedSphere color={color} />
        </Suspense>
        <Stars />
      </Canvas>
    </div>
  );
}

export default App;
