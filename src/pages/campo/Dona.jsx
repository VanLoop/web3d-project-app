import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import useDonaStore from "../../stores/use-dona-store";

const Dona = forwardRef((props, ref) => {
  const donaRef = useRef(null);
  const { setDonaTransforms } = useDonaStore();
  const [direction, setDirection] = useState(1); 
  const [horizontalLimit] = useState(900);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const speed = 0.7; 
    const amplitude = 300; 
    const frequency = 2; 

    if (donaRef.current) {
      donaRef.current.position.x += speed * direction; 

      if (donaRef.current.position.x > horizontalLimit || donaRef.current.position.x < -horizontalLimit) {
        setDirection(-direction);
      }

      donaRef.current.position.y = Math.cos(time * frequency) * amplitude; 

      setDonaTransforms({
        position: donaRef.current.position,
        rotation: donaRef.current.rotation,
        scale: donaRef.current.scale,
      });
    }
  });

  useImperativeHandle(ref, () => donaRef.current);

  return (
    <group ref={donaRef} name="dona" scale={[4, 3, 5]} position={[0, 0, 0]}>
      <mesh name="structure" position-y={0} rotation-y={Math.PI / 4} scale-y={1.5}>
        <torusGeometry args={[14, 5, 16, 100]} />
        <meshNormalMaterial wireframe={true} color={"yellow"} />
      </mesh>
    </group>
  );
});

export default Dona;