# DELTA LIGHT — OPENCODE MASTER BUILD PROMPT

Build a production-ready premium e-commerce website for DELTA LIGHT — دلتا لايت.

ROLE
You are an autonomous Senior Creative Developer, Luxury E-Commerce UX/UI Designer, Motion Designer, Three.js/WebGL Engineer, React/Next.js Engineer, CRO Specialist, Arabic RTL Designer, and Technical SEO Architect.

You must:
ANALYZE → PLAN → DESIGN → BUILD → TEST → DEBUG → OPTIMIZE → POLISH → REPORT.

Do not only suggest ideas. Inspect the existing project and build the actual working website.

## BUSINESS
Brand: Delta Light — دلتا لايت
Business: Premium lighting showroom and lighting solutions provider.
Location: Talaat Harb Street, Shebin El-Kom, Monufia, Egypt.
WhatsApp/Phone: 01062528182
Email: lotfy.elsabry0@gmail.com
Instagram: @delta_lightt
Facebook: Delta Light - دلتا لايت

Products/services may include:
- Modern / classic chandeliers
- LED chandeliers
- Crystal chandeliers
- Magnetic track lighting
- Spotlights
- Downlights
- Wall lamps / أباليك
- Indoor and outdoor lighting
- LED lighting
- Electrical finishing supplies
- Switches, sockets, panels and wires
- Lighting / finishing solutions

Never invent prices, specifications, stock, reviews, ratings, awards, customer counts, project results, delivery promises, warranty terms, or product codes. Unknown values must remain null or use a clear inquiry CTA.

## CRITICAL LOGO RULE
Use the EXACT existing Delta Light logo from the supplied client reference/screenshots/assets.

DO NOT redesign it.
DO NOT replace it with another DL symbol.
DO NOT invent a new logo.

If the real logo asset exists in the project, use it everywhere consistently:
- Navbar
- Preloader
- Footer
- Favicon where appropriate
- Social/share assets where available

If the real logo asset is missing, report it in /docs/assets-needed.md instead of fabricating a replacement.

## BRAND VISUAL IDENTITY
Aesthetic:
Luxury / Modern / Architectural / Cinematic / Minimal / Editorial / Warm / Sophisticated.

Palette:
Deep Black #080808
Charcoal #171717
Warm Gold #C9A85D
Champagne #D6C3A5
Warm White #F7F4EE
Soft Grey #A7A7A7

Gold must feel refined, like a premium material, not cheap yellow.

## SIGNATURE CONCEPT
Before coding, create 3 Signature Concepts and document them in:
docs/design-concept.md

Each concept must include:
- Name
- Hero idea
- Scroll experience
- Product experience
- Visual language
- Conversion strategy

Select one based on:
1. Brand fit
2. Product visibility
3. UX
4. Conversion
5. Performance
6. Mobile feasibility

Core concept:
# LIGHT AS ARCHITECTURE

The website should communicate:
LIGHT CHANGES SPACE.

The products are experienced inside architectural environments, not simply displayed in generic cards.

## EXPERIENCE
The homepage should feel like one continuous cinematic journey:

CINEMATIC INTRO
↓
HERO
↓
LIGHT EXPERIENCE
↓
CATEGORIES
↓
FEATURED PRODUCTS
↓
PRODUCT STORY
↓
ROOM EXPERIENCE
↓
SOLUTIONS
↓
TRUST
↓
SHOWROOM
↓
CONSULTATION
↓
FOOTER

Avoid the generic "hero → cards → about → contact" template feeling.

## PRELOADER
Maximum 2 seconds.
No ordinary loading bar.

Sequence:
darkness → subtle light → Delta Light logo reveal → light activation → transition to hero.

Always provide Skip Intro.

## HERO
Create a premium architectural lighting environment.
A chandelier / lighting installation is the visual focal point.
The scene can begin darker and gradually illuminate.

Primary CTA:
"اكتشف المجموعة"

Secondary CTA:
"تحدث معنا"

Keep copy minimal and premium.

Possible supporting line:
"إضاءة تصنع الفرق في كل تفاصيل بيتك."

