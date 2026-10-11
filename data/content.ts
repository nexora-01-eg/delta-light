export const BUSINESS = {
  brand: "Delta Light",
  brandAr: "دلتا لايت",
  tagline: "LIGHT CREATES SPACE",
  phone: "01062528182",
  phoneIntl: "+201062528182",
  email: "lotfy.elsabry0@gmail.com",
  instagram: "https://www.instagram.com/delta_lightt",
  facebook: "https://www.facebook.com/share/19r2f9y9Ya/",
  address: "شارع طلعت حرب، شبين الكوم، المنوفية، مصر",
  addressEn: "Talaat Harb Street, Shebin El-Kom, Monufia, Egypt",
  hours: "يومياً — يُفضل الاستفسار واتساب عن المواعيد",
} as const;

export const NAV = [
  { slug: "light", ar: "الضوء", href: "#light" },
  { slug: "space", ar: "المساحة", href: "#space" },
  { slug: "material", ar: "الخامة", href: "#material" },
  { slug: "collection", ar: "المجموعة", href: "#collection" },
  { slug: "rooms", ar: "الغرف", href: "#rooms" },
  { slug: "showroom", ar: "المعرض", href: "#showroom" },
] as const;

export const ROOMS = [
  { id: "living", ar: "معيشة", en: "Living Room", desc: "إضاءة محيطية دافئة تحتضن الجلوس العائلي." },
  { id: "dining", ar: "سفرة", en: "Dining Room", desc: "تركيز معلق فوق الطاولة يجمع العائلة حول الضوء." },
  { id: "bedroom", ar: "نوم", en: "Bedroom", desc: "إضاءة خافتة هادئة تهيئ للراحة." },
  { id: "reception", ar: "استقبال", en: "Reception", desc: "حضور فاخر يرحب بالضيوف من أول نظرة." },
  { id: "corridor", ar: "ممر", en: "Corridor", desc: "سبوتات متتابعة ترسم طريق الضوء." },
  { id: "outdoor", ar: "خارجي", en: "Outdoor", desc: "واجهات مضيئة تبرز العمارة ليلاً." },
] as const;

export const MATERIALS = [
  { id: "crystal", ar: "كريستال", en: "Crystal", desc: "يكسر الضوء إلى طيف من الانكسارات." },
  { id: "glass", ar: "زجاج", en: "Glass", desc: "ينشر الضوء بنعومة وشفافية." },
  { id: "metal", ar: "معدن", en: "Metal", desc: "يعكس الضوء بحزم ويحدد الحواف." },
  { id: "wood", ar: "خشب", en: "Wood", desc: "يمتص الدفء ويعيده توهجاً عسلياً." },
  { id: "stone", ar: "حجر", en: "Stone", desc: "يمنح الظل ملمساً معمارياً ثقيلاً." },
  { id: "fabric", ar: "قماش", en: "Fabric", desc: "يرشّح الضوء كهمس ناعم." },
] as const;

export const LIGHTING_STYLES = [
  { id: "modern", ar: "مودرن" },
  { id: "classic", ar: "كلاسيك" },
  { id: "minimal", ar: "مينيمال" },
  { id: "warm", ar: "دافئ" },
  { id: "architectural", ar: "معماري" },
] as const;
