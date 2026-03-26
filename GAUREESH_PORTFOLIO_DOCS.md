# Gaureesh Portfolio — Complete Project Documentation
> Last updated: March 2026 | For AI continuity across sessions

---

## 1. WHO IS GAUREESH

**Full name:** Gaureesh Keshari  
**Location:** Koraon, Prayagraj, Uttar Pradesh, India  
**Education:** B.Tech CSE, 2nd year (United College of Engineering and Research)  
**Age:** 20 (born 24 June 2005)  
**GitHub:** github.com/gaureesh007  
**Email:** gaureeshkeshari006@gmail.com  

### Identity (3 overlapping roles)
- **Engineer** — logical, structured, innovative
- **Entrepreneur** — ambitious, visionary, problem solver  
- **Artist** — creative, expressive, aesthetic (draws, sings, reads about power/strategy)

### Brand Statement (LOCKED)
> *"Engineer. Entrepreneur. Artist. I build with logic — and design with emotion. I create products that speak to minds and move hearts."*

### Personality
- Fast learner, deep focus
- Leadership mindset, emotionally intelligent
- Hobbies: drawing, singing, reading about power/strategy
- Loves challenges that make him uncomfortable (sees discomfort as learning)
- Bad habits held him back — he knows it, owns it, fixing it
- Philosophy: products should not just function, they should be FELT

---

## 2. WORKING RELATIONSHIP

**Claude's role:** Project instructor, teacher, planner, mentor  
**Gaureesh's role:** Builds everything himself with full understanding  
**Core rule:** Never give code without explaining every line first  
**Approach:** Learn → understand → build → iterate  
**Deadline:** Portfolio complete before 3rd year starts (~3-4 months from start)

---

## 3. TECH STACK

| Technology | Purpose | Status |
|-----------|---------|--------|
| Next.js (App Router) | Framework | ✅ Installed |
| TypeScript | Language | ✅ Active |
| Tailwind CSS v4 | Styling | ✅ Configured |
| GSAP + ScrollTrigger | Animations | ✅ Installed |
| Framer Motion | Micro-interactions | ✅ Installed |
| Three.js | 3D elements | ✅ Installed |
| Lenis | Smooth scroll | ✅ Installed |
| Vercel | Deployment | 🔜 Phase 6 |

**Deployment:** Vercel  
**Repository:** github.com/gaureesh007/gaureesh-portfolio  
**Local path:** E:\My Portfolio\gaureesh-portfolio  
**Dev server:** `npm run dev` → localhost:3000

---

## 4. DESIGN SYSTEM

### Colors (globals.css — inside @theme inline)
```css
--color-bg-primary: #020409      /* almost black, hint of blue */
--color-bg-surface: #080d14      /* cards, sections */
--color-bg-elevated: #0d1526     /* elevated elements */
--color-border: #1a2942          /* subtle borders */
--color-border-bright: #1e3a5f  
--color-accent: #2563eb          /* primary blue */
--color-accent-bright: #3b82f6  /* hover states */
--color-accent-glow: #1d4ed8    /* glow effects */
--color-accent-subtle: #1e3a5f  
--color-text-primary: #f0f4ff   /* white with blue tint */
--color-text-secondary: #6b8cba /* muted blue-gray */
--color-text-muted: #354f73     /* very subtle */
--font-display: 'Clash Display', sans-serif
--font-body: 'Inter', sans-serif
--spacing: 0.25rem              /* REQUIRED for Tailwind spacing classes */
```

### Typography
- **Display font:** Clash Display (installed manually from fontshare.com into `public/fonts/`)
  - ClashDisplay-Medium.woff2 (weight 500)
  - ClashDisplay-Semibold.woff2 (weight 600)  
  - ClashDisplay-Bold.woff2 (weight 700)
- **Body font:** Inter (via Next.js Google Fonts in layout.tsx)

### Critical CSS Rules (globals.css)
```css
/* @import MUST be absolute first line — nothing above it ever */
@import "tailwindcss";

/* @font-face blocks come AFTER @import */
/* @theme inline comes AFTER @font-face */
/* --spacing: 0.25rem GOES INSIDE @theme inline */
```

