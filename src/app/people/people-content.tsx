"use client";

import Link from "next/link";
import Image from "next/image";
import { team } from "@/data/people";
import { useLang } from "@/lib/i18n";
import styles from "./people.module.css";

const AREA_LABELS_EN: Record<string, string> = {
  "property-law": "Property Law",
  "conveyancing": "Conveyancing",
  "commercial": "Commercial Law",
  "family-law": "Family Law",
  "wills-estates": "Wills & Estates",
  "intellectual-property": "Intellectual Property",
  "criminal-law": "Criminal Law",
  "notary-public": "Notary Public",
  "migration-law": "Migration Law",
};

const AREA_LABELS_ZH: Record<string, string> = {
  "property-law": "房产法",
  "conveyancing": "房产过户",
  "commercial": "商业法",
  "family-law": "家庭法",
  "wills-estates": "遗嘱与遗产",
  "intellectual-property": "知识产权",
  "criminal-law": "刑事法",
  "notary-public": "公证",
  "migration-law": "移民法",
};

function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase();
}

export function PeopleContent() {
  const { t, lang } = useLang();
  const p = t.pages.people;
  const areaLabels = lang === "zh" ? AREA_LABELS_ZH : AREA_LABELS_EN;

  return (
    <>
      <section className={styles.intro}>
        <div className="container">
          <span className="eyebrow">{p.heroEyebrow}</span>
          <h1 className={styles.introTitle}>
            {p.heroTitlePre}
            <span className="accent">{p.heroTitleEm}</span>
          </h1>
          <p className={styles.introLede}>{p.heroLede}</p>
        </div>
      </section>

      <section className={`section ${styles.listSection}`}>
        <div className="container">
          <div className={styles.grid}>
            {team.map((member) => {
              const role = lang === "zh" ? member.roleZh : member.role;
              const specialty = lang === "zh" ? member.specialtyZh : member.specialty;
              return (
                <div key={member.slug} className={styles.card}>
                  <Link href={`/people/${member.slug}`} className={styles.avatarWrap} aria-label={member.name}>
                    {member.photo ? (
                      <Image src={member.photo} alt={member.name} fill sizes="120px" className={styles.avatarImg} />
                    ) : (
                      <span className={styles.avatarInitials}>{initials(member.name)}</span>
                    )}
                  </Link>

                  <div className={styles.info}>
                    <Link href={`/people/${member.slug}`} className={styles.nameLink}>
                      <h3 className={styles.name}>{member.name}.</h3>
                    </Link>
                    <p className={styles.role}>{role}.</p>
                    {specialty && <p className={styles.specialty}>{specialty}</p>}

                    {member.areas.length > 0 && (
                      <ul className={styles.areas}>
                        {member.areas.map((slug) => (
                          <li key={slug} className={styles.area}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className={styles.chevron}>
                              <path d="M3 1.5L6.5 5 3 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {areaLabels[slug] ?? slug}
                          </li>
                        ))}
                      </ul>
                    )}

                    <a href={`mailto:${member.email}`} className={styles.email}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <rect x="1" y="2.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M1 4l6 4.5L13 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                      {member.email}
                    </a>

                    <Link href="/contact" className={styles.cta}>
                      {t.bookConsultation}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
