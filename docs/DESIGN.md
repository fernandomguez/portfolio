---
name: Fernando Mínguez Portfolio
description: One face, two readings. A light, clean, soft-shadow portfolio where one portrait stands between pastel smoke (marketing) and living code (development) on desktop, and between two static pastel washes on mobile.
colors:
  ink: "#1f2328"
  muted: "#5b6472"
  soft: "#6b7280"
  line: "#e4e7ec"
  band: "#f7f8fa"
  white: "#ffffff"
  pill-ground: "#f1f3f6"
  coral: "#F28B82"
  sun: "#F9C74F"
  teal: "#7FCFC6"
  blue: "#6C8EF5"
  syntax-keyword: "#2563b8"
  syntax-string: "#b4532f"
  syntax-function: "#1f7a6d"
  syntax-punct: "#5b3fa6"
  brand-angular: "#DD0031"
  brand-typescript: "#3178C6"
  brand-java: "#E76F00"
  brand-spring: "#6DB33F"
  brand-git: "#F03C2E"
  brand-github: "#181717"
  brand-docker: "#2496ED"
  brand-opencode: "#1f2328"
  brand-claude: "#D97757"
  brand-analytics: "#E37400"
  brand-ads: "#4285F4"
  brand-powerbi: "#D4A800"
  brand-odoo: "#714B67"
  brand-zoho: "#E42527"
typography:
  display:
    fontFamily: "Figtree, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  hero-word:
    fontFamily: "Figtree, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.4rem, 13.4cqw, 5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Figtree, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.3rem, 2.2vw, 1.7rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Figtree, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Figtree, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Figtree, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 600
    lineHeight: 1.55
  mono:
    fontFamily: "ui-monospace, Cascadia Code, Consolas, Menlo, monospace"
    fontSize: "0.9rem"
    fontWeight: 600
    lineHeight: 1.3
rounded:
  group: "12px"
  mini: "14px"
  card: "16px"
  contact-card: "18px"
  phone: "28px"
  chip: "28%"
  pill: "99px"
spacing:
  gutter: "clamp(20px, 4vw, 56px)"
  nav-h: "64px"
  card-gap: "clamp(16px, 2vw, 24px)"
  sec-y-mobile: "64px"
components:
  nav-cta:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
  btn:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "50px"
  btn-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
  chip-btn:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "40px"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  card-body:
    padding: "22px"
  project-mini:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.mini}"
  stack-group:
    rounded: "{rounded.group}"
    padding: "18px"
  tech-chip:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.chip}"
  pill:
    backgroundColor: "{colors.pill-ground}"
    rounded: "{rounded.pill}"
    padding: "5px 11px"
  contact-card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.contact-card}"
    padding: "20px 22px"
  work-band:
    backgroundColor: "{colors.band}"
  up-tab:
    backgroundColor: "{colors.white}"
    textColor: "{colors.muted}"
    width: "74px"
    height: "24px"
---

# Design System: Fernando Mínguez Portfolio

## Overview

**Creative North Star: "One Face, Two Readings"**

A white, airy page following the pinned references (adhamdannaway.com for the split face and soft cards, aaabadcode.com for the pastel fluid smoke). One oversized head, cropped below the collar, stands in the centre of a single scene. On the left the marketing reading, on the right the development reading. On desktop with a fine pointer, thin pastel smoke follows the cursor on the left and syntax-coloured code lights up under the cursor on the right; the title on the side under the cursor leads. On mobile (720px and below) there is no smoke and no code: the same split is told by two static washes, warm (coral and sun) on the left and cool (teal and blue) on the right, with a 1px vertical divider between them. Everything below the hero is quiet so the portrait carries the identity.

Colour is rationed: smoke (desktop) or washes (mobile) in the hero, brand-coloured glyphs in the white chips, and tiny pastel marks elsewhere (selection, nav active underline, list markers, browser-bar dots, focus ring). The rest is ink on white and pale grey. Depth comes from soft layered shadows and hairline rules. The page is static and light: Figtree self-hosted, no libraries, and `smoke.js` is imported only after `load`, only for fine pointers and without reduced motion, so touch devices never download it.

