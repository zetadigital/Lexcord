"use client";

import Link from "next/link";
import { practiceAreas } from "@/data/practices";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import styles from "./expertise.module.css";

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Geometric SVG art per practice area ─── */
const SVG_PROPS = {
  viewBox: "0 0 400 240",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true as const,
  style: { width: "100%", height: "100%", display: "block" } as React.CSSProperties,
};

function CardArt({ slug }: { slug: string }) {
  switch (slug) {
    /* Office skyline — 3 buildings, window grid */
    case "commercial":
      return (
        <svg {...SVG_PROPS}>
          <rect width="400" height="240" fill="#0b1326" />
          <rect x="30" y="28" width="100" height="172" fill="#1f335a" />
          <rect x="30" y="28" width="100" height="78" fill="#2a4170" />
          <rect x="44" y="48" width="20" height="26" fill="#375089" opacity="0.7" />
          <rect x="76" y="48" width="20" height="26" fill="#375089" opacity="0.7" />
          <rect x="44" y="88" width="20" height="26" fill="#375089" opacity="0.5" />
          <rect x="76" y="88" width="20" height="26" fill="#375089" opacity="0.5" />
          <rect x="44" y="128" width="20" height="26" fill="#375089" opacity="0.3" />
          <rect x="76" y="128" width="20" height="26" fill="#375089" opacity="0.3" />
          <rect x="155" y="78" width="90" height="122" fill="#182a4b" />
          <rect x="155" y="78" width="90" height="52" fill="#1f335a" />
          <rect x="170" y="96" width="18" height="22" fill="#3c4a68" opacity="0.8" />
          <rect x="202" y="96" width="18" height="22" fill="#3c4a68" opacity="0.8" />
          <rect x="170" y="132" width="18" height="22" fill="#3c4a68" opacity="0.5" />
          <rect x="202" y="132" width="18" height="22" fill="#3c4a68" opacity="0.5" />
          <rect x="275" y="108" width="95" height="92" fill="#13213d" />
          <rect x="275" y="108" width="95" height="42" fill="#182a4b" />
          <rect x="290" y="124" width="16" height="18" fill="#3c4a68" opacity="0.6" />
          <rect x="320" y="124" width="16" height="18" fill="#3c4a68" opacity="0.6" />
          <rect x="0" y="208" width="400" height="32" fill="#13213d" />
          <rect x="0" y="205" width="400" height="3" fill="#caccd3" opacity="0.2" />
        </svg>
      );

    /* Three overlapping circles — family unity */
    case "family-law":
      return (
        <svg {...SVG_PROPS}>
          <rect width="400" height="240" fill="#13213d" />
          <circle cx="148" cy="132" r="98" fill="#1f335a" />
          <circle cx="262" cy="132" r="88" fill="#2a4170" opacity="0.9" />
          <circle cx="205" cy="76" r="58" fill="#375089" opacity="0.85" />
          <ellipse cx="205" cy="118" rx="64" ry="46" fill="#3c4a68" opacity="0.3" />
          <circle cx="205" cy="118" r="22" fill="#caccd3" opacity="0.08" />
        </svg>
      );

    /* Globe with latitude/longitude + journey arc */
    case "migration-law":
      return (
        <svg {...SVG_PROPS}>
          <rect width="400" height="240" fill="#0b1326" />
          <circle cx="200" cy="120" r="108" fill="#182a4b" />
          <ellipse cx="200" cy="120" rx="108" ry="36" fill="none" stroke="#2a4170" strokeWidth="1.5" />
          <ellipse cx="200" cy="84" rx="82" ry="26" fill="none" stroke="#2a4170" strokeWidth="1" />
          <ellipse cx="200" cy="156" rx="82" ry="26" fill="none" stroke="#2a4170" strokeWidth="1" />
          <line x1="200" y1="12" x2="200" y2="228" stroke="#1f335a" strokeWidth="2" />
          <line x1="92" y1="120" x2="308" y2="120" stroke="#1f335a" strokeWidth="1.5" />
          <path d="M96 178 Q200 58 318 98" fill="none" stroke="#caccd3" strokeWidth="2" strokeDasharray="7 5" opacity="0.55" />
          <circle cx="96" cy="178" r="6" fill="#caccd3" opacity="0.5" />
          <circle cx="318" cy="98" r="9" fill="#caccd3" opacity="0.75" />
        </svg>
      );

    /* Abstract key + transfer arrow */
    case "conveyancing":
      return (
        <svg {...SVG_PROPS}>
          <rect width="400" height="240" fill="#182a4b" />
          <circle cx="142" cy="110" r="70" fill="#1f335a" />
          <circle cx="142" cy="110" r="50" fill="#2a4170" />
          <circle cx="142" cy="110" r="32" fill="#0b1326" />
          <rect x="196" y="104" width="110" height="12" rx="6" fill="#2a4170" />
          <rect x="256" y="88" width="14" height="28" rx="4" fill="#1f335a" />
          <rect x="278" y="88" width="14" height="20" rx="4" fill="#1f335a" />
          <polygon points="306,100 330,110 306,120" fill="#caccd3" opacity="0.55" />
          <rect x="52" y="102" width="20" height="16" rx="8" fill="#0b1326" />
          <circle cx="62" cy="110" r="5" fill="#3c4a68" opacity="0.8" />
        </svg>
      );

    /* Blueprint floor plan */
    case "property-law":
      return (
        <svg {...SVG_PROPS}>
          <rect width="400" height="240" fill="#0b1326" />
          <line x1="40" y1="0" x2="40" y2="240" stroke="#182a4b" strokeWidth="1" />
          <line x1="80" y1="0" x2="80" y2="240" stroke="#182a4b" strokeWidth="1" />
          <line x1="120" y1="0" x2="120" y2="240" stroke="#182a4b" strokeWidth="1" />
          <line x1="160" y1="0" x2="160" y2="240" stroke="#182a4b" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="240" stroke="#182a4b" strokeWidth="1" />
          <line x1="240" y1="0" x2="240" y2="240" stroke="#182a4b" strokeWidth="1" />
          <line x1="280" y1="0" x2="280" y2="240" stroke="#182a4b" strokeWidth="1" />
          <line x1="320" y1="0" x2="320" y2="240" stroke="#182a4b" strokeWidth="1" />
          <line x1="360" y1="0" x2="360" y2="240" stroke="#182a4b" strokeWidth="1" />
          <line x1="0" y1="40" x2="400" y2="40" stroke="#182a4b" strokeWidth="1" />
          <line x1="0" y1="80" x2="400" y2="80" stroke="#182a4b" strokeWidth="1" />
          <line x1="0" y1="120" x2="400" y2="120" stroke="#182a4b" strokeWidth="1" />
          <line x1="0" y1="160" x2="400" y2="160" stroke="#182a4b" strokeWidth="1" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="#182a4b" strokeWidth="1" />
          <rect x="58" y="48" width="134" height="104" fill="#1f335a" stroke="#3c4a68" strokeWidth="2" />
          <rect x="58" y="162" width="134" height="56" fill="#182a4b" stroke="#2a4170" strokeWidth="2" />
          <rect x="204" y="48" width="134" height="66" fill="#2a4170" stroke="#375089" strokeWidth="2" />
          <rect x="204" y="124" width="134" height="94" fill="#13213d" stroke="#1f335a" strokeWidth="2" />
          <path d="M58 128 Q83 128 83 153" fill="none" stroke="#caccd3" strokeWidth="1.5" opacity="0.45" />
          <path d="M204 83 Q204 108 229 108" fill="none" stroke="#caccd3" strokeWidth="1.5" opacity="0.45" />
          <line x1="292" y1="214" x2="372" y2="214" stroke="#caccd3" strokeWidth="1.5" opacity="0.35" />
          <line x1="292" y1="208" x2="292" y2="220" stroke="#caccd3" strokeWidth="1.5" opacity="0.35" />
          <line x1="372" y1="208" x2="372" y2="220" stroke="#caccd3" strokeWidth="1.5" opacity="0.35" />
        </svg>
      );

    /* Stacked document layers */
    case "wills-estates":
      return (
        <svg {...SVG_PROPS}>
          <rect width="400" height="240" fill="#13213d" />
          <g transform="rotate(-8,205,115)">
            <rect x="118" y="38" width="186" height="148" rx="4" fill="#182a4b" />
          </g>
          <g transform="rotate(-3,205,115)">
            <rect x="108" y="46" width="186" height="148" rx="4" fill="#1f335a" />
          </g>
          <rect x="98" y="54" width="204" height="158" rx="4" fill="#2a4170" />
          <polygon points="278,54 302,54 278,78" fill="#182a4b" />
          <line x1="118" y1="92" x2="278" y2="92" stroke="#caccd3" strokeWidth="1.5" opacity="0.35" />
          <line x1="118" y1="112" x2="278" y2="112" stroke="#caccd3" strokeWidth="1.5" opacity="0.3" />
          <line x1="118" y1="132" x2="258" y2="132" stroke="#caccd3" strokeWidth="1.5" opacity="0.3" />
          <line x1="118" y1="152" x2="278" y2="152" stroke="#caccd3" strokeWidth="1.5" opacity="0.2" />
          <line x1="118" y1="172" x2="218" y2="172" stroke="#caccd3" strokeWidth="1.5" opacity="0.2" />
          <line x1="118" y1="198" x2="244" y2="198" stroke="#375089" strokeWidth="1" opacity="0.6" />
          <path d="M118 198 Q138 191 153 198 Q173 205 195 198" fill="none" stroke="#caccd3" strokeWidth="1.5" opacity="0.55" />
        </svg>
      );

    /* Concentric shield */
    case "criminal-law":
      return (
        <svg {...SVG_PROPS}>
          <rect width="400" height="240" fill="#0b1326" />
          <path d="M200 18 L325 72 L325 154 L200 224 L75 154 L75 72 Z" fill="#182a4b" />
          <path d="M200 44 L300 88 L300 152 L200 206 L100 152 L100 88 Z" fill="#1f335a" />
          <path d="M200 70 L275 106 L275 150 L200 188 L125 150 L125 106 Z" fill="#2a4170" />
          <path d="M200 96 L248 118 L248 150 L200 170 L152 150 L152 118 Z" fill="#375089" />
          <path d="M174 134 L192 152 L228 114" fill="none" stroke="#caccd3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.88" />
        </svg>
      );

    /* Lightbulb with radiating rings */
    case "intellectual-property":
      return (
        <svg {...SVG_PROPS}>
          <rect width="400" height="240" fill="#13213d" />
          <circle cx="200" cy="98" r="115" fill="none" stroke="#182a4b" strokeWidth="14" />
          <circle cx="200" cy="98" r="96" fill="none" stroke="#1f335a" strokeWidth="10" />
          <circle cx="200" cy="98" r="78" fill="#1f335a" />
          <circle cx="200" cy="98" r="58" fill="#2a4170" />
          <circle cx="200" cy="98" r="38" fill="#375089" />
          <circle cx="200" cy="98" r="20" fill="#3c4a68" />
          <rect x="179" y="168" width="42" height="11" rx="2" fill="#1f335a" />
          <rect x="182" y="179" width="36" height="11" rx="2" fill="#182a4b" />
          <rect x="186" y="190" width="28" height="9" rx="2" fill="#13213d" />
          <path d="M182 140 Q178 154 174 168" fill="none" stroke="#2a4170" strokeWidth="3" />
          <path d="M218 140 Q222 154 226 168" fill="none" stroke="#2a4170" strokeWidth="3" />
          <circle cx="181" cy="80" r="10" fill="#caccd3" opacity="0.12" />
        </svg>
      );

    /* Notary seal — concentric rings with radial edge */
    case "notary-public":
      return (
        <svg {...SVG_PROPS}>
          <rect width="400" height="240" fill="#0b1326" />
          <circle cx="200" cy="120" r="106" fill="#182a4b" />
          <circle cx="200" cy="120" r="106" fill="none" stroke="#2a4170" strokeWidth="10" strokeDasharray="8 6" />
          <circle cx="200" cy="120" r="90" fill="none" stroke="#1f335a" strokeWidth="5" />
          <circle cx="200" cy="120" r="80" fill="#13213d" />
          <circle cx="200" cy="120" r="66" fill="#1f335a" />
          <circle cx="200" cy="120" r="50" fill="#2a4170" />
          <circle cx="200" cy="120" r="34" fill="#375089" />
          <line x1="200" y1="93" x2="200" y2="147" stroke="#caccd3" strokeWidth="3" opacity="0.72" />
          <line x1="173" y1="120" x2="227" y2="120" stroke="#caccd3" strokeWidth="3" opacity="0.72" />
          <line x1="181" y1="101" x2="219" y2="139" stroke="#caccd3" strokeWidth="1.5" opacity="0.38" />
          <line x1="219" y1="101" x2="181" y2="139" stroke="#caccd3" strokeWidth="1.5" opacity="0.38" />
        </svg>
      );

    default:
      return (
        <svg {...SVG_PROPS}>
          <rect width="400" height="240" fill="#13213d" />
          <circle cx="200" cy="120" r="80" fill="#1f335a" />
        </svg>
      );
  }
}

