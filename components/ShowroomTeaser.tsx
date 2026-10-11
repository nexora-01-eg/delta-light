import Link from "next/link";
import { BUSINESS } from "@/data/content";
import { Reveal, SectionHead } from "./Reveal";
import { waGeneral } from "@/lib/whatsapp";

export default function ShowroomTeaser() {
  return (
    <section id="showroom" className="relative py-24 md:py-32">
      <SectionHead
        index="06 / المعرض"
        title="التجربة الرقمية تقودك إلى الوجهة الحقيقية"
        sub="المعرض الفيزيائي هو الغرفة الأخيرة في هذا المعرض الرقمي."
      />
      <Reveal className="mx-auto mt-10 max-w-7xl px-5">
        <div className="architectural-grid relative overflow-hidden rounded-3xl border hairline p-8 md:p-14">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 70% 30%, rgba(201,168,93,0.16), transparent 65%)" }} />
          <div className="relative grid gap-8 md:grid-cols-2">
            <div>
              <p className="eyebrow">Delta Light Showroom</p>
              <h3 className="mt-3 text-3xl font-light md:text-4xl">تعال وشوف النور بعينك</h3>
              <p className="mt-4 leading-8 text-[#D6C3A5]">{BUSINESS.address}</p>
              <p className="mt-1 text-sm text-[#A7A7A7]">{BUSINESS.hours}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={waGeneral()} target="_blank" rel="noopener" className="btn-gold btn-physical rounded-full px-6 py-2.5 text-sm font-semibold">احجز زيارتك واتساب</a>
                <Link href="/showroom" className="btn-ghost btn-physical rounded-full px-6 py-2.5 text-sm">صفحة المعرض</Link>
              </div>
            </div>
            <div className="panel rounded-2xl p-6">
              <p className="text-sm text-[#A7A7A7]">تواصل مباشر</p>
              <a href={`tel:${BUSINESS.phoneIntl}`} className="mt-2 block text-2xl tracking-wider" dir="ltr">{BUSINESS.phone}</a>
              <a href={`mailto:${BUSINESS.email}`} className="mt-1 block text-sm text-[#D6C3A5]" dir="ltr">{BUSINESS.email}</a>
              <div className="mt-4 flex gap-3 text-sm">
                <a href={BUSINESS.instagram} target="_blank" rel="noopener" className="underline decoration-[#C9A85D] underline-offset-4">إنستجرام</a>
                <a href={BUSINESS.facebook} target="_blank" rel="noopener" className="underline decoration-[#C9A85D] underline-offset-4">فيسبوك</a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
