"use client";

import Link from "next/link";
import Image from "next/image";
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

/*
 * Photo map: add entries here once images are in public/images/expertise/<slug>.jpg
 * Any slug not listed falls back to the SVG art below.
 */
const AREA_PHOTOS: Partial<Record<string, string>> = {
  // commercial:              "/images/expertise/commercial.jpg",
  // "family-law":           "/images/expertise/family-law.jpg",
  // "migration-law":        "/images/expertise/migration-law.jpg",
  // conveyancing:            "/images/expertise/conveyancing.jpg",
  // "property-law":         "/images/expertise/property-law.jpg",
  // "wills-estates":        "/images/expertise/wills-estates.jpg",
  // "criminal-law":         "/images/expertise/criminal-law.jpg",
  // "intellectual-property": "/images/expertise/intellectual-property.jpg",
  // "notary-public":        "/images/expertise/notary-public.jpg",
};

/* SVG fallback art (navy geometric) used when the photo isn't in place yet */
const SVG_PROPS = {
  viewBox: "0 0 400 240",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true as const,
  style: { width: "100%", height: "100%", display: "block" } as React.CSSProperties,
};

function CardArtFallback({ slug }: { slug: string }) {
  switch (slug) {
    case "commercial":
      return (
        <svg {...SVG_PROPS}>
          <rect width="400" height="240" fill="#0b1326" />
          <rect x="30" y="28" width="100" height="172" fill="#1f335a" />
          <rect x="30" y="28" width="100" height="78" fill="#2a4170" />
          <rect x="155" y="78" width="90" height="122" fill="#182a4b" />
          <rect x="275" y="108" width="95" height="92" fill="#13213d" />
          <rect x="0" y="208" width="400" height="32" fill="#13213d" />
        </svg>
      );
    case "family-law":
      return (
        <svg {...SVG_PROPS}>
          <rect width="400" height="240" fill="#13213d" />
          <circle cx="148" cy="132" r="98" fill="#1f335a" />
          <circle cx="262" cy="132" r="88" fill="#2a4170" opacity="0.9" />
          <circle cx="205" cy="76" r="58" fill="#375089" opacity="0.85" />
        </svg>
      );
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
    default:
      return (
        <svg {...SVG_PROPS}>
          <rect width="400" height="240" fill="#13213d" />
          <circle cx="200" cy="120" r="80" fill="#1f335a" />
          <circle cx="200" cy="120" r="52" fill="#2a4170" />
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
            {ordered.map((area, i) => {
              const photo = AREA_PHOTOS[area.slug];
              return (
                <Reveal key={area.slug} as="article" delay={i * 50} className={styles.card}>
                  <Link href={`/expertise/${area.slug}`} className={styles.cardLink}>
                    <div className={styles.cardPanel}>
                      {photo ? (
                        <Image
                          src={photo}
                          alt=""
                          fill
                          className={styles.cardPhoto}
                          sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 33vw"
                        />
                      ) : (
                        <CardArtFallback slug={area.slug} />
                      )}
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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
