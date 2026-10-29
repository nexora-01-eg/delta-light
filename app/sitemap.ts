import type { MetadataRoute } from 'next';
import { PRODUCTS } from '@/data/products';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://delta-light.example.com';
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/shop`, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
    ...PRODUCTS.map((p) => ({ url: `${base}/product/${p.slug}`, lastModified: new Date() }))
  ];
}
