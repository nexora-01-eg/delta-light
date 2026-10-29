import Link from 'next/link';
import { generalInquiry } from '@/lib/whatsapp';

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-10">
      <div className="text-xs tracking-[0.4em] text-gold">PROJECTS — المشاريع والحلول</div>
      <h1 className="text-3xl md:text-5xl font-bold mt-3">حلول إضاءة للمساحات الحقيقية</h1>
      <p className="mt-4 text-cream/80 max-w-2xl">منازل • فلل • مكاتب • مساحات تجارية • مشاريع تشطيب. لا نعرض مشاريع غير موثقة — ابعتلنا تفاصيل مساحتك وهنبني الحل المناسب معك.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {[
          ['Homes', 'شقق ومنازل', 'إضاءة غرف المعيشة والنوم والاستقبال'],
          ['Villas', 'فلل', 'نجف مركزي + ماجنتيك + خارجي'],
          ['Commercial', 'تجاري ومكاتب', 'سبوتات وتراكات بكفاءة عالية']
        ].map(([en, ar, d]) => (
          <div key={en} className="glass rounded-3xl p-7">
            <div className="text-[11px] tracking-[0.3em] text-gold">{en}</div>
            <div className="mt-2 text-xl font-bold">{ar}</div>
            <div className="mt-2 text-sm text-muted">{d}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 glass rounded-3xl p-8 text-center">
        <div className="font-bold text-xl">عندك مشروع؟</div>
        <p className="text-sm text-muted mt-2">ابعتلنا المقاسات والصور على واتساب وهنرشح لك الأنسب.</p>
        <a href={generalInquiry()} target="_blank" rel="noopener" className="inline-block mt-5 bg-gold text-ink font-bold rounded-full px-8 py-3.5 text-sm">ابدأ استشارة واتساب</a>
      </div>
      <Link href="/shop" className="inline-block mt-6 text-sm hairline rounded-full px-6 py-3 hover:border-gold">تصفح المتجر ←</Link>
    </div>
  );
}
