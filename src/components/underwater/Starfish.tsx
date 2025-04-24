
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const Starfish = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) => {
  const starfishRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (starfishRef.current) {
      starfishRef.current.rotation.z += Math.sin(clock.getElapsedTime() * 0.5) * 0.01;
    }
  });

  return (
    <mesh ref={starfishRef} position={position} rotation={rotation} scale={scale}>
      <circleGeometry args={[0.8, 5]} />
      <meshStandardMaterial color="#FFA07A" />
    </mesh>
  );
};

export default Starfish;
