"use client";

import Link from "next/link";
import { practiceAreas } from "@/data/practices";
import { useLang } from "@/lib/i18n";
import { PlaceholderText, PlaceholderImage } from "@/components/placeholder";
import sectionStyles from "@/components/sections.module.css";
import styles from "./about.module.css";

export function AboutContent() {
  const { t, areaLabel } = useLang();
  const a = t.pages.about;
  const tag = t.pages.placeholderTag;

  return (
    <>
      <section className={sectionStyles.hero}>
        <div className="container">
          <div className={sectionStyles.heroInner}>
            <span className="eyebrow eyebrow--light">{a.heroEyebrow}</span>
            <h1 className={sectionStyles.heroTitle}>
              <PlaceholderText light tag={tag}>
                {a.heroTitle}
              </PlaceholderText>
            </h1>
            <p className={sectionStyles.heroLede}>
              <PlaceholderText light tag={tag}>
                {a.heroLede}
              </PlaceholderText>
            </p>
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
          <div className={styles.storyGrid}>
            <div>
              <span className="eyebrow">{a.storyEyebrow}</span>
              <h2 style={{ fontSize: "var(--text-2xl)", margin: "1rem 0 1.2rem" }}>
                <PlaceholderText tag={tag}>{a.storyHeading}</PlaceholderText>
              </h2>
              <p className={styles.storyText}>
                <PlaceholderText tag={tag}>{a.storyBody}</PlaceholderText>
              </p>
            </div>
            <PlaceholderImage label={a.storyEyebrow} ratio="4 / 3" />
          </div>
        </div>
      </section>

      <section className={`section ${styles.teamBand}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{a.teamEyebrow}</span>
            <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
              <PlaceholderText tag={tag}>{a.teamHeading}</PlaceholderText>
            </h2>
            <p>{a.teamSub}</p>
          </div>
          <div className={styles.teamGrid}>
            {[1, 2, 3].map((n) => (
              <div key={n} className={styles.teamCard}>
                <PlaceholderImage label={`${a.teamEyebrow} ${n}`} ratio="1 / 1" />
                <div className={styles.teamBody}>
                  <h3 className={styles.teamName}>
                    <PlaceholderText tag={tag}>{a.teamHeading}</PlaceholderText>
                  </h3>
                  <p className={styles.teamRole}>{a.teamRole}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{a.whatEyebrow}</span>
            <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>{a.whatHeading}</h2>
            <p>{a.whatLede}</p>
          </div>
          <div className={sectionStyles.tagGrid} style={{ marginTop: "clamp(2rem,1rem + 3vw,3.5rem)" }}>
            {practiceAreas.map((area) => (
              <Link key={area.slug} href={`/expertise/${area.slug}`} className={sectionStyles.tagCard}>
                <h3 className={sectionStyles.tagCardTitle}>{areaLabel(area.slug, area.navLabel)}</h3>
                <p className={sectionStyles.tagCardBody}>{t.summaries[area.slug]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
