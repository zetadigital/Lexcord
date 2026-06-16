"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import sectionStyles from "@/components/sections.module.css";
import styles from "./about.module.css";

export function AboutContent() {
  const { t } = useLang();
  const a = t.pages.about;

  return (
    <>
      {/* Banner */}
      <section className={sectionStyles.hero}>
        <div className="container">
          <div className={sectionStyles.heroInner}>
            <span className="eyebrow eyebrow--light">{a.heroEyebrow}</span>
            <h1 className={sectionStyles.heroTitle}>{a.heroTitle}</h1>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Global capability / Sustainability / Well-being */}
      <section className="section">
        <div className="container">
          <div className={styles.sections}>
            {a.sections.map((sec, i) => (
              <Reveal key={sec.title} as="article" className={styles.row}>
                <div className={styles.rowLabel}>
                  <span className={styles.rowIndex}>{String(i + 1).padStart(2, "0")}</span>
                  <h2 className={styles.rowTitle}>{sec.title}</h2>
                </div>
                <div className={styles.rowBody}>
                  {sec.paragraphs.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className={sectionStyles.closing}>
        <div className="container">
          <div className={sectionStyles.closingInner}>
            <span className="eyebrow eyebrow--light" style={{ justifyContent: "center" }}>
              {t.nav.firm}
            </span>
            <h2 className={sectionStyles.closingTitle}>{t.pages.home.readyTitle}</h2>
            <div className={sectionStyles.closingActions}>
              <Link href="/contact" className="btn btn--primary">
                {t.nav.book}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
