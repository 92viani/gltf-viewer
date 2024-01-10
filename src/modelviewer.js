import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import GltfModel from "./gltf-model";

export default function ModelViewer({ modelPath }) {
  return (
    <div style={{ width: "100%", height: "100%", margin: "0px" }}>
      <Canvas>
        <ambientLight intensity={0.3} />
        <spotLight position={[20, 15, 10]} angle={0.45} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <GltfModel modelPath={modelPath} />
        </Suspense>
      </Canvas>
    </div>
  );
}
