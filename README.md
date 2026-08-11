# my-profile

Professional CV and portfolio site for **Dinh Van Tien** — Game, Mobile and Fullstack Engineer.

Static Next.js site in **English, Vietnamese and Japanese**: 12 documented projects, categorised
skill inventory, generated project artwork, print-to-PDF CV export.

## Stack

- **Next.js 15** (App Router, fully static prerender)
- **TypeScript** strict
- **Tailwind CSS v4** — CSS-first design tokens via `@theme`, no config file
- **next/font** — self-hosted Inter + JetBrains Mono + Noto Sans JP, zero layout shift
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

## Languages

Three locales, each prerendered as its own static page: **`/en`, `/vi`, `/ja`**. `/` redirects
to `/en` (307, so moving to Accept-Language negotiation later is not blocked by caches). The
header switcher is plain `<a>` links, so every language is a real crawlable URL.

Content is split so nothing is duplicated three times:

| Location | Holds | Translated? |
| --- | --- | --- |
| `src/content/` | ids, dates, team sizes, durations, technology names, image paths | No — identical in every language |
| `src/i18n/<locale>/` | all prose: UI labels, profile, project text, group labels | Yes |

To edit copy, open `src/i18n/<locale>/`:

| File | Contains |
| --- | --- |
| `ui.ts` | Nav, hero, section headings, labels, placeholder notes |
| `profile.ts` | Roles, positioning, about paragraphs, stats, fact table, education, languages |
| `projects.ts` | Per-project name, role, summary, responsibilities, engineering notes |
| `taxonomy.ts` | Skill group labels, platform descriptions |

`Dictionary` in `src/i18n/types.ts` is the contract — add a field there and TypeScript fails
the build until all three locales define it, so a locale can never silently fall behind.

Durations use templates (`durationSingle`, `durationBuildMaintain`) because the unit and the
build/maintain word order differ per language.

Japanese uses Noto Sans JP via `next/font`, listed after Inter so Latin text still renders in
Inter while CJK glyphs stay consistent across platforms.

## Project images

Each project renders a visual twice: a 56px thumbnail in the timeline row and a wide cover in
the expanded panel.

**No real screenshots are included.** These are real client products, so rather than
fabricating screenshots — which would misrepresent the software to a reader — `ProjectCover`
draws **generated abstract artwork**: a gradient plus a category motif, seeded deterministically
from the project id (FNV-1a hash, no `Math.random`, so it is stable across locales, reloads and
builds and cannot cause hydration mismatches). Hue family follows the category: game = violet,
mobile = blue, web = cyan, backend = teal.

To use a real screenshot, put the file in `public/` and set `imageSrc` on the project in
`src/content/projects/`:

```ts
{ id: "hotel-pms-web", imageSrc: "/projects/hotel-pms.png", /* … */ }
```

`ProjectCover` then renders that image and skips the generated artwork.

## Placeholders you should fill in

The source CV (`cv-source/`) contains no contact details, education or language levels, so
these render as visible amber `TODO` notes rather than invented data:

1. `contactLinks` in `src/content/contact-links.ts` — add real values and an `href`, then
   delete `isPlaceholder: true` to turn each card into a live link.
2. `educationItems` in `src/i18n/<locale>/profile.ts` — replace the entry in all three
   locales, then set `hasEducationPlaceholder = false` in `src/content/contact-links.ts`.
3. `languages` in `src/i18n/<locale>/profile.ts` — confirm your English level and add your
   JLPT level, then set `hasLanguagePlaceholder = false`.

The `TODO` notes disappear from the printed CV automatically, but they are visible on the
live site until filled in.

## Project structure

```
src/
├── app/
│   ├── [locale]/     # layout (html lang), page, OG image — prerendered per locale
│   ├── globals.css   # entry: imports design-tokens.css + print-styles.css
│   ├── sitemap.ts    # all three locales with hreflang alternates
│   └── robots.ts
├── components/
│   ├── layout/       # header (scroll-spy nav), footer, language switcher
│   ├── sections/     # one file per page section
│   ├── experience/   # timeline entry, detail panel, generated cover art
│   └── ui/           # shared primitives (icon, reveal, tags, tiles, section)
├── content/          # language-neutral data (projects, skills, platforms, person)
├── i18n/             # en/ vi/ ja/ dictionaries + Dictionary contract
└── lib/              # site config / metadata helpers
```

## Design tokens

Defined once in `src/app/design-tokens.css` under `@theme`. Token names avoid Tailwind utility
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
  The site says 4+; edit `positioning`, `stats` and `facts` in each
  `src/i18n/<locale>/profile.ts` to revert.
- The CV claims 15+ projects and documents 12 in detail; the stat reflects 15+ and the
  timeline shows the 12.
- Overlapping project dates from the source CV are preserved as written.
