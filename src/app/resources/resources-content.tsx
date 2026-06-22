"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import styles from "./resources.module.css";

const COPY = {
  en: {
    eyebrow: "Resources",
    heading: "Coming Soon",
    body: "We are currently preparing legal insights and resources across our practice areas. Please check back soon.",
    cta: "Return to home",
  },
  zh: {
    eyebrow: "资源中心",
    heading: "即将上线",
    body: "我们正在整理各执业领域的法律资讯与资源，敬请期待。",
    cta: "返回首页",
  },
} as const;

export function ResourcesContent() {
  const { lang } = useLang();
  const c = COPY[lang === "en" ? "en" : "zh"];

  return (
    <main>
      <section className={styles.comingSoon}>
        <div className="container">
          <span className="eyebrow">{c.eyebrow}</span>
          <h1 className={styles.comingHeading}>{c.heading}</h1>
          <p className={styles.comingBody}>{c.body}</p>
          <Link href="/" className="btn btn--primary" style={{ marginTop: "2rem", display: "inline-flex" }}>
            {c.cta}
          </Link>
        </div>
      </section>
    </main>
  );
}
