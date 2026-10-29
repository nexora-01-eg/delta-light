'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import { searchProducts } from '@/data/products';

export default function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useStore();
  const [q, setQ] = useState('');
  if (!searchOpen) return null;
  const results = searchProducts(q).slice(0, 8);
  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-label="Search">
      <div className="absolute inset-0 bg-black/80 backdrop-blur" onClick={() => setSearchOpen(false)} />
      <div className="relative max-w-2xl mx-auto mt-24 glass rounded-3xl p-6">
        <div className="flex items-center justify-between gap-3">
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="ابحث: نجف / أبليك / ماجنتيك / chandelier / LED" className="flex-1 bg-transparent outline-none text-lg placeholder:text-muted" aria-label="Search products" />
          <button onClick={() => setSearchOpen(false)} className="w-10 h-10 grid place-items-center rounded-full hairline" aria-label="Close search">✕</button>
        </div>
        <div className="mt-4 divide-y divide-white/5">
          {results.map((p) => (
            <Link key={p.id} href={`/product/${p.slug}`} onClick={() => setSearchOpen(false)} className="flex items-center justify-between py-3 hover:text-gold">
              <span className="text-sm font-bold">{p.name}</span>
              <span className="text-xs text-muted">{p.category}</span>
            </Link>
          ))}
          {q && results.length === 0 && <p className="text-sm text-muted py-4">لا نتائج — جرب كلمة أخرى أو تواصل واتساب وسنساعدك.</p>}
        </div>
        <Link href={`/shop?q=${encodeURIComponent(q)}`} onClick={() => setSearchOpen(false)} className="mt-4 block text-center text-sm rounded-full bg-gold text-ink font-bold py-3">عرض كل النتائج في المتجر</Link>
      </div>
    </div>
  );
}