---

## 5. FOLDER STRUCTURE

```
gaureesh-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          ← design system, fonts, tokens
│   │   ├── layout.tsx           ← frame: CustomCursor, Mandala, SmoothScroll, Navbar
│   │   └── page.tsx             ← imports all sections in order
│   └── components/
│       ├── sections/
│       │   ├── Hero.tsx         ← full hero with particles, animations, typewriter
│       │   ├── About.tsx        ← timeline with scroll-drawn line
│       │   ├── Projects.tsx     ← tilt cards with stagger
│       │   ├── Skills.tsx       ← tag cascade animation
│       │   ├── Ambitions.tsx    ← vision section
│       │   └── Contact.tsx      ← links with grow-line hover
│       └── ui/
│           ├── Navbar.tsx       ← frosted glass, scroll behavior
│           ├── SmoothScroll.tsx ← Lenis wrapper
│           ├── ScrollReveal.tsx ← reusable GSAP scroll reveal
│           ├── CustomCursor.tsx ← blue dot + ring cursor
│           ├── ParticleField.tsx← Three.js star particles
│           ├── Mandala.tsx      ← scroll-driven rotating mandala wrapper
│           └── MandalaShape.tsx ← SVG mandala drawn in code
├── public/
│   └── fonts/                   ← Clash Display woff2 files
├── content.md                   ← full story and brand content
└── CONTENT.md                   ← project documentation (this file)
```

---

## 6. PAGE STRUCTURE (page.tsx)

```tsx
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Ambitions from '@/components/sections/Ambitions'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Ambitions />
      <Contact />
    </main>
  )
}
```

---

## 7. LAYOUT (layout.tsx)

```tsx
// Global wrappers — order matters
<body>
  <CustomCursor />    ← always on top (z-9999)
  <Mandala />         ← fixed background element
  <SmoothScroll>      ← Lenis smooth scroll wrapper
    <Navbar />        ← fixed navbar
    {children}        ← page content
  </SmoothScroll>
</body>
```

---

## 8. COMPONENTS — WHAT EACH DOES

### Navbar.tsx
- Fixed, frosted glass (`backdrop-blur-md`)
- `scrolled` state — changes opacity/padding after 50px scroll
- Transparent at top → solid at scroll
- Border appears on scroll, hidden at top
- No border-bottom in default state (removed — looked odd)
- Logo: "GK" in Clash Display

### SmoothScroll.tsx
- Lenis instance with `duration: 1.2`
- Custom easing: `Math.min(1, 1.001 - Math.pow(2, -10 * t))`
- Connected to requestAnimationFrame loop
- Wraps entire app in layout.tsx

### ScrollReveal.tsx
- Reusable component wrapping any content
- GSAP fromTo: `opacity 0, y 40` → `opacity 1, y 0`
- ScrollTrigger: `start: 'top 85%'`
- Used on About timeline items

### CustomCursor.tsx
- Hides default cursor (`cursor: none` on body)
- Blue dot (12px) — follows mouse instantly
- Blue ring (30px) — follows with `duration: 0.45` lag
- Uses `gsap.quickTo` for performance
- Scales ring 2.5x on hover over `a`, `button`, `.hoverable`
- Cleanup on unmount

### ParticleField.tsx
- Three.js — 700 blue particles in 3D space
- Mouse repulsion using raycasting for accurate 3D coordinates
- Breathing wave effect with Math.sin
- Slow rotation (x and y axis)
- Cleanup: disposes geometry, material, renderer
- Positioned absolute inside Hero section

### Mandala.tsx + MandalaShape.tsx
- Fixed position, right side, half off-screen
- Only rotates when scrolled (no continuous rotation)
- Scroll down = clockwise, scroll up = counter-clockwise
- Speed proportional to scroll velocity
- CSS mask: radial gradient fade at edges
- MandalaShape generates SVG mathematically — 14 layers of circles, petals, dots, arches
- Hydration fix: `useState(mounted)` pattern to prevent server/client mismatch

