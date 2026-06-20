"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import styles from "./home.module.css";

const MAPS  = "https://maps.google.com/?q=530+Little+Collins+St+Melbourne+VIC+3000";
const EMAIL = "info@lexcord.com.au";
const PHONE_DISPLAY = "+61 3 7054 5135";
const PHONE_DIAL    = "+61370545135";

/* 5 practice areas featured in the "How we can support you" section */
const FEATURED = [
  { slug: "commercial",    label: "Commercial" },
  { slug: "property-law",  label: "Property Law" },
  { slug: "family-law",    label: "Family Law" },
  { slug: "migration-law", label: "Migration" },
  { slug: "wills-estates", label: "Wills & Estates" },
] as const;

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceIcon({ slug }: { slug: string }) {
  if (slug === "commercial") return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M8 7V5a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M2 12h20" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
  if (slug === "property-law") return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" aria-hidden="true">
      <path d="M3 10.5L12 3l9 7.5V22H3V10.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <rect x="8.5" y="14" width="3" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="13" y="14" width="2.5" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
  if (slug === "family-law") return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" aria-hidden="true">
      <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="17" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M2 21c0-4 2.7-7 6-7h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M16 14c2.5 0 5 2 5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
  if (slug === "migration-law") return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M3 12h18M12 3c-2.5 2.5-4 5.5-4 9s1.5 6.5 4 9M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" aria-hidden="true">
      <path d="M6 3h12a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

function QuoteMark() {
  return (
    <svg viewBox="0 0 40 32" width="30" height="24" fill="currentColor" aria-hidden="true">
      <path d="M0 32V18C0 8 5 1.6 15 0l2 5C11 6.5 8 10 8 15h6v17H0zm22 0V18C22 8 27 1.6 37 0l2 5c-6 1.5-9 5-9 10h6v17H22z" />
    </svg>
  );
}

export default function HomePage() {
  const { t, areaLabel } = useLang();
  const h = t.pages.home;
  const marquee = [...h.testimonials, ...h.testimonials];

  return (
    <>
      {/* ── Banner — split layout ── */}
      <section className={styles.banner}>
        {/* Left — white, text content */}
        <div className={styles.bannerLeft}>
          <div className={styles.bannerContent}>
            <h1 className={styles.bannerTitle}>{h.bannerTitle}</h1>
            <p className={styles.bannerTagline}>{h.bannerTagline}</p>
            <p className={styles.bannerLede}>{h.bannerLede}</p>
            <div className={styles.bannerCtas}>
              <Link href="/about" className={`btn btn--primary ${styles.bannerBtn}`}>
                {h.bannerCta1} <ArrowRight />
              </Link>
              <Link href="/people" className={`btn btn--ghost ${styles.bannerBtn}`}>
                {h.bannerCta2}
              </Link>
            </div>
          </div>
        </div>

        {/* Right — three arched office photos */}
        <div className={styles.bannerRight} aria-hidden="true">
          <div className={styles.archGroup}>
            <div className={`${styles.arch} ${styles.arch1}`}>
              <Image src="/images/office/office-3.jpg" alt="" fill className={styles.archImg} sizes="15vw" />
            </div>
            <div className={`${styles.arch} ${styles.arch2}`}>
              <Image src="/images/office/office-1.jpg" alt="" fill className={styles.archImg} sizes="15vw" />
            </div>
            <div className={`${styles.arch} ${styles.arch3}`}>
              <Image src="/images/office/office-10.jpg" alt="" fill className={styles.archImg} sizes="15vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── How we can support you ── */}
      <div className={styles.servicesOuter}>
      <section className={styles.services}>
        <div className="container">
          <h2 className={styles.servicesTitle}>{h.servicesTitle}</h2>
          <div className={styles.servicesGrid}>
            {FEATURED.map((area, i) => (
              <Reveal key={area.slug} as="div" delay={i * 70} className={styles.serviceItem}>
                <span className={styles.serviceIcon}>
                  <ServiceIcon slug={area.slug} />
                </span>
                <h3 className={styles.serviceName}>
                  {areaLabel(area.slug, area.label)}
                </h3>
                <p className={styles.serviceDesc}>{t.summaries[area.slug]}</p>
                <Link href={`/expertise/${area.slug}`} className={styles.serviceCta}>
                  {h.servicesLearnMore} <ArrowRight />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* ── What do they say — scrolling testimonials ── */}
      <section className={`section ${styles.say}`}>
        <div className="container">
          <div className={styles.sayHead}>
            <span className="eyebrow eyebrow--light">{h.sayEyebrow}</span>
            <h2 className={styles.sayTitle}>{h.sayTitle}</h2>
          </div>
        </div>
        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            {marquee.map((tm, i) => (
              <figure key={i} className={styles.quoteCard} aria-hidden={i >= h.testimonials.length}>
                <span className={styles.quoteMark}><QuoteMark /></span>
                <blockquote className={styles.quoteText}>{tm.quote}</blockquote>
                <figcaption className={styles.quoteName}>
                  {tm.name} <span>· {tm.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ready to discuss your matter? ── */}
      <section className={`section ${styles.ready}`}>
        <div className="container">
          <div className={styles.readyGrid}>
            <div className={styles.readyIntro}>
              <span className="eyebrow">{h.readyEyebrow}</span>
              <h2 className={styles.readyTitle}>{h.readyTitle}</h2>
              <p className={styles.readyLede}>{h.readyLede}</p>
              <Link href="/contact" className="btn btn--primary">
                {t.nav.book} <ArrowRight />
              </Link>
            </div>
            <dl className={styles.readyList}>
              <div>
                <dt>{h.addressLabel}</dt>
                <dd><a href={MAPS} target="_blank" rel="noopener noreferrer">{t.footer.address}</a></dd>
              </div>
              <div>
                <dt>{h.phoneLabel}</dt>
                <dd><a href={`tel:${PHONE_DIAL}`}>{PHONE_DISPLAY}</a></dd>
              </div>
              <div>
                <dt>{h.emailLabel}</dt>
                <dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
