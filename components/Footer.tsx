import Link from "next/link";
import { BUSINESS } from "@/data/content";
import { CATEGORIES } from "@/data/products";

export default function Footer() {
  return (
    <footer className="border-t hairline bg-[#050505]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <p className="text-sm font-semibold tracking-[0.25em]">DELTA LIGHT</p>
          <p className="mt-1 text-sm text-[#A7A7A7]">دلتا لايت — {BUSINESS.address}</p>
          <p className="mt-3 text-xs leading-6 text-[#A7A7A7]">
            معرض الإضاءة المعمارية: نجف، ماجنتيك تراك، سبوتات، أباليك، إضاءة خارجية وتشطيبات كهرباء.
          </p>
        </div>
        <nav aria-label="تسوّق">
          <p className="eyebrow">تسوّق</p>
          <ul className="mt-3 space-y-2 text-sm text-[#D6C3A5]">
            {CATEGORIES.slice(0, 6).map((c) => (
              <li key={c.slug}><Link href={`/shop?cat=${c.slug}`} className="hover:text-white">{c.ar}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="المعرض">
          <p className="eyebrow">المعرض</p>
          <ul className="mt-3 space-y-2 text-sm text-[#D6C3A5]">
            <li><Link href="/projects" className="hover:text-white">الحلول والمشاريع</Link></li>
            <li><Link href="/showroom" className="hover:text-white">المعرض</Link></li>
            <li><Link href="/contact" className="hover:text-white">تواصل</Link></li>
            <li><Link href="/shop" className="hover:text-white">كل المنتجات</Link></li>
          </ul>
        </nav>
        <div>
          <p className="eyebrow">تواصل</p>
          <a href={`tel:${BUSINESS.phoneIntl}`} className="mt-3 block" dir="ltr">{BUSINESS.phone}</a>
          <a href={`mailto:${BUSINESS.email}`} className="mt-1 block text-sm text-[#D6C3A5]" dir="ltr">{BUSINESS.email}</a>
          <div className="mt-3 flex gap-4 text-sm">
            <a href={BUSINESS.instagram} target="_blank" rel="noopener" className="hover:text-white">إنستجرام</a>
            <a href={BUSINESS.facebook} target="_blank" rel="noopener" className="hover:text-white">فيسبوك</a>
          </div>
        </div>
      </div>
      <div className="border-t hairline py-5 text-center text-xs text-[#A7A7A7]">
        © {new Date().getFullYear()} Delta Light — دلتا لايت · LIGHT CREATES SPACE
      </div>
    </footer>
  );
}