### Hero.tsx
- `'use client'` — uses GSAP, browser APIs
- Load animation: GSAP timeline, `delay: 0.4`
  - Tag slides in from left
  - Name rises from below (duration: 1)
  - Role fades up
  - Statement fades up
  - Buttons fade up
  - All with `-=0.3` overlap offsets
- Typewriter: Engineer → Entrepreneur → Artist
  - Types at `85 + Math.random() * 40` ms per char (human variation)
  - Deletes at 50ms per char
  - Pauses 2000ms after complete word
  - Blinking cursor `|` at 500ms interval
- Parallax: content moves `y: -100` as hero scrolls out
- Background: two radial blue glows
- ParticleField component inside section

### About.tsx
- Timeline with 9 milestones (2005–2026)
- ScrollReveal on each timeline item
- Timeline line draws itself on scroll (height: 0% → 100%)
  - Needs `.timeline-container` class on wrapper div
  - scrub: true for scroll-linked drawing

### Projects.tsx
- 3 projects: Moodscape, Voice Assistant, Netflix Clone
- TiltCard component — 3D tilt on mouse move
  - `getBoundingClientRect()` for accurate mouse position
  - `rotateX/Y` up to 8 degrees
  - `transformPerspective: 1000`
  - Springs back on mouse leave
- `.hoverable` class → custom cursor expands
- Stagger animation: cards slide in from left, `stagger: 0.2`

### Skills.tsx
- 4 categories: Languages, Frameworks & Tools, Design, Currently Learning
- Heading scroll reveal
- Tags cascade: `stagger: 0.05`, `scale: 0.9 → 1`
- ScrollTrigger start: `top 65%`

### Ambitions.tsx
- 3 vision cards: Build AI Systems, Start Something, Create & Inspire
- Heading sweeps up
- Cards stagger in: `stagger: 0.2`

### Contact.tsx
- Links with grow-line hover (w-8 → w-16 on hover)
- Real email: gaureeshkeshari006@gmail.com
- GitHub: github.com/gaureesh007
- LinkedIn: (URL to be added)
- Footer: © 2025 Gaureesh Keshari | Built with logic — designed with emotion.

---

## 9. KEY TECHNICAL LEARNINGS

### Tailwind v4 Rules
- `@import "tailwindcss"` must be absolute first line in globals.css
- `--spacing: 0.25rem` goes INSIDE `@theme inline`
- `@font-face` goes AFTER `@import`, BEFORE `@theme`
- Conflicting classes: never use `px-8` AND `pl-16` together

### React/Next.js Rules
- `'use client'` must be line 1 of any file using browser APIs
- Hooks must always be called in same order — never put `if` between hooks
- `return () => {}` inside useEffect is cleanup — must be LAST
- Hydration errors from Math.random/sin/cos → fix with `useState(mounted)` pattern
- `@` alias = `src/` folder — always use `@/components/...` not relative paths

### GSAP Rules
- `gsap.registerPlugin(ScrollTrigger)` — call once per file, at top level
- `scrub: true` — links animation to scroll position 1:1
- `scrub: 2` — adds 2 second lag for smoother feel
- `timeScale` — controls speed of a tween (negative = reverse)
- `gsap.quickTo` — optimized for rapid continuous updates (cursor)
- `+=` in rotation — adds to current value cumulatively
- `-=0.3` in timeline — overlaps previous animation by 0.3s

### Three.js Rules
- Always dispose geometry, material, renderer on cleanup
- `alpha: true` in WebGLRenderer = transparent background
- `vector.unproject(camera)` = correct screen-to-3D conversion
- `geometry.attributes.position.needsUpdate = true` after modifying positions
- `Math.min(window.devicePixelRatio, 2)` for pixel ratio — prevents performance issues

### CSS Rules
- `pointer-events-none` — element is visual only, doesn't block clicks
- `backdrop-blur-md` — frosted glass effect
- CSS mask with radial-gradient — fades element at edges
- `transform-style: preserve-3d` — required for 3D child elements
- `position: fixed` — stays in place while page scrolls

