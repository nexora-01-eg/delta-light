import Link from 'next/link';
import dynamic from 'next/dynamic';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import RoomVisualizer from '@/components/RoomVisualizer';
import LumenWhatsApp from '@/components/LumenWhatsApp';
import Reveal from '@/components/Reveal';
import LampArt from '@/components/LampArt';
import Magnetic from '@/components/Magnetic';
import ProductStory from '@/components/ProductStory';
import { generalInquiry, PHONE_DISPLAY, INSTAGRAM, EMAIL } from '@/lib/whatsapp';

const HeroScene = dynamic(() => import('@/components/HeroScene'), { ssr: false });

export default function Home() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 4);
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0d0b08] to-ink" />
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 chandelier-rays opacity-80" />
        <HeroScene />
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full border border-gold/25 shadow-[0_0_120px_rgba(201,168,93,0.35)] grid place-items-center pointer-events-none">
          <div className="w-24 h-24 rounded-full bg-gold/90 blur-[1px] shadow-[0_0_80px_rgba(201,168,93,0.9)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-24 text-center w-full">
          <div className="anim-rise font-latin text-[11px] tracking-[0.5em] text-champagne" style={{ animationDelay: '0.15s' }}>LIGHT AS ARCHITECTURE</div>
          <div className="anim-rise font-latin text-xs tracking-[0.35em] text-gold mt-4" style={{ animationDelay: '0.3s' }}>LIGHT&nbsp;&nbsp;CHANGES&nbsp;&nbsp;SPACE</div>
          <h1 className="anim-rise font-display mt-5 text-6xl md:text-8xl lg:text-[7.5rem] font-bold leading-[1.15]" style={{ animationDelay: '0.45s' }}>
            إضاءة <span className="gold-text">تصنع الفرق</span>
          </h1>
          <p className="anim-rise mt-6 text-lg md:text-2xl text-cream/85" style={{ animationDelay: '0.6s' }}>في كل تفاصيل بيتك — نجف • أباليك • ماجنتيك • LED</p>
          <div className="anim-rise mt-9 flex flex-wrap justify-center gap-3" style={{ animationDelay: '0.75s' }}>
            <Magnetic><Link href="/shop" className="inline-block bg-gold text-ink font-bold rounded-full px-8 py-4 text-sm hover:brightness-110">اكتشف المجموعة</Link></Magnetic>
            <Magnetic><a href={generalInquiry()} target="_blank" rel="noopener" className="inline-block rounded-full px-8 py-4 text-sm hairline glass hover:border-gold">تحدث معنا</a></Magnetic>
          </div>
          <div className="anim-rise mt-10 text-xs text-muted font-latin tracking-[0.25em]" style={{ animationDelay: '0.9s' }}>DELTA LIGHT — SHEBIN EL-KOM</div>
        </div>
        <div className="absolute inset-x-0 top-1/3 h-24 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="anim-beam absolute inset-y-0 w-1/2 bg-gradient-to-l from-transparent via-gold/25 to-transparent" />
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted" aria-hidden="true">
          <span className="text-[11px]">اسكرول</span>
          <span className="block w-px h-10 bg-gradient-to-b from-gold to-transparent anim-pulse-glow" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-gold/15 bg-[#0b0b0b] py-4 overflow-hidden" aria-hidden="true">
        <div className="anim-marquee flex w-max gap-8 whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-8 items-center">
              {['نجف', 'أباليك', 'سبوتات', 'إضاءة ماجنتيك', 'إضاءة سقفية', 'إضاءة خارجية', 'LED', 'دلتا لايت'].map((w) => (
                <span key={`${copy}-${w}`} className="flex items-center gap-8">
                  <span className="font-display text-xl md:text-2xl text-cream/90">{w}</span>
                  <span className="text-gold">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* LIGHT EXPERIENCE strip */}
      <section className="border-y border-gold/15 bg-[#0b0b0b]" aria-label="Light experience">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid md:grid-cols-3 gap-6 text-center">
          {[['DESIGN', 'تصميم يليق ببيتك'], ['MATERIAL', 'خامات بجودة حقيقية'], ['LIGHT', 'ضوء دافئ ومريح']].map(([en, ar]) => (
            <div key={en}>
              <div className="text-[11px] tracking-[0.4em] text-gold">{en}</div>
              <div className="mt-2 font-bold">{ar}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="max-w-7xl mx-auto px-4 md:px-8 mt-24" aria-label="Categories">
        <Reveal>
          <div className="text-xs tracking-[0.4em] text-gold">CATEGORIES</div>
          <div className="mt-3 flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-3xl md:text-5xl font-bold font-display">اكتشف حسب النوع</h2>
            <Link href="/shop" className="text-sm hairline rounded-full px-5 py-2.5 hover:border-gold">كل المنتجات ←</Link>
          </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} href={`/shop?cat=${c.slug}`} className="spotlight-card group relative rounded-3xl overflow-hidden hairline bg-charcoal p-6 min-h-[260px] hover:border-gold/60 transition-all hover:-translate-y-1 duration-300">
              <div className="absolute inset-0 hero-glow opacity-0 group-hover:opacity-100 transition-opacity" />
              <LampArt slug={c.slug} className="relative h-28 w-28 mx-auto transition-transform duration-500 group-hover:scale-110" />
              <div className="relative text-center mt-3">
                <div className="text-[11px] tracking-[0.3em] text-gold font-latin">{c.en}</div>
                <div className="mt-1 text-2xl font-bold font-display">{c.name}</div>
                <div className="mt-1 text-xs text-muted">{c.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-24" aria-label="Featured products">
        <Reveal>
          <div className="text-xs tracking-[0.4em] text-gold">FEATURED</div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3">قطع مختارة</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* PRODUCT STORY — pinned scroll scene */}
      <ProductStory />

      <RoomVisualizer />

      {/* SOLUTIONS / TRUST */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-24 grid lg:grid-cols-2 gap-5" aria-label="Solutions">
        <Reveal>
          <div className="glass rounded-3xl p-8">
            <div className="text-xs tracking-[0.4em] text-gold">SOLUTIONS</div>
            <h3 className="text-2xl md:text-3xl font-bold mt-3">حلول للبيوت والفلل والمشاريع</h3>
            <p className="text-sm text-muted mt-3 leading-relaxed">منازل • فلل • مكاتب • مساحات تجارية • تشطيب متكامل. ابعتلنا تفاصيل المساحة وإحنا نساعدك تختار الأنسب.</p>
            <Link href="/projects" className="inline-block mt-5 text-sm hairline rounded-full px-6 py-3 hover:border-gold">صفحة المشاريع والحلول</Link>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="glass rounded-3xl p-8 h-full">
            <div className="text-xs tracking-[0.4em] text-gold">TRUST</div>
            <ul className="mt-4 space-y-3 text-sm text-cream/90">
              <li>• خامات بجودة تدوم</li>
              <li>• ضمان يصل إلى 3 سنوات حسب الموديل — للاستفسار عن التفاصيل</li>
              <li>• شحن داخل مصر — للاستفسار عن التفاصيل</li>
              <li>• حلول إضاءة وتشطيب كهرباء في مكان واحد</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* SHOWROOM */}
      <section id="showroom" className="max-w-7xl mx-auto px-4 md:px-8 mt-24" aria-label="Showroom">
        <Reveal>
          <div className="rounded-[2rem] hairline bg-gradient-to-b from-charcoal to-ink p-8 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 hero-glow pointer-events-none" />
          <div className="relative">
            <div className="text-xs tracking-[0.4em] text-gold">SHOWROOM</div>
            <h2 className="text-3xl md:text-5xl font-bold font-display mt-3">زور معرض دلتا لايت</h2>
            <p className="mt-4 text-cream/80">شارع طلعت حرب، شبين الكوم، المنوفية</p>
            <p className="text-xs text-muted mt-2">خريطة جوجل تُضاف عند توفير رابط/إحداثيات رسمية</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={generalInquiry()} target="_blank" rel="noopener" className="bg-gold text-ink font-bold rounded-full px-7 py-3.5 text-sm">احجز زيارة واتساب</a>
              <a href={`tel:${PHONE_DISPLAY}`} className="hairline rounded-full px-7 py-3.5 text-sm">اتصل بنا</a>
            </div>
          </div>
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-4 md:px-8 mt-24" aria-label="Contact">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-display">مش عارف تختار الإضاءة المناسبة؟</h2>
          <p className="mt-4 text-cream/80">ابعتلنا تفاصيل المساحة وإحنا نساعدك تختار الأنسب.</p>
          <div className="mt-8 grid gap-3">
            <LumenWhatsApp label="تحدث معنا على واتساب" />
            <a href={`tel:${PHONE_DISPLAY}`} className="hairline glass rounded-full py-4 text-sm font-bold">اتصل بنا — <span dir="ltr">{PHONE_DISPLAY}</span></a>
          </div>
          <div className="mt-5 flex justify-center gap-5 text-sm text-muted">
            <a href={INSTAGRAM} target="_blank" rel="noopener" className="hover:text-gold">Instagram</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-gold">Email</a>
          </div>
        </div>
      </section>
    </>
  );
}
