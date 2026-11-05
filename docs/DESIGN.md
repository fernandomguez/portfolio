---
name: Fernando Mínguez Portfolio
description: One face, two readings. A light, clean, soft-shadow portfolio where a draggable seam splits one portrait between pastel smoke (marketing) and living code (development).
colors:
  ink: "#1f2328"
  muted: "#5b6472"
  soft: "#7b8494"
  line: "#e4e7ec"
  band: "#f7f8fa"
  white: "#ffffff"
  thumb-tile: "#eef0f4"
  coral: "#F28B82"
  sun: "#F9C74F"
  teal: "#7FCFC6"
  blue: "#6C8EF5"
  code-green: "#2f9e8f"
  brand-angular: "#DD0031"
  brand-spring: "#6DB33F"
  brand-git: "#F03C2E"
  brand-java: "#E76F00"
  brand-typescript: "#3178C6"
  brand-github: "#181717"
  brand-docker: "#2496ED"
  brand-claude: "#D97757"
  brand-opencode: "#1f2328"
typography:
  display:
    fontFamily: "Figtree, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.4rem, 13.4cqw, 5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Figtree, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.2rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Figtree, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
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
    fontSize: "0.76rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  thumb: "8px"
  card: "12px"
  chip: "28%"
  pill: "99px"
spacing:
  gutter: "clamp(20px, 4vw, 56px)"
  nav-h: "64px"
  card-gap: "clamp(16px, 2vw, 24px)"
  card-inset: "10px"
components:
  nav-cta:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "9px 18px"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "10px 10px 4px"
  card-thumb:
    backgroundColor: "{colors.thumb-tile}"
    rounded: "{rounded.thumb}"
    height: "210px"
    padding: "14px"
  project-mini:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "14px 16px"
  tech-chip:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.chip}"
  seam-grip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    width: "64px"
    height: "44px"
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

A white, airy page following the user-pinned references (adhamdannaway.com for the split face and soft cards, aaabadcode.com for the pastel fluid smoke). One oversized head, cropped below the collar, is split by a draggable seam. Left of it the head sits in thin pastel smoke that follows the cursor (marketing); right of it the same natural photo sits plain with syntax-coloured code and floating tech chips (development). Everything below the hero is quiet so the portrait carries the identity.

Colour is rationed to two places: the smoke on the marketing side and the brand-coloured chips on the development side. Elsewhere the page is ink on white and pale grey, with the four pastel accents only as tiny marks (selection, footer underline, focus ring). Depth comes from soft layered shadows and hairline rules. The page is static and light (near-instant load): Figtree self-hosted, no libraries, and the WebGL smoke is loaded only after the page `load`, only for fine pointers, with CSS blobs as the fallback.

**Key Characteristics:**
- White ground, one pale band for projects, hairline dividers.
- Split-face hero: seam position drives the wipe, which half leads, and which copy is interactive.
- Figtree variable for all human text; system mono only for code and stack lines.
- White cards and minis, 12px radius, two-layer soft shadows, lift on hover when linked.
- Spanish copy; nothing invented as proof.

## Colors

Cool neutral greys on white, with four candy-bright pastels that behave like paint, plus nine borrowed brand colours confined to the chips.

### Primary
- **Ink** (`ink`): text, brand, primary pill, the seam line, the code caret. Cool near-black; the pill hover goes to `#000`.

### Secondary
- **Coral** (`coral`): smoke, footer link underline.
- **Sun** (`sun`): smoke, text selection background.
- **Teal** (`teal`): smoke.
- **Blue** (`blue`): smoke, 3px keyboard focus ring, footer link hover underline.

### Tertiary
- **Brand colours** (`brand-*`): Angular, Spring Boot, Git, Java, TypeScript, GitHub, Docker, Claude, OpenCode. Used only as the glyph fill inside the white tech chips. TypeScript blue, Claude orange and `code-green` also colour the syntax tokens in the hero code.

### Neutral
- **Muted** (`muted`): secondary text, nav links, paragraphs, stack lines, the "Arrastra" hint.
- **Soft** (`soft`): the dimmed hero title on the non-leading side; base colour of the hero code.
- **Line** (`line`): hairlines under nav and hero, over footer, above "Más proyectos".
- **Band** (`band`): projects section ground.
- **Thumb tile** (`thumb-tile`): tile behind project screenshots.
- **White** (`white`): page, nav (96% opacity), cards, minis, chips, grip, footer.

### Named Rules
**The Paint Rule.** Pastels live in the smoke. Elsewhere they are tiny marks only, never fills, buttons or card colours.
**The Borrowed Colour Rule.** Brand colours appear only inside tech chips, as glyph colour on white.
**The Cool Ink Rule.** Text is `ink` or `muted`; no pure black text, no warm greys.

## Typography

