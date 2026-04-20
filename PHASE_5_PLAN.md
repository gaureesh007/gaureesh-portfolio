# PHASE 5 PLAN — Gaureesh Portfolio
> Single source of truth for Phase 5: Visual & Cinematic Layer
> Last updated: April 2026

---

## 1. Phase 5 Overview

Phase 5 transforms the portfolio from *animated* to *cinematic*. Phases 1–4 gave us the foundation, skeleton, scroll animations, and micro-interactions. Phase 5 adds the visual depth layer — 3D environments, scroll-driven storytelling, and full-viewport cinematic panels.

**Goal:** Every section should feel like a scene in a film, not just a webpage.

**3 Stages:**
| Stage | Name | Status |
|-------|------|--------|
| Stage 1 | 3D Visual Foundation (Hero) | ✅ Complete |
| Stage 2 | Cinematic About / Story Chapter | 🔄 Active |
| Stage 3 | Projects + Vision Chapters | 🔜 Planned |

**Active files during Phase 5:**
- `app/components/sections/About.tsx` — full replacement
- `app/components/sections/Projects.tsx` — cinematic upgrade
- `app/components/sections/Ambitions.tsx` — cinematic upgrade
- `app/components/ui/` — possible new shared utilities

---

## 2. Stage 1 — Completed Work

Stage 1 built the 3D visual foundation for the Hero section. Do not rebuild or modify these.

### 2.1 Three.js Particle Field (`ParticleField.tsx`)
- 700 blue particles distributed in 3D space
- Mouse repulsion using `vector.unproject(camera)` for accurate 3D coordinates
- Lerp-based smooth repulsion (returnStrength: 0.012, repelRadius: 1.4, damping: 0.92)
- Breathing wave using `Math.sin` over time
- Slow continuous rotation on X and Y axes
- Positioned `absolute`, `pointer-events: none`, behind hero content
- Full cleanup on unmount: disposes geometry, material, renderer

### 2.2 SVG Mandala (`Mandala.tsx` + `MandalaShape.tsx`)
- Fixed position, right side, half off-screen
- `MandalaShape.tsx` generates SVG mathematically — 14 concentric ring layers (circles, petals, dots, arches)
- Rotation is **scroll-driven only** — no continuous rotation
- Scroll down → clockwise rotation; scroll up → counter-clockwise
- Speed proportional to scroll velocity via GSAP
- CSS mask: `radial-gradient` fades edges
- Hydration fix: `useState(mounted)` pattern prevents server/client mismatch

### 2.3 Hero Parallax (`Hero.tsx`)
- Hero content div moves `y: -100` as user scrolls out
- `scrollTrigger`: trigger = heroRef, start = `'top top'`, end = `'bottom top'`, scrub: true
- Creates depth — content lifts away as particle field stays behind

---

## 3. Stage 2 — Cinematic About / Story Chapter

### 3.1 Concept
Replace the current broken `About.tsx` with a **horizontal cinematic scroll** section. The user pins the page and the story moves sideways — 9 full-viewport panels, each a chapter of Gaureesh's life.

This is NOT a carousel. This is scroll-driven. Every pixel of vertical scroll drives horizontal movement. The experience should feel like turning pages of a book — but cinematic.

### 3.2 Technical Architecture

**Core mechanism:**
```
Outer <section> — pinned by GSAP ScrollTrigger
  └── Inner <div> (flex-row, width: 900vw) — translated horizontally by scroll
        └── 9 x <div> (each 100vw × 100vh) — individual panels
```

**GSAP setup:**
```js
const totalWidth = container.scrollWidth - window.innerWidth

gsap.to(container, {
  x: -totalWidth,
  ease: 'none',
  scrollTrigger: {
    trigger: section,
    start: 'top top',
    end: () => `+=${totalWidth}`,
    pin: true,
    scrub: 1,
    anticipatePin: 1,
  }
})
```

**Per-panel entry animation:**
Each panel triggers its own GSAP animation when it enters the viewport horizontally:
```js
ScrollTrigger.create({
  trigger: panelEl,
  containerAnimation: horizontalTween, // links to the horizontal scroll
  start: 'left 80%',
  onEnter: () => { /* animate panel content in */ }
})
```

### 3.3 Panel Structure (per panel)

