'use client';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [skipped, setSkipped] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1900);
    return () => clearTimeout(t);
  }, []);
  if (done || skipped) return null;
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink" role="status" aria-label="Loading Delta Light">
      <div className="hero-glow absolute inset-0" />
      <div className="relative text-center">
        <div className="text-xs tracking-[0.5em] text-muted mb-4">DELTA LIGHT</div>
        <div className="text-4xl md:text-6xl font-bold gold-text">دلتا لايت</div>
        <div className="mt-6 h-px w-40 mx-auto bg-gradient-to-l from-transparent via-gold to-transparent animate-pulse" />
        <div className="mt-3 text-xs text-muted">LIGHT CHANGES SPACE</div>
      </div>
      <button onClick={() => setSkipped(true)} className="absolute bottom-8 text-xs text-muted hover:text-cream hairline rounded-full px-5 py-2">
        تخطي — Skip Intro
      </button>
    </div>
  );
}
