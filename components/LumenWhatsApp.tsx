'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { generalInquiry, track } from '@/lib/whatsapp';

const LumenCta = dynamic(
  () => import('@designcodeio/threeui/components/LumenCta').then((m) => m.LumenCta),
  { ssr: false, loading: () => <Fallback /> }
);

function Fallback() {
  return (
    <span className="inline-block bg-gold text-ink font-bold rounded-full px-8 py-4 text-sm animate-pulse">
      تحدث معنا على واتساب
    </span>
  );
}

export default function LumenWhatsApp({ label = 'تحدث معنا على واتساب' }: { label?: string }) {
  // Gate client-only branching behind mount so SSR and first paint match.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="relative overflow-hidden rounded-[2rem] hairline grid place-items-center" style={{ height: 220 }}>
        <Fallback />
      </div>
    );
  }

  if (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    window.matchMedia('(pointer: coarse)').matches
  ) {
    return (
      <a
        href={generalInquiry()}
        target="_blank"
        rel="noopener"
        className="inline-block bg-gold text-ink font-bold rounded-full px-8 py-4 text-sm hover:brightness-110"
      >
        {label}
      </a>
    );
  }

  const open = () => {
    track('whatsapp_click', { source: 'lumen-cta' });
    window.open(generalInquiry(), '_blank', 'noopener');
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] hairline" style={{ height: 220 }} role="presentation">
      <LumenCta
        mode="dark"
        variant="primary"
        label={label}
        ring
        hue={140}
        saturation={1.15}
        brightness={1.05}
        onClick={open}
      />
    </div>
  );
}