---

## 10. PROJECTS DATA

```tsx
const projects = [
  {
    title: "Moodscape",
    tag: "AI + Creative",
    description: "A living visual mood journal. Type how you feel — the world transforms around your words.",
    status: "In Progress",
  },
  {
    title: "Voice Assistant", 
    tag: "Python + AI",
    description: "Voice-controlled assistant built from scratch. Inspired by Iron Man. Pure logic, pure curiosity.",
    status: "Completed",
  },
  {
    title: "Netflix Clone",
    tag: "HTML + CSS", 
    description: "A pixel-perfect Netflix UI clone. Built to study world-class design systems.",
    status: "Completed",
  },
]
```

---

## 11. SKILLS DATA

```tsx
const skills = {
  "Languages": ["Python", "JavaScript", "C++", "C", "Java", "HTML", "CSS"],
  "Frameworks & Tools": ["React", "Next.js", "Tailwind CSS", "Git", "GitHub"],
  "Design": ["Graphic Design", "Digital Art", "UI Design", "Figma"],
  "Currently Learning": ["GSAP", "Three.js", "Framer Motion", "Node.js"],
}
```

---

## 12. TIMELINE DATA (About section)

| Year | Title | Key moment |
|------|-------|-----------|
| 2005 | Born in a storm | Rainy Friday, Prayagraj |
| 2009 | The lonely ground | Walking alone in school |
| 2012 | The builder | Wooden block cities |
| 2016 | The spark | RC car failed, project stolen, won greeting card prize |
| 2018 | The artist awakens | Drawing, singing, dancing, writing |
| 2020 | The Iron Man era | Lockdown, first laptop, HTML/CSS/Python, lost to HDD crash |
| 2024 | A new beginning | JEE 88.7%, college starts |
| 2025 | Building for real | SIH, hackathons, Innovate Bharat |
| 2026 | This moment | Building portfolio with Claude |

---

## 13. PHASE PROGRESS

| Phase | Description | Status |
|-------|-------------|--------|
| Phase 1 | Foundation & Setup | ✅ Complete |
| Phase 2 | Structure & Layout | ✅ Complete |
| Phase 3 | Smooth Scroll & Storytelling | ✅ Complete |
| Phase 4 | Framer Motion & Micro-interactions | ✅ Complete |
| Phase 5 | 3D & Visual Depth | 🔄 In Progress |
| Phase 6 | Polish & Launch | 🔜 Pending |

### Phase 5 Remaining Stages

**Stage 1 — Hero visual depth** (partially done)
- Particle field ✅ | Mandala ✅ | Fine-tuning 🔄

**Stage 2 — Parallax depth** (in progress)
- Hero parallax ✅ (y: -100)
- Timeline line draws on scroll 🔄 (fixing)
- Particle/mandala scroll speeds 🔜

**Stage 3 — Section entrance depth** 🔜
- About heading scale entrance
- Timeline items with translateZ
- Skills tags burst from 3D space

**Stage 4 — 3D geometric object** 🔜
- Wireframe icosahedron or torus near name
- Mouse parallax reactive

**Stage 5 — Cinematic scroll transitions** 🔜
- Marquee between sections
- Scroll progress indicator

---

## 14. MOODSCAPE (Future project after portfolio)

**Concept:** AI-powered living visual mood journal  
**How it works:** User types how they feel → entire page transforms with generative visuals, color, ambient sound  
**Tech:** Claude API, Three.js, Web Audio API, Next.js  
**Type:** Option B — Mood Journal (daily entries, visual diary over time)  
**Status:** Building after portfolio is complete

---

## 15. GAUREESH'S FULL STORY (About section content)

*Born 24 June 2005, on a rainy stormy Friday in Prayagraj. Some people arrive quietly. I arrived in a storm.*

**The Builder:** Before knowing what engineering was, built cities out of wooden blocks every holiday. Created stories, then destroyed everything and started again. Not frustration — curiosity. Only child — learned to be own company, entertainment, teacher.

