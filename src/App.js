import React, { Suspense, useState } from "react";
import "./App.css";

import { Canvas } from "@react-three/fiber";

import { OrbitControls, Stars, Text } from "@react-three/drei";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

import AnimatedSphere from "./components/AnimatedSphere";
import Box from "./components/Box";
import Controls from "./components/Controls";
import Draggable from "./components/Draggable";

function App() {
  const [color, setColor] = useColor("hex", "#74e8eb");
  const [distort, setDistort] = useState(0.5);
  const [speed, setSpeed] = useState(1.5);
  const [roughness, setRoughness] = useState(0);
  const [scale, setScale] = useState(1);
  const [shape, setShape] = useState("sphere");
  const [xPosition, setXPosition] = useState(2);
  const [yPosition, setYPosition] = useState(2);
  const [zPosition, setZPosition] = useState(2);
  const [drag, setDrag] = useState(false);
  const dragProps = {
    onDragStart: () => setDrag(true),
    onDragEnd: () => setDrag(false),
  };
  return (
    <div className="App">
      <div className="configuration">
        <div className="controls">
          <Controls
            controls={{
              distort,
              speed,
              roughness,
              scale,
              shape,
              xPosition,
              yPosition,
              zPosition,
              setDistort,
              setSpeed,
              setRoughness,
              setScale,
              setShape,
              setXPosition,
              setYPosition,
              setZPosition,
            }}
          />
        </div>
        <ColorPicker
          className="color-picker"
          width={300}
          height={300}
          color={color}
          onChange={setColor}
          hideHSV
          dark
        />
      </div>
      <Canvas
        dpr={Math.max(window.devicePixelRatio, 2)}
        camera={{
          position: [5, 5, 5],
        }}
      >
        <OrbitControls enableZoom={false} enabled={!drag} />
        <ambientLight intensity={0.5} />
        <pointLight
          position={[2, 2, 2]}
          camera={{
            position: [5, 5, 5],
          }}
        />
        <Suspense
          fallback={
            <Text color="white" anchorX="center" anchorY="middle">
              Loading
            </Text>
          }
        >
          <Draggable {...dragProps}>
            {shape === "sphere" ? (
              <AnimatedSphere
                color={color}
                controls={{ distort, speed, roughness, scale }}
              />
            ) : (
              <Box controls={{ xPosition, yPosition, zPosition, color }} />
            )}
          </Draggable>
        </Suspense>
        <Stars />
        <gridHelper />
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  );
}

export default App;