Do not make unsupported claims.

## SIGNATURE LIGHT INTERACTION
Create one recognizable Delta Light interaction:
A subtle light source follows the pointer and softly reveals nearby UI/product details.
Use it as a restrained visual signature.

Desktop only. Do not use custom cursor on mobile.

## NAVIGATION
Desktop:
Logo / الرئيسية / المتجر / التصنيفات / المشاريع / من نحن / تواصل معنا
Utilities:
Search / Wishlist / Cart / WhatsApp

Transparent over hero, transforming into dark glass on scroll.
Hide subtly on downward scroll and reveal on upward scroll.

Mobile navigation must be simple and touch friendly.

## CATEGORIES
Create immersive category discovery for:
- نجف
- أباليك
- سبوتات
- إضاءة ماجنتيك
- إضاءة سقفية
- إضاءة داخلية
- إضاءة خارجية
- LED

Use editorial compositions instead of generic cards.
Hover can subtly change illumination, depth and image treatment.

## SHOP
Create:
- /shop
- category routes
- product search
- filters
- sorting
- wishlist
- quick view

Support Arabic, English and common transliteration.

Examples:
نجف / نجف ليد / chandelier / LED / ماجنتيك / أبليك

## PRODUCT DATA
Create a data-driven architecture, e.g.:
data/products.ts

Product model should support:
id
name
slug
category
code
description
images
price
oldPrice
colors
dimensions
warranty
availability
featured
tags

Unknown fields remain null.
Never fabricate product data.

## PRODUCT CARD
Show:
- Product image
- Name
- Category
- Code if available
- Price if available
- "استفسر عن السعر" when price is unavailable

Actions:
View / Wishlist / Add to cart / WhatsApp inquiry

Use subtle:
- image zoom
- spotlight
- 3D tilt
- depth

Usability always comes before effects.

## PRODUCT DETAIL
Route:
 /product/[slug]

Create a luxury product page with:
- large gallery
- thumbnails
- zoom
- fullscreen
- product details
- specifications when supplied
- colors when supplied
- dimensions when supplied
- warranty when supplied
- price when supplied
- inquiry CTA

If information is missing, say:
"للاستفسار عن التفاصيل"

Never invent missing information.

## WHATSAPP SALES
WhatsApp is a primary conversion channel.

Create:
lib/whatsapp.ts

Generate product-specific messages such as:
"مرحباً دلتا لايت، أريد الاستفسار عن:
[PRODUCT NAME]
كود المنتج: [PRODUCT CODE]"

Do not include code if none exists.

Implement:
- floating WhatsApp button
- product WhatsApp CTA
- contact CTA
- WhatsApp checkout option
- WhatsApp click tracking

## CART
Create a premium cart drawer:
image / name / quantity / price if available / subtotal / remove

Actions:
Continue shopping / Checkout / WhatsApp

Support two purchase modes:
A. Direct purchase when complete commerce data exists.
B. WhatsApp inquiry when price/details require consultation.

## CINEMATIC PRODUCT STORY
Create one pinned scroll scene.
As the user scrolls:
camera moves → product rotates subtly → details appear → lighting changes.

Sequence:
DESIGN → DETAIL → MATERIAL → LIGHT → SPACE

Do not overload the scene.

## ROOM LIGHTING EXPERIENCE
Create:
"شوف الإضاءة وهي بتغيّر المكان"

Rooms:
Living Room / Dining Room / Bedroom / Reception / Corridor / Outdoor

Styles:
Modern / Classic / Minimal / Warm / Architectural

Switching between scenes should smoothly demonstrate how lighting changes atmosphere.

## PROJECTS / SOLUTIONS
Create /projects.
Applications:
Homes / Villas / Offices / Commercial spaces / Finishing projects.

Use only real supplied project assets and claims.
Never invent completed projects.

## SHOWROOM
Create a premium showroom section.
Location:
Talaat Harb Street, Shebin El-Kom, Monufia.

Use Google Maps only if a real map URL/coordinates are supplied. Never invent coordinates.

