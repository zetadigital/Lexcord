"use client";

import Link from "next/link";
import { practiceAreas } from "@/data/practices";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { PlaceholderText, PlaceholderImage } from "@/components/placeholder";
import styles from "./home.module.css";

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhyIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true">
        <path d="M16 5v22M9 27h14M6 11h20M16 6l-7 5M16 6l7 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 11l-3 7a3 3 0 006 0l-3-7zM26 11l-3 7a3 3 0 006 0l-3-7z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.7" />
        <path d="M21 11l-3.5 6.5L11 21l3.5-6.5L21 11z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true">
      <path d="M16 4l10 4v7c0 6.5-4.3 10.7-10 13-5.7-2.3-10-6.5-10-13V8l10-4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M11.5 16l3 3 6-6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePage() {
  const { t, areaLabel, lang } = useLang();
  const h = t.pages.home;
  const stats = [
    { num: "7", label: h.statsAreas },
    { num: lang === "zh" ? "全澳" : "All", label: h.statsStates },
    { num: lang === "zh" ? "固定费" : "Fixed-fee", label: h.statsFixed },
    { num: "PEXA", label: h.statsPexa },
  ];

  return (
    <>
      {/* Hero */}
      <section className={`${styles.hero} ${styles.heroGrain}`}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroGrid}>
              <div className={styles.heroLeft}>
                <span className={`eyebrow eyebrow--light ${styles.heroEyebrow}`}>
                  {h.heroEyebrow}
                </span>
                <h1 className={`${styles.heroTitle} ${styles.heroFade}`}>
                  <PlaceholderText light tag={t.pages.placeholderTag}>
                    {h.heroTitle}
                  </PlaceholderText>
                </h1>
                <p className={`${styles.heroLede} ${styles.heroFade} ${styles.heroFade2}`}>
                  <PlaceholderText light tag={t.pages.placeholderTag}>
                    {h.heroLede}
                  </PlaceholderText>
                </p>
                <div className={`${styles.heroActions} ${styles.heroFade} ${styles.heroFade3}`}>
                  <Link href="/contact" className="btn btn--primary">
                    {t.nav.book} <ArrowRight />
                  </Link>
                  <a href="#expertise" className="btn btn--ghost-light">
                    {h.explore}
                  </a>
                </div>
              </div>
              <div className={`${styles.heroMedia} ${styles.heroFade} ${styles.heroFade2}`}>
                <PlaceholderImage label={h.firmHeading} light ratio="4 / 5" />
              </div>
            </div>

            <div className={styles.stats}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <span className={styles.statNum}>{stat.num}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro band */}
      <section className={`section ${styles.introBand}`}>
        <div className="container">
          <Reveal className={styles.introLayout} as="div">
            <p className={styles.introBig}>
              <PlaceholderText tag={t.pages.placeholderTag}>{h.introBig}</PlaceholderText>
            </p>
            <div className={styles.introBody}>
              <p>
                <PlaceholderText tag={t.pages.placeholderTag}>{h.introBody}</PlaceholderText>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Expertise grid */}
      <section id="expertise" className={`section ${styles.expertise}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow--light">{h.expertiseEyebrow}</span>
            <h2 style={{ color: "#fff", fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
              {h.expertiseHeading}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.72)" }}>{h.expertiseLede}</p>
          </div>

          <div className={styles.expGrid}>
            {practiceAreas.map((area, i) => (
              <Reveal key={area.slug} as="div" delay={(i % 3) * 70} className={styles.expCell}>
                <Link href={`/expertise/${area.slug}`} className={styles.expCard}>
                  <span className={styles.expIndex}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={styles.expTitle}>{areaLabel(area.slug, area.navLabel)}</h3>
                  <p className={styles.expDesc}>{t.summaries[area.slug]}</p>
                  <span className={styles.expLink}>
                    {t.common.learnMore} <ArrowRight />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lexcord — icon cards */}
      <section className={`section ${styles.approach}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{h.whyEyebrow}</span>
            <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>{h.whyHeading}</h2>
          </div>
          <div className={styles.approachGrid}>
            {h.why.map((item, i) => (
              <Reveal key={item.title} as="article" delay={i * 80} className={styles.approachCard}>
                <span className={styles.approachIcon}>
                  <WhyIcon index={i} />
                </span>
                <h3 className={styles.approachTitle}>{item.title}</h3>
                <p className={styles.approachText}>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media band */}
      <section className={`section ${styles.mediaBand}`}>
        <div className="container">
          <Reveal className={styles.mediaGrid} as="div">
            <div>
              <span className="eyebrow">{h.firmEyebrow}</span>
              <h2 style={{ fontSize: "var(--text-2xl)", margin: "1rem 0 1rem" }}>{h.firmHeading}</h2>
              <p style={{ color: "var(--ink-700)", fontSize: "var(--text-lg)", lineHeight: 1.5 }}>
                <PlaceholderText tag={t.pages.placeholderTag}>{h.firmBody}</PlaceholderText>
              </p>
              <div style={{ marginTop: "1.8rem" }}>
                <Link href="/about" className="btn btn--ghost">
                  {h.aboutCta} <ArrowRight />
                </Link>
              </div>
            </div>
            <PlaceholderImage label={h.firmHeading} ratio="3 / 2" />
          </Reveal>
        </div>
      </section>

      {/* Closing — wording from the source document (migration closing) */}
      <section className={styles.closing}>
        <div className="container">
          <div className={styles.closingInner}>
            <span className="eyebrow eyebrow--light" style={{ justifyContent: "center" }}>
              {h.closingEyebrow}
            </span>
            <h2 className={styles.closingTitle}>
              {h.closingTitlePre}
              <em>{h.closingTitleEm}</em>
              {h.closingTitlePost}
            </h2>
            <p className={styles.closingBody}>{h.closingBody}</p>
            <div className={styles.closingActions}>
              <Link href="/contact" className="btn btn--primary">
                {t.nav.book} <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
