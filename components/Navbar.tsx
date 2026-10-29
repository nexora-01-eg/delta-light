'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useStore } from '@/lib/store';
import { waLink, generalInquiry } from '@/lib/whatsapp';

const LINKS = [
  { href: '/', label: 'الرئيسية' },
  { href: '/shop', label: 'المتجر' },
  { href: '/#categories', label: 'التصنيفات' },
  { href: '/projects', label: 'المشاريع' },
  { href: '/#showroom', label: 'من نحن' },
  { href: '/#contact', label: 'تواصل معنا' }
];

export default function Navbar() {
  const { cart, wishlist, setCartOpen, setSearchOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 300 && y > lastY);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-transform duration-500 ${hidden ? '-translate-y-full' : ''}`}>
      <div className={`${scrolled ? 'glass shadow-[0_10px_40px_rgba(0,0,0,0.5)]' : 'bg-transparent'} transition-all`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Delta Light home">
            <span className="w-9 h-9 rounded-full hairline grid place-items-center text-gold font-bold">D</span>
            <span className="leading-tight">
              <span className="block text-[11px] tracking-[0.35em] text-champagne">DELTA LIGHT</span>
              <span className="block text-lg font-bold">دلتا لايت</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-sm text-cream/90" aria-label="Primary">
            {LINKS.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-gold transition-colors">{l.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setSearchOpen(true)} aria-label="Search" className="w-10 h-10 grid place-items-center rounded-full hairline hover:border-gold">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
            </button>
            <Link href="/shop?wish=1" aria-label="Wishlist" className="relative w-10 h-10 grid place-items-center rounded-full hairline hover:border-gold">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s-7.5-4.6-9.5-9C1 8.5 3 5 6.5 5c2 0 3.5 1 4.2 2.3h2.6C14 6 15.5 5 17.5 5 21 5 23 8.5 21.5 12c-2 4.4-9.5 9-9.5 9z" transform="scale(0.95)" /></svg>
              {wishlist.length > 0 && <span className="absolute -top-1 -left-1 bg-gold text-ink text-[10px] w-5 h-5 grid place-items-center rounded-full font-bold">{wishlist.length}</span>}
            </Link>
            <button onClick={() => setCartOpen(true)} aria-label="Cart" className="relative w-10 h-10 grid place-items-center rounded-full hairline hover:border-gold">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 6h15l-1.5 9h-12z" /><path d="M6 6L5 3H2" /><circle cx="9" cy="20" r="1.5" /><circle cx="17" cy="20" r="1.5" /></svg>
              {cart.length > 0 && <span className="absolute -top-1 -left-1 bg-gold text-ink text-[10px] w-5 h-5 grid place-items-center rounded-full font-bold">{cart.reduce((a, i) => a + i.qty, 0)}</span>}
            </button>
            <a href={generalInquiry()} target="_blank" rel="noopener" className="hidden md:inline-flex text-sm bg-gold text-ink font-bold rounded-full px-5 py-2.5 hover:brightness-110">واتساب</a>
            <button onClick={() => setMobile(!mobile)} aria-label="Menu" className="lg:hidden w-10 h-10 grid place-items-center rounded-full hairline">
              <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            </button>
          </div>
        </div>
        {mobile && (
          <nav className="lg:hidden glass mx-4 mb-4 rounded-2xl p-4 grid gap-1 text-sm" aria-label="Mobile">
            {LINKS.map((l) => (
              <Link key={l.label} href={l.href} onClick={() => setMobile(false)} className="py-2.5 px-3 rounded-xl hover:bg-white/5">{l.label}</Link>
            ))}
            <a href={waLink('مرحباً دلتا لايت')} target="_blank" rel="noopener" className="py-2.5 px-3 rounded-xl bg-gold text-ink font-bold text-center mt-2">تحدث معنا واتساب</a>
          </nav>
        )}
      </div>
    </header>
  );
}