**Key Characteristics:**
- White ground, two pale bands (projects, contact), hairline dividers.
- Single-scene hero: one transparent portrait, chips float beside it and never touch the body.
- Figtree variable for all human text; system mono only for code, repo names and the contact address.
- White cards, 16px radius, two-layer soft shadows, lift on hover when linked.
- Spanish copy (with an English twin under `/en/`); nothing invented as proof.

## Colors

Cool neutral greys on white, four candy-bright pastels that behave like paint, and borrowed brand colours confined to the chips.

### Primary
- **Cool Ink** (`ink`): text, brand, primary pill, phone bezel. Pill hover goes to `#000`.

### Secondary
- **Coral** (`coral`): smoke, mobile warm wash, nav active underline, list markers, mobile ring on marketing chips.
- **Sun** (`sun`): smoke, mobile warm wash, text selection background.
- **Teal** (`teal`): smoke, mobile cool wash, faint tint on one mini tile.
- **Blue** (`blue`): smoke, mobile cool wash, 3px keyboard focus ring, mobile ring on development chips, faint tint on one mini tile.

### Tertiary
- **Brand colours** (`brand-*`): Angular, TypeScript, Java, Spring Boot, Git, GitHub, Docker, OpenCode, Claude on the development side; Analytics, Ads and Looker, Power BI, Odoo, Zoho on the marketing side. Used only as the glyph fill inside white tech chips.
- **Syntax colours** (`syntax-*`): keyword, string, function, punctuation; only in the lit hero code (desktop).

### Neutral
- **Muted** (`muted`): secondary text, nav links, paragraphs, metadata.
- **Soft** (`soft`): the dimmed hero title on the non-leading side; code comments.
- **Line** (`line`): hairlines under nav and hero, over footer, job rows, "Más proyectos" rule, group borders.
- **Band** (`band`): projects and contact ground, mini tiles, icon wells.
- **Pill ground** (`pill-ground`): stack pills, nav icon hover.
- **White** (`white`): page, nav (92% opacity with blur), cards, minis, chips, footer.

### Named Rules
**The Paint Rule.** Pastels live in the hero (smoke or washes). Elsewhere they are tiny marks only, never fills, buttons or card colours.
**The Borrowed Colour Rule.** Brand colours appear only inside tech chips, as glyph colour on white.
**The Cool Ink Rule.** Text is `ink` or `muted`; no pure black text, no warm greys.

## Typography

**Display / Body Font:** Figtree variable, self-hosted (`assets/fonts/figtree.woff2`, weights 300-900, `font-display: swap`), fallback Helvetica Neue, Arial, sans-serif.
**Label/Mono Font:** system mono stack (ui-monospace, Cascadia Code, Consolas, Menlo), for hero code, mini-project names, browser-bar URL and the contact address.

**Character:** One friendly geometric sans, tight and heavy at display size, relaxed at body size. Weight and size carry hierarchy.

### Hierarchy
- **Hero word** (700, `clamp(1.4rem, 13.4cqw, 5rem)`, 1, -0.04em): "marketing" and "<desarrollo>", sized by their half's container width, never wrap. At 720px and below: `6.8vw`; at 600px and below: `max(22px, 7.2vw)`.
- **Display** (700, `clamp(2.2rem, 5vw, 4rem)`, 1.05, -0.04em): section headings (Algunos proyectos, Experiencia, ¿Hablamos?). The scroll statement is 700 at `clamp(1.8rem, 4.1vw, 3.7rem)`, -0.035em.
- **Headline** (700, `clamp(1.3rem, 2.2vw, 1.7rem)`, 1.05, -0.03em): job names and "Más proyectos". Small heading 1.25rem.
- **Title** (700, 1.4rem): project card titles.
- **Body** (400, 1.0625rem, 1.55): page default; lede `clamp(1.05rem, 1.4vw, 1.25rem)` in `muted`, 60ch, 1rem at 600px and below; card text .97rem; hero paragraphs `clamp(.88rem, 1.15vw, 1.05rem)` capped at 32ch.
- **Label** (600, .92rem): quiet links and chip buttons (.88rem).
- **Mono** (600, .9rem, 1.3): mini names; hero code 500 at `clamp(.72rem, .92vw, .9rem)`/1.9.
- **Job date** (`.jobs__when`, 500, `muted`): on mobile a small uppercase label (.85rem, +0.06em).

