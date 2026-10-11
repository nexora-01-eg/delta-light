"use client";
import Link from "next/link";
import type { Product } from "@/data/products";
import { categoryName } from "@/data/products";
import { useStore } from "@/store/useStore";
import { waProduct } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

export function ProductVisual({ p, className = "" }: { p: Product; className?: string }) {
  // Elegant procedural placeholder — never fake photography.
  return (
    <div className={`relative overflow-hidden bg-[#101010] ${className}`} role="img" aria-label={p.name}>
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 30%, rgba(201,168,93,0.35), transparent 65%), radial-gradient(ellipse 50% 40% at 50% 75%, rgba(214,195,165,0.12), transparent 70%), linear-gradient(180deg, #161616, #0a0a0a)`,
        }}
      />
      {/* chandelier silhouette */}
      <svg viewBox="0 0 200 160" className="absolute inset-0 m-auto h-3/4 w-3/4 opacity-80" aria-hidden>
        <line x1="100" y1="8" x2="100" y2="45" stroke="#C9A85D" strokeWidth="1.5" />
        <ellipse cx="100" cy="70" rx="55" ry="16" fill="none" stroke="#C9A85D" strokeWidth="1.5" />
        <ellipse cx="100" cy="92" rx="38" ry="12" fill="none" stroke="#D6C3A5" strokeWidth="1" opacity="0.7" />
        {Array.from({ length: 9 }).map((_, i) => {
          const x = 55 + i * 11.25;
          return <g key={i}><line x1={x} y1="70" x2={x} y2="88" stroke="#8a6d2f" strokeWidth="0.8" /><circle cx={x} cy="94" r="3.2" fill="#f3e3bb" opacity="0.9" /></g>;
        })}
        <ellipse cx="100" cy="94" rx="3" ry="8" fill="#C9A85D" opacity="0.35" />
      </svg>
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at var(--mx,50%) var(--my,30%), rgba(255,230,180,0.18), transparent 55%)" }} />
    </div>
  );
}

export default function ProductCard({ p }: { p: Product }) {
  const addToCart = useStore((s) => s.addToCart);
  const toggleWishlist = useStore((s) => s.toggleWishlist);
  const wishlist = useStore((s) => s.wishlist);
  const setCartOpen = useStore((s) => s.setCartOpen);
  const wished = wishlist.includes(p.slug);

  return (
    <article className="group panel overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A85D]/40">
      <Link
        href={`/product/${p.slug}`}
        className="block"
        onClick={() => track("product_detail_open", { slug: p.slug })}
        onMouseMove={(e) => {
          const el = e.currentTarget.querySelector(".group-visual") as HTMLElement | null;
          if (!el) return;
          const r = el.getBoundingClientRect();
          el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
          el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
        }}
      >
        <div className="group-visual">
          <ProductVisual p={p} className="aspect-[4/3]" />
        </div>
        <div className="p-5">
          <p className="text-[11px] tracking-[0.25em] text-[#C9A85D]">{categoryName(p.category)}</p>
          <h3 className="mt-1 text-lg font-medium">{p.name}</h3>
          <p className="mt-1 text-sm text-[#A7A7A7]">
            {p.price != null ? `${p.price.toLocaleString("ar-EG")} ج.م` : "استفسر عن السعر"}
          </p>
        </div>
      </Link>
      <div className="flex items-center gap-2 px-5 pb-5">
        <button
          onClick={() => { addToCart(p.slug); track("add_to_cart", { slug: p.slug }); setCartOpen(true); }}
          className="btn-gold btn-physical flex-1 rounded-full px-4 py-2 text-sm font-semibold"
        >
          أضف للسلة
        </button>
        <button
          onClick={() => toggleWishlist(p.slug)}
          aria-label={wished ? "إزالة من المفضلة" : "أضف للمفضلة"}
          aria-pressed={wished}
          className={`rounded-full border px-3 py-2 text-sm transition-colors ${wished ? "border-[#C9A85D] text-[#C9A85D]" : "hairline text-[#A7A7A7] hover:text-white"}`}
        >
          {wished ? "♥" : "♡"}
        </button>
        <a
          href={waProduct(p.name, p.code)}
          target="_blank" rel="noopener"
          onClick={() => track("whatsapp_click", { slug: p.slug })}
          aria-label="استفسار واتساب"
          className="btn-ghost btn-physical rounded-full px-3 py-2 text-sm"
        >
          واتساب
        </a>
      </div>
    </article>
  );
}