**Display / Body Font:** Figtree variable, self-hosted (`assets/fonts/figtree.woff2`, weights 300-900, `font-display: swap`), fallback Helvetica Neue, Arial, sans-serif.
**Label/Mono Font:** system mono stack (ui-monospace, Cascadia Code, Consolas, Menlo), for hero code, project stack lines and mini-project names.

**Character:** One friendly geometric sans, tight and heavy at display size, relaxed at body size. Weight and size carry hierarchy.

### Hierarchy
- **Display** (700, `clamp(1.4rem, 13.4cqw, 5rem)`, 1, -0.04em): hero words "marketing" and "<desarrollo>", sized by their half's container width so they always fit, never wrap.
- **Headline** (700, `clamp(2rem, 4.2vw, 3.2rem)`, 1.05, -0.03em): section heading "Algunos trabajos", centred. Secondary heading "Más proyectos" is 700 at `clamp(1.3rem, 2.2vw, 1.7rem)`. Footer ask is 600 at `clamp(1.15rem, 2.2vw, 1.6rem)`.
- **Title** (700, 1.3rem, 1.15, -0.02em): project card titles. Brand wordmark 700 at 1.1rem.
- **Body** (400, 1.0625rem, 1.55): page default; card text 0.95rem; hero paragraphs `clamp(.88rem, 1.15vw, 1.05rem)` capped at 32ch.
- **Label** (600, 0.92rem): quiet links and card links. The slider hint "Arrastra" is 600 0.76rem uppercase at 0.06em on a white pill, a functional instruction, not a section kicker.
- **Mono** (500, 0.76rem, 1.4): stack lines in `muted`; code in the hero at `clamp(.74rem, .95vw, .88rem)`/1.7.

### Named Rules
**The One Family Rule.** Figtree for everything human-readable; mono only for literal code, stack names and repo names.

## Layout

Full-width bands: sticky 64px nav, hero, projects band, footer. Content wraps at 1240px with a fluid gutter (`clamp(20px, 4vw, 56px)`). The hero is a three-column grid (marketing copy, portrait column sized from hero height, development copy), height `clamp(560px, 100svh - nav, 820px)`. The photo box is 1.28x hero height with its top at -0.03 of hero height (raised on 2026-11-05 so the face sits near the vertical middle and more torso shows). From 721px up the photo fades to transparent over its outer 12% on each side, so the cropped shoulders never end in a hard vertical edge. Copy sits inside each half's layer, so the wipe reveals it. Project cards use an auto-fit grid (`minmax(270px, 1fr)`); minis use `minmax(260px, 1fr)` with 12px gap. Section padding `clamp(48px, 7vw, 96px)` top, `clamp(64px, 9vw, 120px)` bottom. At 1180px and below the floating code hides; from 721px to 1100px the hero chips are hidden too (no room beside the portrait). At 720px and below the hero uses two equal columns, photo box at 1x height and top 0.3, chips reduce to four stacked at the right edge, thumbnails drop to 190px.

## Elevation & Depth

Hybrid: hairlines for structure, soft layered shadows for objects. No dark surfaces.

### Shadow Vocabulary
- **Rest** (`box-shadow: 0 1px 3px rgba(31,35,40,.12), 0 1px 2px rgba(31,35,40,.06)`, `--shadow`): cards, minis, app-icon thumbnail, hint pill.
- **Lift** (`box-shadow: 0 12px 30px rgba(31,35,40,.10), 0 2px 6px rgba(31,35,40,.06)`, `--shadow-up`): linked card (4px rise) and linked mini (2px rise) on hover; tech chips at rest.
- **Grip** (`0 6px 18px rgba(31,35,40,.22), 0 1px 3px rgba(31,35,40,.3)`): the seam grip only.
- **Hairline** (`0 1px 0 var(--line)` / `0 -1px 0`): nav, hero, footer, up-tab.

### Named Rules
**The Soft Shadow Rule.** Shadows are layered, ink-tinted and low-opacity. No hard offset shadows, no coloured glows.

## Shapes

Gentle, consistent curves: 8px thumbnail tiles, 12px cards and project minis, 28% (squircle) tech chips, 99px pills (nav CTA, grip, hint). App-icon thumbnail 22px, inner screenshots 6px, focus outline 6px. Up-tab is a half-pill (40px top corners). No borders on objects; separation is shadow or hairline (the only rule line is above "Más proyectos"). Arrows are inline mask-SVG strokes (2px, round caps) in `currentColor`.

## Components

### Navigation
Sticky white bar, hairline underline, wordmark left (700), links right in `muted` 500, `ink` on hover. "Contacto" is the single pill (ink fill, white text, 600, 9px 18px, hover `#000`).

