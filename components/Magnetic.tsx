'use client';
import { useEffect, useRef } from 'react';
import { motionAllowed, isFinePointer } from '@/lib/motion';

/** Magnetic hover for primary CTAs (desktop fine-pointer only). */
export default function Magnetic({ children, strength = 18 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !motionAllowed() || !isFinePointer()) return;
    let raf = 0;
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    const tick = () => {
      cur.x += (target.x - cur.x) * 0.18;
      cur.y += (target.y - cur.y) * 0.18;
      el.style.transform = `translate(${cur.x.toFixed(2)}px, ${cur.y.toFixed(2)}px)`;
      if (Math.abs(target.x - cur.x) > 0.1 || Math.abs(target.y - cur.y) > 0.1) {
        raf = requestAnimationFrame(tick);
      } else {
        el.style.transform = '';
      }
    };
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      target.x = ((e.clientX - (r.left + r.width / 2)) / r.width) * strength * 2;
      target.y = ((e.clientY - (r.top + r.height / 2)) / r.height) * strength * 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className="inline-block" style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}
