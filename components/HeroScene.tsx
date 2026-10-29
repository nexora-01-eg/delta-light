'use client';
import { useEffect, useRef } from 'react';
import { motionAllowed } from '@/lib/motion';

/**
 * HeroScene — original Three.js light installation.
 * Glowing core + two orbital gold rings + rising light-dust particles,
 * with pointer parallax. Desktop-grade DPR clamp, pauses offscreen.
 * Renders nothing (CSS fallback stays) on reduced-motion or no WebGL.
 */
export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !motionAllowed()) return;

    let cancelled = false;

    (async () => {
      let THREE: typeof import('three');
      try {
        THREE = await import('three');
      } catch {
        return;
      }
      if (cancelled || !canvas.isConnected) return;

      const coarse = window.matchMedia('(pointer: coarse)').matches;
      const COUNT = coarse ? 220 : 650;

      let renderer: import('three').WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !coarse, powerPreference: 'high-performance' });
      } catch {
        return; // no WebGL — CSS fallback stays
      }
      renderer.setClearColor(0x000000, 0);
      const dpr = Math.min(window.devicePixelRatio || 1, coarse ? 1.25 : 1.75);
      renderer.setPixelRatio(dpr);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 60);
      camera.position.set(0, 0.4, 7);

      // --- glowing core (radial sprite) ---
      const glowCanvas = document.createElement('canvas');
      glowCanvas.width = glowCanvas.height = 256;
      const g = glowCanvas.getContext('2d')!;
      const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
      grad.addColorStop(0, 'rgba(247,244,238,0.95)');
      grad.addColorStop(0.25, 'rgba(201,168,93,0.55)');
      grad.addColorStop(0.6, 'rgba(201,168,93,0.14)');
      grad.addColorStop(1, 'rgba(201,168,93,0)');
      g.fillStyle = grad;
      g.fillRect(0, 0, 256, 256);
      const glowTex = new THREE.CanvasTexture(glowCanvas);
      const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
      core.scale.set(3.4, 3.4, 1);
      core.position.y = 0.9;
      scene.add(core);

      // --- orbital rings ---
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xc9a85d, transparent: true, opacity: 0.5 });
      const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.008, 8, 160), ringMat);
      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.006, 8, 160), ringMat.clone());
      ring2.material.opacity = 0.3;
      ring1.position.y = ring2.position.y = 0.9;
      ring1.rotation.x = Math.PI / 2.4;
      ring2.rotation.x = Math.PI / 1.8;
      ring2.rotation.y = 0.5;
      scene.add(ring1, ring2);

      // --- rising light dust ---
      const pos = new Float32Array(COUNT * 3);
      const speed = new Float32Array(COUNT);
      for (let i = 0; i < COUNT; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 10;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 7;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 5 - 1;
        speed[i] = 0.15 + Math.random() * 0.5;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const points = new THREE.Points(
        geo,
        new THREE.PointsMaterial({
          color: 0xd6c3a5,
          size: 0.035,
          transparent: true,
          opacity: 0.75,
          depthWrite: false,
          blending: THREE.AdditiveBlending
        })
      );
      scene.add(points);

      const pointer = { x: 0, y: 0 };
      const onPointer = (e: PointerEvent) => {
        pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
        pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener('pointermove', onPointer, { passive: true });

      let w = 0;
      let h = 0;
      const resize = () => {
        const parent = canvas.parentElement;
        if (!parent) return;
        w = parent.clientWidth;
        h = parent.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      resize();
      window.addEventListener('resize', resize);

      let visible = true;
      const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0 });
      io.observe(canvas);

      const onScroll = () => {
        const fade = Math.max(0, 1 - window.scrollY / window.innerHeight);
        canvas.style.opacity = fade.toFixed(3);
      };
      window.addEventListener('scroll', onScroll, { passive: true });

      let raf = 0;
      const clock = new THREE.Clock();
      const loop = () => {
        raf = requestAnimationFrame(loop);
        if (!visible || document.hidden) return;
        const t = clock.getElapsedTime();

        const arr = geo.attributes.position as import('three').BufferAttribute;
        for (let i = 0; i < COUNT; i++) {
          let y = arr.getY(i) + speed[i] * 0.008;
          if (y > 3.6) y = -3.4;
          arr.setY(i, y);
        }
        arr.needsUpdate = true;

        ring1.rotation.z = t * 0.12;
        ring2.rotation.z = -t * 0.08;
        const pulse = 3.3 + Math.sin(t * 1.4) * 0.18;
        core.scale.set(pulse, pulse, 1);

        camera.position.x += (pointer.x * 0.7 - camera.position.x) * 0.04;
        camera.position.y += (0.4 - pointer.y * 0.45 - camera.position.y) * 0.04;
        camera.lookAt(0, 0.9, 0);

        renderer.render(scene, camera);
      };
      loop();

      // cleanup
      const cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('pointermove', onPointer);
        window.removeEventListener('resize', resize);
        window.removeEventListener('scroll', onScroll);
        io.disconnect();
        geo.dispose();
        (points.material as import('three').Material).dispose();
        glowTex.dispose();
        renderer.dispose();
      };
      (canvas as unknown as { __dlCleanup?: () => void }).__dlCleanup = cleanup;
    })();

    return () => {
      cancelled = true;
      const fn = (canvas as unknown as { __dlCleanup?: () => void }).__dlCleanup;
      if (fn) fn();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
