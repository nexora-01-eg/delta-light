'use client';
import { useStore } from '@/lib/store';
import { cartInquiry, track } from '@/lib/whatsapp';

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, setQty, removeFromCart } = useStore();
  if (!cartOpen) return null;
  const lines = cart.map((i) => `• ${i.product.name} × ${i.qty}`);
  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-label="Cart">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
      <aside className="absolute left-0 top-0 h-full w-full max-w-md bg-charcoal hairline p-6 flex flex-col">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">السلة</h2>
          <button onClick={() => setCartOpen(false)} aria-label="Close cart" className="w-10 h-10 grid place-items-center rounded-full hairline">✕</button>
        </div>
        <div className="mt-5 flex-1 overflow-auto space-y-3">
          {cart.length === 0 && <p className="text-muted text-sm">سلتك فارغة. اكتشف المجموعة وابدأ باختيار الإضاءة المناسبة.</p>}
          {cart.map((i) => (
            <div key={i.product.id} className="glass rounded-2xl p-3 flex gap-3 items-center">
              <div className="w-14 h-14 rounded-xl bg-ink hairline grid place-items-center text-gold">✦</div>
              <div className="flex-1">
                <div className="text-sm font-bold leading-snug">{i.product.name}</div>
                <div className="text-xs text-muted mt-1">{i.product.price ? `${i.product.price} ج.م` : 'استفسر عن السعر'}</div>
                <div className="mt-2 flex items-center gap-2">
                  <button onClick={() => setQty(i.product.id, i.qty - 1)} className="w-7 h-7 rounded-full hairline" aria-label="decrease">−</button>
                  <span className="text-sm w-6 text-center">{i.qty}</span>
                  <button onClick={() => setQty(i.product.id, i.qty + 1)} className="w-7 h-7 rounded-full hairline" aria-label="increase">+</button>
                </div>
              </div>
              <button onClick={() => removeFromCart(i.product.id)} className="text-muted hover:text-red-300 text-xs" aria-label="remove">حذف</button>
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-2">
          <a href={cartInquiry(lines)} target="_blank" rel="noopener" onClick={() => track('whatsapp_click', { source: 'cart' })} className="text-center bg-gold text-ink font-bold rounded-full py-3">إتمام عبر واتساب</a>
          <button onClick={() => setCartOpen(false)} className="text-center rounded-full hairline py-3 text-sm">مواصلة التسوق</button>
        </div>
      </aside>
    </div>
  );
}
