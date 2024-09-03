import { TrackballControls } from "@react-three/drei"; // Usar TrackballControls
import { Canvas } from "@react-three/fiber";
import Dona from "./Dona";
import React from "react";
import useDonaStore from "../../stores/use-dona-store";

const World = () => {
  const cameraSettings = {
    position: [0, 0, 700], // Ajusta la posición de la cámara para estar alejada
    fov: 75, // Ajusta el campo de visión si es necesario
  };

  const { transformsDona } = useDonaStore();

  return (
    <React.Fragment>
      <Canvas camera={cameraSettings} shadows>
        <TrackballControls />
        <ambientLight intensity={0.5} />
        <directionalLight
          color={"#ff0000"}
          intensity={1}
          position={[5, 10, 7]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Dona />
      </Canvas>
    </React.Fragment>
  );
};

export default World;

