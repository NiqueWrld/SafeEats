import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Cylinder, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Scanner() {
  const scannerRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (scannerRef.current) {
      scannerRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={scannerRef}>
      {/* Scanner Base */}
      <Box
        args={[3, 0.2, 2]}
        position={[0, -0.5, 0]}
      >
        <meshStandardMaterial color="#2F855A" />
      </Box>

      {/* Scanner Body */}
      <Box
        args={[2.5, 1.5, 1.8]}
        position={[0, 0.3, 0]}
      >
        <meshStandardMaterial color="#276749" />
      </Box>

      {/* Scanner Screen */}
      <Box
        args={[2, 0.8, 0.1]}
        position={[0, 0.3, 0.95]}
      >
        <meshStandardMaterial color="#1A202C" />
      </Box>

      {/* Scanner Light */}
      <Box
        args={[1.8, 0.1, 0.1]}
        position={[0, 0.3, 0.9]}
      >
        <meshStandardMaterial
          color="#48BB78"
          emissive="#48BB78"
          emissiveIntensity={0.5}
        />
      </Box>

      {/* Scanner Handle */}
      <Cylinder
        args={[0.15, 0.15, 1.2, 32]}
        position={[0.8, 0.3, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshStandardMaterial color="#2D3748" />
      </Cylinder>
    </group>
  );
}

export default function Scanner3D() {
  return (
    <div className="h-[400px] w-full">
      <Canvas
        camera={{ position: [5, 5, 5], fov: 50 }}
        shadows
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <Scanner />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}