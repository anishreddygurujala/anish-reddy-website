
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';

interface FishProps {
  position?: [number, number, number];
  scale?: number;
}

const Fish = ({ position = [0, 0, 0], scale = 1 }: FishProps) => {
  const fishRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (fishRef.current) {
      fishRef.current.position.x += Math.sin(clock.getElapsedTime()) * 0.01;
      fishRef.current.position.y += Math.cos(clock.getElapsedTime() * 0.5) * 0.005;
      fishRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.5;
    }
  });

  return (
    <mesh ref={fishRef} position={position} scale={scale}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#FF6B6B" />
      <mesh position={[0.6, 0, 0]}>
        <coneGeometry args={[0.4, 0.8, 32]} />
        <meshStandardMaterial color="#FF6B6B" />
      </mesh>
    </mesh>
  );
};

export default Fish;
