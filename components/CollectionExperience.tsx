"use client";
import Link from "next/link";
import { featuredProducts } from "@/data/products";
import ProductCard from "./ProductCard";
import { Reveal, SectionHead } from "./Reveal";

export default function CollectionExperience() {
  return (
    <section id="collection" className="relative py-24 md:py-32">
      <SectionHead
        index="04 / المجموعة"
        title="من التجربة إلى الاكتشاف"
        sub="بعد أن عشت الضوء والمساحة والخامة — هذه مختارات المعرض. اختر قطعة لتدخل غرفتها الخاصة."
      />
      <div className="mx-auto mt-10 grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProducts.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i * 0.06, 0.3)}>
            <ProductCard p={p} />
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 text-center">
        <Link href="/shop" className="btn-ghost btn-physical inline-block rounded-full px-8 py-3 text-sm">
          استكشف كل المنتجات ←
        </Link>
      </Reveal>
    </section>
  );
}