Every panel follows this layered DOM structure:
```
<div class="panel"> (100vw × 100vh, flex-shrink-0, relative, overflow-hidden)
  ├── Background layer (absolute, full size, pointer-events-none)
  │     └── Atmospheric glow / gradient unique to panel
  ├── Midground layer (absolute, SVG mandala art, pointer-events-none)
  │     └── Panel-specific SVG pattern
  ├── Particle layer (absolute, canvas or CSS divs, pointer-events-none)
  │     └── Contextual particle cluster
  └── Foreground layer (relative, z-10)
        ├── Section tag (small caps label, e.g. "CHAPTER 01")
        ├── Year / timeframe
        ├── Display headline (Clash Display, large)
        └── Body text (Inter, max-width ~480px)
```

### 3.4 The 9 Panels — Full Detail

---

#### Panel 1 — Origin
**Label:** `CHAPTER 01 — ORIGIN`
**Year:** 2005
**Headline:** Born in a storm.
**Body:** 24 June 2005. A rainy, stormy Friday in Prayagraj. Some people arrive quietly. I arrived in a storm.
**Atmosphere:** Deep dark blue-black. Single radial glow at center (blue, low opacity). Feels vast and quiet.
**Mandala art:** Single large ring — sparse, minimal, centered. Represents a single point of beginning.
**Particles:** 30–40 particles drifting very slowly downward like rain. Soft blue, low opacity.
**Typography:** Headline is massive (clamp 5rem–10rem). "storm." in accent blue.
**Animation:** Headline splits per word, each word rises from below with stagger 0.15.

---

#### Panel 2 — The Engineer
**Label:** `CHAPTER 02 — THE ENGINEER`
**Year:** 2012–2020
**Headline:** Logic first. Always.
**Body:** Before I knew what engineering was — I was already building. Wooden cities. Paper circuits. Dreams made of systems.
**Atmosphere:** Cooler blue, grid-like radial glow. Structured, geometric.
**Mandala art:** Geometric mandala — hexagonal patterns, circuit-like lines. Precise, no organic curves.
**Particles:** Grid-arranged dots in background, subtle. Suggest circuitry.
**Typography:** Monospace accent for "Logic". Display font for rest.
**Animation:** Content slides in from right. Mandala rotates in on entry.

---

#### Panel 3 — The Entrepreneur
**Label:** `CHAPTER 03 — THE ENTREPRENEUR`
**Year:** 2016–present
**Headline:** Ideas are cheap. Execution is everything.
**Body:** I saw a problem. I didn't wait for permission. I built a generator when I couldn't afford an RC car.
**Atmosphere:** Warm blue-purple gradient. More energy than Panel 2. Risk in the air.
**Mandala art:** Radiating mandala — petals expanding outward. Growth, expansion, risk.
**Particles:** Particles cluster at center and burst outward slowly. Suggest launch/launch energy.
**Typography:** "Execution" underlined with animated accent line.
**Animation:** Headline word by word, opacity + y. Mandala petals scale in from 0.

---

#### Panel 4 — The Artist
**Label:** `CHAPTER 04 — THE ARTIST`
**Year:** 2018–present
**Headline:** Art is how I stay human.
**Body:** Drawing. Singing. Writing. Not hobbies — lifelines. The part of me that no amount of code can replace.
**Atmosphere:** Softer, warmer. Slight purple tint. Emotional.
**Mandala art:** Organic mandala — flowing petal shapes, asymmetric, human-feeling. No hard geometry.
**Particles:** Particles move in slow, flowing, organic paths. Like watercolor bleeding.
**Typography:** Headline in Clash Display, slightly tilted (-2deg). "human." in italic.
**Animation:** Text fades in with clip-path reveal (top to bottom). Mandala draws itself (stroke-dashoffset animation).

---

#### Panel 5 — The Intersection
**Label:** `CHAPTER 05 — THE INTERSECTION`
**Year:** Always
**Headline:** Engineer. Entrepreneur. Artist.
**Body:** Not three separate identities. One person. Three lenses. Every product I build passes through all three.
**Atmosphere:** Three overlapping glows — blue (left), purple (center), slightly warm (right). Converging.
**Mandala art:** Three partial mandalas overlapping at center. Represent the three identities merging.
**Particles:** Three clusters that slowly merge into one.
**Typography:** Three words in a row — each in slightly different weight/color. Then they pull together.
**Animation:** Three elements animate in from separate directions and converge at center.

