"use client";
import { track } from "@/lib/analytics";

export type LightValue = { intensity: number; warmth: number; focus: number };

/** Contextual control layer — elegant, not a dashboard. */
export default function LightController({
  value, onChange,
}: { value: LightValue; onChange: (p: Partial<LightValue>) => void }) {
  const row = "flex items-center gap-3";
  return (
    <div
      className="panel absolute bottom-5 left-1/2 w-[min(92vw,560px)] -translate-x-1/2 rounded-2xl px-5 py-4"
      role="group"
      aria-label="التحكم في الإضاءة"
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <label className={row}>
          <span className="w-14 text-xs text-[#D6C3A5]">الشدة</span>
          <input
            type="range" min={0.1} max={1} step={0.01} value={value.intensity}
            onChange={(e) => { onChange({ intensity: Number(e.target.value) }); track("lighting_change", { k: "intensity" }); }}
            aria-label="شدة الإضاءة" className="w-full accent-[#C9A85D]"
          />
        </label>
        <label className={row}>
          <span className="w-14 text-xs text-[#D6C3A5]">بارد ↔ دافئ</span>
          <input
            type="range" min={0} max={1} step={0.01} value={value.warmth}
            onChange={(e) => { onChange({ warmth: Number(e.target.value) }); track("lighting_change", { k: "warmth" }); }}
            aria-label="حرارة اللون" className="w-full accent-[#C9A85D]"
          />
        </label>
        <label className={row}>
          <span className="w-14 text-xs text-[#D6C3A5]">التركيز</span>
          <input
            type="range" min={0} max={1} step={0.01} value={value.focus}
            onChange={(e) => { onChange({ focus: Number(e.target.value) }); track("lighting_change", { k: "focus" }); }}
            aria-label="تركيز الإضاءة" className="w-full accent-[#C9A85D]"
          />
        </label>
      </div>
    </div>
  );
}
