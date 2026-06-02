"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function RingMesh() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.15;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={ref}>
        <torusGeometry args={[2.8, 0.08, 32, 128]} />
        <shaderMaterial
          transparent
          side={THREE.DoubleSide}
          uniforms={{
            uTime: { value: 0 },
          }}
          vertexShader={`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying vec2 vUv;
            void main() {
              float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
              float t = (angle + 3.14159) / 6.28318;
              vec3 red = vec3(1.0, 0.09, 0.27);
              vec3 cyan = vec3(0.0, 0.85, 1.0);
              vec3 col = mix(red, cyan, smoothstep(0.0, 1.0, t));
              float glow = 0.6 + 0.4 * sin(t * 6.28318 * 2.0);
              gl_FragColor = vec4(col * glow, 0.85);
            }
          `}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#ff4d6d" transparent opacity={0.25} />
      </mesh>
    </Float>
  );
}

export function EnergyRing({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} color="#ff1744" intensity={2} />
        <pointLight position={[-5, -5, 5]} color="#00d9ff" intensity={2} />
        <RingMesh />
      </Canvas>
    </div>
  );
}
