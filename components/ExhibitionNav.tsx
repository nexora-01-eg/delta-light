"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, BUSINESS } from "@/data/content";
import { useStore } from "@/store/useStore";
import { waGeneral } from "@/lib/whatsapp";

function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="دلتا لايت — الرئيسية">
      <span
        aria-hidden
        className="inline-block h-8 w-8 rounded-full"
        style={{ background: "radial-gradient(circle at 35% 35%, #f3e3bb, #c9a85d 55%, #5c4a1f)" }}
      />
      <span className="leading-none">
        <span className="block text-sm font-semibold tracking-[0.25em]">DELTA LIGHT</span>
        <span className="block text-xs text-[#A7A7A7]">دلتا لايت</span>
      </span>
    </Link>
  );
}

export default function ExhibitionNav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const setSearchOpen = useStore((s) => s.setSearchOpen);
  const setCartOpen = useStore((s) => s.setCartOpen);
  const cart = useStore((s) => s.cart);
  const wishlist = useStore((s) => s.wishlist);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 300 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const count = cart.reduce((a, c) => a + c.qty, 0);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] transition-transform duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 transition-all duration-500 ${
          scrolled ? "panel mt-3 rounded-2xl shadow-2xl" : "bg-transparent"
        }`}
      >
        <Wordmark />
        <nav className="hidden items-center gap-6 text-sm text-[#D6C3A5] lg:flex" aria-label="فهرس المعرض">
          {NAV.map((n) => (
            <Link key={n.slug} href={n.href} className="transition-colors hover:text-white">
              {n.ar}
            </Link>
          ))}
          <Link href="/shop" className="transition-colors hover:text-white">تسوّق</Link>
          <Link href="/projects" className="transition-colors hover:text-white">حلول</Link>
          <Link href="/contact" className="transition-colors hover:text-white">تواصل</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => setSearchOpen(true)} aria-label="بحث" className="rounded-full p-2 hover:bg-white/10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          </button>
          <Link href="/shop?wishlist=1" aria-label="المفضلة" className="relative rounded-full p-2 hover:bg-white/10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21C7 16.5 3 13 3 8.8 3 6 5.2 4 7.8 4c1.7 0 3.2.9 4.2 2.3C13 4.9 14.5 4 16.2 4 18.8 4 21 6 21 8.8c0 4.2-4 7.7-9 12.2Z"/></svg>
            {wishlist.length > 0 && (
              <span className="absolute -top-0.5 -left-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#C9A85D] px-1 text-[10px] text-black">{wishlist.length}</span>
            )}
          </Link>
          <button onClick={() => setCartOpen(true)} aria-label="السلة" className="relative rounded-full p-2 hover:bg-white/10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 3H2"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/></svg>
            {count > 0 && (
              <span className="absolute -top-0.5 -left-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#C9A85D] px-1 text-[10px] text-black">{count}</span>
            )}
          </button>
          <a
            href={waGeneral()}
            target="_blank"
            rel="noopener"
            className="btn-gold btn-physical hidden rounded-full px-4 py-2 text-sm font-medium md:block"
          >
            واتساب
          </a>
          <button onClick={() => setOpen(!open)} aria-label="القائمة" className="rounded-full p-2 hover:bg-white/10 lg:hidden">
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="panel mx-5 mt-2 flex flex-col gap-1 rounded-2xl p-4 text-[#F7F4EE] lg:hidden" aria-label="قائمة الجوال">
          {NAV.map((n) => (
            <Link key={n.slug} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/5">{n.ar}</Link>
          ))}
          <Link href="/shop" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/5">تسوّق</Link>
          <Link href="/showroom" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/5">المعرض — {BUSINESS.address}</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/5">تواصل</Link>
        </nav>
      )}
    </header>
  );
}
