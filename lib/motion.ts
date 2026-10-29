'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

export function motionSetup() {
  if (registered) return;
  registered = true;
  gsap.registerPlugin(ScrollTrigger);
}

export function motionAllowed(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  return true;
}

export function isFinePointer(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: fine)').matches;
}

export { gsap, ScrollTrigger };