---

#### Panel 6 — First Build
**Label:** `CHAPTER 06 — FIRST BUILD`
**Year:** 2020
**Headline:** Iron Man gave me permission.
**Body:** Lockdown. Watched Iron Man. Something cracked open. First laptop. HTML. CSS. Python. I built until the hard drive died. The learning stayed.
**Atmosphere:** Darker, more intense. Red-tinted glow (Iron Man energy). High contrast.
**Mandala art:** Technical mandala — like a schematic or blueprint. Angular, precise.
**Particles:** Fast-moving particles, slight warm tint. Energy, motion, urgency.
**Typography:** "Iron Man" in bold accent. "The learning stayed." is isolated, lower, smaller — impactful.
**Animation:** Headline types in (typewriter effect per word). Content snaps in sharply.

---

#### Panel 7 — The Vision
**Label:** `CHAPTER 07 — THE VISION`
**Year:** Now → Future
**Headline:** I don't want to just work in tech. I want to shape it.
**Body:** AI that feels human. Products that move people. An identity earned — not inherited.
**Atmosphere:** Brightest panel. Blue glow is wide and strong. Feels open and expansive.
**Mandala art:** Largest mandala of all panels. All 14 rings. Full complexity. Represents full potential realized.
**Particles:** Most particles of any panel. Active, energetic, expansive.
**Typography:** Headline spans nearly full width. Max font size of any panel.
**Animation:** Mandala rings animate in sequentially, outermost last. Headline scales up from 0.8 to 1.

---

#### Panel 8 — The Philosophy
**Label:** `CHAPTER 08 — THE PHILOSOPHY`
**Year:** —
**Headline:** Build with logic. Design with emotion.
**Body:** Technology and emotion are not opposites. The most powerful products are the ones that move you.
**Atmosphere:** Perfectly balanced — neither warm nor cold. Centered, still.
**Mandala art:** Perfectly symmetrical mandala. Balance and duality.
**Particles:** Two equal particle clusters — one left (cool), one right (warm) — slowly drifting together.
**Typography:** Two lines, each with different emphasis. "logic." in monospace. "emotion." in italic display.
**Animation:** Left half of panel reveals first, then right half — like a mirror opening.

---

#### Panel 9 — The Invitation
**Label:** `CHAPTER 09 — LET'S BUILD`
**Year:** Now
**Headline:** Let's build something real.
**Body:** Whether it's a project, a collaboration, or just a conversation — I'm always open.
**CTA links:** Email / GitHub / LinkedIn (same as Contact section, styled for dark panel)
**Atmosphere:** Comes alive — blue glow pulses gently (CSS animation). Most active panel.
**Mandala art:** Mandala rotates slowly and continuously (unlike all other panels). Symbol of ongoing motion.
**Particles:** Particles drift toward center (invite / draw in). Feels welcoming.
**Typography:** CTA links use the grow-line hover from Contact.tsx.
**Animation:** Each link fades up with stagger. Mandala starts rotating on panel entry.

---

### 3.5 Inter-Panel Transitions

Transitions happen between panels as the scroll moves from one to the next:
- The horizontal scrub itself is the transition (no separate transition animations)
- Each panel's background glow fades out as scroll leaves it (opacity tied to scroll progress via ScrollTrigger)
- Mandala art from panel N partially bleeds into panel N+1 (slight overflow, clip-path masks this)
- No hard cuts — all motion is continuous

### 3.6 Shared Design Tokens for Panels

```
Panel width: 100vw
Panel height: 100vh
Foreground text: left-aligned, pl-16 (4rem padding)
Vertical centering: flex items-center
Chapter label: text-[#6b8cba], text-xs, tracking-widest, uppercase
Year: text-[#2563eb], font-bold, text-sm
Headline: Clash Display, font-bold, color #f0f4ff
Body: Inter, text-[#6b8cba], max-w-[480px], leading-relaxed
```

### 3.7 Accessibility & Performance Notes
- All particle canvases: `aria-hidden="true"`
- All mandala SVGs: `aria-hidden="true"` (decorative)
- Three.js renderer: pixel ratio capped at `Math.min(devicePixelRatio, 2)`
- All GSAP ScrollTriggers killed in useEffect cleanup
- All Three.js geometries, materials, renderers disposed in cleanup

