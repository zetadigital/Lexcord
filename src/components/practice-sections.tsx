"use client";

import Link from "next/link";
import Image from "next/image";
import type { PracticeArea } from "@/data/types";
import { team } from "@/data/people";
import { renderAccent } from "@/lib/accent";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { Accordion } from "./accordion";
import { PlaceholderText, PlaceholderImage } from "./placeholder";
import styles from "./sections.module.css";

/** Architectural site-plan line art for the "More Than Settlement" highlight section. */
function PropertySitePlan() {
  return (
    <svg viewBox="0 0 300 220" fill="none" aria-hidden="true" className={styles.highlightArt}>
      {/* Site boundary — slightly irregular like a real property lot */}
      <path d="M35 195 L32 28 L205 18 L272 52 L265 195 Z" stroke="currentColor" strokeWidth="1.1" />
      {/* Building footprint */}
      <rect x="75" y="62" width="155" height="112" stroke="currentColor" strokeWidth="1.1" />
      {/* Internal room divisions */}
      <line x1="162" y1="62" x2="162" y2="174" stroke="currentColor" strokeWidth="0.8" />
      <line x1="75" y1="118" x2="162" y2="118" stroke="currentColor" strokeWidth="0.8" />
      <line x1="162" y1="95" x2="230" y2="95" stroke="currentColor" strokeWidth="0.8" />
      {/* Setback lines — dashed */}
      <rect x="55" y="47" width="194" height="137" stroke="currentColor" strokeWidth="0.55" strokeDasharray="5 4" />
      {/* Survey pegs */}
      <circle cx="32" cy="28" r="3" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="205" cy="18" r="3" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="272" cy="52" r="3" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="265" cy="195" r="3" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="35" cy="195" r="3" stroke="currentColor" strokeWidth="0.8" />
      {/* Entry path */}
      <line x1="150" y1="174" x2="150" y2="195" stroke="currentColor" strokeWidth="0.7" strokeDasharray="3 3" />
      {/* Dimension — width */}
      <line x1="32" y1="210" x2="265" y2="210" stroke="currentColor" strokeWidth="0.5" />
      <line x1="32" y1="205" x2="32" y2="215" stroke="currentColor" strokeWidth="0.5" />
      <line x1="265" y1="205" x2="265" y2="215" stroke="currentColor" strokeWidth="0.5" />
      {/* Dimension — height */}
      <line x1="285" y1="28" x2="285" y2="195" stroke="currentColor" strokeWidth="0.5" />
      <line x1="280" y1="28" x2="290" y2="28" stroke="currentColor" strokeWidth="0.5" />
      <line x1="280" y1="195" x2="290" y2="195" stroke="currentColor" strokeWidth="0.5" />
      {/* North arrow */}
      <line x1="20" y1="145" x2="20" y2="120" stroke="currentColor" strokeWidth="0.7" />
      <path d="M17 128 L20 119 L23 128" stroke="currentColor" strokeWidth="0.7" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Per-area line icon for the banner. */
function AreaIcon({ slug }: { slug: string }) {
  const common = {
    viewBox: "0 0 40 40",
    width: 38,
    height: 38,
    fill: "none",
    "aria-hidden": true as const,
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (slug) {
    case "property-conveyancing":
      return (
        <svg {...common}>
          <path d="M7 18L20 8l13 10" />
          <path d="M10 16v15h20V16" />
          <path d="M17 31v-7h6v7" />
        </svg>
      );
    case "commercial":
      return (
        <svg {...common}>
          <rect x="6" y="13" width="28" height="19" rx="2" />
          <path d="M15 13v-3a3 3 0 013-3h4a3 3 0 013 3v3M6 21h28" />
        </svg>
      );
    case "wills-estates":
      return (
        <svg {...common}>
          <path d="M11 6h13l6 6v22H11z" />
          <path d="M24 6v6h6M15 19h11M15 24h11M15 29h7" />
        </svg>
      );
    case "intellectual-property":
      return (
        <svg {...common}>
          <path d="M20 6a10 10 0 016 18c-1.3 1-2 2-2 3.5V29h-8v-1.5c0-1.5-.7-2.5-2-3.5A10 10 0 0120 6z" />
          <path d="M16 33h8M17 36h6" />
        </svg>
      );
    case "criminal-law":
      return (
        <svg {...common}>
          <path d="M20 6l11 4v8c0 8-5 13-11 16-6-3-11-8-11-16v-8l11-4z" />
          <path d="M15 19l3.5 3.5L26 15" />
        </svg>
      );
    case "notary-public":
      return (
        <svg {...common}>
          <circle cx="20" cy="15" r="8" />
          <path d="M20 23v6M14 33h12M16 13l3 3 5-5" />
        </svg>
      );
    case "migration-law":
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="13" />
          <path d="M7 20h26M20 7c4 4 4 22 0 26M20 7c-4 4-4 22 0 26" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="13" />
        </svg>
      );
  }
}

const BANNER_PHOTOS: Partial<Record<string, string>> = {
  "commercial":             "/images/expertise-banner/commercial.png",
  "conveyancing":           "/images/expertise-banner/conveyancing.png",
  "criminal-law":           "/images/expertise-banner/criminal-law.png",
  "family-law":             "/images/expertise-banner/family-law.png",
  "intellectual-property":  "/images/expertise-banner/intellectual-property.png",
  "migration-law":          "/images/expertise-banner/migration-law.png",
  "notary-public":          "/images/expertise-banner/notary-public.png",
  "property-law":           "/images/expertise-banner/property-law.png",
  "wills-estates":          "/images/expertise-banner/will-estates.png",
};

interface PracticeSectionsProps {
  area: PracticeArea;
  areaZh: PracticeArea;
}

export function PracticeSections({ area: areaEn, areaZh }: PracticeSectionsProps) {
  const { lang, t } = useLang();
  const area = lang === "zh" ? areaZh : areaEn;
  const c = t.common;

  // Solicitors who work across this practice area.
  const areaTeam = team.filter((m) => !m.placeholder && m.areas.includes(area.slug));

  const layout = area.layout ?? ["practice", "news", "experts", "closing"];
  const bannerPhoto = BANNER_PHOTOS[areaEn.slug];

  const blocks: Record<string, JSX.Element | null> = {
    intro: area.introParagraphs?.length ? (
      <section key="intro" className={`section ${styles.intro}`}>
        <div className="container">
          <Reveal className={area.introQuote ? styles.introInnerSplit : styles.introInner} as="div">
            <div>
              {area.introHeading && (
                <h2 className={styles.introHeading}>{area.introHeading}</h2>
              )}
              {area.introParagraphs.map((para, i) => (
                <p key={i} className={styles.introPara}>{para}</p>
              ))}
            </div>
            {area.introQuote && (
              <aside className={styles.introEditorial}>
                <p>{area.introQuote}</p>
              </aside>
            )}
          </Reveal>
        </div>
      </section>
    ) : null,

    coreServices: area.coreServices?.length ? (
      <section key="coreServices" className={`section ${styles.coreServices}`}>
        <div className="container">
          {(area.coreServicesEyebrow || area.coreServicesHeading) && (
            <div className={styles.coreServicesHead}>
              {area.coreServicesEyebrow && (
                <span className="eyebrow">{area.coreServicesEyebrow}</span>
              )}
              {area.coreServicesHeading && (
                <h2 className={styles.coreServicesHeading}>{area.coreServicesHeading}</h2>
              )}
            </div>
          )}
          <div className={styles.coreGrid}>
            {area.coreServices.map((item) => (
              <article key={item.number} className={styles.coreCard}>
                <span className={styles.coreCardNum}>{item.number}</span>
                <hr className={styles.coreCardRule} />
                <h3 className={styles.coreCardTitle}>{item.title}</h3>
                <p className={styles.coreCardDesc}>{item.description}</p>
                <ul className={styles.coreCardList}>
                  {item.services.map((s) => (
                    <li key={s} className={styles.coreCardListItem}>{s}</li>
                  ))}
                </ul>
                {item.note && (
                  <p className={styles.coreCardNote}>{item.note}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    ) : null,

    practice: (
      <section key="practice" id="services" className="section">
        <div className="container">
          <div className={area.servicesIntro ? styles.split : undefined}>
            <div>
              <span className="eyebrow">{area.servicesEyebrow}</span>
              <h2 className="section-head" style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
                {area.servicesHeading}
              </h2>
            </div>
            {area.servicesIntro && <p>{area.servicesIntro}</p>}
          </div>

          {area.practiceText?.length ? (
            <div className={styles.practiceProse}>
              {area.practiceText.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ) : area.practiceNumbered ? (
            <div className={styles.cardsGap}>
              {area.services.map((service, i) => (
                <article key={service.title} className={styles.cardGap}>
                  <span className={styles.cardGapNum}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={styles.cardGapTitle}>{service.title}</h3>
                  {service.body && <p className={styles.cardGapBody}>{service.body}</p>}
                </article>
              ))}
            </div>
          ) : (
            <div className={area.practiceCardDot ? styles.gridDot : styles.grid}>
              {area.services.map((service, i) => (
                <article key={service.title} className={styles.card}>
                  {area.practiceCardDot ? (
                    <span className={styles.cardDot} aria-hidden="true" />
                  ) : (
                    <span className={styles.cardIndex}>{String(i + 1).padStart(2, "0")}</span>
                  )}
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardBody}>{service.body}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    ),

    why: area.whyChoose ? (
      <section key="why" className={`section ${styles.why}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{area.whyChoose.eyebrow}</span>
            <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>{area.whyChoose.heading}</h2>
            {area.whyChoose.sub && (
              <p className={styles.whySub}>{area.whyChoose.sub}</p>
            )}
          </div>
          {area.whyCards ? (
            <div className={styles.whyCardGrid}>
              {area.whyChoose.items.map((item) => (
                <div key={item.q} className={styles.whyCard}>
                  <h3 className={styles.whyCardTitle}>{item.q}</h3>
                  <p className={styles.whyCardBody}>{item.a}</p>
                </div>
              ))}
            </div>
          ) : (
            <Accordion items={area.whyChoose.items} />
          )}
        </div>
      </section>
    ) : null,

    qa: area.faqs?.length && area.faqAccordion ? (
      <section key="qa" className={`section ${styles.qa}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{area.faqEyebrow}</span>
            <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>{area.faqHeading}</h2>
            {area.faqSub && <p>{area.faqSub}</p>}
          </div>
          <Accordion items={area.faqs} />
        </div>
      </section>
    ) : null,

    news: (
      <section key="news" className={`section ${styles.posts}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{c.relatedPosts}</span>
            <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
              {area.newsSectionHeading ?? area.navLabel}
            </h2>
            <p>{area.newsSectionLede ?? c.relatedPostsLede}</p>
          </div>
          <div className={styles.postGrid}>
            {[0, 1, 2].map((i) => (
              <article key={i} className={styles.postCard}>
                <PlaceholderImage label={area.navLabel} ratio="16 / 9" />
                <div className={styles.postBody}>
                  <h3 className={styles.postTitle}>
                    <PlaceholderText tag={`${t.pages.placeholderTag} ${i + 1}`}>
                      {area.newsPlaceholders?.[i] ?? c.postTitle}
                    </PlaceholderText>
                  </h3>
                  <p className={styles.postExcerpt}>{c.postExcerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    ),

    approach: area.approachSteps?.length ? (
      <section key="approach" className={styles.approach}>
        <div className="container">
          <div className={styles.approachInner}>
            <div className={styles.approachHead}>
              {area.approachEyebrow && (
                <span className={styles.approachEyebrow}>{area.approachEyebrow}</span>
              )}
              {area.approachHeading && (
                <h2 className={styles.approachHeading}>{area.approachHeading}</h2>
              )}
              {area.approachBody && (
                <p className={styles.approachBody}>{area.approachBody}</p>
              )}
            </div>
            <div className={styles.approachSteps}>
              {area.approachSteps.map((step) => (
                <div key={step.number} className={styles.approachStep}>
                  <span className={styles.approachStepNum}>{step.number}</span>
                  <div className={styles.approachStepRule} aria-hidden="true" />
                  <h3 className={styles.approachStepTitle}>{step.title}</h3>
                  <p className={styles.approachStepBody}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    ) : null,

    artJr: area.artJr ? (
      <section key="artJr" className={`section ${styles.artJr}`}>
        <div className="container">
          <div className={styles.artJrHead}>
            {area.artJr.eyebrow && (
              <span className="eyebrow">{area.artJr.eyebrow}</span>
            )}
            <h2 className={styles.artJrHeading}>{area.artJr.heading}</h2>
            <p className={styles.artJrIntro}>{area.artJr.intro}</p>
          </div>
          <div className={styles.artJrGrid}>
            <div className={styles.artJrCol}>
              <h3 className={styles.artJrColTitle}>{area.artJr.art.heading}</h3>
              <div className={styles.artJrColBody}>
                {area.artJr.art.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <div className={styles.artJrCol}>
              <h3 className={styles.artJrColTitle}>{area.artJr.jr.heading}</h3>
              <div className={styles.artJrColBody}>
                {area.artJr.jr.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
          <p className={styles.artJrFooter}>{area.artJr.footer}</p>
        </div>
      </section>
    ) : null,

    experts: (
      <section key="experts" className={`section ${styles.areaTeam}`}>
        <div className="container">
          {areaTeam.length === 1 ? (
            /* ── Single lawyer: editorial featured layout ── */
            <div className={styles.teamGrid}>
              {/* Left: intro text */}
              <div className={styles.teamIntro}>
                <span className="eyebrow eyebrow--light">{c.areaTeam}</span>
                <h2>{area.expertsSectionHeading ?? area.navLabel}</h2>
                <p>{area.expertsSectionLede ?? c.areaTeamLede}</p>
                {area.expertsCta && (
                  <Link href="/contact" className={styles.teamDiscussLink}>
                    {area.expertsCta} <ArrowRight />
                  </Link>
                )}
              </div>

              {/* Right: featured lawyer card */}
              {(() => {
                const m = areaTeam[0]!;
                const specialtyLabel = lang === "zh" ? (m.specialtyZh ?? m.specialty) : m.specialty;
                return (
                  <Link href={`/people/${m.slug}`} className={styles.teamFeatCard}>
                    <div className={styles.teamFeatPhotoWrap}>
                      {m.photo ? (
                        <Image src={m.photo} alt={m.name} fill sizes="(max-width:860px) 140px, 200px" />
                      ) : (
                        <span className={styles.teamFeatInitials}>
                          {m.name.split(/\s+/).slice(0, 2).map((p) => p[0] ?? "").join("").toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className={styles.teamFeatInfo}>
                      <h3 className={styles.teamFeatName}>{m.name}</h3>
                      <span className={styles.teamFeatRole}>
                        {lang === "zh" ? m.roleZh : m.role}
                      </span>
                      {specialtyLabel && (
                        <span className={styles.teamFeatAreas}>{specialtyLabel}</span>
                      )}
                      <span className={styles.teamFeatViewProfile}>
                        {c.viewProfile} <ArrowRight />
                      </span>
                    </div>
                  </Link>
                );
              })()}
            </div>
          ) : areaTeam.length > 1 ? (
            /* ── Multiple lawyers: grid layout ── */
            <>
              <div className="section-head">
                <span className="eyebrow eyebrow--light">{c.areaTeam}</span>
                <h2 style={{ color: "#fff", fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
                  {area.expertsSectionHeading ?? area.navLabel}
                </h2>
                <p style={{ color: "rgba(255,255,255,0.72)" }}>
                  {area.expertsSectionLede ?? c.areaTeamLede}
                </p>
              </div>
              <div className={styles.teamRow}>
                {areaTeam.map((m) => (
                  <Link key={m.slug} href={`/people/${m.slug}`} className={styles.teamCard}>
                    <div className={styles.teamPhoto}>
                      {m.photo ? (
                        <Image src={m.photo} alt={m.name} fill sizes="90px" />
                      ) : (
                        <span className={styles.teamInitials}>
                          {m.name.split(/\s+/).slice(0, 2).map((p) => p[0] ?? "").join("").toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className={styles.teamInfo}>
                      <h3 className={styles.teamName}>{m.name}</h3>
                      <span className={styles.teamRole}>{lang === "zh" ? m.roleZh : m.role}</span>
                      <span className={styles.teamLink}>{c.viewProfile} <ArrowRight /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            /* ── Empty state ── */
            <div className={styles.teamEmpty}>
              <p>{c.areaTeamEmpty}</p>
              <Link href="/contact" className="btn btn--ghost-light">
                {t.nav.book} <ArrowRight />
              </Link>
            </div>
          )}
        </div>
      </section>
    ),

    riskItems: area.riskItems?.length ? (
      <section key="riskItems" className={`section ${styles.riskSection}`}>
        <div className="container">
          <div className={styles.riskInner}>
            <div className={styles.riskLeft}>
              {area.riskItemsEyebrow && (
                <span className="eyebrow">{area.riskItemsEyebrow}</span>
              )}
              {area.riskItemsHeading && (
                <h2 className={styles.riskHeading}>{area.riskItemsHeading}</h2>
              )}
              {area.riskItemsIntro && (
                <p className={styles.riskIntro}>{area.riskItemsIntro}</p>
              )}
            </div>
            <div className={styles.riskList}>
              {area.riskItems.map((item) => (
                <div key={item.title} className={styles.riskItem}>
                  <h3 className={styles.riskItemTitle}>{item.title}</h3>
                  <p className={styles.riskItemBody}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    ) : null,

    highlight: (area.highlightHeading || area.highlightBody) ? (
      <section key="highlight" className={`section ${styles.highlight}`}>
        <div className="container">
          <div className={styles.highlightInner}>
            <div className={styles.highlightLeft}>
              {area.highlightEyebrow && (
                <span className="eyebrow">{area.highlightEyebrow}</span>
              )}
              {area.highlightHeading && (
                <h2 className={styles.highlightHeading}>{area.highlightHeading}</h2>
              )}
              {area.highlightBody && (
                <p className={styles.highlightBody}>{area.highlightBody}</p>
              )}
            </div>
            <div className={styles.highlightRight} aria-hidden="true">
              <PropertySitePlan />
            </div>
          </div>
        </div>
      </section>
    ) : null,

    closing: (
      <section key="closing" className={styles.closing}>
        <div className="container">
          <div className={styles.closingInner}>
            <span className="eyebrow eyebrow--light" style={{ justifyContent: "center" }}>
              {area.closingKicker}
            </span>
            <h2 className={styles.closingTitle}>{renderAccent(area.closingTitle)}</h2>
            {area.closingBody && <p className={styles.closingBody}>{area.closingBody}</p>}
            <div className={styles.closingActions}>
              <Link href="/contact" className="btn btn--primary">
                {area.closingCta} <ArrowRight />
              </Link>
              {area.closingCtaSecondary && (
                <Link href="/contact" className="btn btn--ghost">
                  {area.closingCtaSecondary}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    ),
  };

  return (
    <>
      {/* Banner — photo background, dark panel overlay */}
      <section
        className={styles.areaBanner}
        style={bannerPhoto ? { backgroundImage: `url(${bannerPhoto})` } : undefined}
      >
        <div className="container">
          <div className={styles.areaBannerInner}>
            <span className={styles.areaKicker}>Expertise</span>
            <h1 className={styles.areaTitle}>
              {area.bannerTitle ? renderAccent(area.bannerTitle) : area.navLabel}
            </h1>
            <p className={styles.areaLede}>{area.heroLede}</p>
          </div>
        </div>
      </section>

      {layout.map((key) => blocks[key])}
    </>
  );
}
