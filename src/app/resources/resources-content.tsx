"use client";

import Link from "next/link";
import { practiceAreas } from "@/data/practices";
import { useLang } from "@/lib/i18n";
import { PlaceholderText, PlaceholderImage } from "@/components/placeholder";
import sectionStyles from "@/components/sections.module.css";
import styles from "./resources.module.css";

export function ResourcesContent() {
  const { t, areaLabel } = useLang();
  const r = t.pages.resources;
  const topics = practiceAreas.slice(0, 6);

  return (
    <>
      <section className={sectionStyles.hero}>
        <div className="container">
          <div className={sectionStyles.heroInner}>
            <span className="eyebrow eyebrow--light">{r.heroEyebrow}</span>
            <h1 className={sectionStyles.heroTitle}>
              {r.heroTitlePre}
              <span className="accent">{r.heroTitleEm}</span>
            </h1>
            <p className={sectionStyles.heroLede}>
              <PlaceholderText light tag={t.pages.placeholderTag}>
                {r.heroLede}
              </PlaceholderText>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{r.latest}</span>
            <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>{r.heading}</h2>
            <p>{r.sub}</p>
          </div>

          <div className={styles.grid}>
            {topics.map((area, i) => {
              const label = areaLabel(area.slug, area.navLabel);
              return (
                <article key={area.slug} className={styles.card}>
                  <PlaceholderImage label={label} ratio="16 / 9" />
                  <div className={styles.cardBody}>
                    <span className={styles.cardCat}>{label}</span>
                    <h3 className={styles.cardTitle}>
                      <PlaceholderText tag={`${t.pages.placeholderTag} ${i + 1}`}>
                        {r.cardTitle}
                      </PlaceholderText>
                    </h3>
                    <p className={styles.cardExcerpt}>{r.cardExcerpt}</p>
                    <span className={styles.cardMeta}>{r.cardMeta}</span>
                  </div>
                </article>
              );
            })}
          </div>

          <div className={styles.note}>
            <Link href="/contact" className="btn btn--ghost">
              {r.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
