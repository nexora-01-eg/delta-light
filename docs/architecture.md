# Architecture
Next.js 14 App Router + React 18 + TS + Tailwind 3.
- app/: layout, page (home), shop, product/[slug], projects, robots, sitemap
- components/: Navbar, Hero(in page), ProductCard, CartDrawer, SearchOverlay, WhatsAppButton, RoomVisualizer, Preloader, LightCursor, Smooth, Footer
- data/products.ts: 12 products, price null → inquiry CTA (no fabricated data)
- lib/whatsapp.ts: wa.me/201062528182 generators + dataLayer track
- lib/store.tsx: cart/wishlist context + localStorage
SEO: metadata, OG, canonical, LocalBusiness + Product JSON-LD, sitemap, robots.
Analytics: dataLayer events page_view/search/category_view/product_view/add_to_cart/begin_checkout/whatsapp_click/phone_click ready.

## ThreeUI (@designcodeio/threeui v1.2.0, MIT)
- Used: `LumenCta` (glowing CTA, hue-shifted purple→gold hue=140) in contact section via `components/LumenWhatsApp.tsx` — dynamic import from `@designcodeio/threeui/components/LumenCta` (subpath avoids the root barrel which pulls Gallery.js, incompatible with Next 14 webpack asset modules). Shared CSS via `@designcodeio/threeui/style.css` in root layout.
- Deliberately NOT embedded: EmberStorm/ParticleDrift/FluidFieldBackground — their Neuform runtimes append roots to `document.body` and assume the ThreeUI preview shell (fixed full-screen background roles); unsafe for production layout/scroll. Revisit only via isolated iframe/stage if needed.

## Motion & 3D (original code, no copied shaders)
- `lib/motion.ts`: GSAP + ScrollTrigger registration, reduced-motion + fine-pointer guards.
- `components/Reveal.tsx`: scroll mask/fade reveals for all section headers/cards.
- `components/ScrollProgress.tsx`: gold scroll-progress bar (scrub).
- `components/Magnetic.tsx`: magnetic hover for hero CTAs (desktop only).
- `components/HeroScene.tsx`: original Three.js hero — glowing core sprite + 2 gold orbital rings + rising light-dust particles + pointer parallax; DPR clamp (1.75 desktop / 1.25 mobile), pauses offscreen/hidden-tab, CSS fallback when reduced-motion or no WebGL.
- `components/ProductStory.tsx`: pinned (+=280%) scroll-driven story DESIGN→SPACE with scroll-linked orb glow/rotation (desktop ≥1024px; stacked calm fallback otherwise).
