import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/data/content";
import { waGeneral, telLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "المعرض | دلتا لايت شبين الكوم",
  description: "زور معرض دلتا لايت — شارع طلعت حرب، شبين الكوم، المنوفية.",
};

export default function ShowroomPage() {
  return (
    <main className="pt-28">
      <div className="mx-auto max-w-7xl px-5">
        <p className="eyebrow">المعرض</p>
        <h1 className="mt-3 max-w-2xl text-3xl font-light md:text-5xl">الوجهة وراء التجربة</h1>
        <div className="architectural-grid mt-8 grid gap-6 rounded-3xl border hairline p-8 pb-24 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-2xl font-light">Delta Light — دلتا لايت</h2>
            <p className="mt-4 leading-8 text-[#D6C3A5]">{BUSINESS.address}</p>
            <p className="mt-1 text-sm text-[#A7A7A7]">{BUSINESS.addressEn}</p>
            <p className="mt-2 text-sm text-[#A7A7A7]">{BUSINESS.hours}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={waGeneral()} target="_blank" rel="noopener" className="btn-gold btn-physical rounded-full px-6 py-2.5 text-sm font-semibold">الاتجاهات عبر واتساب</a>
              <a href={telLink} className="btn-ghost btn-physical rounded-full px-6 py-2.5 text-sm">اتصل: <span dir="ltr">{BUSINESS.phone}</span></a>
            </div>
          </div>
          <div className="panel rounded-2xl p-6 text-sm leading-8 text-[#D6C3A5]">
            <p>ما ستجده في المعرض:</p>
            <ul className="mt-3 list-disc space-y-2 pr-5 text-[#A7A7A7]">
              <li>نجف مودرن وكلاسيك وليد وكريستال معروضة مضيئة</li>
              <li>أنظمة ماجنتيك تراك وسبوتات وداون لايت</li>
              <li>أباليك داخلية وخارجية وتشطيبات كهرباء</li>
              <li>استشارة اختيار الإضاءة حسب مساحتك</li>
            </ul>
            <p className="mt-4 text-xs">إحداثيات خرائط جوجل تُضاف عند توفر الرابط الرسمي — راسلنا واتساب وسنرسل لك الموقع.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
