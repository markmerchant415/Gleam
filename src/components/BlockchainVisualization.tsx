import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box } from '@react-three/drei';
import * as THREE from 'three';

interface BlockchainVisualizationProps {
  darkMode: boolean;
}

// Block component
const Block = ({ position, color, index, isActive }: { position: [number, number, number], color: string, index: number, isActive: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.003;
      
      if (isActive) {
        meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, 1.2, 0.1);
        meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, 1.2, 0.1);
        meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, 1.2, 0.1);
      } else {
        meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, 1, 0.1);
        meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, 1, 0.1);
        meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, 1, 0.1);
      }
    }
  });

  return (
    <group position={position}>
      <Box ref={meshRef} args={[1, 1, 1]} castShadow receiveShadow>
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.5} />
      </Box>
      <Text
        position={[0, 0, 0.6]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {index}
      </Text>
    </group>
  );
};

// Connection line between blocks
const Connection = ({ start, end, color }: { start: [number, number, number], end: [number, number, number], color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.01;
    }
  });

  // Calculate the midpoint and direction
  const midX = (start[0] + end[0]) / 2;
  const midY = (start[1] + end[1]) / 2;
  const midZ = (start[2] + end[2]) / 2;
  
  // Calculate distance for cylinder length
  const distance = Math.sqrt(
    Math.pow(end[0] - start[0], 2) +
    Math.pow(end[1] - start[1], 2) +
    Math.pow(end[2] - start[2], 2)
  );
  
  // Calculate rotation to point from start to end
  const direction = new THREE.Vector3(
    end[0] - start[0],
    end[1] - start[1],
    end[2] - start[2]
  ).normalize();
  
  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    direction
  );
  
  const euler = new THREE.Euler();
  euler.setFromQuaternion(quaternion);

  return (
    <mesh
      ref={ref}
      position={[midX, midY, midZ]}
      rotation={[euler.x, euler.y, euler.z]}
    >
      <cylinderGeometry args={[0.05, 0.05, distance, 8]} />
      <meshStandardMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
};

// Particle effect for transactions
const Particles = ({ count = 50, color = '#8b5cf6' }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = new THREE.Object3D();
  
  useEffect(() => {
    if (mesh.current) {
      // Initialize particles
      for (let i = 0; i < count; i++) {
        dummy.position.set(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        );
        dummy.updateMatrix();
        mesh.current.setMatrixAt(i, dummy.matrix);
      }
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  }, [count]);
  
  useFrame(() => {
    if (mesh.current) {
      for (let i = 0; i < count; i++) {
        mesh.current.getMatrixAt(i, dummy.matrix);
        dummy.position.setFromMatrixPosition(dummy.matrix);
        
        // Move particles
        dummy.position.x += (Math.random() - 0.5) * 0.05;
        dummy.position.y += (Math.random() - 0.5) * 0.05;
        dummy.position.z += (Math.random() - 0.5) * 0.05;
        
        // Keep particles within bounds
        if (Math.abs(dummy.position.x) > 5) dummy.position.x *= -0.9;
        if (Math.abs(dummy.position.y) > 5) dummy.position.y *= -0.9;
        if (Math.abs(dummy.position.z) > 5) dummy.position.z *= -0.9;
        
        dummy.updateMatrix();
        mesh.current.setMatrixAt(i, dummy.matrix);
      }
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.8} />
    </instancedMesh>
  );
};

// Scene component
const BlockchainScene = ({ activeBlock }: { activeBlock: number }) => {
  // Define block positions in a circular pattern
  const blockCount = 6;
  const radius = 3;
  const blockPositions: [number, number, number][] = [];
  
  for (let i = 0; i < blockCount; i++) {
    const angle = (i / blockCount) * Math.PI * 2;
    blockPositions.push([
      Math.cos(angle) * radius,
      0,
      Math.sin(angle) * radius
    ]);
  }
  
  // Define block colors
  const blockColors = [
    '#6366f1', // indigo
    '#8b5cf6', // purple
    '#ec4899', // pink
    '#6366f1', // indigo
    '#8b5cf6', // purple
    '#ec4899', // pink
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      
      <OrbitControls 
        enableZoom={true}
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate
        autoRotateSpeed={0.5}
      />
      
      {/* Blocks */}
      {blockPositions.map((position, index) => (
        <Block 
          key={index} 
          position={position} 
          color={blockColors[index]} 
          index={index + 1}
          isActive={index === activeBlock}
        />
      ))}
      
      {/* Connections between blocks */}
      {blockPositions.map((position, index) => {
        const nextIndex = (index + 1) % blockCount;
        return (
          <Connection 
            key={index} 
            start={position} 
            end={blockPositions[nextIndex]} 
            color={blockColors[index]}
          />
        );
      })}
      
      {/* Particles representing transactions */}
      <Particles count={100} />
      
      {/* Central node */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#ec4899"
          emissive="#ec4899"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </>
  );
};

const BlockchainVisualization: React.FC<BlockchainVisualizationProps> = ({ darkMode }) => {
  const [activeBlock, setActiveBlock] = React.useState(0);
  
  // Cycle through active blocks
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBlock((prev) => (prev + 1) % 6);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-md rounded-xl p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
      <h3 className="text-xl font-semibold mb-4">Blockchain Visualization</h3>
      <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Explore how transactions are securely processed and verified on the blockchain network.
      </p>
      
      <div className="aspect-square w-full h-64 md:h-80">
        <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
          <BlockchainScene activeBlock={activeBlock} />
        </Canvas>
      </div>
      
      <div className="mt-4 text-center">
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600 '}`}>
          Drag to rotate • Scroll to zoom • Block {activeBlock + 1} active
        </p>
      </div>
    </div>
  );
};

export default BlockchainVisualization;