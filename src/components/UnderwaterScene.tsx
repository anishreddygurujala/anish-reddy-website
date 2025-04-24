
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Fish from './underwater/Fish';
import Jellyfish from './underwater/Jellyfish';
import Starfish from './underwater/Starfish';
import Plants from './underwater/Plants';
import Stones from './underwater/Stones';
import WaterEffect from './underwater/WaterEffect';

const UnderwaterScene = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <WaterEffect />
        <Fish position={[-4, 2, 0]} />
        <Fish position={[4, -2, -2]} scale={0.8} />
        <Fish position={[2, 3, -4]} scale={1.2} />
        <Jellyfish position={[-3, 4, -2]} />
        <Jellyfish position={[3, -3, -3]} scale={0.7} />
        <Starfish position={[-2, -4, 0]} rotation={[0, 0, Math.PI / 4]} />
        <Plants position={[-4, -4, -2]} />
        <Plants position={[4, -4, -1]} scale={1.2} />
        <Stones position={[0, -5, 0]} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default UnderwaterScene;
