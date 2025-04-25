
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const WaterEffect = () => {
  const waterRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (waterRef.current) {
      waterRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <mesh ref={waterRef} position={[0, 0, -10]} scale={[40, 40, 1]}>
      <planeGeometry />
      <meshStandardMaterial transparent opacity={0.3} color="#0077be" />
    </mesh>
  );
};

export default WaterEffect;
