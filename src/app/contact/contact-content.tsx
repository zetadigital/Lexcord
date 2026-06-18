"use client";

import { useLang } from "@/lib/i18n";
import styles from "./contact.module.css";

const EMAIL        = "info@lexcord.com.au";
const PHONE_DISPLAY = "+61 3 7054 5135";
const PHONE_DIAL   = "+61370545135";
const MAPS_LINK    = "https://maps.google.com/?q=1508/530+Little+Collins+St,+Melbourne+VIC+3000";
const MAPS_EMBED   = "https://maps.google.com/maps?q=530+Little+Collins+St+Melbourne+VIC+3000&z=16&output=embed";
const BOOKING_URL  = "#booking"; // placeholder — user to supply final URL

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.7"/>
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconArrow() {
  return (
    <svg viewBox="0 0 20 20" width="17" height="17" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ContactContent() {
  const { t, lang } = useLang();
  const c = t.pages.contact;

  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>{c.heroEyebrow}</p>
            <h1 className={styles.heroTitle}>{c.heroTitle}</h1>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className={styles.introSection}>
        <div className="container">
          <p className={styles.introText}>{c.introText}</p>
        </div>
      </section>

      {/* ── Contact info + Map ── */}
      <section className={styles.contactSection}>
        <div className={styles.contactGrid}>

          {/* Left: info panel */}
          <div className={styles.infoPanel}>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}><IconPin /></span>
              <div>
                <p className={styles.infoLabel}>{c.asideOffices}</p>
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className={styles.infoValue}>
                  {t.footer.address}
                </a>
                <p className={styles.infoHintLabel}>{c.liftLabel}</p>
                <p className={styles.infoHint}>{t.footer.lift}</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}><IconPhone /></span>
              <div>
                <p className={styles.infoLabel}>{c.asidePhone}</p>
                <a href={`tel:${PHONE_DIAL}`} className={styles.infoValue}>
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}><IconMail /></span>
              <div>
                <p className={styles.infoLabel}>{c.asideEmail}</p>
                <a href={`mailto:${EMAIL}`} className={styles.infoValue}>
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}><IconClock /></span>
              <div>
                <p className={styles.infoLabel}>{c.asideHours}</p>
                <p className={`${styles.infoValue} ${styles.infoValueMuted}`}>{c.hoursValue}</p>
              </div>
            </div>

            {/* Booking CTA */}
            <div className={styles.bookingWrap}>
              <a href={BOOKING_URL} className={styles.bookingBtn}>
                {c.bookingCta}
                <IconArrow />
              </a>
            </div>
          </div>

          {/* Right: Map */}
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

        </div>
      </section>
    </>
  );
}
