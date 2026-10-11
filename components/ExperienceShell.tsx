"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import ExhibitionIntro from "./ExhibitionIntro";
import ExhibitionNav from "./ExhibitionNav";
import CartDrawer from "./CartDrawer";
import SearchOverlay from "./SearchOverlay";
import WhatsAppButton from "./WhatsAppButton";
import { track } from "@/lib/analytics";

export default function ExperienceShell({ children }: { children: React.ReactNode }) {
  const raf = useRef<number>(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    const loop = (t: number) => {
      lenis.raf(t);
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf.current);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    track("page_view", { path: window.location.pathname });
  }, []);

  return (
    <>
      <ExhibitionIntro />
      <ExhibitionNav />
      {children}
      <CartDrawer />
      <SearchOverlay />
      <WhatsAppButton />
    </>
  );
}
