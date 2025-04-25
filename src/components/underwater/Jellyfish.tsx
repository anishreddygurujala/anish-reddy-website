
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface JellyfishProps {
  position?: [number, number, number];
  scale?: number;
}

const Jellyfish = ({ position = [0, 0, 0], scale = 1 }: JellyfishProps) => {
  const jellyfishRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (jellyfishRef.current) {
      jellyfishRef.current.position.y += Math.sin(clock.getElapsedTime()) * 0.005;
      jellyfishRef.current.scale.y = scale * (1 + Math.sin(clock.getElapsedTime() * 2) * 0.1);
    }
  });

  return (
    <mesh ref={jellyfishRef} position={position} scale={scale}>
      <sphereGeometry args={[0.6, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
      <meshStandardMaterial transparent opacity={0.7} color="#FF69B4" />
    </mesh>
  );
};

export default Jellyfish;
