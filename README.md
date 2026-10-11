# Diar Sazeh (دیار سازه) — Website

Static, RTL Persian landing site for **Diar Sazeh**, an LSF (light steel frame) building contractor in Sari / Mahdasht, Mazandaran.
Content and brand (black & gold, steel-frame imagery) are based on the company's Instagram: [@diyarsazeh.construction](https://www.instagram.com/diyarsazeh.construction/).

## Sections
Hero ("از زمین تا کلید") · Dream House festival (up to 15% off + installments) · What is LSF · Services · Build process · Facade styles · Projects (linked to Instagram reels) · FAQ · Cost-estimate form (pre-fills an SMS to 09353066900) · Contact.

## Run
No build step — open `index.html`, or serve the folder:

```sh
npx serve .   # or: python3 -m http.server
```

Deploy to any static host (GitHub Pages, Netlify, Vercel, an Iranian host such as ArvanCloud, etc.).

## Files
- `index.html` — markup, SEO meta, LocalBusiness JSON-LD
- `styles.css` — design tokens, layout, responsive rules
- `main.js` — mobile menu, scroll reveal, estimate form → SMS
- `assets/img/` — logo and post images taken from the Instagram account
