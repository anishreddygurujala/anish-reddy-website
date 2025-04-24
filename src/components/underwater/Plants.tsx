
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const Plants = ({ position = [0, 0, 0], scale = 1 }) => {
  const plantRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (plantRef.current) {
      plantRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group position={position} scale={scale}>
      <mesh ref={plantRef}>
        <cylinderGeometry args={[0.1, 0.1, 2, 8]} />
        <meshStandardMaterial color="#90EE90" />
      </mesh>
      <mesh position={[0.3, 0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1.5, 8]} />
        <meshStandardMaterial color="#98FB98" />
      </mesh>
    </group>
  );
};

export default Plants;
