"use client";
import Link from "next/link";
import { useStore } from "@/store/useStore";
import { getProduct } from "@/data/products";
import { waCheckout } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

export default function CartDrawer() {
  const open = useStore((s) => s.cartOpen);
  const setOpen = useStore((s) => s.setCartOpen);
  const cart = useStore((s) => s.cart);
  const setQty = useStore((s) => s.setQty);
  const remove = useStore((s) => s.removeFromCart);

  if (!open) return null;
  const lines = cart.map((c) => {
    const p = getProduct(c.slug);
    return `${p?.name ?? c.slug} × ${c.qty}`;
  });
  const hasPrice = cart.some((c) => getProduct(c.slug)?.price != null);
  const total = hasPrice
    ? `${cart.reduce((a, c) => a + (getProduct(c.slug)?.price ?? 0) * c.qty, 0).toLocaleString("ar-EG")} ج.م`
    : "يُحدد عند الاستفسار";

  return (
    <div role="dialog" aria-modal="true" aria-label="سلة التسوق" className="fixed inset-0 z-[90]">
      <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
      <aside className="panel absolute left-0 top-0 flex h-full w-[min(92vw,420px)] flex-col p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl">السلة</h2>
          <button onClick={() => setOpen(false)} aria-label="إغلاق السلة" className="rounded-full p-2 hover:bg-white/10">✕</button>
        </div>
        <div className="mt-4 flex-1 space-y-3 overflow-y-auto">
          {cart.length === 0 && <p className="text-sm text-[#A7A7A7]">سلتك فارغة — اكتشف المجموعة وأضف ما يعجبك.</p>}
          {cart.map((c) => {
            const p = getProduct(c.slug);
            if (!p) return null;
            return (
              <div key={c.slug} className="flex items-center justify-between gap-3 rounded-xl border hairline p-3">
                <div>
                  <Link href={`/product/${p.slug}`} onClick={() => setOpen(false)} className="font-medium hover:text-[#C9A85D]">{p.name}</Link>
                  <p className="text-xs text-[#A7A7A7]">{p.price != null ? `${p.price.toLocaleString("ar-EG")} ج.م` : "استفسر عن السعر"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setQty(c.slug, c.qty - 1)} aria-label="إنقاص" className="rounded-full border hairline px-2">−</button>
                  <span aria-live="polite">{c.qty}</span>
                  <button onClick={() => setQty(c.slug, c.qty + 1)} aria-label="زيادة" className="rounded-full border hairline px-2">+</button>
                  <button onClick={() => remove(c.slug)} aria-label="حذف" className="text-[#A7A7A7] hover:text-white">✕</button>
                </div>
              </div>
            );
          })}
        </div>
        {cart.length > 0 && (
          <div className="mt-4 border-t hairline pt-4">
            <p className="flex justify-between text-sm"><span>الإجمالي</span><span>{total}</span></p>
            <div className="mt-3 flex gap-2">
              <Link href="/shop" onClick={() => setOpen(false)} className="btn-ghost btn-physical flex-1 rounded-full px-4 py-2.5 text-center text-sm">واصل التسوق</Link>
              <a
                href={waCheckout(lines, total)} target="_blank" rel="noopener"
                onClick={() => track("begin_checkout", { n: cart.length })}
                className="btn-gold btn-physical flex-1 rounded-full px-4 py-2.5 text-center text-sm font-semibold"
              >
                إتمام عبر واتساب
              </a>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
