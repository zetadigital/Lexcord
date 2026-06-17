"use client";

import Link from "next/link";
import Image from "next/image";
import { team } from "@/data/people";
import { useLang } from "@/lib/i18n";
import styles from "./people.module.css";


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

                    {specialty && (
                      <span className={styles.metaRow}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <rect x="1" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                          <path d="M5 4V2.5a1.5 1.5 0 0 1 3 0V4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                        {specialty}
                      </span>
                    )}

                    <a href={`mailto:${member.email}`} className={styles.metaRow}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <rect x="1" y="2.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M1 4l6 4.5L13 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                      {member.email}
                    </a>

                    <Link href="/contact" className={styles.cta}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Book a Consultation
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
