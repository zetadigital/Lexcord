"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import styles from "./home.module.css";

const MAPS  = "https://maps.google.com/?q=530+Little+Collins+St+Melbourne+VIC+3000";
const EMAIL = "info@lexcord.com.au";
const PHONE_DISPLAY = "+61 3 7054 5135";
const PHONE_DIAL    = "+61370545135";

const FEATURED = [
  { slug: "commercial",    label: "Commercial" },
  { slug: "property-law",  label: "Property Law" },
  { slug: "family-law",    label: "Family Law" },
  { slug: "migration-law", label: "Migration" },
  { slug: "wills-estates", label: "Wills & Estates" },
] as const;

const LOWER = {
  en: {
    firm: {
      eyebrow: "The Firm",
      heading: "Legal advice that considers the whole matter",
      body: "Legal issues rarely exist in isolation. Lexcord brings together experience across property, commercial, migration, family and dispute matters, with advice shaped around the client's wider circumstances and practical objectives.",
      link: "About Lexcord",
    },
    why: {
      eyebrow: "Why Lexcord",
      heading: "Clear responsibility. Practical direction.",
      items: [
        {
          heading: "Personal responsibility",
          body: "The solicitor responsible for the matter remains closely involved in the advice, communication and next steps.",
        },
        {
          heading: "Connected advice",
          body: "Where different areas of law intersect, the relevant issues are considered together.",
        },
        {
          heading: "Clear next steps",
          body: "Clients understand what has been identified, what decision is required and what happens next.",
        },
      ],
    },
    speak: {
      eyebrow: "Speak With Lexcord",
      heading: "Start with the matter as it stands today",
      body: "Tell us what has happened, what you are trying to achieve and whether any deadline, transaction or court date is already in place.",
      cta: "Book a consultation",
      link: "Explore our expertise",
      officeLabel: "Melbourne office",
      phoneLabel: "Phone",
      emailLabel: "Email",
    },
  },
  zh: {
    firm: {
      eyebrow: "关于律所",
      heading: "考虑事务整体的法律建议",
      body: "法律问题很少孤立存在。Lexcord 汇集了房产、商业、移民、家庭及争议事务的经验，根据客户的整体情况与实际目标提供法律建议。",
      link: "了解 Lexcord",
    },
    why: {
      eyebrow: "为何选择 Lexcord",
      heading: "清晰的责任。务实的方向。",
      items: [
        {
          heading: "个人责任",
          body: "负责该事务的律师始终密切参与建议、沟通及后续步骤。",
        },
        {
          heading: "关联建议",
          body: "当不同法律领域相互交叉时，相关问题将被统筹考虑。",
        },
        {
          heading: "清晰的下一步",
          body: "客户了解已识别的内容、需要作出何种决策以及接下来将发生什么。",
        },
      ],
    },
    speak: {
      eyebrow: "与 Lexcord 交谈",
      heading: "从事务目前的状况开始",
      body: "告诉我们发生了什么、您希望实现什么，以及是否已有截止日期、交易或法庭日期。",
      cta: "预约咨询",
      link: "探索我们的专业领域",
      officeLabel: "墨尔本办公室",
      phoneLabel: "电话",
      emailLabel: "电子邮件",
    },
  },
} as const;

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceIcon({ slug }: { slug: string }) {
  if (slug === "commercial") return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M8 7V5a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M2 12h20" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
  if (slug === "property-law") return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" aria-hidden="true">
      <path d="M3 10.5L12 3l9 7.5V22H3V10.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <rect x="8.5" y="14" width="3" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="13" y="14" width="2.5" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
  if (slug === "family-law") return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" aria-hidden="true">
      <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="17" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M2 21c0-4 2.7-7 6-7h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M16 14c2.5 0 5 2 5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
  if (slug === "migration-law") return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M3 12h18M12 3c-2.5 2.5-4 5.5-4 9s1.5 6.5 4 9M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" aria-hidden="true">
      <path d="M6 3h12a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

export default function HomePage() {
  const { t, areaLabel, lang } = useLang();
  const h = t.pages.home;
  const effectiveLang: "en" | "zh" = lang === "en" ? "en" : "zh";
  const c = LOWER[effectiveLang];

  return (
    <>
      {/* ── Banner ── */}
      <section className={styles.banner}>
        <div className={styles.bannerLeft}>
          <div className={styles.bannerContent}>
            <h1 className={styles.bannerTitle}>{h.bannerTitle}</h1>
            <p className={styles.bannerTagline}>{h.bannerTagline}</p>
            <p className={styles.bannerLede}>{h.bannerLede}</p>
            <div className={styles.bannerCtas}>
              <Link href="/about" className={`btn btn--primary ${styles.bannerBtn}`}>
                {h.bannerCta1} <ArrowRight />
              </Link>
              <Link href="/people" className={`btn btn--ghost ${styles.bannerBtn}`}>
                {h.bannerCta2}
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.bannerRight} aria-hidden="true">
          <div className={styles.archGroup}>
            <div className={`${styles.arch} ${styles.arch1}`}>
              <Image src="/images/office/office-3.jpg" alt="" fill className={styles.archImg} sizes="15vw" />
            </div>
            <div className={`${styles.arch} ${styles.arch2}`}>
              <Image src="/images/office/office-1.jpg" alt="" fill className={styles.archImg} sizes="15vw" />
            </div>
            <div className={`${styles.arch} ${styles.arch3}`}>
              <Image src="/images/office/office-10.jpg" alt="" fill className={styles.archImg} sizes="15vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── How we can support you ── */}
      <div className={styles.servicesOuter}>
        <section className={styles.services}>
          <div className="container">
            <h2 className={styles.servicesTitle}>{h.servicesTitle}</h2>
            <div className={styles.servicesGrid}>
              {FEATURED.map((area, i) => (
                <Reveal key={area.slug} as="div" delay={i * 70} className={styles.serviceItem}>
                  <span className={styles.serviceIcon}>
                    <ServiceIcon slug={area.slug} />
                  </span>
                  <h3 className={styles.serviceName}>
                    {areaLabel(area.slug, area.label)}
                  </h3>
                  <p className={styles.serviceDesc}>{t.summaries[area.slug]}</p>
                  <Link href={`/expertise/${area.slug}`} className={styles.serviceCta}>
                    {h.servicesLearnMore} <ArrowRight />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── The Firm ── */}
      <section className={`section ${styles.firmSection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.firmContent}>
              <span className="eyebrow">{c.firm.eyebrow}</span>
              <h2 className={styles.firmHeading}>{c.firm.heading}</h2>
              <p className={styles.firmBody}>{c.firm.body}</p>
              <Link href="/about" className={styles.firmLink}>
                {c.firm.link} <ArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why Lexcord ── */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.whyHead}>
              <span className="eyebrow">{c.why.eyebrow}</span>
              <h2 className={styles.whyHeading}>{c.why.heading}</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.whyGrid}>
              {c.why.items.map((item) => (
                <div key={item.heading} className={styles.whyItem}>
                  <h3 className={styles.whyItemHeading}>{item.heading}</h3>
                  <p className={styles.whyItemBody}>{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Speak With Lexcord ── */}
      <section className={styles.speakSection}>
        <div className="container">
          <div className={styles.speakGrid}>
            <div className={styles.speakLeft}>
              <Reveal>
                <span className="eyebrow eyebrow--light">{c.speak.eyebrow}</span>
                <h2 className={styles.speakHeading}>{c.speak.heading}</h2>
                <p className={styles.speakBody}>{c.speak.body}</p>
              </Reveal>
              <Reveal delay={80}>
                <div className={styles.speakActions}>
                  <Link href="/contact" className="btn btn--primary">
                    {c.speak.cta} <ArrowRight />
                  </Link>
                  <Link href="/expertise" className={styles.speakSecondary}>
                    {c.speak.link} <ArrowRight />
                  </Link>
                </div>
              </Reveal>
            </div>
            <dl className={styles.speakDetails}>
              <Reveal delay={100}>
                <div>
                  <dt>{c.speak.officeLabel}</dt>
                  <dd>
                    <a href={MAPS} target="_blank" rel="noopener noreferrer">
                      {t.footer.address}
                    </a>
                  </dd>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div>
                  <dt>{c.speak.phoneLabel}</dt>
                  <dd><a href={`tel:${PHONE_DIAL}`}>{PHONE_DISPLAY}</a></dd>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div>
                  <dt>{c.speak.emailLabel}</dt>
                  <dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
                </div>
              </Reveal>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