## TRUST
Use only supported business information, such as:
- quality materials
- warranty up to 3 years where applicable
- shipping across Egypt
- modern lighting solutions
- electrical finishing solutions
- lighting expertise

Never invent statistics or awards.

## SOCIAL
Create a premium editorial Instagram-style gallery using real supplied assets.
Instagram: @delta_lightt

Do not fabricate posts.

## CONTACT
Headline:
"مش عارف تختار الإضاءة المناسبة؟"

Supporting:
"ابعتلنا تفاصيل المساحة وإحنا نساعدك تختار الأنسب."

Actions:
WhatsApp / Call / Instagram / Email / Location

Primary:
"تحدث معنا على واتساب"

Secondary:
"اتصل بنا"

## UI
Use:
- dark glass
- frosted glass
- thin borders
- subtle blur
- warm highlights
- soft shadows
- editorial grids
- asymmetric layouts
- bento compositions

Do NOT turn every element into glass.
Glass is a material language, not a template.

## TYPOGRAPHY
Arabic:
IBM Plex Sans Arabic / Tajawal / Noto Kufi Arabic

English:
Inter / Manrope / Satoshi

Choose a consistent pairing.
Ensure correct RTL behavior.

## MOTION
Preferred:
GSAP
ScrollTrigger
Lenis

Use:
- smooth inertia
- pinned storytelling
- parallax
- mask reveals
- clip-path
- camera movement
- image reveals
- horizontal product galleries
- sticky cards
- scroll-linked lighting

Every animation must have a purpose.

## THREE.JS / WEBGL
Use Three.js / React Three Fiber only where it materially improves the experience.

Potential uses:
- hero lighting scene
- interactive product showcase
- chandelier interaction
- light rays
- reflections
- particles

Use PBR / HDRI / IBL / ACES / bloom / soft shadows when appropriate.

Do not use WebGL everywhere.

If no real 3D product asset exists, use accurate product photography instead of inventing product geometry.

## TRANSITIONS
Use a restrained mix of:
- mask reveal
- light wipe
- camera zoom
- clip-path
- liquid distortion
- perspective transition

Do not repeat one transition everywhere.

## MICRO-INTERACTIONS
Implement where useful:
- magnetic buttons
- contextual cursor
- hover spotlight
- 3D tilt
- smooth product image transitions
- cart animation
- wishlist feedback
- search overlay
- modal origin animation

No emoji as UI icons. Use SVG/icon libraries.

## SEO
Implement:
- semantic HTML
- metadata
- OpenGraph
- canonical
- sitemap
- robots.txt
- Product schema where valid
- Organization schema
- LocalBusiness schema
- Breadcrumb schema

Local SEO targets can include:
دلتا لايت
Delta Light
نجف شبين الكوم
إضاءة شبين الكوم
محلات إضاءة شبين الكوم
نجف المنوفية
إضاءة مودرن المنوفية
إضاءة فلل
إضاءة منازل

Avoid keyword stuffing.

## ANALYTICS
Prepare architecture for:
GA4 / Search Console / Meta Pixel / Google Ads

Track:
page_view
search
category_view
product_view
add_to_cart
begin_checkout
purchase
whatsapp_click
phone_click
contact_submit

## PERFORMANCE
Hard requirements:
- target 60fps
- LCP < 2.5s
- CLS ≈ 0
- INP < 200ms

Use:
- lazy loading
- dynamic imports
- code splitting
- WebP / AVIF
- responsive images
- progressive WebGL loading
- adaptive quality

Adaptive quality:
High-end: full experience
Mid-range: reduce particles / DPR / post-processing
Low-end: static or video fallback
Mobile: lightweight version

Never allow visual effects to destroy usability or performance.

## MOBILE
Design mobile intentionally.
Test:
360 / 375 / 390 / 414 / 430 / 768 / 1024 / 1440 / 1920+

Mobile:
- no custom cursor
- touch-friendly controls
- swipe galleries
- sticky bottom WhatsApp / Call actions
- easy product browsing

## ACCESSIBILITY
Implement:
prefers-reduced-motion
keyboard navigation
visible focus
ARIA
semantic HTML
alt text
WCAG AA

