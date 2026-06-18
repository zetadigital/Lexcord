"use client";

import Link from "next/link";
import Image from "next/image";
import { getMember } from "@/data/people";
import { practiceBySlug } from "@/data/practices";
import { useLang } from "@/lib/i18n";
import sectionStyles from "@/components/sections.module.css";
import styles from "../people.module.css";

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" width="15" height="15" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Tick() {
  return (
    <svg viewBox="0 0 18 18" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M3 9.5l3.5 3.5L15 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase();
}

export function PersonDetail({ slug }: { slug: string }) {
  const { t, lang, areaLabel } = useLang();
  const p = t.pages.people;
  const member = getMember(slug);
  if (!member) return null;

  const name = member.name;
  const role =
    lang === "zh-tw" ? (member.roleZhTw ?? member.roleZh) :
    lang === "zh" ? member.roleZh : member.role;
  const specialty =
    lang === "zh-tw" ? (member.specialtyZhTw ?? member.specialtyZh) :
    lang === "zh" ? member.specialtyZh : member.specialty;
  const bio =
    lang === "zh-tw" ? (member.bioZhTw ?? member.bioZh) :
    lang === "zh" ? member.bioZh : member.bio;
  const quals =
    lang === "zh-tw" ? (member.qualificationsZhTw ?? member.qualificationsZh) :
    lang === "zh" ? member.qualificationsZh : member.qualifications;
  const memberships =
    lang === "zh-tw" ? (member.membershipsZhTw ?? member.membershipsZh ?? []) :
    lang === "zh" ? (member.membershipsZh ?? []) : (member.memberships ?? []);
  const membershipsLabel = lang === "zh" ? "会员资格" : lang === "zh-tw" ? "會員資格" : "Memberships";
  const profileLabel = lang === "zh" ? "简介" : lang === "zh-tw" ? "簡介" : "Profile";
  const phoneLabel = lang === "zh" ? "电话" : lang === "zh-tw" ? "電話" : "Phone";
  const emailLabel = lang === "zh" ? "邮箱" : lang === "zh-tw" ? "郵箱" : "Email";
  const phoneDial = member.phone.replace(/[^+\d]/g, "");

  return (
    <>
      <section className={styles.detailHero}>
        <div className="container">
          <div className={styles.detailHeroInner}>
            <Link href="/people" className={styles.back}>
              <Arrow /> {p.backToPeople}
            </Link>
            <h1 className={styles.detailName}>{name}</h1>
            <p className={styles.detailRole}>{role}</p>
            {specialty && <p className={styles.detailSpecialty}>{specialty}</p>}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.detailLayout}>
            <div className={styles.rail}>
              <div className={styles.detailPhoto}>
                {member.photo ? (
                  <Image src={member.photo} alt={name} fill sizes="300px" />
                ) : (
                  <span className={styles.detailInitials}>{initials(name)}</span>
                )}
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactRow}>
                  <span className={styles.contactKey}>{phoneLabel}</span>
                  <span className={styles.contactVal}>
                    <a href={`tel:${phoneDial}`}>{member.phone}</a>
                  </span>
                </div>
                <div className={styles.contactRow}>
                  <span className={styles.contactKey}>{emailLabel}</span>
                  <span className={styles.contactVal}>
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                  </span>
                </div>
                <Link href="/contact" className={`btn btn--primary ${styles.railCta}`}>
                  {p.bookWith}
                </Link>
              </div>
            </div>

            <div>
              <div className={styles.section}>
                <p className={styles.sectionTitle}>{profileLabel}</p>
                <div className={styles.bio}>
                  {bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {member.areas.length > 0 && (
                <div className={styles.section}>
                  <p className={styles.sectionTitle}>{p.expertise}</p>
                  <div className={styles.areaTags}>
                    {member.areas.map((s) => (
                      <Link key={s} href={`/expertise/${s}`} className={styles.areaTag}>
                        {areaLabel(s, practiceBySlug.get(s)?.navLabel ?? s)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {quals.length > 0 && (
                <div className={styles.section}>
                  <p className={styles.sectionTitle}>{p.qualifications}</p>
                  <div className={styles.quals}>
                    {quals.map((q, i) => (
                      <div key={i} className={styles.qual}>
                        <Tick />
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {memberships.length > 0 && (
                <div className={styles.section}>
                  <p className={styles.sectionTitle}>{membershipsLabel}</p>
                  <div className={styles.quals}>
                    {memberships.map((m, i) => (
                      <div key={i} className={styles.qual}>
                        <Tick />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
