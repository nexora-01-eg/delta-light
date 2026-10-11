"use client";
import { useMemo, useState } from "react";
import { ROOMS, LIGHTING_STYLES } from "@/data/content";
import { useStore } from "@/store/useStore";
import { waRoom } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { Reveal, SectionHead } from "./Reveal";

/** "شوف الإضاءة وهي بتغيّر المكان" — room × style drives light atmosphere. */
export default function RoomVisualizer() {
  const [room, setRoom] = useState<(typeof ROOMS)[number]["id"]>("living");
  const [style, setStyle] = useState<(typeof LIGHTING_STYLES)[number]["id"]>("warm");
  const light = useStore((s) => s.light);
  const setLight = useStore((s) => s.setLight);

  const atmosphere = useMemo(() => {
    const base: Record<string, { bg: string; glow: string; temp: string }> = {
      warm: { bg: "linear-gradient(180deg,#1a1208,#0a0703)", glow: "rgba(255,170,80,0.4)", temp: "3000K دافئ" },
      modern: { bg: "linear-gradient(180deg,#101014,#070708)", glow: "rgba(220,225,255,0.32)", temp: "4000K محايد" },
      classic: { bg: "linear-gradient(180deg,#171006,#0a0803)", glow: "rgba(255,200,120,0.42)", temp: "2700K كلاسيكي" },
      minimal: { bg: "linear-gradient(180deg,#0d0d0d,#050505)", glow: "rgba(255,255,255,0.20)", temp: "خافت مينيمال" },
      architectural: { bg: "linear-gradient(180deg,#0c0f14,#050607)", glow: "rgba(150,190,255,0.30)", temp: "تركيز معماري" },
    };
    return base[style] ?? base.warm;
  }, [style]);

  const active = ROOMS.find((r) => r.id === room)!;
  const activeStyle = LIGHTING_STYLES.find((s) => s.id === style)!;

  const pick = (r: typeof room, st: typeof style) => {
    setRoom(r); setStyle(st);
    // drive global light mood too
    setLight({
      warmth: st === "warm" || st === "classic" ? 0.85 : st === "modern" || st === "architectural" ? 0.3 : 0.55,
      intensity: st === "minimal" ? 0.35 : 0.75,
    });
    track("room_change", { room: r, style: st });
  };

  return (
    <section id="rooms" className="relative py-24 md:py-32">
      <SectionHead
        index="05 / الغرف"
        title="شوف الإضاءة وهي بتغيّر المكان"
        sub="اختر الغرفة والأسلوب — الإضاءة والحرارة والظل تتغير أمامك، تماماً كما يحدث داخل المعرض."
      />
      <Reveal className="mx-auto mt-10 max-w-7xl px-5">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="نوع الغرفة">
          {ROOMS.map((r) => (
            <button
              key={r.id} role="tab" aria-selected={room === r.id}
              onClick={() => pick(r.id, style)}
              className={`rounded-full px-5 py-2 text-sm transition-all ${room === r.id ? "btn-gold font-semibold" : "btn-ghost"}`}
            >
              {r.ar}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label="أسلوب الإضاءة">
          {LIGHTING_STYLES.map((s) => (
            <button
              key={s.id} role="tab" aria-selected={style === s.id}
              onClick={() => pick(room, s.id)}
              className={`rounded-full px-4 py-1.5 text-xs transition-all ${style === s.id ? "border border-[#C9A85D] text-[#C9A85D]" : "hairline border text-[#A7A7A7]"}`}
            >
              {s.ar}
            </button>
          ))}
        </div>

        <div
          className="vignette relative mt-6 overflow-hidden rounded-3xl border hairline transition-all duration-700"
          style={{ background: atmosphere.bg, minHeight: 420 }}
        >
          {/* architecture silhouette */}
          <svg viewBox="0 0 800 400" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMax slice" aria-hidden>
            <rect x="80" y="120" width="640" height="230" fill="none" stroke="rgba(214,195,165,0.25)" strokeWidth="1.5" />
            <line x1="80" y1="230" x2="720" y2="230" stroke="rgba(214,195,165,0.15)" />
            <rect x="340" y="180" width="120" height="170" fill="none" stroke="rgba(214,195,165,0.2)" />
            <circle cx="400" cy="120" r="26" fill={atmosphere.glow} opacity="0.85" />
            <ellipse cx="400" cy="300" rx="180" ry="40" fill={atmosphere.glow} opacity="0.25" />
            {/* sofa hint */}
            <rect x="180" y="280" width="180" height="50" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(214,195,165,0.3)" />
            <rect x="470" y="270" width="120" height="60" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(214,195,165,0.3)" />
          </svg>
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 55% 45% at 50% 30%, ${atmosphere.glow}, transparent 70%)`, opacity: 0.4 + light.intensity * 0.6 }} />
          <div className="relative flex h-full min-h-[420px] flex-col justify-end p-6 md:p-10">
            <p className="eyebrow">{active.en} · {activeStyle.ar} · {atmosphere.temp}</p>
            <h3 className="mt-2 text-2xl font-light md:text-4xl">غرفة {active.ar} بروح {activeStyle.ar}</h3>
            <p className="mt-2 max-w-lg text-sm text-[#D6C3A5]">{active.desc}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={waRoom(`غرفة ${active.ar}`, activeStyle.ar)} target="_blank" rel="noopener" className="btn-gold btn-physical rounded-full px-6 py-2.5 text-sm font-semibold">
                أريد تصميماً مشابهاً — واتساب
              </a>
              <a href="/shop" className="btn-ghost btn-physical rounded-full px-6 py-2.5 text-sm">تسوّق القطع المناسبة</a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