/* Display order */
const SLUG_ORDER = [
  "commercial",
  "family-law",
  "migration-law",
  "conveyancing",
  "property-law",
  "wills-estates",
  "criminal-law",
  "intellectual-property",
  "notary-public",
];

export function ExpertiseContent() {
  const { t, areaLabel } = useLang();
  const s = t.pages.services;

  const ordered = SLUG_ORDER
    .map((slug) => practiceAreas.find((a) => a.slug === slug))
    .filter(Boolean) as typeof practiceAreas;

  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.heroDisplay}>EXPERTISE</p>
          <h1 className={styles.heroTitle}>
            {s.heroTitlePre}
            <em className={styles.heroEm}>{s.heroTitleEm}</em>
          </h1>
        </div>
      </section>

      {/* ── Card grid ── */}
      <section className={styles.grid}>
        <div className="container">
          <div className={styles.cards}>
            {ordered.map((area, i) => (
              <Reveal key={area.slug} as="article" delay={i * 50} className={styles.card}>
                <Link href={`/expertise/${area.slug}`} className={styles.cardLink}>
                  <div className={styles.cardPanel}>
                    <CardArt slug={area.slug} />
                  </div>
                  <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>
                      {areaLabel(area.slug, area.navLabel)}
                    </h2>
                    <p className={styles.cardDesc}>{t.summaries[area.slug]}</p>
                    <span className={styles.cardCta}>
                      {s.exploreLabel} <ArrowRight />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
