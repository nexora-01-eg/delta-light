'use client';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CATEGORIES, searchProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export function ShopClient() {
  const params = useSearchParams();
  const initialCat = params.get('cat') || 'all';
  const initialQ = params.get('q') || '';
  const [cat, setCat] = useState(initialCat);
  const [q, setQ] = useState(initialQ);
  const [sort, setSort] = useState('featured');

  const list = useMemo(() => {
    let r = searchProducts(q);
    if (cat !== 'all') r = r.filter((p) => p.categorySlug === cat);
    if (sort === 'name') r = [...r].sort((a, b) => a.name.localeCompare(b.name, 'ar'));
    return r;
  }, [q, cat, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-10">
      <div className="text-xs tracking-[0.4em] text-gold">SHOP — المتجر</div>
      <h1 className="text-3xl md:text-5xl font-bold mt-3">كل الإضاءة في مكان واحد</h1>
      <div className="mt-7 glass rounded-2xl p-4 grid md:grid-cols-[1fr_auto_auto] gap-3">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="ابحث: نجف / chandelier / LED / ماجنتيك…" className="bg-ink/60 hairline rounded-full px-5 py-3 text-sm outline-none placeholder:text-muted" aria-label="Search" />
        <select value={cat} onChange={(e) => setCat(e.target.value)} className="bg-ink hairline rounded-full px-5 py-3 text-sm" aria-label="Category">
          <option value="all">كل التصنيفات</option>
          {CATEGORIES.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-ink hairline rounded-full px-5 py-3 text-sm" aria-label="Sort">
          <option value="featured">المميز أولاً</option>
          <option value="name">أبجدي</option>
        </select>
      </div>
      {list.length === 0 ? (
        <div className="mt-10 glass rounded-3xl p-10 text-center">
          <div className="font-bold text-xl">لا توجد نتائج مطابقة</div>
          <p className="text-sm text-muted mt-2">جرب كلمة أخرى — أو ابعتلنا على واتساب وسنساعدك تلاقي المناسب.</p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {list.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