---

## 4. Stage 3 — Projects + Vision Chapters (Planned)

Stage 3 applies the same horizontal cinematic scroll treatment to two more sections.

### 4.1 Projects Cinematic Panels

Each of the 3 projects gets its own full-viewport panel:

**Panel structure per project:**
- Background: project-specific atmospheric glow
- Midground: floating 3D tilt card (existing TiltCard component)
- Particle bg: project-specific color/density
- Mandala accent: top-right corner, small, project-themed
- Text: project title (huge), tag, description, status, mock link

**Project panels:**
1. **Moodscape** — `AI + Creative` — Purple/blue atmosphere. Organic particles. "A living mood journal."
2. **Voice Assistant** — `Python + AI` — Deep blue, high-energy particles. Iron Man energy. "Built from curiosity."
3. **Netflix Clone** — `HTML + CSS` — Red-tinted glow (Netflix red × blue palette blend). Grid particles.

### 4.2 Vision / Ambitions Cinematic Panels

3 vision panels replacing the current `Ambitions.tsx` grid:

1. **Build AI Systems** — Technical geometric art. Expanding circuit particles.
2. **Start Something** — Radiating mandala. Outward-burst particles.
3. **Create & Inspire** — Organic flowing art. Watercolor particles.

Each panel has a large background statement (very large, low opacity, like a watermark) behind the readable content.

---

## 5. Technical Rules & Constraints

These rules apply to all Phase 5 code without exception:

### React / Next.js
| Rule | Detail |
|------|--------|
| `'use client'` | Must be **line 1** of any file using browser APIs, GSAP, Three.js, or refs |
| Hooks order | Hooks must always be called in the same order — never inside `if` blocks |
| Hydration | `Math.random()`, `Math.sin()`, `Date.now()` in render → use `useState(mounted)` pattern |
| Cleanup | `return () => {}` inside `useEffect` must be **last** — always clean up timers, ScrollTriggers, Three.js |

### GSAP
| Rule | Detail |
|------|--------|
| Register plugin | `gsap.registerPlugin(ScrollTrigger)` — call once per file, top-level |
| `scrub: true` | Links animation 1:1 to scroll position |
| `anticipatePin: 1` | Always use with pinned horizontal sections — prevents jump |
| Kill on cleanup | `ScrollTrigger.getAll().forEach(t => t.kill())` in useEffect return |
| `quickTo` | Required for cursor animations. Never use `gsap.to` for cursor |
| `containerAnimation` | Required to link per-panel triggers to horizontal scroll tween |

### Three.js
| Rule | Detail |
|------|--------|
| Transparent bg | `alpha: true` in `WebGLRenderer` constructor |
| Pixel ratio | `Math.min(window.devicePixelRatio, 2)` — prevents performance issues on retina |
| 3D coordinates | `vector.unproject(camera)` for screen → 3D space conversion |
| needsUpdate | Set `geometry.attributes.position.needsUpdate = true` after modifying positions |
| Cleanup | Dispose geometry, material, renderer — every time, no exceptions |
| Positioning | Canvas: `position: absolute`, `pointer-events: none`, behind content |

### Tailwind v4
| Rule | Detail |
|------|--------|
| Import | `@import "tailwindcss"` must be **absolute first line** in `globals.css` |
| Spacing | `--spacing: 0.25rem` must be inside `@theme inline {}` |
| Font face | `@font-face` blocks go **after** `@import`, **before** `@theme` |
| No conflicts | Never combine `px-8` and `pl-16` on the same element |

---

## 6. File Structure

### Files Modified in Phase 5
```
app/
├── components/
│   ├── sections/
│   │   ├── About.tsx         ← FULL REPLACEMENT (Stage 2)
│   │   ├── Projects.tsx      ← Cinematic upgrade (Stage 3)
│   │   └── Ambitions.tsx     ← Cinematic upgrade (Stage 3)
│   └── ui/
│       ├── ParticleField.tsx ← Stage 1 ✅ (no changes needed)
│       ├── Mandala.tsx       ← Stage 1 ✅ (no changes needed)
│       └── MandalaShape.tsx  ← Stage 1 ✅ (no changes needed)
```

