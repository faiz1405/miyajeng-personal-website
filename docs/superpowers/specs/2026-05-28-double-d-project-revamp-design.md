# Double D Management Project Revamp — Design

**Status:** Approved
**Date:** 2026-05-28
**Scope:** `src/pages/ProjectsPage.jsx` — Project 01 (Double D Management) only

## Context

The current Project 01 card on `/projects` collapses two distinct narratives into one block with a single 6-image Swiper carousel:

1. YouTube creative work for The Sinathrya channel (incl. NGODE podcast).
2. Social media content for Donna Agnesia's brands (do skin official, do style, omahan kitchen, rendang warisan bundo).

The user's pitch deck treats these as two separate slides with very different visual treatments — YouTube thumbnails on slide 1, IG profile screenshots on slide 2. Merging both into one carousel loses that distinction and weakens the storytelling.

Other project cards (VDVC, Goodscript, etc.) are not affected.

## Goals

- Split Double D into two visually distinct sub-blocks within the existing Project 01 card.
- Replicate the deck's two-narrative structure without bloating the page or losing existing copy.
- Keep the existing brutalist card chrome (dark `#1A1020` background, `#FFD93D` accents, thick borders, hard shadows) — no global theme changes.

## Non-goals

- HomePage DD teaser is **out of scope**. It remains as the small carousel built earlier — it's a preview, not a showcase.
- VDVC, Goodscript, and other project blocks are unchanged.
- Swiper imports are retained (still used by VDVC).
- No global config/extraction yet. Data lives inline in `ProjectsPage.jsx`. If HomePage later needs the same data, extract then.

## Structure

```
PROJECT 01 — DOUBLE D MANAGEMENT  (existing dark card chrome retained)
├─ Header: "01" + badge "Double D Management" + h2 title          (unchanged)
│
├─ SUB-BLOCK A — "YouTube Creative"                                (zig-zag: copy LEFT, media RIGHT)
│  ├─ Section label (chip)
│  ├─ Copy: existing paragraphs 1-3 (Sinathrya channel, content plans, NGODE, filming/QC)
│  ├─ 3 YouTube cards (thumbnail + title), grid
│  └─ CTA: "Visit YouTube →" (existing button retained, moved here)
│
└─ SUB-BLOCK B — "Donna's Social Brands"                           (zig-zag: media LEFT, copy RIGHT)
   ├─ Section label (chip)
   ├─ Copy: existing paragraph 4 (Donna's social brand work)
   ├─ 3 IG profile screenshots (vertical cards), grid
   └─ Small handle chips below each screenshot, linking to the IG profile
```

## Layout & responsive

- Desktop (`lg:` ≥ 1024px): sub-block A is `flex-row` (copy ~55%, media ~45%); sub-block B is `flex-row-reverse` (media left, copy right). Echoes the existing alternation pattern between Project 01 and Project 02 cards.
- Tablet & mobile (< `lg`): each sub-block collapses to `flex-col` — copy stacked above media within A; copy stacked above media within B.
- Gap between sub-blocks: large enough to read as separate sections (suggested `gap-16` to `gap-20`).
- The two sub-blocks share the same outer card; no additional shadow/border wrapping per sub-block (would feel nested).

## Visual treatment

- **Section label chip**: same chip vocabulary as the existing project badge — small rounded pill, `border-2 border-[#1A1020]`. Use `bg-[#FFD93D]` for A, `bg-[#FF3D8A]` for B (or another existing accent) to subtly distinguish, with `text-[#1A1020]` and uppercase `font-800 tracking-widest`. Slight rotation (`rotate-[-2deg]` / `rotate-[2deg]`) for hand-made feel.
- **YouTube cards**:
  - Aspect: `aspect-video` (16:9)
  - Rounded `rounded-[16px]`, `border-2 border-[#1A1020]`, brutalist shadow `shadow-[4px_4px_0_0_#1A1020]`
  - Title under thumbnail: `font-sans text-sm font-700 text-white`, 2-line clamp
  - Subtle hover: translate up 2px, shadow shifts
