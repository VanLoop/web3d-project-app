import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import useDonaStore from "../../stores/use-dona-store";

/**
 * Dona is a 3D component that represents a torus (donut-shaped object) in a Three.js scene.
 * It is animated and its transformations (position, rotation, scale) are managed using Zustand.
 * The component is wrapped with `forwardRef` to allow parent components to interact with its internal ref.
 */
const Dona = forwardRef((props, ref) => {
  // A reference to the 3D group that contains the torus.
  const donaRef = useRef(null);

  // Zustand store function to update the transformations of the 3D object.
  const { setDonaTransforms } = useDonaStore();

  // State to track the direction of horizontal movement. Initially set to 1.
  const [direction, setDirection] = useState(1);

  // State to define the horizontal movement limit. Initially set to 900.
  const [horizontalLimit] = useState(900);

  /**
   * useFrame is called on every frame to animate the torus.
   * It updates the position of the torus based on time and handles the horizontal movement direction.
   */
  useFrame((state) => {
    const time = state.clock.getElapsedTime();  // Get the elapsed time since the start of the animation.
    const speed = 0.7;  // The speed at which the torus moves horizontally.
    const amplitude = 300;  // The amplitude of the vertical movement (cosine wave).
    const frequency = 2;  // The frequency of the vertical movement.

    if (donaRef.current) {
      // Move the torus horizontally based on the direction and speed.
      donaRef.current.position.x += speed * direction; 

      // Reverse direction if the torus exceeds the horizontal limits.
      if (donaRef.current.position.x > horizontalLimit || donaRef.current.position.x < -horizontalLimit) {
        setDirection(-direction);
      }

      // Update the vertical position using a cosine function for oscillating motion.
      donaRef.current.position.y = Math.cos(time * frequency) * amplitude; 

      // Update the transformations in the Zustand store.
      setDonaTransforms({
        position: donaRef.current.position,
        rotation: donaRef.current.rotation,
        scale: donaRef.current.scale,
      });
    }
  });

  /**
   * useImperativeHandle allows the parent component to access the `donaRef` directly via the ref passed to Dona.
   */
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
