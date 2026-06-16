"use client";

import { useLang } from "@/lib/i18n";
import { ContactForm } from "./contact-form";
import styles from "./contact.module.css";

const EMAIL = "info@lexcord.com.au";
const PHONE_DISPLAY = "+61 3 7054 5135";
const PHONE_DIAL = "+61370545135";
const MAPS = "https://maps.google.com/?q=530+Little+Collins+St+Melbourne+VIC+3000";

export function ContactContent() {
  const { t } = useLang();
  const c = t.pages.contact;

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>{c.heroTitle}</h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <ContactForm />

            <aside className={styles.aside}>
              <div className={styles.asideBlock}>
                <p className={styles.asideLabel}>{c.asideOffices}</p>
                <p className={styles.asideValue}>
                  <a href={MAPS} target="_blank" rel="noopener noreferrer" className={styles.asideLink}>
                    {t.footer.address}
                  </a>
                </p>
                <p className={styles.asideHint}>{t.footer.lift}</p>
              </div>
              <div className={styles.asideBlock}>
                <p className={styles.asideLabel}>{c.asidePhone}</p>
                <p className={styles.asideValue}>
                  <a href={`tel:${PHONE_DIAL}`} className={styles.asideLink}>
                    {PHONE_DISPLAY}
                  </a>
                </p>
              </div>
              <div className={styles.asideBlock}>
                <p className={styles.asideLabel}>{c.asideEmail}</p>
                <p className={styles.asideValue}>
                  <a href={`mailto:${EMAIL}`} className={styles.asideLink}>
                    {EMAIL}
                  </a>
                </p>
              </div>
              <div className={styles.asideBlock}>
                <p className={styles.asideLabel}>{c.asideHours}</p>
                <p className={styles.asideValue}>{c.hoursValue}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
