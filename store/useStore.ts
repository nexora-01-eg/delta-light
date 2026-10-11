"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = { slug: string; qty: number };

type Store = {
  cart: CartItem[];
  wishlist: string[];
  introDone: boolean;
  searchOpen: boolean;
  cartOpen: boolean;
  light: { intensity: number; warmth: number; focus: number };
  setIntroDone: () => void;
  setSearchOpen: (v: boolean) => void;
  setCartOpen: (v: boolean) => void;
  setLight: (p: Partial<Store["light"]>) => void;
  addToCart: (slug: string) => void;
  removeFromCart: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clearCart: () => void;
  toggleWishlist: (slug: string) => void;
};

export const useStore = create<Store>()(
  persist(
    (set) => ({
      cart: [],
      wishlist: [],
      introDone: false,
      searchOpen: false,
      cartOpen: false,
      light: { intensity: 0.7, warmth: 0.65, focus: 0.5 },
      setIntroDone: () => set({ introDone: true }),
      setSearchOpen: (v) => set({ searchOpen: v }),
      setCartOpen: (v) => set({ cartOpen: v }),
      setLight: (p) => set((s) => ({ light: { ...s.light, ...p } })),
      addToCart: (slug) =>
        set((s) => {
          const f = s.cart.find((c) => c.slug === slug);
          return {
            cart: f
              ? s.cart.map((c) => (c.slug === slug ? { ...c, qty: c.qty + 1 } : c))
              : [...s.cart, { slug, qty: 1 }],
          };
        }),
      removeFromCart: (slug) => set((s) => ({ cart: s.cart.filter((c) => c.slug !== slug) })),
      setQty: (slug, qty) =>
        set((s) => ({
          cart: qty <= 0 ? s.cart.filter((c) => c.slug !== slug) : s.cart.map((c) => (c.slug === slug ? { ...c, qty } : c)),
        })),
      clearCart: () => set({ cart: [] }),
      toggleWishlist: (slug) =>
        set((s) => ({
          wishlist: s.wishlist.includes(slug) ? s.wishlist.filter((w) => w !== slug) : [...s.wishlist, slug],
        })),
    }),
    { name: "delta-light-store", partialize: (s) => ({ cart: s.cart, wishlist: s.wishlist }) as Store }
  )
);
