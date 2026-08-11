# my-profile

Professional CV and portfolio site for **Dinh Van Tien** — Game, Mobile and Fullstack Engineer.

Static Next.js site: 12 documented projects, categorised skill inventory, print-to-PDF CV export.

## Stack

- **Next.js 15** (App Router, fully static prerender)
- **TypeScript** strict
- **Tailwind CSS v4** — CSS-first design tokens via `@theme`, no config file
- **next/font** — self-hosted Inter + JetBrains Mono, zero layout shift
- No animation, icon or UI library: scroll reveal is an `IntersectionObserver`, icons are inline SVG

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run lint         # ESLint
npm run build        # production build
npm start            # serve the production build
```

## Editing your CV content

**All copy lives in `src/content/`.** No component edits are needed to update the CV.

| File | Contains |
| --- | --- |
| `src/content/profile.ts` | Name, roles, tagline, about paragraphs, stats, **contact links**, education, languages |
| `src/content/skills.ts` | Skill groups (`tier: "core"` renders with accent emphasis) |
| `src/content/projects/` | Project entries, split by era |
| `src/content/platforms.ts` | Platforms shipped |
| `src/content/navigation.ts` | Section ids used by the nav, scroll-spy and footer |

### Placeholders you should fill in

The source CV (`cv-source/`) contains no contact details, education or language levels, so
these render as visible amber `TODO` notes rather than invented data:

1. `contactLinks` in `src/content/profile.ts` — add real values, add an `href`, and delete
   `isPlaceholder: true` to turn each card into a live link.
2. `education` in `src/content/profile.ts` — replace the entry and set `isPlaceholder: false`.
3. `languages` in `src/content/profile.ts` — confirm English level, add your JLPT level.

The `TODO` notes disappear from the printed CV automatically, but they are visible on the
live site until filled in.

## Project structure

```
src/
├── app/              # layout, page, globals.css, OG image, sitemap, robots
├── components/
│   ├── layout/       # header (scroll-spy nav), footer
│   ├── sections/     # one file per page section
│   ├── experience/   # timeline entry + expandable detail panel
│   └── ui/           # shared primitives (icon, reveal, tags, tiles, section)
├── content/          # all site copy as typed data
└── lib/              # site config / metadata helpers
```

## Design tokens

Defined once in `src/app/globals.css` under `@theme`. Token names avoid Tailwind utility
collisions — `canvas`/`fg` rather than `base`, because `text-base` is a font-size utility.

Because Tailwind v4 utilities compile to `var(--color-*)`, the print stylesheet re-points the
same tokens to paper values, flipping every surface and text colour in one place.

## Download CV

The **Download CV** button calls `window.print()`. The print stylesheet converts the page into
a light-background paper CV, expands every collapsed project panel, and hides navigation and
TODO notes — so "Save as PDF" produces a complete document with no separate file to maintain.

## Deployment

Deployed on Vercel. Pushes to `main` deploy automatically.

## Notes on CV data

- The source CV states "3+ years", but its own timeline runs from 2022/03, giving 4+ years.
  The site says 4+; change `yearsOfExperience` and the stats in `profile.ts` to revert.
- The CV claims 15+ projects and documents 12 in detail; the stat reflects 15+ and the
  timeline shows the 12.
- Overlapping project dates from the source CV are preserved as written.
