"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStore } from "@/store/useStore";
import LightController from "./LightController";

const HeroScene = dynamic(() => import("@/scenes/HeroScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[#050505]" aria-hidden />,
});

gsap.registerPlugin(ScrollTrigger);

/**
 * EXPERIENCE 01–02: arrival darkness → first light → architecture revealed.
 * Scroll = camera director. Includes WebGL fallback + reduced-motion paths.
 */
export default function HeroExperience() {
  const light = useStore((s) => s.light);
  const setLight = useStore((s) => s.setLight);
  const [webglOk, setWebglOk] = useState(true);
  const [lowPower, setLowPower] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      if (!window.WebGLRenderingContext || !(c.getContext("webgl2") || c.getContext("webgl"))) setWebglOk(false);
    } catch {
      setWebglOk(false);
    }
    setLowPower(/Mobi|Android/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (reduced || !root.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-line", { yPercent: 110 }, {
        yPercent: 0, duration: 1.4, stagger: 0.12, ease: "power4.out",
        scrollTrigger: { trigger: "#hero-scroll-zone", start: "top 80%", end: "top 20%", scrub: 1 },
      });
      gsap.to(".hero-veil", {
        opacity: 0, ease: "none",
        scrollTrigger: { trigger: "#hero-scroll-zone", start: "top top", end: "60% top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  const warmthLabel = light.warmth < 0.4 ? "بارد" : light.warmth > 0.7 ? "دافئ" : "متوازن";

  return (
    <section id="light" ref={root} className="relative">
      <div id="hero-scroll-zone" className="relative h-[220vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* base */}
          <div className="architectural-grid absolute inset-0 opacity-60" aria-hidden />
          <div className="hero-veil absolute inset-0 bg-black/55" aria-hidden />

          {webglOk && !reduced ? (
            <div className="absolute inset-0">
              <HeroScene intensity={light.intensity} warmth={light.warmth} focus={light.focus} enabled={!lowPower || true} />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
              <div
                className="h-[60vmin] w-[60vmin] rounded-full transition-all duration-500"
                style={{
                  background: `radial-gradient(circle, rgba(255,${Math.round(150 + light.warmth * 70)},110,${0.25 + light.intensity * 0.5}) 0%, transparent 65%)`,
                  filter: `blur(${60 - light.focus * 40}px)`,
                }}
              />
            </div>
          )}

          {/* pointer light follows you (desktop) */}
          <PointerLight />

          {/* copy */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="eyebrow">Delta Light — المعرض الرقمي</p>
            <h1 className="mt-4 max-w-4xl overflow-hidden text-4xl font-light leading-tight md:text-7xl">
              <span className="hero-line block">الإضاءة لا تُنير المكان.</span>
              <span className="hero-line gold-text block font-medium">الإضاءة تصنع المكان.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-[#A7A7A7] md:text-base">
              حرّك المؤشر — الضوء يتبعك. مرّر للأسفل — الكاميرا تقترب والمشهد يتكشف.
              الإضاءة: {warmthLabel} · الشدة {Math.round(light.intensity * 100)}٪
            </p>
            <div className="pointer-events-auto mt-6 flex gap-3">
              <a href="#collection" className="btn-gold btn-physical rounded-full px-7 py-3 text-sm font-semibold">ادخل المجموعة</a>
              <a href="#rooms" className="btn-ghost btn-physical rounded-full px-7 py-3 text-sm">جرّب الغرف</a>
            </div>
          </div>

          {/* scroll cue */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.3em] text-[#A7A7A7]">
            مرّر للدخول ↓
          </div>

          <LightController onChange={setLight} value={light} />
        </div>
      </div>
    </section>
  );
}

function PointerLight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    let x = window.innerWidth / 2, y = window.innerHeight / 2, tx = x, ty = y, raf = 0;
    const move = (e: PointerEvent) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      x += (tx - x) * 0.08; y += (ty - y) * 0.08;
      el.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 hidden h-[400px] w-[400px] rounded-full md:block"
      style={{ background: "radial-gradient(circle, rgba(201,168,93,0.14) 0%, transparent 60%)", mixBlendMode: "screen" }}
    />
  );
}
