export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  code: string | null;
  description: string | null;
  images: string[];
  price: number | null;
  oldPrice: number | null;
  colors: string[] | null;
  dimensions: string | null;
  warranty: string | null;
  availability: string | null;
  featured: boolean;
  tags: string[];
};

export const CATEGORIES = [
  { name: 'نجف', slug: 'chandeliers', en: 'Chandeliers', desc: 'قطع مركزية تصنع المشهد' },
  { name: 'أباليك', slug: 'wall-lamps', en: 'Wall Lamps', desc: 'ضوء جداري دافئ وموجه' },
  { name: 'سبوتات', slug: 'spotlights', en: 'Spotlights', desc: 'تركيز دقيق على التفاصيل' },
  { name: 'إضاءة ماجنتيك', slug: 'magnetic', en: 'Magnetic Track', desc: 'نظام مرن للمساحات الحديثة' },
  { name: 'إضاءة سقفية', slug: 'ceiling', en: 'Ceiling', desc: 'إضاءة عامة نظيفة' },
  { name: 'إضاءة داخلية', slug: 'indoor', en: 'Indoor', desc: 'غرف المعيشة والنوم والاستقبال' },
  { name: 'إضاءة خارجية', slug: 'outdoor', en: 'Outdoor', desc: 'واجهات ومداخل وحدائق' },
  { name: 'LED', slug: 'led', en: 'LED', desc: 'كفاءة وضوء مريح' }
];

export const PRODUCTS: Product[] = [
  { id: 'p01', name: 'نجفة مودرن — تصميم معماري', slug: 'modern-chandelier-01', category: 'نجف', categorySlug: 'chandeliers', code: null, description: 'نجفة بتصميم معماري حديث. للاستفسار عن التفاصيل والمقاسات المتاحة تواصل معنا.', images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null, availability: null, featured: true, tags: ['نجف', 'chandelier', 'مودرن'] },
  { id: 'p02', name: 'نجفة ليد — إضاءة دافئة', slug: 'led-chandelier-02', category: 'نجف', categorySlug: 'chandeliers', code: null, description: 'نجفة LED بإضاءة دافئة مناسبة لغرف المعيشة والسفرة.', images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: 'تصل إلى 3 سنوات حسب الموديل — للاستفسار عن التفاصيل', availability: null, featured: true, tags: ['نجف', 'نجف ليد', 'led', 'chandelier'] },
  { id: 'p03', name: 'أبليك جداري — Warm Wall Light', slug: 'wall-lamp-01', category: 'أباليك', categorySlug: 'wall-lamps', code: null, description: 'أبليك جداري لإضاءة ممرات وغرف النوم. للاستفسار عن التفاصيل', images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null, availability: null, featured: true, tags: ['أبليك', 'أباليك', 'wall'] },
  { id: 'p04', name: 'سبوت غاطس — Spot', slug: 'spot-01', category: 'سبوتات', categorySlug: 'spotlights', code: null, description: 'سبوت غاطس للأسقف. للاستفسار عن التفاصيل', images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null, availability: null, featured: false, tags: ['سبوت', 'سبوتات', 'spot'] },
  { id: 'p05', name: 'تراك ماجنتيك — Magnetic Track', slug: 'magnetic-01', category: 'إضاءة ماجنتيك', categorySlug: 'magnetic', code: null, description: 'نظام ماجنتيك مرن للمساحات الحديثة. للاستفسار عن التفاصيل', images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null, availability: null, featured: true, tags: ['ماجنتيك', 'ماجنتك', 'magnetic', 'track'] },
  { id: 'p06', name: 'داونلايت سقفي', slug: 'downlight-01', category: 'إضاءة سقفية', categorySlug: 'ceiling', code: null, description: 'إضاءة سقفية عامة. للاستفسار عن التفاصيل', images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null, availability: null, featured: false, tags: ['سقفية', 'داونلايت', 'ceiling'] },
  { id: 'p07', name: 'إضاءة داخلية — غرف معيشة', slug: 'indoor-01', category: 'إضاءة داخلية', categorySlug: 'indoor', code: null, description: 'حلول إضاءة داخلية. للاستفسار عن التفاصيل', images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null, availability: null, featured: false, tags: ['داخلية', 'indoor'] },
  { id: 'p08', name: 'إضاءة خارجية — واجهات', slug: 'outdoor-01', category: 'إضاءة خارجية', categorySlug: 'outdoor', code: null, description: 'إضاءة خارجية للواجهات والمداخل. للاستفسار عن التفاصيل', images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null, availability: null, featured: false, tags: ['خارجية', 'outdoor'] },
  { id: 'p09', name: 'شريط LED — LED Strip', slug: 'led-01', category: 'LED', categorySlug: 'led', code: null, description: 'إضاءة LED مخفية للأسقف والأركان. للاستفسار عن التفاصيل', images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null, availability: null, featured: true, tags: ['led', 'ليد'] },
  { id: 'p10', name: 'نجفة كريستال — Classic', slug: 'crystal-01', category: 'نجف', categorySlug: 'chandeliers', code: null, description: 'نجفة بطابع كلاسيكي. للاستفسار عن التفاصيل', images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null, availability: null, featured: false, tags: ['كريستال', 'كلاسيك', 'chandelier'] },
  { id: 'p11', name: 'مستلزمات تشطيب كهرباء', slug: 'electric-01', category: 'LED', categorySlug: 'led', code: null, description: 'مفاتيح ومقابس ولوحات وأسلاك — تشطيب كهرباء. للاستفسار عن التفاصيل', images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null, availability: null, featured: false, tags: ['تشطيب', 'كهرباء', 'مفاتيح'] },
  { id: 'p12', name: 'حل إضاءة فيلا — استشارة', slug: 'villa-solution', category: 'إضاءة داخلية', categorySlug: 'indoor', code: null, description: 'حلول إضاءة للفلل والمنازل حسب المساحة. ابعتلنا تفاصيل المساحة وإحنا نساعدك.', images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null, availability: null, featured: true, tags: ['فيلا', 'حلول', 'solution'] }
];

export function searchProducts(q: string): Product[] {
  const needle = q.trim().toLowerCase();
  if (!needle) return PRODUCTS;
  return PRODUCTS.filter((p) =>
    [p.name, p.category, p.slug, ...(p.tags || [])].join(' ').toLowerCase().includes(needle)
  );
}
