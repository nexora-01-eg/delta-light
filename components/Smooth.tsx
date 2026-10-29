'use client';
import { useEffect } from 'react';

export default function Smooth() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let cleanup = () => {};
    (async () => {
      try {
        const Lenis = (await import('lenis')).default;
        const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
        let raf = 0;
        const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
        raf = requestAnimationFrame(loop);
        cleanup = () => { cancelAnimationFrame(raf); lenis.destroy(); };
      } catch { /* fallback native scroll */ }
    })();
    return () => cleanup();
  }, []);
  return null;
}
