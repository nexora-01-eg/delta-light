"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Reveal({
  children, className = "", delay = 0, y = 36,
}: { children: React.ReactNode; className?: string; delay?: number; y?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    const tween = gsap.fromTo(el, { y, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, delay, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, [delay, y]);
  return <div ref={ref} className={className}>{children}</div>;
}

export function SectionHead({ index, title, sub }: { index: string; title: string; sub?: string }) {
  return (
    <Reveal className="mx-auto max-w-7xl px-5">
      <p className="eyebrow">{index}</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-light leading-snug md:text-5xl">{title}</h2>
      {sub && <p className="mt-3 max-w-xl text-sm leading-7 text-[#A7A7A7] md:text-base">{sub}</p>}
    </Reveal>
  );
}
