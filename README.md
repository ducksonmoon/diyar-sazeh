# Diar Sazeh (دیار سازه) — Website

Persian (RTL) marketing site for **Diar Sazeh**, an LSF (light steel frame) building contractor in Sari / Mahdasht, Mazandaran.
Content comes from the company's Instagram ([@diyarsazeh.construction](https://www.instagram.com/diyarsazeh.construction/)); see `CONTENT.md`.

## Stack
- [Astro](https://astro.build) — static output, zero JS by default, one component per section.
- [Motion](https://motion.dev) — hero assembly sequence, scroll-linked process timeline, FAQ/menu disclosure (~55 KB shared chunk, loaded only by components that animate).

## Commands
```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview
```
**GitHub Pages:** `.github/workflows/deploy.yml` builds and deploys on every push → https://ducksonmoon.github.io/diyar-sazeh/
(Repo Settings → Pages → Source must be **GitHub Actions**.)

**Other hosts / custom domain:** `SITE=https://example.com BASE=/ npm run build` and upload `dist/`.
Public assets are referenced through `asset()` in `src/lib.ts` so they follow the base path.

## Design system ("galvanized")
| Token | Value | Use |
|---|---|---|
| zinc | `#E3E5E1` | page background (galvanized sheet) |
| zinc-deep | `#CDD1CC` | festival band, rules |
| graphite | `#1F2428` | text, dark sections |
| steel | `#5F676D` | secondary text |
| gold | `#C6963A` | brand; primary actions and lit windows only |
| marking red | `#C2412D` | dimension lines in the hero drawing |

- Type: **Noto Kufi Arabic** (headings, geometric/structural, correct Persian letterforms) + **Readex Pro** (body).
- Recurring device: the *stud rail* — a C-stud web with oval service holes (`.rail`).
- Motion rules live in `.claude/skills/motion-design/SKILL.md`. One orchestrated moment (hero: زمین → سازه → کلید); everything else answers the visitor. `prefers-reduced-motion` is respected.

## Structure
```
src/
  layouts/Base.astro        <head>, fonts, JSON-LD
  pages/index.astro         section order
  components/               Header, Hero, Festival, WhyLsf, Addition, Services,
                            Process, Styles, Projects, Faq, Estimate, Footer
  styles/global.css         tokens, buttons, rail
public/img/                 logo and photos from Instagram posts/stories
```
The estimate form opens the visitor's SMS app with a pre-filled request to 09353066900 (no backend).
