# Lexcord Lawyers

Marketing website for Lexcord, a Melbourne-based Australian law firm. Built with **Next.js 14 (App Router) + TypeScript**, a hand-built CSS design system (no UI framework), and `next/font` for typography. The site is fully bilingual (EN / 中文).

> **Working in this repo?** Read **[CLAUDE.md](./CLAUDE.md)** first — it's the full handbook (working conventions, architecture, design system, bilingual content model, content/asset rules). `AGENTS.md` points there too.

Visual direction: **composed, modern legal** — brand navy (`#13213d`) authority with a cool blue-grey (`#caccd3`) support colour, plus white and black (no decorative gold). Refined Fraunces serif display paired with Inter for body.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static / SSG)
npm run start    # serve the production build
```

## Architecture

```
src/
├── app/
│   ├── layout.tsx              # root layout, fonts, nav + footer
│   ├── page.tsx                # home
│   ├── home.module.css
│   ├── about/                  # About: Mission / Vision / Global / Sustainability / Well-being
│   ├── contact/                # contact form (client island) + page
│   ├── people/                 # People list + [slug] detail
│   ├── legal/[slug]/           # privacy · terms · disclaimer · copyright
│   └── expertise/[slug]/       # data-driven practice-area pages (SSG)
├── components/                 # SiteNav, SiteFooter, PracticeSections, Accordion, Reveal …
├── data/
│   ├── types.ts                # content model
│   ├── people.ts               # team
│   └── practices/              # one file per practice area + index (zh/ mirrors it)
└── lib/
    ├── i18n.tsx                # bilingual dictionary + LanguageProvider + useLang
    └── accent.tsx              # {accent} headline-highlight helper
```

Every practice-area page renders from typed data in `src/data/practices/` (English) with a Chinese mirror in `src/data/practices/zh/`. To edit copy or section order, edit the data file — no JSX changes needed. See CLAUDE.md §5 for the block model.

## Practice areas

Property Law · Conveyancing · Commercial · Family Law · Wills & Estates · Intellectual Property · Criminal Law · Notary Public · Migration Law

## Content status

Body copy is sourced from firm-supplied material; missing content uses **obvious placeholders** (never fabricated). Pending real content: team headshots (except Elijah Feng) and per-person phone numbers, Resources/Insights articles, and client testimonials. Raw client assets live in `template_resource/` (git-ignored); processed copies are committed under `public/images/`.
