"use client";

import Link from "next/link";
import type { PracticeArea } from "@/data/types";
import { renderAccent } from "@/lib/accent";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { FaqSection } from "./faq";
import styles from "./sections.module.css";

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface PracticeSectionsProps {
  area: PracticeArea;
  areaZh: PracticeArea;
}

export function PracticeSections({ area: areaEn, areaZh }: PracticeSectionsProps) {
  const { lang, t } = useLang();
  const area = lang === "zh" ? areaZh : areaEn;
  const hasProcess = area.process && area.process.length > 0;
  const hasWhy = area.why && area.why.length > 0;

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className="eyebrow eyebrow--light">{area.heroEyebrow}</span>
            <h1 className={styles.heroTitle}>{renderAccent(area.heroTitle)}</h1>
            <p className={styles.heroLede}>{area.heroLede}</p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn--primary">
                {t.nav.book}
              </Link>
              <a href="#services" className="btn btn--ghost-light">
                {t.common.ourServices}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <Reveal className={styles.split} as="div">
            <div>
              <span className="eyebrow">{area.servicesEyebrow}</span>
              <h2 className="section-head" style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
                {area.servicesHeading}
              </h2>
            </div>
            <p>{area.servicesIntro}</p>
          </Reveal>

          <div className={styles.grid}>
            {area.services.map((service, i) => (
              <article key={service.title} className={styles.card}>
                <span className={styles.cardIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardBody}>{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      {hasProcess && (
        <section className={`section ${styles.process}`}>
          <div className="container">
            <Reveal className={styles.split} as="div">
              <div>
                <span className="eyebrow eyebrow--light">{area.processEyebrow ?? "How We Work"}</span>
                <h2 style={{ color: "#fff", fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
                  {area.processHeading}
                </h2>
              </div>
              {area.processIntro && (
                <p style={{ color: "rgba(255,255,255,0.78)" }}>{area.processIntro}</p>
              )}
            </Reveal>

            <div className={styles.timeline}>
              {area.process!.map((step) => (
                <div key={step.step} className={styles.step}>
                  <div className={styles.stepBadge}>{step.step}</div>
                  <div className={styles.stepBody}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepText}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Extra: tags or life stages */}
      {area.extra?.variant === "tags" && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">{area.extra.eyebrow}</span>
              <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>{area.extra.heading}</h2>
              {area.extra.intro && <p>{area.extra.intro}</p>}
            </div>
            <div className={styles.tagGrid}>
              {area.extra.tags!.map((tag) => (
                <article key={tag.title} className={styles.tagCard}>
                  <h3 className={styles.tagCardTitle}>{tag.title}</h3>
                  <p className={styles.tagCardBody}>{tag.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {area.extra?.variant === "stages" && (
        <section className={`section ${styles.stagesWrap}`}>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow eyebrow--light">{area.extra.eyebrow}</span>
              <h2 style={{ color: "#fff", fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
                {area.extra.heading}
              </h2>
              {area.extra.intro && <p style={{ color: "rgba(255,255,255,0.78)" }}>{area.extra.intro}</p>}
            </div>
            <div className={styles.stages}>
              {area.extra.stages!.map((stage) => (
                <div key={stage.marker} className={styles.stage}>
                  <div className={styles.stageMarker}>{stage.marker}</div>
                  <span className={styles.stageKicker}>{stage.kicker}</span>
                  <h3 className={styles.stageTitle}>{stage.title}</h3>
                  <p className={styles.stageText}>{stage.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why choose */}
      {hasWhy && (
        <section className={`section ${styles.why}`}>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">{t.common.whyChoose}</span>
              <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>{area.whyHeading}</h2>
              {area.whyIntro && <p>{area.whyIntro}</p>}
            </div>
            <div className={styles.whyGrid}>
              {area.why!.map((point) => (
                <article key={point.title} className={styles.whyCard}>
                  <span className={styles.whyIcon}>
                    <CheckIcon />
                  </span>
                  <h3 className={styles.whyTitle}>{point.title}</h3>
                  <p className={styles.whyText}>{point.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FaqSection
        eyebrow={area.faqEyebrow}
        heading={area.faqHeading}
        intro={area.faqIntro}
        faqs={area.faqs}
      />

      {/* Closing CTA */}
      <section className={styles.closing}>
        <div className="container">
          <div className={styles.closingInner}>
            <span className="eyebrow eyebrow--light" style={{ justifyContent: "center" }}>
              {area.closingKicker}
            </span>
            <h2 className={styles.closingTitle}>{renderAccent(area.closingTitle)}</h2>
            {area.closingBody && <p className={styles.closingBody}>{area.closingBody}</p>}
            <div className={styles.closingActions}>
              <Link href="/contact" className="btn btn--primary">
                {area.closingCta} <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