Reduced motion should disable heavy scroll/WebGL animation where appropriate.

## ARCHITECTURE
Prefer:
Next.js + React + TypeScript + Tailwind CSS

Animation:
GSAP + ScrollTrigger + Lenis

3D:
Three.js + React Three Fiber + Drei

If an existing project stack is already functional, preserve it unless migration is genuinely necessary.

Suggested structure:
app/
components/
scenes/
data/
lib/
styles/
public/
docs/

Components:
Navbar
Hero
CategorySection
ProductCard
ProductGrid
ProductGallery
ProductViewer
CartDrawer
SearchOverlay
Wishlist
WhatsAppButton
RoomVisualizer
ProjectSection
Showroom
Footer

## CODE QUALITY
Production-quality code.
Reusable components.
No giant monolithic component.
No duplicated logic.
No dead code.
No unnecessary dependencies.
No console errors.
No broken links.
No hydration errors.
No layout overflow.

## ERROR / EMPTY STATES
Handle:
loading
empty
error
missing image
missing price
missing product data
missing WebGL
offline where appropriate

Missing price:
"استفسر عن السعر"

Missing image:
premium fallback.

Missing WebGL:
static image/video fallback.

## ASSET AUDIT
Before final implementation inspect:
public/
assets/
images/

Identify:
logos
product photos
backgrounds
icons
fonts
videos
3D assets

Create:
docs/assets-needed.md

Do not stop development because an asset is missing.
Use internal placeholders only where necessary and never expose fake business claims.

## TESTING
After implementation run all available:
- lint
- typecheck
- build
- tests

Then inspect and FIX:
TypeScript errors
build errors
runtime errors
console errors
broken routes
broken interactions
responsive problems

Do not merely report problems. Fix them.

## VISUAL QA
Review desktop, tablet and mobile.
Check:
spacing
typography
alignment
contrast
overflow
animation
product presentation
CTA visibility
navigation
cart
WhatsApp
responsive behavior

Use browser/screenshot inspection tools if available.

## FINAL USER JOURNEY
Verify:
LANDING
→ HERO
→ CATEGORY
→ SHOP
→ SEARCH
→ PRODUCT
→ GALLERY
→ DETAILS
→ CART OR WHATSAPP
→ CONTACT

This journey must work.

## PRIORITY ORDER
1. Correctness
2. Product usability
3. Conversion
4. Brand identity
5. Visual quality
6. Motion
7. Advanced WebGL

Never sacrifice 1–3 for 6–7.

## DOCUMENTATION
Create:
docs/design-concept.md
docs/design-system.md
docs/architecture.md
docs/performance.md
docs/assets-needed.md

## AUTONOMOUS EXECUTION
Do not repeatedly ask for permission for obvious implementation decisions.

Ask only if:
- critical information is genuinely missing
- destructive irreversible action is required
- credentials/API keys are required
- an explicit user choice is unavoidable

Otherwise continue.

Use this loop:
ANALYZE → PLAN → IMPLEMENT → RUN → INSPECT → FIX → TEST → POLISH

## FINAL REPORT
At completion report:

COMPLETED
- major features

ROUTES
- all routes

COMPONENTS
- major components

FEATURES
- e-commerce
- search
- filters
- cart
- wishlist
- WhatsApp
- 3D
- animations
- SEO
- analytics

TESTS
- build
- TypeScript
- lint
- runtime

PERFORMANCE
- optimizations performed

FALLBACKS
- WebGL
- mobile
- reduced motion

ASSETS STILL NEEDED
- only genuinely missing assets

NEXT STEPS
- only things requiring user input

## FINAL QUALITY BAR
Build Delta Light as a real premium commerce experience.

Not an animation showcase pretending to be a store.
Not a generic store pretending to be premium.

LIGHT = EXPERIENCE
SPACE = STORY
PRODUCT = HERO
INTERACTION = DISCOVERY
WHATSAPP = CONVERSION

Final feeling:
"I didn't just browse a lighting store.
I entered the world of Delta Light."
