import Link from 'next/link';
import { EMAIL, INSTAGRAM, PHONE_DISPLAY } from '@/lib/whatsapp';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gold/15 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="text-[11px] tracking-[0.35em] text-champagne">DELTA LIGHT</div>
          <div className="text-2xl font-bold mt-1">دلتا لايت</div>
          <p className="text-sm text-muted mt-3 leading-relaxed">إضاءة تصنع الفرق في كل تفاصيل بيتك. حلول إضاءة معمارية وتشطيب كهرباء.</p>
        </div>
        <nav aria-label="Footer">
          <div className="text-sm font-bold text-gold mb-3">روابط</div>
          <div className="grid gap-2 text-sm text-cream/80">
            <Link href="/" className="hover:text-gold">الرئيسية</Link>
            <Link href="/shop" className="hover:text-gold">المتجر</Link>
            <Link href="/projects" className="hover:text-gold">المشاريع</Link>
            <Link href="/#showroom" className="hover:text-gold">المعرض</Link>
            <Link href="/#contact" className="hover:text-gold">تواصل معنا</Link>
          </div>
        </nav>
        <div>
          <div className="text-sm font-bold text-gold mb-3">تواصل</div>
          <div className="grid gap-2 text-sm text-cream/80">
            <a href={`tel:${PHONE_DISPLAY}`} className="hover:text-gold" dir="ltr">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-gold">{EMAIL}</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener" className="hover:text-gold">@delta_lightt</a>
            <span className="text-muted">شارع طلعت حرب، شبين الكوم، المنوفية</span>
          </div>
        </div>
        <div>
          <div className="text-sm font-bold text-gold mb-3">SEO محلي</div>
          <p className="text-xs text-muted leading-relaxed">دلتا لايت — Delta Light — نجف شبين الكوم — إضاءة شبين الكوم — محلات إضاءة شبين الكوم — نجف المنوفية — إضاءة مودرن المنوفية — إضاءة فلل — إضاءة منازل.</p>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-muted">© {new Date().getFullYear()} Delta Light — دلتا لايت. جميع الحقوق محفوظة.</div>
    </footer>
  );
}
