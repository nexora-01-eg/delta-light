export type Product = {
  id: string;
  name: string;
  nameEn?: string;
  slug: string;
  category: string;
  categoryEn?: string;
  code: string | null;
  description: string;
  descriptionEn?: string;
  images: string[];
  price: number | null;
  oldPrice: number | null;
  colors: string[] | null;
  dimensions: string | null;
  warranty: string | null;
  availability: "inquiry" | "available" | "order";
  featured: boolean;
  tags: string[];
};

export const CATEGORIES = [
  { slug: "modern-chandeliers", ar: "نجف مودرن", en: "Modern Chandeliers" },
  { slug: "classic-chandeliers", ar: "نجف كلاسيك", en: "Classic Chandeliers" },
  { slug: "led-chandeliers", ar: "نجف ليد", en: "LED Chandeliers" },
  { slug: "crystal-chandeliers", ar: "نجف كريستال", en: "Crystal Chandeliers" },
  { slug: "magnetic-track", ar: "ماجنتيك تراك", en: "Magnetic Track" },
  { slug: "spots-downlights", ar: "سبوتات وداون لايت", en: "Spots & Downlights" },
  { slug: "wall-lamps", ar: "أباليك", en: "Wall Lamps" },
  { slug: "outdoor", ar: "إضاءة خارجية", en: "Outdoor" },
  { slug: "electrical", ar: "تشطيبات كهرباء", en: "Electrical Finishing" },
] as const;

export const categoryName = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug)?.ar ?? slug;

/**
 * NOTE: prices / specs / codes are intentionally null unless supplied.
 * UI must render "استفسر عن السعر" inquiry CTA for unknown fields.
 */
