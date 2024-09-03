/* eslint-disable react/no-unknown-property */
import { TrackballControls } from "@react-three/drei"; // Usar TrackballControls
import { Canvas } from "@react-three/fiber";
import House from "./Dona";
import React from "react";
import useHouseStore from "../../stores/use-dona-store";

const World = () => {
  const cameraSettings = {
    position: [2, 0, 5],
  };

  const { transformsHouse } = useHouseStore();

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
        <House />
      </Canvas>
    </React.Fragment>
  );
};

export default World;
