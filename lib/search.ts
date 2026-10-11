import { PRODUCTS } from "@/data/products";

const norm = (s: string) =>
  s.toLowerCase().replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي").trim();

const ALIASES: Record<string, string[]> = {
  "نجف": ["chandelier"],
  "نجف ليد": ["led"],
  "ماجنتيك": ["magnetic", "ماجنتك"],
  "ابليك": ["wall", "أبليك", "أباليك", "اباليك"],
  "سبوت": ["spot"],
  "خارجيه": ["outdoor"],
};

export function searchProducts(query: string) {
  const q = norm(query);
  if (!q) return [];
  const terms = new Set<string>([q]);
  for (const [k, vs] of Object.entries(ALIASES)) {
    const nk = norm(k);
    const nvs = vs.map(norm);
    if (nk === q || nvs.includes(q) || q.includes(nk)) {
      terms.add(nk);
      nvs.forEach((v) => terms.add(v));
    }
  }
  return PRODUCTS.filter((p) => {
    const hay = norm(
      [p.name, p.nameEn ?? "", p.category, p.categoryEn ?? "", p.description, ...(p.tags ?? [])].join(" ")
    );
    return Array.from(terms).some((t) => t && hay.includes(t));
  });
}
