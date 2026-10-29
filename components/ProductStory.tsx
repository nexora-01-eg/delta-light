'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motionSetup, motionAllowed, gsap } from '@/lib/motion';

const STEPS = [
  { tag: '01 DESIGN', title: 'فكرة تناسب مساحتك', desc: 'كل قطعة تبدأ من شكل المكان نفسه.' },
  { tag: '02 DETAIL', title: 'تفاصيل مدروسة', desc: 'خامة وتشطيب يتحسوا بالعين واللمس.' },
  { tag: '03 MATERIAL', title: 'خامة تتحس', desc: 'معدن وزجاج وكريستال بجودة حقيقية.' },
  { tag: '04 LIGHT', title: 'إضاءة تغيّر الإحساس', desc: 'دفء وانتشار محسوب لكل ركن.' },
  { tag: '05 SPACE', title: 'بيت بيتكلم لغتك', desc: 'النتيجة: مكان يعكس ذوقك.' }
];

/**
 * Pinned scroll-driven product story (desktop).
 * Scroll scrubs: product rotates, light warms up, steps activate one by one.
 * Mobile / reduced-motion: calm stacked layout.
 */
export default function ProductStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!motionAllowed()) return;
    motionSetup();
    const section = sectionRef.current;
    if (!section) return;
    if (window.innerWidth < 1024) return; // stacked fallback on mobile/tablet

    const ctx = gsap.context(() => {
      gsap.to(section, {
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=280%',
          pin: true,
          scrub: 0.6,
          onUpdate: (self) => {
            const p = self.progress;
            const idx = Math.min(STEPS.length - 1, Math.floor(p * STEPS.length));
            setActive((prev) => (prev === idx ? prev : idx));
            if (orbRef.current) {
              const s = 1 + p * 0.9;
              orbRef.current.style.transform = `scale(${s.toFixed(3)})`;
              orbRef.current.style.filter = `brightness(${(0.55 + p * 0.75).toFixed(3)}) saturate(${(0.7 + p * 0.6).toFixed(3)})`;
              orbRef.current.style.boxShadow = `0 0 ${Math.round(40 + p * 90)}px rgba(201,168,93,${(0.35 + p * 0.5).toFixed(3)})`;
            }
            if (ringRef.current) {
              ringRef.current.style.transform = `translate(-50%,-50%) rotate(${(p * 220).toFixed(1)}deg) scale(${(0.8 + p * 0.5).toFixed(3)})`;
            }
            if (visualRef.current) {
              visualRef.current.style.setProperty('--story-p', p.toFixed(3));
            }
          }
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 md:px-8 mt-24" aria-label="Product story">
      <div className="glass rounded-[2rem] p-8 md:p-14 grid lg:grid-cols-2 gap-10 items-center overflow-hidden relative min-h-[70vh]">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="relative order-2 lg:order-1">
          <div className="text-xs tracking-[0.4em] text-gold">PRODUCT STORY</div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 leading-tight">
            من التصميم
            <br />
            إلى الضوء… إلى المكان
          </h2>
          <ol className="mt-8 space-y-2">
            {STEPS.map((s, i) => (
              <li
                key={s.tag}
                className={`flex gap-4 items-center rounded-2xl px-4 py-3 transition-all duration-500 ${
                  i === active ? 'bg-gold/10 border border-gold/40 translate-x-[-6px]' : 'border border-transparent opacity-50'
                }`}
              >
                <span className={`text-xs tracking-widest w-24 shrink-0 ${i === active ? 'text-gold' : 'text-muted'}`}>{s.tag}</span>
                <span>
                  <span className="block font-bold">{s.title}</span>
                  <span className="block text-xs text-muted mt-0.5">{s.desc}</span>
                </span>
              </li>
            ))}
          </ol>
          <Link href="/shop" className="inline-block mt-8 bg-gold text-ink font-bold rounded-full px-7 py-3.5 text-sm">
            تصفح المتجر
          </Link>
          <div className="mt-4 hidden lg:block text-[11px] text-muted">اسكرول لتحريك المشهد ← التقدم: {Math.round(((active + 1) / STEPS.length) * 100)}%</div>
        </div>
        <div className="relative order-1 lg:order-2">
          <div ref={visualRef} className="relative rounded-3xl hairline bg-ink min-h-[320px] lg:min-h-[480px] grid place-items-center overflow-hidden">
            <div className="absolute inset-0 hero-glow" />
            <div className="absolute inset-0 chandelier-rays" />
            <div ref={ringRef} className="absolute top-1/2 left-1/2 w-64 h-64 lg:w-96 lg:h-96 rounded-full border border-dashed border-gold/40" style={{ transform: 'translate(-50%,-50%)' }} />
            <div className="absolute top-1/2 left-1/2 w-40 h-40 lg:w-60 lg:h-60 rounded-full border border-gold/25" style={{ transform: 'translate(-50%,-50%)' }} />
            <div ref={orbRef} className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-gold" style={{ boxShadow: '0 0 40px rgba(201,168,93,0.35)' }} />
            <div className="absolute bottom-4 text-xs text-champagne">Cinematic pinned scene — scroll-linked lighting</div>
          </div>
        </div>
      </div>
    </section>
  );
}
