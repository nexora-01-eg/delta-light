# Assets Needed — Delta Light

No real brand/product assets were found in the workspace. The build uses an
elegant procedural placeholder system (no fake photography, no invented logo).

## Still needed (genuinely blocking visual fidelity, not functionality)
1. **Official logo** (SVG + PNG, light/dark) — currently a typographic wordmark is used.
2. **Favicon** derived from the official logo.
3. **Product photography** — per product in `data/products.ts` (WebP/AVIF, responsive).
4. **Showroom photography** + official Google Maps URL/coordinates.
5. **Hero video or image sequence** (optional; WebGL + CSS fallback currently covers it).
6. **Real prices / codes / specs / warranty terms** per product — UI renders inquiry CTAs until supplied.
7. **Real project case studies** for `/projects` — only application types are listed today.
8. **Social assets** — real Instagram imagery if an editorial gallery is desired.

## Path
`public/logo.svg`, `public/products/<slug>-1.webp`, `public/showroom/*.webp` —
wire into `ProductVisual` / hero poster with `next/image`.
