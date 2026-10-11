"use client";
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Props = { intensity: number; warmth: number; focus: number; enabled: boolean };

function lerpColor(a: string, b: string, t: number) {
  return new THREE.Color(a).lerp(new THREE.Color(b), t);
}

/** Abstract chandelier installation: rings + подвесы + particles. NOT a product replica. */
function Installation({ intensity, warmth, focus }: Omit<Props, "enabled">) {
  const group = useRef<THREE.Group>(null);
  const glow = useRef<THREE.PointLight>(null);
  const particles = useMemo(() => {
    const n = 220;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 2 + Math.random() * 6;
      const th = Math.random() * Math.PI * 2;
      pos[i * 3] = Math.cos(th) * r;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 7;
      pos[i * 3 + 2] = Math.sin(th) * r;
    }
    return pos;
  }, []);
  const pGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(particles, 3));
    return g;
  }, [particles]);

  useFrame((state, dt) => {
    if (!group.current) return;
    group.current.rotation.y += dt * 0.12;
    const t = state.clock.elapsedTime;
    group.current.position.y = Math.sin(t * 0.5) * 0.12;
    if (glow.current) glow.current.intensity = 8 + intensity * 40;
  });

  const warm = lerpColor("#9db4ff", "#ffc37a", warmth);
  const rings = [2.2, 1.6, 1.05];

  return (
    <group ref={group}>
      {rings.map((r, i) => (
        <mesh key={r} rotation={[Math.PI / 2.15, 0, 0]} position={[0, 1.2 - i * 0.85, 0]}>
          <torusGeometry args={[r, 0.035, 16, 128]} />
          <meshStandardMaterial color="#1c1c1c" metalness={0.9} roughness={0.25} emissive={warm} emissiveIntensity={0.25 + intensity * 1.4} />
        </mesh>
      ))}
      {/* pendants */}
      {Array.from({ length: 14 }).map((_, i) => {
        const th = (i / 14) * Math.PI * 2;
        const r = rings[i % 3];
        return (
          <group key={i} position={[Math.cos(th) * r, 1.2 - (i % 3) * 0.85, Math.sin(th) * r]}>
            <mesh position={[0, -0.35, 0]}>
              <cylinderGeometry args={[0.008, 0.008, 0.7, 8]} />
              <meshStandardMaterial color="#333" metalness={0.8} roughness={0.4} />
            </mesh>
            <mesh position={[0, -0.85, 0]}>
              <sphereGeometry args={[0.09 + focus * 0.03, 24, 24]} />
              <meshStandardMaterial color="#fff6e3" emissive={warm} emissiveIntensity={1.2 + intensity * 3.2} toneMapped={false} />
            </mesh>
          </group>
        );
      })}
      <pointLight ref={glow} position={[0, 0.4, 0]} color={warm} distance={18} decay={2} />
      <points geometry={pGeo}>
        <pointsMaterial size={0.035} color={warm} transparent opacity={0.35 + intensity * 0.4} depthWrite={false} />
      </points>
    </group>
  );
}

function Rig({ scroll }: { scroll: React.MutableRefObject<number> }) {
  useFrame((state) => {
    const t = scroll.current;
    state.camera.position.set(Math.sin(t * 1.2) * 1.4, 0.6 + t * 1.6, 7.5 - t * 3.4);
    state.camera.lookAt(0, 0.2, 0);
  });
  return null;
}

export default function HeroScene({ intensity, warmth, focus, enabled }: Props) {
  const scroll = useRef(0);
  if (typeof window !== "undefined") {
    // updated by parent via prop-less scroll listener below
  }
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
      camera={{ position: [0, 0.6, 7.5], fov: 42 }}
      frameloop={enabled ? "always" : "never"}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.05;
      }}
    >
      <ambientLight intensity={0.12} />
      <spotLight position={[4, 6, 4]} angle={0.5} intensity={6} color="#ffe6b8" penumbra={0.8} />
      <ScrollReporter target={scroll} />
      <Installation intensity={intensity} warmth={warmth} focus={focus} />
      <Rig scroll={scroll} />
    </Canvas>
  );
}

function ScrollReporter({ target }: { target: React.MutableRefObject<number> }) {
  useEffectScroll(target);
  return null;
}

import { useEffect } from "react";
function useEffectScroll(target: React.MutableRefObject<number>) {
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = document.getElementById("hero-scroll-zone");
      if (el) {
        const r = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        const done = Math.min(1, Math.max(0, -r.top / Math.max(1, total)));
        target.current = done;
      }
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [target]);
}
