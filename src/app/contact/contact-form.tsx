"use client";

import { useState } from "react";
import { practiceAreas } from "@/data/practices";
import { useLang } from "@/lib/i18n";
import styles from "./contact.module.css";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { t, areaLabel } = useLang();
  const c = t.pages.contact;

  if (submitted) {
    return (
      <div className={styles.form} role="status">
        <h3 style={{ fontSize: "var(--text-xl)" }}>{c.thanksTitle}</h3>
        <p className={styles.note}>{c.thanksBody}</p>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="firstName">
            {c.firstName}
          </label>
          <input className={styles.input} id="firstName" name="firstName" required />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="lastName">
            {c.lastName}
          </label>
          <input className={styles.input} id="lastName" name="lastName" required />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            {c.email}
          </label>
          <input className={styles.input} id="email" name="email" type="email" required />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            {c.phone}
          </label>
          <input className={styles.input} id="phone" name="phone" type="tel" />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="matter">
          {c.area}
        </label>
        <select className={styles.select} id="matter" name="matter" defaultValue="">
          <option value="" disabled>
            {c.areaSelect}
          </option>
          {practiceAreas.map((area) => (
            <option key={area.slug} value={area.slug}>
              {areaLabel(area.slug, area.navLabel)}
            </option>
          ))}
          <option value="other">{c.areaOther}</option>
        </select>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          {c.message}
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          placeholder={c.messagePlaceholder}
          required
        />
      </div>

      <button type="submit" className={`btn btn--primary ${styles.submit}`}>
        {c.submit}
      </button>
      <p className={styles.note}>{c.consent}</p>
    </form>
  );
}
