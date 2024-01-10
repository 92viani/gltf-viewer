import React, { useRef, useEffect } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel = ({ modelPath }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  const set = useThree((state) => state.set);

  useEffect(() => set({ camera: gltf.cameras[0] }), [gltf.cameras, set]);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => {
    gltf.cameras[0].rotation.y += 0.006;
    ref.current.updateMatrixWorld();
  });

  // Here, we can access the camera via the useThree hook
  // useThree(({ camera }) => {
  //   camera.position.y = 60;
  //   camera.position.x = 30;
  //   camera.position.z = 50;
  //   camera.lookAt(0, 0, 1);
  // });

  return (
    <>
      <primitive ref={ref} object={gltf.scene} />
    </>
  );
};

export default GltfModel;