### Possible New Files (Stage 2)
```
app/
└── components/
    └── ui/
        ├── PanelMandala.tsx      ← Parameterized SVG mandala (accepts layerCount, style props)
        ├── PanelParticles.tsx    ← Lightweight CSS particle cloud (no Three.js overhead per-panel)
        └── HorizontalScroll.tsx  ← Reusable GSAP horizontal scroll wrapper (optional)
```

> **Note:** Whether to use separate `PanelMandala` and `PanelParticles` components or inline SVG/CSS per panel is a decision to make during Stage 2 implementation. Separate components = more reusable. Inline = faster to build but harder to maintain.

---

## 7. Implementation Order — Stage 2 Step-by-Step

Follow this exact sequence. Do not skip steps or build out of order.

### Step 1 — Strip About.tsx
- Remove the horizontal panel experiment (Panel 1/2/3 placeholders)
- Remove all commented-out old timeline code
- Start with a clean component shell: `'use client'`, imports, empty return

### Step 2 — Build the GSAP Horizontal Scroll Skeleton
- Create the section ref and container ref
- Implement the core `gsap.to(container, { x: -totalWidth, scrollTrigger: { pin, scrub, anticipatePin } })` in `useEffect`
- Add cleanup: `ScrollTrigger.getAll().forEach(t => t.kill())`
- Test: scroll should pin the section and move container horizontally — no content yet, just colored divs

### Step 3 — Build Panel 1 (Origin) — Full Detail
- Implement the full DOM structure for Panel 1
- Add atmospheric background glow (pure CSS radial gradient)
- Add placeholder for mandala art (empty div for now)
- Add text content (chapter label, year, headline, body)
- Add text entry animation (GSAP, triggered via `containerAnimation`)
- Do NOT move to Panel 2 until Panel 1 looks complete

### Step 4 — Build Panel 9 (Invitation) — Skip to Last
- Build the final panel before filling the middle
- This forces you to confirm the horizontal scroll works across full width
- Add CTA links (reuse Contact.tsx hover style)
- Confirm scroll reaches Panel 9 correctly

### Step 5 — Build Panels 2–8 in Order
- One panel per session
- Each panel: background → mandala art → particles → text → animation
- Order: 2 (Engineer) → 3 (Entrepreneur) → 4 (Artist) → 5 (Intersection) → 6 (First Build) → 7 (Vision) → 8 (Philosophy)

### Step 6 — Add SVG Mandala Art Per Panel
- Design each panel's mandala variation in `MandalaShape.tsx` or inline SVG
- Parameters to vary per panel: layer count, petal shape, stroke weight, opacity, rotation offset
- Animate on panel entry: use GSAP `stroke-dashoffset` for draw-on effect

### Step 7 — Add Particle Clusters Per Panel
- Decision point: Three.js canvas per panel (expensive) vs CSS div particles (performant)
- Recommended: CSS div particles for panels 1–8, Three.js only for Panel 7 (Vision — most dramatic)
- Each cluster: 20–50 divs, position absolute, random drift via CSS animation or GSAP

### Step 8 — Inter-Panel Polish
- Add opacity fade on panel exit (scroll-linked via ScrollTrigger)
- Confirm mandala art from adjacent panels does not clip unexpectedly
- Check scroll feel: scrub value (1 = 1 second lag, tune as needed)

### Step 9 — Mobile Fallback
- Horizontal scroll is desktop-only
- On mobile (< 768px): stack panels vertically, remove pin, standard scroll reveal
- Use `useEffect` + `window.innerWidth` check, or CSS media query to switch layout

### Step 10 — Final QA
- Test full scroll from Panel 1 → Panel 9 without jank
- Confirm all ScrollTriggers kill on unmount (navigate away and back)
- Confirm no hydration errors in console
- Confirm Three.js renderer disposed correctly (check memory in DevTools)
- Confirm custom cursor still works over panels (pointer-events-none on all background layers)

---

## Appendix — Current About.tsx State

As of April 2026, `About.tsx` has:
- Lines 1–87: Active code — GSAP horizontal scroll skeleton with 3 placeholder panels ("Panel 1", "Panel 2", "Panel 3"). This is the starting skeleton for Stage 2.
- Lines 88–282: Commented-out old vertical timeline code — the original 9-milestone scroll-draw timeline. This should be **deleted** in Step 1, not revived.

The horizontal scroll skeleton already works mechanically. Stage 2 starts by filling it with real content.
