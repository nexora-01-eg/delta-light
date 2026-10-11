"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { featuredProducts } from "@/data/products";
import { ProductVisual } from "./ProductCard";
import { Reveal } from "./Reveal";
import { track } from "@/lib/analytics";
import { waProduct } from "@/lib/whatsapp";

gsap.registerPlugin(ScrollTrigger);

/** Pinned cinematic product story: DESIGN → FORM → DETAIL → MATERIAL → LIGHT → SPACE → PRODUCT */
export default function ProductStory() {
  const root = useRef<HTMLDivElement>(null);
  const p = featuredProducts[0];

  useEffect(() => {
    if (!root.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ".story-pin", start: "top top", end: "+=250%", scrub: 1, pin: true },
      });
      tl.fromTo(".story-stage", { scale: 0.85, rotateY: -18 }, { scale: 1, rotateY: 0, duration: 1, ease: "none" })
        .fromTo(".story-word-1", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.4 }, 0.1)
        .fromTo(".story-word-2", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.4 }, 0.4)
        .fromTo(".story-word-3", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.4 }, 0.7);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="space" ref={root} className="relative py-24 md:py-32">
      <div className="story-pin flex min-h-screen flex-col items-center justify-center px-5">
        <Reveal>
          <p className="eyebrow text-center">02 / المساحة — قصة منتج سينمائية</p>
        </Reveal>
        <div className="story-stage mt-8 w-[min(92vw,720px)]" style={{ perspective: 1200 }}>
          <ProductVisual p={p} className="aspect-[16/10] rounded-3xl border hairline shadow-2xl" />
        </div>
        <div className="mt-8 grid max-w-4xl gap-4 text-center md:grid-cols-3">
          <p className="story-word-1 text-xl font-light">التصميم <span className="text-[#C9A85D]">←</span> الشكل</p>
          <p className="story-word-2 text-xl font-light">الخامة <span className="text-[#C9A85D]">←</span> الضوء</p>
          <p className="story-word-3 text-xl font-light">المساحة <span className="text-[#C9A85D]">←</span> الاكتشاف</p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={`/product/${p.slug}`} onClick={() => track("product_explore", { slug: p.slug })} className="btn-gold btn-physical rounded-full px-7 py-3 text-sm font-semibold">
            ادخل غرفة المنتج — {p.name}
          </Link>
          <a href={waProduct(p.name, p.code)} target="_blank" rel="noopener" className="btn-ghost btn-physical rounded-full px-7 py-3 text-sm">
            استفسر واتساب
          </a>
        </div>
      </div>
    </section>
  );
}
