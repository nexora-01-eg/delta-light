"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useStore } from "@/store/useStore";
import { searchProducts } from "@/lib/search";
import { track } from "@/lib/analytics";

const HINTS = ["نجف", "نجف ليد", "ماجنتيك", "أبليك", "سبوت", "كريستال", "chandelier", "LED"];

export default function SearchOverlay() {
  const open = useStore((s) => s.searchOpen);
  const setOpen = useStore((s) => s.setSearchOpen);
  const [q, setQ] = useState("");
  const results = useMemo(() => searchProducts(q), [q]);

  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label="البحث" className="fixed inset-0 z-[90] bg-[#050505]/95 backdrop-blur-xl">
      <div className="mx-auto max-w-3xl px-5 pt-24">
        <div className="flex items-center justify-between">
          <p className="eyebrow">ابحث في المعرض</p>
          <button onClick={() => setOpen(false)} aria-label="إغلاق البحث" className="rounded-full p-2 hover:bg-white/10">✕</button>
        </div>
        <input
          autoFocus
          value={q}
          onChange={(e) => { setQ(e.target.value); if (e.target.value.length > 1) track("search", { q: e.target.value }); }}
          placeholder="نجف، ماجنتيك، أبليك، chandelier…"
          aria-label="كلمة البحث"
          className="mt-4 w-full rounded-2xl border hairline bg-white/[0.03] p-5 text-xl outline-none placeholder:text-[#555] focus:border-[#C9A85D]"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          {HINTS.map((h) => (
            <button key={h} onClick={() => setQ(h)} className="btn-ghost rounded-full px-4 py-1.5 text-xs">{h}</button>
          ))}
        </div>
        <div className="mt-6 space-y-2 pb-20">
          {q.length > 0 && results.length === 0 && (
            <p className="text-sm text-[#A7A7A7]">لا نتائج — جرّب «نجف» أو «ماجنتيك» أو راسلنا واتساب.</p>
          )}
          {results.map((p) => (
            <Link
              key={p.slug} href={`/product/${p.slug}`} onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl border hairline p-4 transition-colors hover:border-[#C9A85D]/50"
            >
              <span><span className="block font-medium">{p.name}</span><span className="text-xs text-[#A7A7A7]">{p.category}</span></span>
              <span className="text-sm text-[#C9A85D]">عرض ←</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
