import React from "react";
import "./styles.css";
import ModelViewer from "./modelviewer";

export default function App() {
  return (
    <>
      <ModelViewer modelPath={"./InPatient/model.gltf"} />
    </>
  );
}
