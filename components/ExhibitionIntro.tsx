"use client";
import { useEffect, useState } from "react";
import { useStore } from "@/store/useStore";
import { track } from "@/lib/analytics";

/** ARRIVAL — black screen, minimal wordmark, light breathes in. Max 2s, skippable, never blocks. */
export default function ExhibitionIntro() {
  const introDone = useStore((s) => s.introDone);
  const setIntroDone = useStore((s) => s.setIntroDone);
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (introDone) return;
    setVisible(true);
    track("experience_start");
    const t = setTimeout(finish, 2000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [introDone]);

  const finish = () => {
    setLeaving(true);
    track("experience_complete");
    setTimeout(() => {
      setIntroDone();
      setVisible(false);
    }, 700);
  };

  const skip = () => {
    track("experience_skip");
    finish();
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="مقدمة المعرض"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-700 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* breathing light */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="h-64 w-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201,168,93,0.28) 0%, rgba(201,168,93,0.06) 45%, transparent 70%)",
            animation: "intro-breathe 2s ease-in-out infinite",
          }}
        />
      </div>
      <p className="eyebrow relative">Delta Light — دلتا لايت</p>
      <h1 className="relative mt-4 text-3xl md:text-5xl font-light tracking-wide text-[#F7F4EE]">
        ادخل إلى <span className="gold-text font-medium">الضوء</span>
      </h1>
      <p className="relative mt-3 text-sm text-[#A7A7A7]">LIGHT CREATES SPACE</p>
      <button
        onClick={skip}
        className="btn-ghost btn-physical relative mt-10 rounded-full px-6 py-2 text-sm"
      >
        تخطَّ المقدمة
      </button>
      <style>{`@keyframes intro-breathe { 0%,100% { transform: scale(0.85); opacity: .6 } 50% { transform: scale(1.15); opacity: 1 } }`}</style>
    </div>
  );
}
