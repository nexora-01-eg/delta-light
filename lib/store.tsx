'use client';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Product } from '@/data/products';

export type CartItem = { product: Product; qty: number };

type Store = {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
  toggleWish: (id: string) => void;
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (v: boolean) => void;
};

const Ctx = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    try {
      const c = localStorage.getItem('dl-cart');
      const w = localStorage.getItem('dl-wish');
      if (c) setCart(JSON.parse(c));
      if (w) setWishlist(JSON.parse(w));
    } catch { /* noop */ }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('dl-cart', JSON.stringify(cart));
      localStorage.setItem('dl-wish', JSON.stringify(wishlist));
    } catch { /* noop */ }
  }, [cart, wishlist]);

  const value = useMemo<Store>(() => ({
    cart, wishlist, cartOpen, setCartOpen, searchOpen, setSearchOpen,
    addToCart: (p) => {
      setCart((prev) => {
        const f = prev.find((i) => i.product.id === p.id);
        if (f) return prev.map((i) => (i.product.id === p.id ? { ...i, qty: i.qty + 1 } : i));
        return [...prev, { product: p, qty: 1 }];
      });
      setCartOpen(true);
    },
    removeFromCart: (id) => setCart((prev) => prev.filter((i) => i.product.id !== id)),
    setQty: (id, qty) => setCart((prev) => prev.map((i) => (i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i))),
    clearCart: () => setCart([]),
    toggleWish: (id) => setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }), [cart, wishlist, cartOpen, searchOpen]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore(): Store {
  const v = useContext(Ctx);
  if (!v) throw new Error('Store missing');
  return v;
}
