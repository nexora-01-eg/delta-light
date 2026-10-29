'use client';
import { generalInquiry, track } from '@/lib/whatsapp';

export default function WhatsAppButton() {
  return (
    <a href={generalInquiry()} target="_blank" rel="noopener" onClick={() => track('whatsapp_click', { source: 'floating' })} aria-label="WhatsApp"
      className="fixed bottom-5 left-5 z-[60] w-14 h-14 rounded-full bg-[#25D366] grid place-items-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.2-1.6-1.2-3.1s.8-2.2 1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5-.3.6-.6.8-.4 1.1.6 1 1.4 1.9 2.5 2.5.3.2.5.1.7-.1l.8-.9c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .7-.2 1.4z" /></svg>
    </a>
  );
}
