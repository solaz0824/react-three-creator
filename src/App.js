import React, { Suspense } from "react";
import "./App.css";

import Box from "./components/Box";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, SpotLight, Stars } from "@react-three/drei";

function App() {
  return (
    <div className="App">
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
        {/* <SpotLight position={[10, 15, 10]} angle={0.3} /> */}
        <Stars />
      </Canvas>
    </div>
  );
}

export default App;
