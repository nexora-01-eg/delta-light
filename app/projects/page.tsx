import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "الحلول والمشاريع | دلتا لايت",
  description: "حلول إضاءة للمنازل والفلل والمكاتب والمساحات التجارية — دلتا لايت شبين الكوم.",
};

const APPLICATIONS = [
  { t: "منازل", d: "إضاءة دافئة متوازنة للحياة اليومية." },
  { t: "فلل", d: "واجهات وحدائق وصالات بحضور معماري." },
  { t: "مكاتب", d: "إضاءة وظيفية مريحة للعين." },
  { t: "مساحات تجارية", d: "إبراز المنتج وتوجيه حركة الزوار بالضوء." },
  { t: "مشاريع تشطيب", d: "حلول متكاملة: إضاءة + تشطيبات كهرباء." },
];

export default function ProjectsPage() {
  return (
    <main className="pt-28">
      <div className="mx-auto max-w-7xl px-5">
        <p className="eyebrow">الحلول</p>
        <h1 className="mt-3 max-w-2xl text-3xl font-light md:text-5xl">الضوء الصح لكل مساحة</h1>
        <p className="mt-3 max-w-xl text-sm leading-7 text-[#A7A7A7]">
          نعرض هنا أنواع التطبيقات التي نخدمها. صور المشاريع المنفذة تُنشر فقط عند توفر أصول حقيقية —
          راسلنا واطلب سابقة أعمال موثقة.
        </p>
        <div className="mt-10 grid gap-5 pb-24 sm:grid-cols-2 lg:grid-cols-3">
          {APPLICATIONS.map((a, i) => (
            <Reveal key={a.t} delay={i * 0.05}>
              <div className="panel rounded-2xl p-8">
                <p className="eyebrow">0{i + 1}</p>
                <h2 className="mt-2 text-2xl font-light">{a.t}</h2>
                <p className="mt-2 text-sm leading-7 text-[#A7A7A7]">{a.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