- **IG screenshot cards**:
  - Aspect: `aspect-[9/16]` (full IG profile screenshot) or `aspect-[4/5]` if cropped
  - Same border/shadow vocabulary
  - Handle chip below screenshot (small, clickable to `href`)
- All images: `loading="lazy"`.

## Data shape (inline in ProjectsPage.jsx)

```js
const DD_YOUTUBE = [
  { src: '/projects/dd/youtube/qna.jpg',   title: 'QnA Bareng Lio, Diego, Sabrina!! Siap Pindah ke Portugal?!' },
  { src: '/projects/dd/youtube/ngode.jpg', title: 'BATASAN SELINGKUH DI ERA DIGITAL — NGODE Podcast' },
  { src: '/projects/dd/youtube/lele.jpg',  title: 'LELE CRISPY & KULIT CABE GARAM?! Darius & Donna Coba Nasi Uduk' },
]

const DD_SOCIAL = [
  { src: '/projects/dd/social/rendang.jpg',  handle: '@rendang.warisanbundo', href: 'https://www.instagram.com/rendang.warisanbundo/' },
  { src: '/projects/dd/social/omahan.jpg',   handle: '@omahan.kitchen',       href: 'https://www.instagram.com/omahan.kitchen/' },
  { src: '/projects/dd/social/do_style.jpg', handle: '@do.style.official',    href: 'https://www.instagram.com/do.style.official/' },
]
```

Titles and IG URLs above are placeholders sourced from the deck — user provides the final values.

## Copy allocation

Source: existing `ProjectsPage.jsx:71-83`.

- **Sub-block A** uses paragraphs 1, 2, 3:
  - P1: "At Double D Management, I'm in charge of creative…"
  - P2: "On YouTube, I'm responsible for creating content plans…"
  - P3: "For their social media channels, I'm involved in creating ideas/storylines…"
- **Sub-block B** uses paragraph 4:
  - P4: "I also edit several videos for Donna Agnesia's social media brands, such as 'do skin official,' 'do style,' 'Omahan Kitchen' and 'rendang warisan bundo.'"

(P3 mentions social media, but in the context of brand-content storylines — it belongs to YouTube/creative side, not pure editing work. User may reallocate if preferred.)

## Asset requirements (user-supplied before merge)

- `public/projects/dd/youtube/qna.jpg`
- `public/projects/dd/youtube/ngode.jpg`
- `public/projects/dd/youtube/lele.jpg`
- `public/projects/dd/social/rendang.jpg`
- `public/projects/dd/social/omahan.jpg`
- `public/projects/dd/social/do_style.jpg`

Until assets land, the page can ship with broken `img` references — visible to the user, easy to spot, no fallback hack added.

## What is removed

- `ProjectsPage.jsx` Project 01 Swiper block (currently around lines 94-108).
- `DD_IMAGES` constant in `ProjectsPage.jsx` (no longer used; replaced by `DD_YOUTUBE` + `DD_SOCIAL`).
- The `aspect-square` container and autoplay carousel for Project 01.

## What is retained

- `Swiper`, `SwiperSlide`, `Autoplay`, `EffectCards` imports + `swiper/css` imports — still used by VDVC sub-card.
- Outer Project 01 motion wrapper, dark card chrome, group hover overlay (`-inset-4 bg-[#FFD93D] rotate-[1deg]`), header chrome.
- "Visit YouTube →" CTA button, relocated into sub-block A.

## Verification

No automated test suite exists. Manual verification:

1. `npm run dev`
2. Open `/projects`, scroll to Project 01.
3. Desktop (≥ 1024px): confirm zig-zag alternation between A (copy-left) and B (media-left). Card chrome unchanged.
4. Tablet (768-1023px): each sub-block collapses to single column gracefully.
5. Mobile (< 768px): vertical stacking, images full-width, copy readable.
6. Hover Project 01 — outer accent overlay still appears.
7. Scroll to VDVC (Project 02) — confirm Swiper still works, no regression.
8. Check console: no 404s for the 6 image paths (after user supplies assets).

## Out-of-scope follow-ups

- Replicating the same two-block pattern for VDVC if it has similar split narratives — separate spec.
- Extracting project data into `src/config/projects.js` if more pages start consuming it.
- HomePage DD teaser redesign — separate ticket.
