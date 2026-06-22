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

/* 5 practice areas featured in the "How we can support you" section */
const FEATURED = [
  { slug: "commercial",    label: "Commercial" },
  { slug: "property-law",  label: "Property Law" },
  { slug: "family-law",    label: "Family Law" },
  { slug: "migration-law", label: "Migration" },
  { slug: "wills-estates", label: "Wills & Estates" },
] as const;

/* ── Copy for the lower half (The Firm → Speak With Lexcord) ── */
const LOWER = {
  en: {
    firm: {
      eyebrow: "The Firm",
      heading: "Legal advice that considers the whole matter",
      paras: [
        "A legal issue rarely exists on its own. A property transaction may involve business structures, finance, leasing or foreign investment. A family matter may affect property, migration or estate planning. A commercial dispute may involve employment, intellectual property or secured interests.",
        "Lexcord brings these issues together, with solicitors who understand the wider circumstances and remain responsible for moving the matter forward.",
      ],
      link: "About Lexcord",
    },
    why: {
      eyebrow: "Why Lexcord",
      heading: "A clearer way to manage legal matters",
      intro: "The quality of legal advice depends not only on identifying the law, but also on understanding the client's objective, the practical context and the consequences of each available option.",
      items: [
        {
          num: "01",
          heading: "Personal responsibility",
          body: "The solicitor responsible for the matter remains closely involved in the advice, communication and next steps.",
        },
        {
          num: "02",
          heading: "Practical judgment",
          body: "We consider what is legally available together with timing, cost, evidence, commercial consequences and the client's wider priorities.",
        },
        {
          num: "03",
          heading: "Connected experience",
          body: "Where a matter involves more than one area of law, the relevant issues are considered together rather than treated as disconnected tasks.",
        },
        {
          num: "04",
          heading: "Clear communication",
          body: "Clients should understand what has been identified, what decision is required and what work will happen next.",
        },
      ],
    },
    connected: {
      eyebrow: "Connected Advice",
      heading: "When one matter reaches into another",
      intro: "Legal matters do not always remain within a single practice area. Our solicitors consider the relevant connections so that decisions made in one part of the matter do not create unnecessary problems elsewhere.",
      items: [
        {
          heading: "Property and business",
          body: "A property acquisition may involve ownership structures, finance, leasing, foreign investment or a future business operation.",
        },
        {
          heading: "Family and personal affairs",
          body: "Separation may affect property ownership, financial agreements, parenting arrangements, migration status and estate planning.",
        },
        {
          heading: "Business and people",
          body: "Commercial decisions may involve contracts, employment, intellectual property, shareholder arrangements and disputes.",
        },
        {
          heading: "Australia and overseas",
          body: "Cross-border matters may require Australian legal advice to be coordinated with appropriately qualified professionals in another jurisdiction.",
        },
      ],
      link: "Explore our expertise",
    },
    working: {
      eyebrow: "Working With Lexcord",
      heading: "Clear responsibility from the outset",
      intro: "Clients should understand who is handling the matter, what requires attention and what the next decision will involve.",
      items: [
        {
          heading: "Understand the position",
          body: "We begin with the relevant facts, documents, objectives and practical circumstances surrounding the matter.",
        },
        {
          heading: "Explain the options",
          body: "We identify the material legal issues and explain the available pathways without unnecessary complexity.",
        },
        {
          heading: "Move the matter forward",
          body: "Responsibilities, next steps, timing and costs are identified clearly so that the matter does not become an unexplained administrative process.",
        },
      ],
    },
    speak: {
      eyebrow: "Speak With Lexcord",
      heading: "Start with the matter as it stands today",
      body: "Tell us what has happened, what you are trying to achieve and whether any deadline, transaction or court date is already in place. We will help identify the appropriate next step and the area of the firm best placed to assist.",
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
      paras: [
        "法律问题很少独立存在。一项房产交易可能涉及商业结构、融资、租赁或外国投资。一件家庭事务可能影响房产、移民或遗产规划。一起商业纠纷可能牵涉雇佣关系、知识产权或担保权益。",
        "Lexcord 将这些问题整合处理，旗下律师深入了解更广泛的情况，并始终对推动事务进展负责。",
      ],
      link: "了解 Lexcord",
    },
    why: {
      eyebrow: "为何选择 Lexcord",
      heading: "更清晰的法律事务管理方式",
      intro: "法律建议的质量不仅取决于能否识别法律问题，还取决于是否理解客户目标、实际背景以及各可用选项的后果。",
      items: [
        {
          num: "01",
          heading: "个人责任",
          body: "负责该事务的律师始终密切参与建议、沟通及后续步骤的跟进。",
        },
        {
          num: "02",
          heading: "务实判断",
          body: "我们综合考量法律上的可用选项，以及时间安排、成本、证据、商业影响和客户的更广泛优先事项。",
        },
        {
          num: "03",
          heading: "关联经验",
          body: "当事务涉及多个法律领域时，相关问题将被统筹考虑，而非作为互不相关的任务分别处理。",
        },
        {
          num: "04",
          heading: "清晰沟通",
          body: "客户应能了解已识别的内容、需要作出何种决策，以及接下来将开展哪些工作。",
        },
      ],
    },
    connected: {
      eyebrow: "关联建议",
      heading: "当一项事务延伸至另一领域",
      intro: "法律事务并不总是局限于单一执业领域。我们的律师会考量相关的关联性，确保事务某一部分的决策不会对其他部分造成不必要的问题。",
      items: [
        {
          heading: "房产与商业",
          body: "一项房产收购可能涉及所有权结构、融资、租赁、外国投资或未来的商业运营。",
        },
        {
          heading: "家庭与个人事务",
          body: "离婚可能影响房产所有权、财务协议、子女安排、移民身份和遗产规划。",
        },
        {
          heading: "商业与人员",
          body: "商业决策可能涉及合同、雇佣关系、知识产权、股东安排及纠纷。",
        },
        {
          heading: "澳大利亚与海外",
          body: "跨境事务可能需要将澳大利亚法律建议与另一司法管辖区的具备适当资质的专业人士进行协调。",
        },
      ],
      link: "探索我们的专业领域",
    },
    working: {
      eyebrow: "与 Lexcord 合作",
      heading: "从一开始明确责任",
      intro: "客户应了解谁在处理事务、哪些事项需要关注，以及下一个决策将涉及什么。",
      items: [
        {
          heading: "了解立场",
          body: "我们从事务周围的相关事实、文件、目标和实际情况入手。",
        },
        {
          heading: "解释选项",
          body: "我们识别重要的法律问题，并在不添加不必要复杂性的情况下解释可用路径。",
        },
        {
          heading: "推进事务",
          body: "明确各方责任、后续步骤、时间安排和费用，确保事务不会变成无法解释的行政流程。",
        },
      ],
    },
    speak: {
      eyebrow: "与 Lexcord 交谈",
      heading: "从事务目前的状况开始",
      body: "告诉我们发生了什么、您希望实现什么，以及是否已有截止日期、交易或法庭日期。我们将协助确定适当的下一步及律所最适合协助您的领域。",
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

/* QuoteMark preserved — testimonials section restored when genuine feedback is available */
function QuoteMark() {
  return (
    <svg viewBox="0 0 40 32" width="30" height="24" fill="currentColor" aria-hidden="true">
      <path d="M0 32V18C0 8 5 1.6 15 0l2 5C11 6.5 8 10 8 15h6v17H0zm22 0V18C22 8 27 1.6 37 0l2 5c-6 1.5-9 5-9 10h6v17H22z" />
    </svg>
  );
}

export default function HomePage() {
  const { t, areaLabel, lang } = useLang();
  const h = t.pages.home;
  const effectiveLang: "en" | "zh" = lang === "en" ? "en" : "zh";
  const c = LOWER[effectiveLang];

  /* Testimonials preserved for future reinstatement with genuine client feedback */
  const _marquee = [...h.testimonials, ...h.testimonials];
  void _marquee;
  void QuoteMark;

  return (
    <>
      {/* ── Banner — split layout ── */}
      <section className={styles.banner}>
        {/* Left — white, text content */}
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

        {/* Right — three arched office photos */}
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
        <div className={`container ${styles.firmInner}`}>
          <div className={styles.firmText}>
            <Reveal>
              <span className="eyebrow">{c.firm.eyebrow}</span>
              <h2 className={styles.firmHeading}>{c.firm.heading}</h2>
              <div className={styles.firmParas}>
                {c.firm.paras.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <Link href="/about" className={styles.firmLink}>
                {c.firm.link} <ArrowRight />
              </Link>
            </Reveal>
          </div>
          {/* Direct grid child — no Reveal wrapper so order: -1 works at mobile */}
          <div className={styles.firmPhoto}>
            <Image
              src="/images/office/office-4.jpg"
              alt="Lexcord Lawyers office interior, Melbourne"
              fill
              sizes="(max-width: 860px) 100vw, 55vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
          </div>
        </div>
      </section>

      {/* ── Why Lexcord ── */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.whyHead}>
              <span className="eyebrow">{c.why.eyebrow}</span>
              <h2 className={styles.whyHeading}>{c.why.heading}</h2>
              <p className={styles.whyIntro}>{c.why.intro}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.whyGrid}>
              {c.why.items.map((item) => (
                <div key={item.num} className={styles.whyItem}>
                  <span className={styles.whyNum}>{item.num}</span>
                  <h3 className={styles.whyItemHeading}>{item.heading}</h3>
                  <p className={styles.whyItemBody}>{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Connected Advice ── */}
      <section className={`section ${styles.connectedSection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.connectedHead}>
              <span className="eyebrow">{c.connected.eyebrow}</span>
              <h2 className={styles.connectedHeading}>{c.connected.heading}</h2>
              <p className={styles.connectedIntro}>{c.connected.intro}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.connectedGrid}>
              {c.connected.items.map((item) => (
                <div key={item.heading} className={styles.connectedItem}>
                  <h3 className={styles.connectedItemHeading}>{item.heading}</h3>
                  <p className={styles.connectedItemBody}>{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <Link href="/expertise" className={styles.connectedLink}>
              {c.connected.link} <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Office image break ── */}
      <div className={styles.imageBreak}>
        <div className={styles.imageBreakInner}>
          <Image
            src="/images/office/office-9.jpg"
            alt="Meeting room at Lexcord Lawyers, Melbourne"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
        </div>
      </div>

      {/* ── Working With Lexcord ── */}
      <section className={`section ${styles.workingSection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.workingHead}>
              <span className="eyebrow">{c.working.eyebrow}</span>
              <h2 className={styles.workingHeading}>{c.working.heading}</h2>
              <p className={styles.workingIntro}>{c.working.intro}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.workingGrid}>
              {c.working.items.map((item) => (
                <div key={item.heading} className={styles.workingItem}>
                  <h3 className={styles.workingItemHeading}>{item.heading}</h3>
                  <p className={styles.workingItemBody}>{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/*
        ── Client Feedback — hidden until genuine approved testimonials are available ──
        Restore this section by uncommenting. Do not replace with unattributed or fabricated quotes.

      <section className={`section ${styles.say}`}>
        <div className="container">
          <div className={styles.sayHead}>
            <span className="eyebrow eyebrow--light">{h.sayEyebrow}</span>
            <h2 className={styles.sayTitle}>{h.sayTitle}</h2>
          </div>
        </div>
        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            {_marquee.map((tm, i) => (
              <figure key={i} className={styles.quoteCard} aria-hidden={i >= h.testimonials.length}>
                <span className={styles.quoteMark}><QuoteMark /></span>
                <blockquote className={styles.quoteText}>{tm.quote}</blockquote>
                <figcaption className={styles.quoteName}>
                  {tm.name} <span>· {tm.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      */}

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
