"use client";
import { waGeneral } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

export default function WhatsAppButton() {
  return (
    <a
      href={waGeneral()}
      target="_blank"
      rel="noopener"
      onClick={() => track("whatsapp_click", { where: "floating" })}
      aria-label="تواصل واتساب"
      className="btn-gold btn-physical fixed bottom-5 right-5 z-[70] flex h-13 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-2xl"
      style={{ height: 52 }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.5 14.1c-.2.7-1.3 1.4-1.9 1.4-.5.1-1 .2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.4.5c-.1.2-.3.3-.1.6.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.8 1.8.3.2.5.1.7-.1l.8-1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.4 0 .1 0 .5-.5 1.6Z" />
      </svg>
      واتساب
    </a>
  );
}