**The Lonely Ground:** School ground full of children. Walking alone. Not sad. Just observing. Made him deeply comfortable in his own mind.

**The Family:** Mother — strongest person he knows. Multiple operations. Made his lunch, supported dreams, never made him feel like a burden. Artist, writer, intelligent woman. Father — ran small grocery shop, never compromised on education. Every fee paid. Quietly. Consistently.

**The Spark (2016):** Wanted RC car. Couldn't afford ₹1000. Built generator instead. Both failed. Project displayed at exhibition — got stolen. Won first prize in greeting card competition — didn't even believe it.

**The Iron Man Era (2020):** Lockdown. Read theory of relativity, Doppler effect. Watched Iron Man — something cracked open. Built missile launcher and Iron Man hand piece from syringes. First laptop. HTML, CSS, Python. Built Iron Man websites, Netflix clone, voice assistant. PC formatted when friend upgraded to Windows 11. HDD corrupted changing to SSD. Everything gone. The learning stayed.

**The Artist (2018+):** Drawing, singing, dancing, writing. Takes him somewhere out of this world. Most faded with B.Tech exhaustion. Drawing remains. These aren't hobbies — how he stays human.

**The Gap:** Had curiosity, vision, ideas. Also had bad habits. JEE 88.7%. Close. Not enough. Honest regret: not failures — self-sabotage. Knowing what held you back is the beginning.

**Now:** 19 years old. B.Tech CSE. Already knows 4 languages when batchmates know zero. SIH, hackathons, Innovate Bharat. Made Claude his teacher. Building portfolio from scratch, understanding every line.

**What's Next:** Obsession comes and goes. But one clear thing: wants to learn, build, create an identity earned — not inherited. Wants to build AI that feels human. Prove technology and emotion are not opposites. Calm, curious, unafraid of failure, always moving forward. The storm he was born into — still in it. But now knows how to build in the rain. ⚡

---

## 16. CURRENT ISSUES / IN PROGRESS

1. **Timeline line animation** — needs `.timeline-container` class on wrapper div in About.tsx. Line should draw downward as user scrolls through timeline.

2. **Particle field** — mouse repulsion works but could be smoother. Deferred for later polish.

3. **Mandala size** — currently right: -400px, width: 1000px. May need adjustment.

4. **Photo placeholder** — "Your Photo Here" box in hero. Needs real photo or styled illustration.

5. **LinkedIn URL** — not added yet in Contact.tsx.

---

## 17. GIT WORKFLOW

```bash
git add .
git commit -m "descriptive message"
git push
```

Branch: main  
Remote: origin → github.com/gaureesh007/gaureesh-portfolio

---

## 18. HOW TO CONTINUE IN A NEW SESSION

Tell the AI:
1. Read this entire document first
2. We are building Gaureesh's portfolio — see section 1 for identity
3. Current phase: Phase 5, Stage 2 (parallax depth)
4. Current issue: timeline line in About.tsx needs `.timeline-container` class fix
5. Never give code without explaining it line by line
6. Gaureesh builds everything himself with full understanding
7. Be brutally honest about design decisions

- Hero parallax ✅ (y: -100, scrub: true)
- Mandala scroll rotation ✅ (clockwise down, counter-clockwise up)
- Timeline line draw on scroll 🔄 (in progress — needs .timeline-container fix)

1. Timeline line — add className="relative timeline-container" to 
   the wrapper div in About.tsx around the vertical line and items.
   Animation: gsap.to lineRef, height 0%→100%, scrub:true,
   trigger: .timeline-container

   ParticleField.tsx — updated repulsion:
- Uses vector.unproject(camera) for accurate 3D mouse coordinates  
- Lerp-based smooth repulsion (not velocity/physics)
- returnStrength: 0.012, repelRadius: 1.4, damping: 0.92

Mandala.tsx — updated rotation:
- No continuous rotation — only scroll driven
- gsap += rotation based on scroll velocity direction
- Clockwise on scroll down, counter-clockwise on scroll up