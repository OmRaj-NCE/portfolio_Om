import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

export default function WebGLBackground() {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.05;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <>
      <color attach="background" args={['#030303']} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#555555" />
      
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.5, 0.5]}>
        <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2.5} position={[0, 0, -5]}>
          <MeshDistortMaterial 
            color="#141414" 
            attach="material" 
            distort={0.4} 
            speed={1.2} 
            roughness={0.2} 
            metalness={0.9} 
          />
        </Sphere>
      </Float>
    </>
  );
}
