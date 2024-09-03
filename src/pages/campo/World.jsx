import { TrackballControls } from "@react-three/drei"; // Import TrackballControls for interactive camera control
import { Canvas } from "@react-three/fiber";
import Dona from "./Dona";
import React from "react";
import useDonaStore from "../../stores/use-dona-store";

/**
 * World is a 3D scene component that sets up the environment for rendering 3D objects using Three.js.
 * It includes lighting, camera settings, and interactive controls for the scene.
 */
const World = () => {
  // Camera settings for the Three.js scene, including position and field of view.
  const cameraSettings = {
    position: [0, 0, 700],
    fov: 75,
  };

  // Accesses the transformation states of the Dona object from the Zustand store (if needed).
  const { transformsDona } = useDonaStore();

  return (
    <React.Fragment>
      <Canvas camera={cameraSettings} shadows>
        {/* TrackballControls provides interactive control over the camera, 
        allowing users to rotate, zoom, and pan the view. */}
        <TrackballControls />

        {/* Ambient light provides soft lighting to the entire scene. */}
        <ambientLight intensity={0.5} />

        {/* Directional light simulates sunlight, casting shadows in the scene. */}
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

        {/* The Dona component is a 3D torus (donut) that is animated within the scene. */}
        <Dona />
      </Canvas>
    </React.Fragment>
  );
};

export default World;
