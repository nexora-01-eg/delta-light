'use client';
import { useStore } from '@/lib/store';
import { PRODUCTS } from '@/data/products';
import { productInquiry, track } from '@/lib/whatsapp';

export default function ProductActions({ id, name, code }: { slug: string; id: string; name: string; code: string | null }) {
  const { addToCart, toggleWish, wishlist } = useStore();
  const p = PRODUCTS.find((x) => x.id === id)!;
  const wished = wishlist.includes(id);
  return (
    <div className="mt-6 grid gap-2">
      <div className="grid sm:grid-cols-2 gap-2">
        <a href={productInquiry(name, code)} target="_blank" rel="noopener" onClick={() => track('whatsapp_click', { product: id })} className="text-center bg-gold text-ink font-bold rounded-full py-3.5 text-sm">استفسر واتساب</a>
        <button onClick={() => { addToCart(p); track('add_to_cart', { id }); }} className="rounded-full py-3.5 text-sm hairline glass hover:border-gold">أضف للسلة</button>
      </div>
      <button onClick={() => toggleWish(id)} className="rounded-full py-3 text-xs hairline hover:border-gold">{wished ? '✓ في المفضلة — اضغط للإزالة' : '♡ أضف للمفضلة'}</button>
    </div>
  );
}
