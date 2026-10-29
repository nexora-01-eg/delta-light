'use client';
import { useEffect } from 'react';

export default function LightCursor() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = document.createElement('div');
    el.id = 'dl-light';
    el.style.cssText = 'position:fixed;width:340px;height:340px;pointer-events:none;z-index:5;border-radius:50%;background:radial-gradient(circle,rgba(201,168,93,0.14),transparent 65%);transform:translate(-50%,-50%);transition:opacity .3s;';
    document.body.appendChild(el);
    const move = (e: MouseEvent) => { el.style.left = e.clientX + 'px'; el.style.top = e.clientY + 'px'; };
    window.addEventListener('pointermove', move);
    return () => { window.removeEventListener('pointermove', move); el.remove(); };
  }, []);
  return null;
}
