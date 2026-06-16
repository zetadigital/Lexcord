# CLAUDE.md — Lexcord Lawyers website

Operational handbook for any agent (Claude Code or otherwise) working in this repo.
A fresh session with **no preset prompt or skills** should be able to read this file and
continue the work to the same standard. Read it fully before making changes.

---

## 1. How to communicate & work

- **Reply to the user in Chinese (中文).** Be direct and concise — no filler, no
  unnecessary summaries, no repetition.
- **All artifacts (code, comments, docs, UI copy) are in proper English by default.**
  The site itself is bilingual EN/中文 — see §6.
- Keep diacritics correct in any non-English text you write (中文 etc.).
- Use a short todo list for multi-step work; act once you have enough to act, don't
  over-explain options.

### Git / commits (IMPORTANT)
- **Commit when work is a real unit** (new files, features, refactors, bug fixes, or when
  the user asks). **Never `git push` unless the user explicitly says so.**
- **Do NOT auto-commit pure visual/styling tweaks** (colour, opacity, size, spacing,
  filter, copy micro-adjustments). Apply the change, then stop and wait for the user's
  explicit go-ahead before committing. Visual iteration is back-and-forth; auto-commits
  create history churn. When in doubt, ask.
- Commit message format: `type: short description` (types: feat, fix, refactor, docs,
  test, chore, perf, ci) with a body when useful.
- **No attribution trailer** (no `Co-Authored-By`, no "Generated with…"). It's disabled.
- The default branch is `main`. The user reviews/pushes themselves.

### Before claiming done
- `npm run build` must pass. Verify visually (see §10) — don't assert success without
  evidence.

---

## 2. What this is

Marketing website for **Lexcord Lawyers**, a Melbourne-based Australian law firm.
Reference style: robinsongill.com.au and mertonlawyers.com.au (professional,
photography-led, People + Expertise + testimonials). Deployed as a **demo on Vercel**
(no form backend — the contact form is a client-side island that does not submit
anywhere real yet).

**Real firm details** (already wired into the site — reuse these constants, don't invent):
- Company: **Lexcord** / Lexcord Lawyers
- Address: **1508/530 Little Collins St, Melbourne VIC 3000**
- Lift directions: *"Take the lift to Level 14, then the opposite lift up to Level 15.
  Turn right as you exit and continue straight ahead."* (中文:电梯坐到 14 楼,对面电梯再上
  15 楼,出电梯后右转直走)
- Email: **info@lexcord.com.au** · Phone: **+61 3 7054 5135**

---

## 3. Stack & commands

- **Next.js 14.2 (App Router) + TypeScript**, fully static (SSG).
- **No UI framework / no Tailwind.** Hand-built CSS design system: global tokens in
  `src/app/globals.css` + CSS Modules per component/page.
- Fonts via `next/font/google`: **Fraunces** (display serif) + **Inter** (body).
- Package manager: **npm** (not pnpm).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — must pass before committing
npm run start    # serve the production build
npm run lint
```

If you hit a webpack "Cannot read properties of undefined (reading 'call')" in dev,
it's a stale cache: `rm -rf .next` and restart.

---

## 4. Repository map

```
src/
├── app/
│   ├── layout.tsx                 # root: fonts, LanguageProvider, SiteNav, SiteFooter, FloatingCta
│   ├── page.tsx / home.module.css # home (Banner / Why choose / testimonials / Ready)
│   ├── about/                     # About: Banner + Mission/Vision/Global/Sustainability/Well-being
│   ├── contact/                   # contact form (client) + page
│   ├── expertise/
│   │   ├── page.tsx               # Expertise index (simple list, no banner/numbers)
│   │   └── [slug]/page.tsx        # one route per practice area (SSG, data-driven)
│   ├── people/
│   │   ├── page.tsx               # People list (round avatars on #caccd3)
│   │   └── [slug]/page.tsx        # person detail
│   ├── legal/[slug]/              # privacy · terms · disclaimer · copyright
│   └── resources/                 # Insights index (placeholder content)
├── components/
│   ├── site-nav / site-footer     # header (utility bar + white nav) / footer (logo + 4 links)
│   ├── practice-sections.tsx      # block-based renderer for every expertise page (see §5)
│   ├── accordion.tsx              # reusable collapsible (why-choose / Q&A)
│   ├── language-toggle.tsx        # EN / 中文 switch
│   ├── placeholder.tsx            # PlaceholderText / PlaceholderImage (obvious placeholders)
│   ├── reveal.tsx                 # scroll-reveal wrapper (respects reduced-motion)
│   └── faq.tsx, floating-cta.tsx
├── data/
│   ├── types.ts                   # PracticeArea content model
│   ├── people.ts                  # team[] (see §7)
│   └── practices/                 # one EN file per area + index.ts; zh/ mirrors it
└── lib/
    ├── i18n.tsx                   # bilingual dictionary + LanguageProvider + useLang (see §6)
    └── accent.tsx                 # renderAccent() for {accent}…{/accent} markers