### Named Rules
**The One Family Rule.** Figtree for everything human-readable; mono only for literal code, repo names and the address.

## Layout

Full-width bands: sticky 64px nav, hero, scroll statement, projects band (with "Más proyectos"), experience, contact band, footer. Content wraps at 1240px with a fluid gutter (`clamp(20px, 4vw, 56px)`). The hero is a three-column grid (marketing copy, portrait column sized from hero height, development copy), height `clamp(560px, 100svh - nav, 820px)`. The photo box is 1.28x hero height with its top at -0.03 of hero height; from 721px up it fades to transparent over its outer 12% per side. Chips sit in a loose two-row grid beside the portrait, each with its own offset and size (2.7em-3.3em). Code hides at 1180px and below; from 721px to 1100px the chips hide too; 1101px to 1280px uses three columns.

Grids are intrinsic: project cards `.cards` use `repeat(auto-fit, minmax(min(290px, 100%), 1fr))`, the stack groups `.stack` use `minmax(min(280px, 100%), 1fr)` (the `min()` keeps them from overflowing narrow phones), minis go 1 / 2 / 4 columns at 640px and 1160px. Experience rows are two columns (date, content) until 860px.

**Mobile (720px and below).** Hero is two equal columns, photo box 0.64x height anchored to the bottom, smoke and code removed by CSS (`.smoke-zone`, `.codefog`, `.tilt-btn` are `display:none`). Background is static: a 1px vertical divider in ink at 7% opacity, warm radial washes top-left (coral 30%, sun 28%), cool washes top-right (blue 26%, teal 30%). Four chips per side stack along the outer edge, ringed 2px in coral (marketing) or blue (development) at 45%. Nav collapses to a toggle at 860px; at 374px and below only the LinkedIn icon hides.

**Mobile rhythm (600px and below).** One vertical step, `--sec-y: 64px`, is the top and bottom padding of statement, experience, contact and projects; the statement shortens to 130svh of scroll. Experience rows: the company mini-logo drops to 36px on its own row above the title, the role's date (`.jobs__dates`) sits on its own line without the bar, and the period (`.jobs__when`) becomes a small uppercase label. Card bodies, stack groups and contact cards use 20px padding.

**Touch targets.** Interactive controls are at least 44px tall: icon buttons, chip buttons (raised from 40px at 600px and below), "Todos los proyectos" link, mail buttons. Language switch links are 30px (28px under 520px) inside a bordered pill and are the documented exception.

## Elevation & Depth

Hybrid: hairlines for structure, soft layered shadows for objects. The page has no dark sections.

### Shadow Vocabulary
- **Rest** (`box-shadow: 0 1px 3px rgba(31,35,40,.12), 0 1px 2px rgba(31,35,40,.06)`, `--shadow`): cards, minis, contact cards, logo minis, buttons.
- **Lift** (`box-shadow: 0 12px 30px rgba(31,35,40,.10), 0 2px 6px rgba(31,35,40,.06)`, `--shadow-up`): hovered linked card (4px rise), mini (3px) and contact card (3px); tech chips and mini badges at rest.
- **Hairline** (`0 1px 0 var(--line)` / `0 -1px 0`): nav, hero, footer, up-tab.
- **Mockup** (`0 18px 36px rgba(31,35,40,.22)` phone, `.18` plus 1px ring for browser): the device frames inside project cards only.

### Named Rules
**The Soft Shadow Rule.** Shadows are layered, ink-tinted and low-opacity. No hard offset shadows, no coloured glows.

## Shapes

Gentle, consistent curves: 12px stack groups, 14px minis, 16px project cards, 18px contact cards, 28% (squircle) tech chips, 99px pills (CTA, buttons, chip buttons, stack pills, language switch). Device frames inside cards: phone 28px with a 6px ink bezel and notch, browser 12px top corners. Logo minis 12px (10px on mobile). Borders are used sparingly and always `line`: stack groups, logo minis, language pill, outlined buttons, unlinked minis, job rows. Arrows are inline SVG strokes in `currentColor`.

## Components

