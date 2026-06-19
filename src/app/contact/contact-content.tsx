"use client";

import { useLang } from "@/lib/i18n";
import styles from "./contact.module.css";

const EMAIL         = "info@lexcord.com.au";
const PHONE_DISPLAY = "+61 3 7054 5135";
const PHONE_DIAL    = "+61370545135";
const MAPS_LINK     = "https://maps.google.com/?q=1508/530+Little+Collins+St,+Melbourne+VIC+3000";
const MAPS_EMBED    = "https://maps.google.com/maps?q=530+Little+Collins+St+Melbourne+VIC+3000&z=16&output=embed";
const BOOKING_URL   = "#booking"; // placeholder — user to supply

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" fill="none"/>
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.7"/>
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"
        stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
      <path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ContactContent() {
  const { t } = useLang();
  const c = t.pages.contact;

  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>{c.heroTitle}</h1>
            <p className={styles.heroLede}>{c.introText}</p>
          </div>
        </div>
      </section>

      {/* ── Three contact cards ── */}
      <section className={styles.cardsSection}>
        <div className="container">
          <div className={styles.cards}>

            {/* Visit */}
            <div className={styles.card}>
              <span className={styles.cardIcon}><IconPin /></span>
              <p className={styles.cardLabel}>{c.cardVisitLabel}</p>
              <p className={styles.cardValue}>1508/530 Little Collins St</p>
              <p className={styles.cardSub}>{c.cardVisitSub}</p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardCta}
              >
                {c.cardVisitCta} <Arrow />
              </a>
            </div>

            {/* Call */}
            <div className={styles.card}>
              <span className={styles.cardIcon}><IconPhone /></span>
              <p className={styles.cardLabel}>{c.cardCallLabel}</p>
              <p className={styles.cardValue}>{PHONE_DISPLAY}</p>
              <p className={styles.cardSub}>{c.cardCallSub}</p>
              <a href={`tel:${PHONE_DIAL}`} className={styles.cardCta}>
                {c.cardCallCta} <Arrow />
              </a>
            </div>

            {/* Email */}
            <div className={styles.card}>
              <span className={styles.cardIcon}><IconMail /></span>
              <p className={styles.cardLabel}>{c.cardEmailLabel}</p>
              <p className={styles.cardValue}>{EMAIL}</p>
              <p className={styles.cardSub}>{c.cardEmailSub}</p>
              <a href={`mailto:${EMAIL}`} className={styles.cardCta}>
                {c.cardEmailCta} <Arrow />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <div className={styles.mapWrap}>
        <iframe
          src={MAPS_EMBED}
          className={styles.map}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lexcord Lawyers — office location"
        />
      </div>

      {/* ── Ready CTA section ── */}
      <section className={styles.readySection}>
        <div className="container">
          <div className={styles.readyInner}>
            <div className={styles.readyLeft}>
              <h2 className={styles.readyTitle}>{c.readyTitle}</h2>
              <p className={styles.readyBody}>{c.readyBody}</p>
            </div>
            <a href={BOOKING_URL} className={styles.readyCta}>
              {c.bookingCta} <Arrow />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
