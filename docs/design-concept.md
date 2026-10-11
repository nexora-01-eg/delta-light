# Design Concept — ENTER THE LIGHT

DARKNESS → LIGHT → SPACE → OBJECT → MATERIAL → ATMOSPHERE → DISCOVERY → PRODUCT → SHOWROOM → CONTACT.

The homepage is one continuous exhibition, not a landing page:
1. **Arrival** — black screen, breathing light, skippable intro (max 2s).
2. **First Light** — sticky 220vh hero; scroll dollies the camera into an abstract
   chandelier installation; pointer light follows the cursor (desktop only).
3. **Space** — pinned scroll product story (DESIGN → FORM → MATERIAL → LIGHT → SPACE).
4. **Material** — laboratory: crystal/glass/metal/wood/stone/fabric under one light.
5. **Collection** — featured products as discovery, then standard commerce cards.
6. **Rooms** — room × style visualizer driving light atmosphere + global light state.
7. **Showroom** — physical destination teaser. **Contact** — final room.

# Design System
- Palette: void `#080808`, charcoal `#171717`, gold `#C9A85D`, champagne `#D6C3A5`, warm white `#F7F4EE`, soft grey `#A7A7A7`.
- Type: IBM Plex Sans Arabic / Tajawal / Noto Kufi Arabic + Inter/Manrope; RTL-first.
- Surfaces: dark panels with hairline champagne borders; glass is a material, not the system.
- Motion: slow, precise, architectural (`cubic-bezier(0.22,1,0.36,1)`); every transition answers why the camera/light moves.

# Architecture
Next.js 14 App Router + TypeScript + Tailwind. GSAP ScrollTrigger + Lenis for scroll-as-director.
Three.js via React Three Fiber 8 + Drei 9 only in the hero scene, with DPR cap, lifecycle
management, WebGL-unavailable and reduced-motion fallbacks. Content (`data/`) is fully
separated from presentation, scenes, animation, and commerce. Cart/wishlist/light state in
zustand with localStorage persistence.

# Performance
Dynamic import for the 3D scene, sticky-canvas lifecycle (`frameloop` control), DPR ≤ 1.75,
procedural placeholders (zero image weight), reduced particles on mobile, `prefers-reduced-motion`
paths everywhere. Targets: 60fps, LCP < 2.5s, CLS ≈ 0, INP < 200ms.

# Motion System
Durations 0.35–1.4s, power3/4 outs, scrub-linked pins, mask/clip reveals, light wipes via
radial gradients. No springs, no bounce, no decorative parallax.

# Exhibition Flow
See concept above; ExperienceProgress = nav index + scroll cue + section eyebrows (01–06).
Analytics stubs (`lib/analytics.ts`, dataLayer-ready): page_view, search, category_view,
product_view/detail_open, add_to_cart, begin_checkout, whatsapp_click, phone_click,
experience_start/skip/complete, room_change, lighting_change.
