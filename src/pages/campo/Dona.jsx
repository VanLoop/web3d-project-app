import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import useDonaStore from "../../stores/use-dona-store";

const Dona = () => {
  const donaRef = useRef(null);
  const { setDonaTransforms } = useDonaStore();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    donaRef.current.position.y = Math.cos(time) * 70; // Animación con coseno

    setDonaTransforms({
      position: donaRef.current.position,
      rotation: donaRef.current.rotation,
      scale: donaRef.current.scale,
    });
  });

  return (
    <group ref={donaRef} name="dona" scale={[4, 5, 8]}>
      <mesh name="structure" position-y={0} rotation-y={Math.PI/4} scale-y={1.5}>
        <torusGeometry args={[14, 5, 16, 100]} /> {/* args: (radius, tube, radialSegments, tubularSegments) */}
        <meshNormalMaterial wireframe={true} color={"yellow"} />
      </mesh>
    </group>
  );
};

export default Dona;