### Cards / Containers
- **Project card** (three main): white, 12px, Rest shadow, 10px inset around a 210px thumb tile (8px, `thumb-tile`, screenshot contained, 14px padding; app-icon variant 96px at 22px radius). Order: title, meta (muted), text, mono stack line pinned to the bottom, then arrow-out link or a muted status line. Only linked cards lift.
- **Project mini** ("Más proyectos"): compact white 12px item, mono name (600, .9rem), muted description, small note. Linked minis lift 2px; unlinked minis are static items with a muted note and no hover.

### Split-face Hero (signature)
- **Layers:** marketing layer below, development layer above, clipped with `clip-path: inset(0 0 0 var(--split)%)`. Same photo in both, no tint; the portrait is a transparent cutout (alpha PNG exported to AVIF/WebP from `fuente/foto_sinfondo.png`), so no chroma filter is needed.
- **Seam:** 2px ink line with a 44px-wide handle. A 64x44 white pill grip with chevrons sits on the neck at the bottom, with an "Arrastra" hint above it that fades once used. Never on the face. Keyboard slider: Arrow keys step 5, Home/End jump to 0/100; focus ring on the grip is 3px `blue`.
- **Entry wipe:** `--split` starts at 100 under JS and wipes from all-marketing to the centre once.
- **Lead emphasis:** by seam position, the larger side's title scales 1.05 and the other side's title turns `soft`; when development leads, chips scale 1.12 (0.6s expo-out).
- **Inert copy:** each half's copy lives inside its own layer and becomes `inert` when that half is mostly hidden (marketing under 15, development over 85).
- **Marketing half:** thin pastel WebGL fluid smoke with a rainbow hue trail (`smoke.js`), canvas fades in over 1.2s; loaded after `load`, fine pointer only, skipped for reduced motion. Fallback is four CSS radial blobs in the pastels. Copy over it is `ink` with a white text-shadow halo.
- **Development half:** syntax-coloured mono code lines that type in with staggered 0.6s delays on a 10s loop, a blinking ink caret, and nine white tech chips (28% radius, Lift shadow, brand-coloured glyph) that bob and shift with pointer parallax (per-chip factor `--k`).
- **Chip placement (both halves):** chips never touch the body. They sit in a loose two-row grid beside the portrait: column 0 starts a fixed gap outside the photo edge and columns open toward the screen edge (`--pitch`, capped at 5.8em). Each chip has its own offset (`--jx`, `--jy`, in em) and size (`--z`, 2.7em-3.3em) so the cluster looks hand-placed, not rigid. Development: Angular, TypeScript, Java, Spring Boot, Docker / Git, GitHub, OpenCode, Claude. Marketing: Analytics, Ads, Odoo / Looker, Power BI, Zoho. From 1101px to 1280px: three columns, up to three rows, offsets at 60%.

### Up-tab footer (signature)
White footer with hairline top edge and a 74x24 half-pill tab rising 23px above it holding a chevron-up back to top. Centred below: ask (600), link row (600, 2px coral underline, blue on hover), small note, copyright.

### Stack groups
The Experiencia section lists the stack in a 3-column grid of 12px bordered groups (`.stack__g`, hairline border, no shadow) that hold icon pills. Six grid cells for seven groups: "Herramientas de desarrollo" and "Producto y plataformas" share one cell, stacked (`.stack__col`, 16px gap). Order: Stack principal, APIs/arquitectura/testing, [Herramientas + Producto], Complementarias (vistas en formación), IA aplicada, Marketing y negocio. UX/UI is no longer listed on the web.

### Section headings
Display-weight centred h2 ("Algunos trabajos") in `ink`, large and tightly tracked, with no ornament around it.

## Do's and Don'ts

### Do:
- **Do** keep pastel colour inside the smoke; keep brand colours inside white chips.
- **Do** use `ink` and `muted` for text, `line` hairlines for structure.
- **Do** give raised objects the Rest shadow; lift only linked cards and minis.
- **Do** keep radii to 8px, 12px, 28% (chips) and 99px.
- **Do** use `cubic-bezier(.16,1,.3,1)` for transitions and honour `prefers-reduced-motion` and `(pointer: fine)` for heavy effects.
- **Do** keep copy in the half it belongs to and make it `inert` when that half is mostly hidden.
- **Do** keep interactive targets at least 44px tall and the 3px blue focus ring visible.
- **Do** keep first load tiny: self-hosted Figtree, no libraries, smoke loaded after `load`.

### Don't:
- **Don't** fill buttons, cards or sections with the pastel accents.
- **Don't** add dark themes or dark sections.
- **Don't** use hard offset shadows, coloured glows or heavy borders.
- **Don't** put controls or labels on the face; the grip sits on the neck.
- **Don't** introduce a second text family or set prose in mono.
- **Don't** invent proof (clients, metrics, testimonials) or link unlinked minis.
- **Don't** use the middle dot `·` as a separator in copy, titles or meta (it reads as generated text): use `|` between fields ("Fernando Mínguez | Desarrollador full stack junior"), commas in lists and a short hyphen with spaces in date ranges ("Oct 2022 - Ene 2026").