public/images/                     # brand/ (logos), office/ (photos), team/ (headshots)
```

---

## 5. Expertise pages are data-driven (read before touching them)

Every `/expertise/<slug>` page renders from a typed `PracticeArea` object via
`components/practice-sections.tsx`. **To change copy or structure, edit the data file —
not JSX.** Each area has an English file in `src/data/practices/<area>.ts` and a Chinese
mirror in `src/data/practices/zh/<area>.ts` (same shape, `…Zh` export). Both are
registered in `practices/index.ts` and `practices/zh/index.ts`.

The renderer is **block-based**. `PracticeArea.layout?: PracticeBlock[]` controls section
order; default is `["practice","news","experts","closing"]`. Blocks:

| block      | renders                                                            | data fields |
|------------|-------------------------------------------------------------------|-------------|
| (banner)   | always first: icon + kicker(`heroEyebrow`) + title + lede + CTAs   | `bannerTitle?` (else `navLabel`), `heroLede` |
| `intro`    | prose Introduction                                                | `introParagraphs[]` |
| `practice` | "Practice area" section: kicker `servicesEyebrow` + `servicesHeading` (+ `servicesIntro` on the right if set) then **cards** | `services[]`; `practiceNumbered` → numbered 3%-gap grid; `practiceText[]` → prose instead of cards |
| `why`      | "Why choose" accordion                                            | `whyChoose: {eyebrow, heading, sub?, items:[{q,a}]}` |
| `experts`  | "Your legal team" (area team, navy)                              | auto from `people.ts` by slug (see §7) |
| `news`     | "Related insights" placeholder cards                             | none (placeholders) |
| `qa`       | "Q&A" accordion                                                  | `faqAccordion:true`, `faqEyebrow`, `faqHeading`, `faqSub?`, `faqs[]` |
| `closing`  | Ending CTA                                                        | `closingKicker`, `closingTitle` (supports `{accent}`), `closingCta` |

Required-but-sometimes-unused fields still need values (set empty strings/arrays):
`processHeading`, `faqEyebrow/Heading/Intro`, `faqs`, `services`, `servicesIntro`.

**`{accent}…{/accent}`** markers in `heroTitle`/`closingTitle`/`bannerTitle` mark the
words rendered in the steel-blue accent colour; `renderAccent()` parses them.

**Adding a practice area** = create `practices/<slug>.ts` + `practices/zh/<slug>.ts`,
register both in the two index files, and add a one-line summary to: `practiceSummaries`
(in `practices/index.ts`), `t.summaries` (EN+ZH in `lib/i18n.tsx`), and `t.areaZh` (the
Chinese display name, in `lib/i18n.tsx`). It then **auto-appears** in the nav Expertise
dropdown, the footer/expertise index, and gets its own SSG route. Add a matching icon
case in `AreaIcon` inside `practice-sections.tsx` if the slug is new.

The 9 current slugs (in order): `property-law`, `conveyancing`, `commercial`,
`family-law`, `wills-estates`, `intellectual-property`, `criminal-law`, `notary-public`,
`migration-law`.

---

## 6. Bilingual (EN / 中文) — everything must be in both

- All UI copy lives in `src/lib/i18n.tsx` as `DICT.en` / `DICT.zh` (same `Dictionary`
  shape). Components read it via `useLang()` → `{ lang, setLang, toggle, t, areaLabel }`.
- Default language is **`en`**; the choice persists to `localStorage["lexcord-lang"]` and
  sets `<html lang>`.
- Content pages are **client components** that pick the language at runtime (thin server
  `page.tsx` wrappers keep `metadata` / `generateStaticParams`).
- `areaLabel(slug, enLabel)` returns the Chinese practice name in zh mode (from
  `t.areaZh`).
- **Never ship English-only or Chinese-only copy.** Whenever you add a string, add both
  `DICT.en` and `DICT.zh` entries, and for practice data add the `zh/` mirror. There is
  **no** "translation pending" placeholder — translate it properly.

---

## 7. People / team

`src/data/people.ts` exports `team: TeamMember[]`. Fields: `slug, name, role, roleZh,
specialty?, specialtyZh?, photo (string|null), areas: string[], email, phone,
qualifications[], qualificationsZh[], bio[], bioZh[]`.

- `areas` holds practice-area **slugs**; that's what makes a member appear in an
  Expertise page's "Your legal team" block (and the area tags on their profile).
- `photo: null` → a circular initials avatar is shown (real headshots pending). Put real
  headshots in `public/images/team/<slug>.png` and set `photo`.
- Current team (photos pending except Elijah): Katherine Ho (Principal, Family Law →
  `family-law`), Elijah Feng (Director & Solicitor → `migration-law`/`property-law`/
  `conveyancing`/`commercial`, has photo + full bio), Justin Ho (IP →
  `intellectual-property`), Chang Qi (`commercial`), Taylor Zhang, Carol Ma.
- Per-person phone numbers were not supplied — all currently use the firm phone. Don't
  invent personal numbers.

---

## 8. Design system & visual rules

Brand direction: **composed, modern legal** — navy authority, cool blue-grey support,
disciplined. Tokens live in `src/app/globals.css`.

- **Palette (strict):** primary navy **`#13213d`**, secondary blue-grey **`#caccd3`**,
  plus white and black. **No gold/yellow — it is not a brand colour.** Do not reintroduce
  it.
