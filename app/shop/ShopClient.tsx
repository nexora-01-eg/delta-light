"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { track } from "@/lib/analytics";
import { searchProducts } from "@/lib/search";

export default function ShopClient() {
  const params = useSearchParams();
  const initialCat = params.get("cat") ?? "";
  const wishlistOnly = params.get("wishlist") === "1";
  const [cat, setCat] = useState(initialCat);
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"featured" | "az">("featured");

  const list = useMemo(() => {
    let l = [...PRODUCTS];
    if (wishlistOnly) {
      try {
        const raw = localStorage.getItem("delta-light-store");
        const wished: string[] = raw ? JSON.parse(raw)?.state?.wishlist ?? [] : [];
        l = l.filter((p) => wished.includes(p.slug));
      } catch { /* ignore */ }
    }
    if (cat) l = l.filter((p) => p.category === cat);
    if (q.trim()) {
      const ids = new Set(searchProducts(q).map((p) => p.slug));
      l = l.filter((p) => ids.has(p.slug));
    }
    if (sort === "az") l.sort((a, b) => a.name.localeCompare(b.name, "ar"));
    else l.sort((a, b) => Number(b.featured) - Number(a.featured));
    return l;
  }, [cat, q, sort, wishlistOnly]);

  return (
    <main className="pt-28">
      <div className="mx-auto max-w-7xl px-5">
        <p className="eyebrow">{wishlistOnly ? "المفضلة" : "تسوّق"}</p>
        <h1 className="mt-3 text-3xl font-light md:text-5xl">
          {wishlistOnly ? "قطعك المفضلة" : "المجموعة الكاملة"}
        </h1>
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
          <input
            value={q} onChange={(e) => { setQ(e.target.value); track("search", { q: e.target.value }); }}
            placeholder="ابحث: نجف، ماجنتيك، أبليك، chandelier…"
            aria-label="بحث المنتجات"
            className="flex-1 rounded-full border hairline bg-white/[0.03] px-5 py-3 text-sm outline-none focus:border-[#C9A85D]"
          />
          <select
            value={sort} onChange={(e) => setSort(e.target.value as typeof sort)}
            aria-label="ترتيب" className="rounded-full border hairline bg-[#101010] px-5 py-3 text-sm"
          >
            <option value="featured">المميز أولاً</option>
            <option value="az">أبجدي</option>
          </select>
        </div>
        <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="التصنيفات">
          <button
            onClick={() => { setCat(""); track("category_view", { cat: "all" }); }}
            className={`rounded-full px-4 py-1.5 text-sm ${cat === "" ? "btn-gold font-semibold" : "btn-ghost"}`}
          >
            الكل
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.slug}
              onClick={() => { setCat(c.slug); track("category_view", { cat: c.slug }); }}
              className={`rounded-full px-4 py-1.5 text-sm ${cat === c.slug ? "btn-gold font-semibold" : "btn-ghost"}`}
            >
              {c.ar}
            </button>
          ))}
        </div>
        {list.length === 0 ? (
          <p className="py-20 text-center text-[#A7A7A7]">لا توجد منتجات مطابقة — جرّب تصنيفاً آخر أو راسلنا واتساب.</p>
        ) : (
          <div className="mt-8 grid gap-5 pb-24 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
