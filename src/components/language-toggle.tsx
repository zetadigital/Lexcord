"use client";

import { useLang } from "@/lib/i18n";
import styles from "./language-toggle.module.css";

export function LanguageToggle({ light = true }: { light?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`${styles.toggle} ${light ? styles.light : ""}`} role="group" aria-label="Language">
      <button
        className={`${styles.option} ${lang === "en" ? styles.active : ""}`}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >
        <span className={styles.flag} aria-hidden="true">🇦🇺</span>EN
      </button>
      <span className={styles.divider} aria-hidden="true" />
      <button
        className={`${styles.option} ${lang === "zh" ? styles.active : ""}`}
        aria-pressed={lang === "zh"}
        onClick={() => setLang("zh")}
      >
        <span className={styles.flag} aria-hidden="true">🇨🇳</span>简体
      </button>
      <span className={styles.divider} aria-hidden="true" />
      <button
        className={`${styles.option} ${lang === "zh-tw" ? styles.active : ""}`}
        aria-pressed={lang === "zh-tw"}
        onClick={() => setLang("zh-tw")}
      >
        繁體
      </button>
    </div>
  );
}
