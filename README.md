# Glen's Bakehouse

Website for Glen's Bakehouse, Bengaluru — built around the bakery's hand-drawn
wall art. The whole site follows an "ink on paper" doodle theme: cream paper
background, ink-line illustrations, wobbly hand-sketched borders and the actual
wall mural used as the hero artwork.

Built with [Next.js](https://nextjs.org) (App Router) and
[Tailwind CSS v4](https://tailwindcss.com). Fully static — no backend needed.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route      | What's there                                            |
| ---------- | ------------------------------------------------------- |
| `/`        | Hero with the wall mural, signature bakes, story teaser |
| `/menu`    | Full menu by category with prices                       |
| `/about`   | The Glen's story and values                             |
| `/gallery` | A tour of the wall mural, scene by scene                |
| `/contact` | Address, hours, phone, Instagram, maps link             |

## Editing content

- **Contact details, hours, socials** → `lib/site.ts` (the address, phone and
  email in there are placeholders — replace with the real ones)
- **Menu items & prices** → `lib/menu-data.ts` (flag items with
  `signature: true` to feature them on the home page)
- **Wall art** → `public/images/doodle-wall.png`
- **Real photos** → drop into `public/images/gallery/` and swap the tiles in
  `app/gallery/page.tsx`

## Theme

Design tokens live in `app/globals.css` (`@theme` block): paper, ink, caramel
and butter colours plus the three fonts — Playfair Display (display), Caveat
(handwritten) and Lora (body). Hand-drawn UI helpers: `.sketch-border`,
`.sketch-btn`, `.squiggle-underline`. The doodle icon set is in
`components/DoodleIcons.tsx`.
