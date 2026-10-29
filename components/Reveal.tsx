'use client';
import { useEffect, useRef } from 'react';
import { motionSetup, motionAllowed, gsap, ScrollTrigger } from '@/lib/motion';

type RevealProps = {
  children: React.ReactNode;
  y?: number;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'h2' | 'p';
};

/** Scroll-triggered mask/fade reveal. No-op when reduced motion is preferred. */
export default function Reveal({ children, y = 36, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!motionAllowed() || !ref.current) return;
    motionSetup();
    const el = ref.current;
    const tween = gsap.fromTo(
      el,
      { y, opacity: 0, clipPath: 'inset(0 0 12% 0)' },
      {
        y: 0,
        opacity: 1,
        clipPath: 'inset(0 0 0% 0)',
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      ScrollTrigger.refresh();
    };
  }, [y, delay]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform, opacity' }}>
      {children}
    </div>
  );
}
