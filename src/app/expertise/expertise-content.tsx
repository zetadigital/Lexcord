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

function AreaIcon({ slug }: { slug: string }) {
  const common = {
    viewBox: "0 0 40 40",
    width: 40,
    height: 40,
    fill: "none",
    "aria-hidden": true as const,
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (slug) {
    case "property-law":
      return (
        <svg {...common}>
          <path d="M7 19L20 9l13 10" />
          <path d="M11 17v14h18V17" />
          <rect x="16" y="22" width="4" height="6" rx="0.5" />
          <rect x="22" y="22" width="4" height="5" rx="0.5" />
        </svg>
      );
    case "conveyancing":
      return (
        <svg {...common}>
          <circle cx="13" cy="17" r="5" />
          <path d="M13 12V8M13 22v4M8 17H4M22 17h4" />
          <path d="M17 13l10 10M21 13l6-6" strokeWidth="1.4" />
          <circle cx="31" cy="9" r="3" />
        </svg>
      );
    case "commercial":
      return (
        <svg {...common}>
          <rect x="7" y="14" width="26" height="18" rx="2" />
          <path d="M15 14v-3a3 3 0 013-3h4a3 3 0 013 3v3" />
          <path d="M7 23h26" />
          <path d="M17 23v3M23 23v3" />
        </svg>
      );
    case "family-law":
      return (
        <svg {...common}>
          <circle cx="13" cy="11" r="4" />
          <circle cx="27" cy="11" r="3.5" />
          <path d="M5 32c0-5 3.5-8 8-8h4" />
          <path d="M26 24c3 0 7 2.5 7 5" />
          <circle cx="20" cy="24" r="3" />
        </svg>
      );
    case "wills-estates":
      return (
        <svg {...common}>
          <path d="M13 6h14l6 7v21H13z" />
          <path d="M27 6v7h6" />
          <path d="M18 20h10M18 25h10M18 30h6" />
        </svg>
      );
    case "intellectual-property":
      return (
        <svg {...common}>
          <path d="M20 7a9 9 0 015.5 16c-1.2.9-1.5 1.8-1.5 3v1H16v-1c0-1.2-.3-2.1-1.5-3A9 9 0 0120 7z" />
          <path d="M17 31h6M18 34h4" />
          <path d="M20 11v4M16 15l2.5 2.5M24 15l-2.5 2.5" strokeWidth="1.4" />
        </svg>
      );
    case "criminal-law":
      return (
        <svg {...common}>
          <path d="M20 6l11 4.5v8c0 8-5.5 13-11 16-5.5-3-11-8-11-16v-8L20 6z" />
          <path d="M15 20l3.5 3.5L26 16" />
        </svg>
      );
    case "notary-public":
      return (
        <svg {...common}>
          <circle cx="20" cy="14" r="7" />
          <path d="M20 21v5" />
          <path d="M13 30h14" />
          <path d="M16 12l3 3 5-5" />
          <path d="M9 34h22" strokeWidth="1.4" />
        </svg>
      );
    case "migration-law":
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="12" />
          <path d="M8 20h24M20 8c3.5 3.5 3.5 20 0 24M20 8c-3.5 3.5-3.5 20 0 24" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="12" />
        </svg>
      );
  }
}

/* Display order for the card grid */
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

/* One office photo per practice area */
const AREA_PHOTOS: Record<string, string> = {
  commercial:             "/images/office/office-1.jpg",
  "family-law":          "/images/office/office-2.jpg",
  "migration-law":       "/images/office/office-3.jpg",
  conveyancing:           "/images/office/office-4.jpg",
  "property-law":        "/images/office/office-5.jpg",
  "wills-estates":       "/images/office/office-6.jpg",
  "criminal-law":        "/images/office/office-7.jpg",
  "intellectual-property": "/images/office/office-8.jpg",
  "notary-public":       "/images/office/office-9.jpg",
};

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
          <p className={styles.heroLede}>{s.heroLede}</p>
        </div>
      </section>

      {/* ── Card grid ── */}
      <section className={styles.grid}>
        <div className="container">
          <div className={styles.cards}>
            {ordered.map((area, i) => (
              <Reveal key={area.slug} as="article" delay={i * 50} className={styles.card}>
                <Link href={`/expertise/${area.slug}`} className={styles.cardLink}>
                  {/* Photo panel */}
                  <div className={styles.cardPanel}>
                    <Image
                      src={AREA_PHOTOS[area.slug] ?? "/images/office/office-1.jpg"}
                      alt=""
                      fill
                      className={styles.cardPhoto}
                      sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 33vw"
                    />
                    <div className={styles.cardOverlay} />
                    <span className={styles.cardIcon}>
                      <AreaIcon slug={area.slug} />
                    </span>
                  </div>

                  {/* Text body */}
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
