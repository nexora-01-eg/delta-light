"use client";
import { useState } from "react";
import { MATERIALS } from "@/data/content";
import { Reveal, SectionHead } from "./Reveal";

const SWATCH: Record<string, string> = {
  crystal: "linear-gradient(135deg, rgba(255,255,255,.9), rgba(201,168,93,.35) 40%, rgba(150,180,255,.5) 70%, rgba(255,255,255,.7))",
  glass: "linear-gradient(135deg, rgba(255,255,255,.35), rgba(255,255,255,.05) 60%, rgba(201,168,93,.25))",
  metal: "linear-gradient(135deg,#3a3a3a,#8a8a8a 35%,#2a2a2a 60%,#c9a85d 90%)",
  wood: "linear-gradient(135deg,#4a2f18,#8a5a28 45%,#3a2410 80%)",
  stone: "linear-gradient(135deg,#2b2b2b,#555 40%,#1a1a1a 75%)",
  fabric: "linear-gradient(135deg,#6b5a48,#a78d6b 50%,#4a3f33)",
};

/** LIGHT → MATERIAL → REFLECTION → ATMOSPHERE laboratory. */
export default function MaterialExperience() {
  const [active, setActive] = useState<string>(MATERIALS[0].id);
  const m = MATERIALS.find((x) => x.id === active)!;
  return (
    <section id="material" className="relative py-24 md:py-32">
      <SectionHead
        index="03 / الخامة"
        title="الضوء خامة — وكل خامة تردّ عليه بلغتها"
        sub="مختبر تصميمي: مرّر بين الخامات وشاهد كيف يتغير الانعكاس والأجواء تحت نفس الضوء."
      />
      <Reveal className="mx-auto mt-10 grid max-w-7xl gap-6 px-5 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          {MATERIALS.map((x) => (
            <button
              key={x.id}
              onClick={() => setActive(x.id)}
              aria-pressed={active === x.id}
              className={`flex items-center gap-4 rounded-2xl border p-4 text-right transition-all duration-300 ${
                active === x.id ? "border-[#C9A85D]/60 bg-white/[0.04]" : "hairline hover:bg-white/[0.02]"
              }`}
            >
              <span className="h-12 w-12 shrink-0 rounded-xl border border-white/10" style={{ background: SWATCH[x.id] }} aria-hidden />
              <span>
                <span className="block font-medium">{x.ar} <span className="text-xs text-[#A7A7A7]">· {x.en}</span></span>
                <span className="block text-sm text-[#A7A7A7]">{x.desc}</span>
              </span>
            </button>
          ))}
        </div>
        <div className="vignette relative min-h-[380px] overflow-hidden rounded-3xl border hairline" aria-live="polite">
          <div className="absolute inset-0 transition-all duration-700" style={{ background: SWATCH[m.id] }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 45% at 50% 25%, rgba(255,240,200,0.55), transparent 65%)" }} />
          <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full opacity-40" aria-hidden>
            <line x1="200" y1="0" x2="200" y2="300" stroke="rgba(0,0,0,0.35)" strokeWidth="1" />
            <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          </svg>
          <div className="panel absolute bottom-5 right-5 left-5 rounded-2xl p-5">
            <p className="eyebrow">انعكاس</p>
            <p className="mt-1 text-lg">{m.ar} — {m.desc}</p>
            <p className="mt-1 text-xs text-[#A7A7A7]">LIGHT → MATERIAL → REFLECTION → ATMOSPHERE</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
