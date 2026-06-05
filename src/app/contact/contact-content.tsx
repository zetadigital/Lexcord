"use client";

import { useLang } from "@/lib/i18n";
import { ContactForm } from "./contact-form";
import styles from "./contact.module.css";

export function ContactContent() {
  const { t } = useLang();
  const c = t.pages.contact;

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className="eyebrow eyebrow--light">{c.heroEyebrow}</span>
            <h1 className={styles.heroTitle}>{c.heroTitle}</h1>
            <p className={styles.heroLede}>{c.heroLede}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <ContactForm />

            <aside className={styles.aside}>
              <div className={styles.asideBlock}>
                <p className={styles.asideLabel}>{c.asideEmail}</p>
                <p className={`${styles.asideValue} ${styles.placeholder}`}>
                  {c.emailValue} <br />
                  <span style={{ fontSize: "0.8rem" }}>({c.pendingConfirm})</span>
                </p>
              </div>
              <div className={styles.asideBlock}>
                <p className={styles.asideLabel}>{c.asidePhone}</p>
                <p className={`${styles.asideValue} ${styles.placeholder}`}>{c.pendingConfirm}</p>
              </div>
              <div className={styles.asideBlock}>
                <p className={styles.asideLabel}>{c.asideOffices}</p>
                <p className={`${styles.asideValue} ${styles.placeholder}`}>{c.officesValue}</p>
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
