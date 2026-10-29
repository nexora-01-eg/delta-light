'use client';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import { productInquiry, track } from '@/lib/whatsapp';
import LampArt from '@/components/LampArt';
import type { Product } from '@/data/products';

function onSpot(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
  el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
}

export function ProductVisual({ product, large }: { product: Product; large?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-charcoal to-ink hairline ${large ? 'aspect-[4/3]' : 'aspect-square'}`}>
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 chandelier-rays opacity-70" />
      <div className="absolute inset-0 grid place-items-center p-6">
        <LampArt slug={product.categorySlug} className={`${large ? 'h-44 w-44' : 'h-24 w-24'} transition-transform duration-500 group-hover:scale-110`} />
      </div>
      <div className="absolute bottom-2 inset-x-0 text-center text-[10px] text-muted">صورة فعلية تُضاف عند توفرها</div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWish, wishlist } = useStore();
  const wished = wishlist.includes(product.id);
  return (
    <article onMouseMove={onSpot} className="spotlight-card group glass rounded-3xl p-3 hover:border-gold/50 transition-all hover:-translate-y-1 duration-300">
      <div className="relative">
        <ProductVisual product={product} />
        <button onClick={() => toggleWish(product.id)} aria-label="Wishlist" className={`absolute top-3 left-3 w-9 h-9 grid place-items-center rounded-full backdrop-blur bg-ink/50 hairline ${wished ? 'text-gold border-gold' : 'text-cream'}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill={wished ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8"><path d="M12 21C7 16.5 3 13 3 8.8 3 6 5 4 7.5 4c1.7 0 3.3.9 4.5 2.6C13.2 4.9 14.8 4 16.5 4 19 4 21 6 21 8.8c0 4.2-4 7.7-9 12.2z" /></svg>
        </button>
      </div>
      <div className="p-3">
        <div className="text-[11px] text-gold tracking-wide">{product.category}</div>
        <Link href={`/product/${product.slug}`} className="block mt-1 font-bold leading-snug hover:text-gold min-h-[3rem]">{product.name}</Link>
        <div className="mt-2 text-sm">
          {product.price ? <span className="text-cream font-bold">{product.price} ج.م</span> : <span className="text-champagne">استفسر عن السعر</span>}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <Link href={`/product/${product.slug}`} className="text-center text-xs rounded-full hairline py-2.5 hover:border-gold">عرض</Link>
          <a href={productInquiry(product.name, product.code)} target="_blank" rel="noopener" onClick={() => track('whatsapp_click', { product: product.slug })} className="text-center text-xs rounded-full bg-gold text-ink font-bold py-2.5">واتساب</a>
        </div>
        <button onClick={() => { addToCart(product); track('add_to_cart', { id: product.id }); }} className="mt-2 w-full text-xs rounded-full bg-white/5 hover:bg-white/10 py-2.5 hairline">أضف للسلة</button>
      </div>
    </article>
  );
}
