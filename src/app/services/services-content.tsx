"use client";

import Link from "next/link";
import { practiceAreas } from "@/data/practices";
import { useLang } from "@/lib/i18n";
import sectionStyles from "@/components/sections.module.css";
import styles from "./services.module.css";

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ServicesContent() {
  const { t, areaLabel } = useLang();
  const s = t.pages.services;

  return (
    <>
      <section className={sectionStyles.hero}>
        <div className="container">
          <div className={sectionStyles.heroInner}>
            <span className="eyebrow eyebrow--light">{s.heroEyebrow}</span>
            <h1 className={sectionStyles.heroTitle}>
              {s.heroTitlePre}
              <span className="accent">{s.heroTitleEm}</span>
            </h1>
            <p className={sectionStyles.heroLede}>{s.heroLede}</p>
            <div className={sectionStyles.heroActions}>
              <Link href="/contact" className="btn btn--primary">
                {t.nav.book}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ol className={styles.list}>
            {practiceAreas.map((area, i) => (
              <li key={area.slug}>
                <Link href={`/expertise/${area.slug}`} className={styles.row}>
                  <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
                  <div className={styles.rowMain}>
                    <h2 className={styles.rowTitle}>{areaLabel(area.slug, area.navLabel)}</h2>
                    <p className={styles.rowDesc}>{t.summaries[area.slug]}</p>
                  </div>
                  <span className={styles.rowGo} aria-hidden="true">
                    <ArrowRight />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