export const PRODUCTS: Product[] = [
  {
    id: "p01", name: "نجفة مودرن — طيف", nameEn: "Spectrum Modern Chandelier",
    slug: "spectrum-modern-chandelier", category: "modern-chandeliers", categoryEn: "Modern Chandeliers",
    code: null, description: "نجفة مودرن بخطوط معمارية هادئة وتوزيع ضوء متوازن للمساحات المعاصرة. للاستفسار عن التفاصيل والمقاسات المتاحة.",
    descriptionEn: "Modern chandelier with quiet architectural lines. Inquiry for details.",
    images: [], price: null, oldPrice: null, colors: null, dimensions: null,
    warranty: "ضمان حتى 3 سنوات حسب المنتج — يُحدد عند الاستفسار",
    availability: "inquiry", featured: true, tags: ["نجف", "مودرن", "chandelier", "modern", "صالة"],
  },
  {
    id: "p02", name: "نجفة كلاسيك — تراث", nameEn: "Heritage Classic Chandelier",
    slug: "heritage-classic-chandelier", category: "classic-chandeliers", categoryEn: "Classic Chandeliers",
    code: null, description: "نجفة كلاسيك بتفاصيل غنية تناسب المجالس والمساحات ذات الطابع التقليدي الفاخر.",
    images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null,
    availability: "inquiry", featured: true, tags: ["نجف", "كلاسيك", "classic", "chandelier"],
  },
  {
    id: "p03", name: "نجفة ليد — مدار", nameEn: "Orbit LED Chandelier",
    slug: "orbit-led-chandelier", category: "led-chandeliers", categoryEn: "LED Chandeliers",
    code: null, description: "نجفة ليد بتصميم مداري وكفاءة إضاءة عالية، مناسبة للصالات وغرف المعيشة.",
    images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null,
    availability: "inquiry", featured: true, tags: ["نجف ليد", "led", "chandelier", "مودرن"],
  },
  {
    id: "p04", name: "نجفة كريستال — بريق", nameEn: "Radiance Crystal Chandelier",
    slug: "radiance-crystal-chandelier", category: "crystal-chandeliers", categoryEn: "Crystal Chandeliers",
    code: null, description: "نجفة كريستال بانكسارات ضوئية فاخرة تمنح المكان حضوراً استثنائياً.",
    images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null,
    availability: "inquiry", featured: true, tags: ["كريستال", "crystal", "نجف", "chandelier", "فيلا"],
  },
  {
    id: "p05", name: "ماجنتيك تراك — خط", nameEn: "Line Magnetic Track System",
    slug: "line-magnetic-track", category: "magnetic-track", categoryEn: "Magnetic Track",
    code: null, description: "نظام ماجنتيك تراك مرن يتيح توزيع وحدات الإضاءة بحرية حسب المشهد المطلوب.",
    images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null,
    availability: "inquiry", featured: true, tags: ["ماجنتيك", "ماجنتك", "magnetic", "track", "تراك"],
  },
  {
    id: "p06", name: "سبوت داون لايت — تركيز", nameEn: "Focus Spot / Downlight",
    slug: "focus-spot-downlight", category: "spots-downlights", categoryEn: "Spots & Downlights",
    code: null, description: "سبوتات وداون لايت للإضاءة المركزة والمعمارية — مثالية للممرات والأسقف.",
    images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null,
    availability: "inquiry", featured: false, tags: ["سبوت", "داون لايت", "spot", "downlight"],
  },
  {
    id: "p07", name: "أبليك حائط — همس", nameEn: "Whisper Wall Lamp",
    slug: "whisper-wall-lamp", category: "wall-lamps", categoryEn: "Wall Lamps",
    code: null, description: "أبليك حائط بإضاءة دافئة غير مباشرة تضيف عمقاً للجدران والممرات.",
    images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null,
    availability: "inquiry", featured: false, tags: ["أبليك", "ابليك", "wall", "أباليك"],
  },
  {
    id: "p08", name: "إضاءة خارجية — سور", nameEn: "Perimeter Outdoor Light",
    slug: "perimeter-outdoor-light", category: "outdoor", categoryEn: "Outdoor",
    code: null, description: "وحدات إضاءة خارجية لواجهات الفلل والأسوار والحدائق. للاستفسار عن درجات الحماية المتاحة.",
    images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null,
    availability: "inquiry", featured: false, tags: ["خارجية", "outdoor", "فيلا", "حديقة"],
  },
  {
    id: "p09", name: "لوحة ومفاتيح — لمسة", nameEn: "Touch Switch & Panel Range",
    slug: "touch-switch-panel", category: "electrical", categoryEn: "Electrical Finishing",
    code: null, description: "مفاتيح وبرايز ولوحات تشطيب كهرباء بتصميم عصري وخامات عالية الجودة.",
    images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null,
    availability: "inquiry", featured: false, tags: ["مفاتيح", "برايز", "switch", "socket", "تشطيب"],
  },
  {
    id: "p10", name: "نجفة مودرن — قوس", nameEn: "Arc Modern Chandelier",
    slug: "arc-modern-chandelier", category: "modern-chandeliers", categoryEn: "Modern Chandeliers",
    code: null, description: "نجفة مودرن بانحناءات ناعمة وإضاءة محيطية دافئة فوق طاولات السفرة.",
    images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null,
    availability: "inquiry", featured: false, tags: ["نجف", "مودرن", "سفرة", "chandelier"],
  },
  {
    id: "p11", name: "ماجنتيك سبوت متحرك", nameEn: "Movable Magnetic Spot",
    slug: "movable-magnetic-spot", category: "magnetic-track", categoryEn: "Magnetic Track",
    code: null, description: "وحدة سبوت متحركة لنظام الماجنتيك — وجّه الضوء حيث تحتاجه.",
    images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null,
    availability: "inquiry", featured: false, tags: ["ماجنتيك", "magnetic", "سبوت", "spot"],
  },
  {
    id: "p12", name: "أبليك خارجي — بوابة", nameEn: "Gate Outdoor Wall Light",
    slug: "gate-outdoor-wall-light", category: "outdoor", categoryEn: "Outdoor",
    code: null, description: "أبليك خارجي للبوابات والمداخل بتصميم معماري رصين.",
    images: [], price: null, oldPrice: null, colors: null, dimensions: null, warranty: null,
    availability: "inquiry", featured: false, tags: ["أبليك", "خارجية", "outdoor", "بوابة"],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const featuredProducts = PRODUCTS.filter((p) => p.featured);