- **Token gotcha:** for historical reasons the CSS variables are still *named*
  `--navy-*`, `--gold-*`, `--amber`, `--gold-soft`, but they've been **remapped to the
  navy/blue-grey palette** (e.g. `--gold-400` = `#caccd3`, `--amber` = `#13213d`). So
  using `var(--gold-600)` is safe (it's steel-blue, not gold). When adding raw colours,
  use the navy/`--mist`(#caccd3) families — never literal gold/amber hex or
  `rgba(217,156,43,…)`.
- Primary button = solid navy on white text. Eyebrows = small uppercase, steel-blue on
  light / `#caccd3` on dark.
- Fonts: headings = Fraunces (display serif), body = Inter. Max two families.
- **Motion:** animate only compositor-friendly props (transform/opacity/clip-path);
  respect `prefers-reduced-motion` (the `.reveal`, marquee, and accordion already do).
- **Semantic HTML + a11y:** real landmarks (`header/main/footer/nav/section`), labelled
  controls, visible focus. Keep responsive (test ~320 / 768 / 1024 / 1440); no overflow.
- **Anti-template:** intentional hierarchy and rhythm, not uniform card grids. Pick a
  direction and commit; don't ship generic AI-looking UI. (This distils the user's global
  "frontend-design" guidance for sessions that don't have that skill loaded.)

---

## 9. Content & asset rules

- **No fabrication.** Real body copy comes from firm-supplied material. Where content is
  missing, use **obvious placeholders** — `PlaceholderText` / `PlaceholderImage` from
  `components/placeholder.tsx`, or a clearly-pending string. Never pass invented facts off
  as real (no fake stats, fake client testimonials with real-looking names beyond clearly
  illustrative initials, fake credentials, etc.). The home testimonials are intentionally
  illustrative placeholders to be replaced.
- **`template_resource/` holds raw client assets and is git-ignored — never commit it.**
  When you use an asset from it, copy a processed/optimised version into `public/images/`
  (brand / office / team) and reference that. The user moves the raw folder out at the
  end.
- Brand logos in `public/images/brand/`: `lexcord-navy.png` (for the white nav bar),
  `lexcord-white.png` (for the dark footer), `lexcord-mark.png`.

---

## 10. Verifying changes

1. `npm run build` — must pass (currently ~28 routes).
2. Visual check with headless Chrome screenshots, e.g.:
   ```bash
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
     --headless --disable-gpu --hide-scrollbars --window-size=1440,2400 \
     --screenshot=/tmp/shot.png "http://localhost:3000/<path>"
   ```
   Check key pages at desktop + mobile widths and both languages.
   **Gotcha:** the home Banner uses `min-height: 64vh`; in a very tall headless window
   `vh` resolves against the window height and the banner looks inflated. Verify banner
   sizing at a realistic viewport (e.g. `--window-size=1440,900`); it's correct in real
   browsers.

---

## 11. Deployment

- Vercel, framework pinned via `vercel.json` (`{"framework":"nextjs"}`). Static export.
- Demo only — **no environment variables required**, no form backend. If the contact form
  needs to actually send, that's future work the user will scope.

---

## 12. Content still pending from the user (don't invent — leave placeholders)

- Real headshots for all team members except Elijah; per-person phone numbers.
- Real News & Insights / Resources articles (currently placeholder cards).
- Real client testimonials (home "What do they say" — currently illustrative).
- Any further team members or About imagery the user supplies later.
