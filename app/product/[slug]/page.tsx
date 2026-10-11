import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS, getProduct, categoryName } from "@/data/products";
import { ProductVisual } from "@/components/ProductCard";
import ProductActions from "./ProductActions";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/data/content";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProduct(params.slug);
  if (!p) return {};
  return {
    title: `${p.name} | دلتا لايت`,
    description: p.description,
    openGraph: { title: p.name, description: p.description, type: "website", locale: "ar_EG" },
  };
}

function ProductSchema({ slug }: { slug: string }) {
  const p = getProduct(slug);
  if (!p) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    category: categoryName(p.category),
    brand: { "@type": "Brand", name: "Delta Light" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p) notFound();
  const related = PRODUCTS.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);

  const rows: [string, string][] = [
    ["التصنيف", categoryName(p.category)],
    ["الكود", p.code ?? "للاستفسار عن التفاصيل"],
    ["السعر", p.price != null ? `${p.price.toLocaleString("ar-EG")} ج.م` : "استفسر عن السعر"],
    ["الألوان", p.colors?.join("، ") ?? "للاستفسار عن التفاصيل"],
    ["المقاسات", p.dimensions ?? "للاستفسار عن التفاصيل"],
    ["الضمان", p.warranty ?? "للاستفسار عن التفاصيل"],
  ];

  return (
    <main className="pt-28">
      <ProductSchema slug={p.slug} />
      <div className="mx-auto max-w-7xl px-5">
        <nav aria-label="مسار التنقل" className="text-xs text-[#A7A7A7]">
          <Link href="/" className="hover:text-white">الرئيسية</Link> /{" "}
          <Link href="/shop" className="hover:text-white">تسوّق</Link> /{" "}
          <Link href={`/shop?cat=${p.category}`} className="hover:text-white">{categoryName(p.category)}</Link> /{" "}
          <span className="text-[#D6C3A5]">{p.name}</span>
        </nav>

        {/* IMAGE → DETAIL → MATERIAL → LIGHT → SPACE → INFO */}
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="group">
              <ProductVisual p={p} className="aspect-square rounded-3xl border hairline" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <ProductVisual key={i} p={p} className="aspect-square rounded-xl border hairline opacity-70" />
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">{categoryName(p.category)}</p>
            <h1 className="mt-2 text-3xl font-light md:text-5xl">{p.name}</h1>
            {p.nameEn && <p className="mt-1 text-sm text-[#A7A7A7]" dir="ltr">{p.nameEn}</p>}
            <p className="mt-4 leading-8 text-[#D6C3A5]">{p.description}</p>
            <dl className="panel mt-6 divide-y divide-white/5 rounded-2xl">
              {rows.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between gap-4 px-5 py-3 text-sm">
                  <dt className="text-[#A7A7A7]">{k}</dt>
                  <dd className="text-left font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <ProductActions slug={p.slug} name={p.name} code={p.code} />
            <p className="mt-4 text-xs leading-6 text-[#A7A7A7]">
              {BUSINESS.address} · <span dir="ltr">{BUSINESS.phone}</span> · للاستفسار عن التفاصيل والمقاسات والتوافر راسلنا واتساب.
            </p>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16 pb-24">
            <h2 className="text-2xl font-light">قطع مشابهة</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/product/${r.slug}`} className="panel group overflow-hidden rounded-2xl">
                  <ProductVisual p={r} className="aspect-[4/3]" />
                  <div className="p-4"><p className="font-medium group-hover:text-[#C9A85D]">{r.name}</p></div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
