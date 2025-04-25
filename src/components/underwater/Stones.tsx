
const Stones = ({ position = [0, 0, 0] }) => {
  return (
    <group position={position}>
      <mesh position={[-1, 0, 0]}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshStandardMaterial>
          <color attach="color" args={["#808080"]} />
        </meshStandardMaterial>
      </mesh>
      <mesh position={[1, -0.2, 0]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial>
          <color attach="color" args={["#A9A9A9"]} />
        </meshStandardMaterial>
      </mesh>
      <mesh position={[0, 0.3, 0]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial>
          <color attach="color" args={["#696969"]} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
};

export default Stones;
