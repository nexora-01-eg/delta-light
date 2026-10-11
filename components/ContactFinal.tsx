"use client";
import { BUSINESS } from "@/data/content";
import { waGeneral, telLink, mailLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";

export default function ContactFinal() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <Reveal className="mx-auto max-w-3xl px-5 text-center">
        <p className="eyebrow">الغرفة الأخيرة</p>
        <h2 className="mt-4 text-3xl font-light leading-snug md:text-5xl">مش عارف تختار الإضاءة المناسبة؟</h2>
        <p className="mx-auto mt-4 max-w-xl leading-8 text-[#A7A7A7]">
          ابعتلنا تفاصيل المساحة وإحنا نساعدك تختار الأنسب.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={waGeneral()} target="_blank" rel="noopener"
            onClick={() => track("whatsapp_click", { where: "contact" })}
            className="btn-gold btn-physical rounded-full px-8 py-3.5 text-sm font-semibold"
          >
            تحدث معنا على واتساب
          </a>
          <a href={telLink} onClick={() => track("phone_click")} className="btn-ghost btn-physical rounded-full px-8 py-3.5 text-sm">
            اتصل بنا — {BUSINESS.phone}
          </a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-5 text-sm text-[#A7A7A7]">
          <a href={mailLink} className="hover:text-white" dir="ltr">{BUSINESS.email}</a>
          <a href={BUSINESS.instagram} target="_blank" rel="noopener" className="hover:text-white">إنستجرام</a>
        </div>
      </Reveal>
    </section>
  );
}
