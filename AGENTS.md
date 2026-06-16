# AGENTS.md

This project's full agent handbook lives in **[CLAUDE.md](./CLAUDE.md)** — read it before
making any change. It covers the working conventions, architecture, design system, the
data-driven Expertise pages, the bilingual (EN/中文) content model, and the content/asset
rules.

Quick essentials (full detail in CLAUDE.md):

- **Skills:** before any UI/design work, invoke the **`frontend-design`** skill (Claude
  Code: `Skill` tool). If it isn't installed, tell the user to install it (`find-skills` /
  their ECC set; normally at `~/.claude/skills/frontend-design`) and meanwhile follow the
  inlined design principles in CLAUDE.md §8. Full procedure in CLAUDE.md §0.
- **Stack:** Next.js 14 App Router + TypeScript, static (SSG), hand-built CSS (no
  Tailwind). Package manager: **npm**. `npm run dev` / `npm run build`.
- **Communicate with the user in Chinese; write all code/docs/UI copy in English.**
  The site itself is bilingual — every string needs EN **and** 中文 (see CLAUDE.md §6).
- **Git:** commit real units of work; **never push unless asked**; do not auto-commit
  pure visual tweaks; no attribution trailer.
- **Design:** primary navy `#13213d`, secondary blue-grey `#caccd3`, white/black. **No
  gold/yellow.** (CSS vars are still named `--gold-*`/`--amber` but remapped to navy —
  see CLAUDE.md §8.)
- **Expertise pages are data-driven** from `src/data/practices/*` via
  `components/practice-sections.tsx` — edit data, not JSX (CLAUDE.md §5).
- **No fabrication:** use obvious placeholders for missing content. **Never commit
  `template_resource/`** (raw client assets) — copy processed versions into
  `public/images/` (CLAUDE.md §9).
- Verify with `npm run build` + headless-Chrome screenshots before claiming done.