### Navigation
Sticky white bar (92% with blur), hairline underline, wordmark left (700), links centred in `muted` 500 with a 2px coral underline on the current section, actions right: icon buttons (44px round), ES/EN language pill, and "Contacto" as the single ink pill (hover `#000`). At 860px and below links fold into a dropdown and the pill hides.

### Cards / Containers
- **Project card** (three): white, 16px, Rest shadow, a 300px stage with a soft per-project tint gradient holding a phone or browser mockup (rises 8px on hover), then a body (22px) with title, meta, text, stack pills pinned down, and chip-button actions or a muted status line. Only linked cards lift.
- **Project mini** ("Más proyectos"): 14px white item with a screenshot or tinted tile (band, optionally blue or teal at 5-12%) carrying a white badge, mono name, muted description, small stack tags and a note. Linked minis lift 3px; unlinked ones carry a `line` border and no hover.
- **Contact card:** 18px white row with a 48px band icon well, label (700), mono sub-line and an arrow; the mail card adds buttons below.

### Buttons
Pill, 99px. `.btn` is white with a `line` border and Rest shadow, 50px tall; `.btn--primary` is ink fill, white text. Hover rises 2px. `.chip-btn` is the compact variant (40px, 44px on small phones) that inverts to ink on hover.

### Single-scene Hero (signature)
- **Portrait:** one transparent cutout (AVIF/WebP), no tint. Side-faded from 721px up.
- **Lead emphasis (mouse only):** the title on the side under the cursor scales 1.05 and the other turns `soft`; chips on the leading side scale 1.1.
- **Marketing half (desktop):** thin pastel WebGL fluid smoke over four CSS radial blobs that act as fallback and base; copy over it is `ink` with a white text-shadow halo.
- **Development half (desktop):** syntax-coloured mono code, dim at rest and revealed by a radial mask under the cursor; chips bob (5s-7.5s, 8px) and shift with pointer parallax.
- **Mobile:** static washes and divider, no smoke, no code; see Layout.

### Stack groups
In Experiencia, bordered 12px groups (hairline, no shadow) hold icon pills (`pill-ground`, 99px, .86rem). Groups flow in the intrinsic `.stack` grid; "Herramientas de desarrollo" and "Producto y plataformas" share one cell (`.stack__col`, 16px gap).

### Scroll statement
A sticky, full-viewport sentence whose words rise from 14% to full opacity as the page scrolls (static and fully opaque for reduced motion).

### Up-tab footer (signature)
White footer with a hairline top edge and a 74x24 half-pill tab rising 23px above it holding a chevron-up back to top. Centred text in `muted`, .88rem.

## Do's and Don'ts

### Do:
- **Do** keep pastel colour inside the hero (smoke on desktop, washes on mobile); keep brand colours inside white chips.
- **Do** use `ink` and `muted` for text, `line` hairlines for structure.
- **Do** give raised objects the Rest shadow; lift only linked cards, minis and contact cards.
- **Do** build grids with `minmax(min(Npx, 100%), 1fr)` so a column never exceeds a narrow viewport.
- **Do** use `--sec-y` (64px) as the vertical step between sections at 600px and below.
- **Do** use `cubic-bezier(.16,1,.3,1)` for transitions and honour `prefers-reduced-motion` and `(pointer: fine)` for heavy effects; load `smoke.js` only for fine pointers.
- **Do** keep interactive targets at least 44px tall and the 3px blue focus ring visible.
- **Do** keep copy in the half it belongs to.
- **Do** separate fields with `|`, lists with commas and date ranges with a short hyphen and spaces ("Oct 2022 - Ene 2026").

### Don't:
- **Don't** fill buttons, cards or sections with the pastel accents.
- **Don't** add dark themes or dark sections (the phone bezel inside a project card is a device frame, not a surface).
- **Don't** use hard offset shadows, coloured glows or heavy borders.
- **Don't** put controls, labels or chips on the face or the body.
- **Don't** introduce a second text family or set prose in mono.
- **Don't** show smoke or code in the mobile hero.
- **Don't** invent proof (clients, metrics, testimonials) or link unlinked minis.
- **Don't** use the middle dot as a separator in copy, titles or meta.
