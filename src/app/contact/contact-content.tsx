"use client";

import { useLang } from "@/lib/i18n";
import styles from "./contact.module.css";

const EMAIL         = "info@lexcord.com.au";
const PHONE_DISPLAY = "+61 3 7054 5135";
const PHONE_DIAL    = "+61370545135";
const MAPS_LINK     = "https://maps.google.com/?q=1508/530+Little+Collins+St,+Melbourne+VIC+3000";
const MAPS_EMBED    = "https://maps.google.com/maps?q=530+Little+Collins+St+Melbourne+VIC+3000&z=16&output=embed";
const BOOKING_URL   = "#booking"; // placeholder — user to supply

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" />
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

      {/* ── Contact info — editorial table ── */}
      <section className={styles.infoSection}>
        <div className="container">
          <dl className={styles.table}>

            <div className={styles.row}>
              <dt className={styles.key}>{c.asidePhone}</dt>
              <dd className={styles.val}>
                <a href={`tel:${PHONE_DIAL}`} className={styles.phone}>
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>

            <div className={styles.row}>
              <dt className={styles.key}>{c.asideEmail}</dt>
              <dd className={styles.val}>
                <a href={`mailto:${EMAIL}`} className={styles.email}>
                  {EMAIL}
                </a>
              </dd>
            </div>

            <div className={styles.row}>
              <dt className={styles.key}>{c.asideOffices}</dt>
              <dd className={styles.val}>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.address}
                >
                  {t.footer.address}
                </a>
              </dd>
            </div>

            <div className={styles.row}>
              <dt className={styles.key}>{c.asideHours}</dt>
              <dd className={`${styles.val} ${styles.hours}`}>{c.hoursValue}</dd>
            </div>

          </dl>
        </div>
      </section>

      {/* ── Map + CTA ── */}
      <section className={styles.mapSection}>
        <iframe
          src={MAPS_EMBED}
          className={styles.map}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lexcord Lawyers — office location"
        />
        <div className={styles.mapFooter}>
          <p className={styles.liftText}>{t.footer.lift}</p>
          <a href={BOOKING_URL} className={styles.bookingBtn}>
            {c.bookingCta}
            <Arrow />
          </a>
        </div>
      </section>
    </>
  );
}
