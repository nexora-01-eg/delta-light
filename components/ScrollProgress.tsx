'use client';
import { useEffect, useRef } from 'react';
import { motionSetup, motionAllowed, gsap, ScrollTrigger } from '@/lib/motion';

/** Thin gold scroll-progress bar pinned under the navbar. */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!motionAllowed() || !ref.current) return;
    motionSetup();
    const tween = gsap.fromTo(
      ref.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 }
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[70] h-[2px] pointer-events-none" aria-hidden="true">
      <div
        ref={ref}
        className="h-full w-full origin-right bg-gradient-to-l from-champagne via-gold to-champagne"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
