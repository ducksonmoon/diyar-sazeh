---
name: motion-design
description: Motion and animation rules for the Diar Sazeh site (Astro + Motion). Use when adding or changing any animation, transition, scroll effect, or interactive feedback on the site.
---

# Motion design — Diar Sazeh

Library: [`motion`](https://motion.dev) (`animate`, `scroll`, `inView`, `stagger`). Import it only inside the
component `<script>` that needs it so Astro ships it per-island; never add a second animation library.

## The one orchestrated moment
The hero drawing assembles itself on load, in three phases that mirror the company tagline:

| Phase | Label | What moves |
|-------|-------|------------|
| 1 | زمین | ground line and slab draw (stroke-dashoffset) |
| 2 | سازه | studs rise from the bottom track (scaleY, staggered), then trusses drop in |
| 3 | کلید | window openings warm up (gold fill), stage label lands on «کلید» |

Total ≤ 3.5 s. Nothing else on the page animates without the user asking for it.

## Allowed motion elsewhere (user-driven only)
- **Scroll-linked progress**: the process timeline line fills with `scroll()` bound to the section. It answers
  the visitor's scrolling, so it is feedback, not decoration.
- **Disclosure**: FAQ answers and the mobile menu animate height/opacity when opened, to show what changed.
- **Pointer feedback**: buttons get a 2px press (`translateY`) — no hover lifts on cards or images.

## Do not
- Fade-and-slide-up every section on scroll.
- Parallax backgrounds, looping ambient motion, or animated gradients.
- Animate layout properties (width/height/top) except FAQ height; prefer transform/opacity.

## Easing and timing
- Ease: `[0.22, 1, 0.36, 1]` (out-quint-like) for entrances; `"easeInOut"` for disclosures.
- Durations: 0.18 s press, 0.3 s disclosure, 0.5–0.9 s per hero phase.

## Accessibility
- Always check `matchMedia("(prefers-reduced-motion: reduce)")`. When it matches, jump straight to final
  state (`el.style` set directly) — content must never depend on an animation finishing.
- Initial hidden states are applied by JS (class `js-motion` on `<html>`), so no-JS visitors see everything.
