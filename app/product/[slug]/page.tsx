import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { ProductVisual } from '@/components/ProductCard';
import ProductActions from './actions';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = PRODUCTS.find((x) => x.slug === params.slug);
  return { title: p ? `${p.name} | Delta Light` : 'Product | Delta Light' };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = PRODUCTS.find((x) => x.slug === params.slug);
  if (!p) notFound();
  const related = PRODUCTS.filter((x) => x.categorySlug === p.categorySlug && x.id !== p.id).slice(0, 4);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    category: p.category
  };
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-xs text-muted" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-gold">الرئيسية</Link> / <Link href="/shop" className="hover:text-gold">المتجر</Link> / <span className="text-cream">{p.name}</span>
      </nav>
      <div className="mt-6 grid lg:grid-cols-2 gap-8">
        <ProductVisual product={p} large />
        <div>
          <div className="text-xs tracking-[0.3em] text-gold">{p.category}</div>
          <h1 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">{p.name}</h1>
          <div className="mt-4 text-lg">{p.price ? <span className="font-bold">{p.price} ج.م</span> : <span className="text-champagne">استفسر عن السعر</span>}</div>
          <p className="mt-4 text-sm text-cream/85 leading-relaxed">{p.description || 'للاستفسار عن التفاصيل'}</p>
          <dl className="mt-6 grid gap-2 text-sm glass rounded-2xl p-5">
            <div className="flex justify-between gap-4"><dt className="text-muted">الكود</dt><dd>{p.code || 'للاستفسار عن التفاصيل'}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-muted">المقاسات</dt><dd>{p.dimensions || 'للاستفسار عن التفاصيل'}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-muted">الضمان</dt><dd>{p.warranty || 'للاستفسار عن التفاصيل'}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-muted">التوفر</dt><dd>{p.availability || 'للاستفسار عن التفاصيل'}</dd></div>
          </dl>
          <ProductActions slug={p.slug} id={p.id} name={p.name} code={p.code} />
        </div>
      </div>
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold">قد يعجبك أيضاً</h2>
          <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((r) => (
              <Link key={r.id} href={`/product/${r.slug}`} className="glass rounded-2xl p-5 hover:border-gold/50">
                <div className="text-xs text-gold">{r.category}</div>
                <div className="mt-1 text-sm font-bold">{r.name}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
