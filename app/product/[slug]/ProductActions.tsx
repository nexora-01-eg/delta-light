"use client";
import { useStore } from "@/store/useStore";
import { waProduct } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

export default function ProductActions({ slug, name, code }: { slug: string; name: string; code: string | null }) {
  const addToCart = useStore((s) => s.addToCart);
  const setCartOpen = useStore((s) => s.setCartOpen);
  const toggleWishlist = useStore((s) => s.toggleWishlist);
  const wishlist = useStore((s) => s.wishlist);
  const wished = wishlist.includes(slug);

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <button
        onClick={() => { addToCart(slug); track("add_to_cart", { slug }); setCartOpen(true); }}
        className="btn-gold btn-physical rounded-full px-7 py-3 text-sm font-semibold"
      >
        أضف للسلة
      </button>
      <a
        href={waProduct(name, code)} target="_blank" rel="noopener"
        onClick={() => track("whatsapp_click", { slug })}
        className="btn-ghost btn-physical rounded-full px-7 py-3 text-sm"
      >
        استفسر واتساب
      </a>
      <button
        onClick={() => toggleWishlist(slug)}
        aria-pressed={wished}
        className={`rounded-full border px-5 py-3 text-sm ${wished ? "border-[#C9A85D] text-[#C9A85D]" : "hairline"}`}
      >
        {wished ? "♥ في المفضلة" : "♡ مفضلة"}
      </button>
    </div>
  );
}
