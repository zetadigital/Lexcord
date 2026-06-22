"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { team } from "@/data/people";
import styles from "./about.module.css";

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function initials(name: string) {
  return name.split(/\s+/).slice(0, 2).map((p) => p[0] ?? "").join("").toUpperCase();
}

function PhotoPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div className={`${styles.photo}${className ? ` ${className}` : ""}`} aria-hidden="true">
      <span className={styles.photoLabel}>{label}</span>
    </div>
  );
}

const CONTENT = {
  en: {
    hero: {
      eyebrow: "About Lexcord",
      heading: "A law firm built around the matter in front of us",
      lede: "Lexcord is a Melbourne-based law firm advising individuals, families and businesses across property, commercial, migration, disputes and personal legal matters.",
      lede2: "We approach each matter with careful attention, practical judgment and a clear understanding that the legal issue is only one part of the client's wider circumstances.",
    },
    firm: {
      eyebrow: "The Firm",
      heading: "Thoughtful advice. Practical direction. Personal responsibility.",
      paras: [
        "Lexcord brings together solicitors working across a broad range of interconnected legal matters. Some clients come to us for a single transaction. Others require assistance across several stages of a business, family or personal matter.",
        "What remains consistent is the way the work is approached: the solicitor responsible for the matter understands the background, explains the available options and remains accountable for moving the work forward.",
        "We do not treat legal work as a sequence of disconnected tasks. Where different areas of law intersect, our team works together so that the advice reflects the matter as a whole.",
      ],
    },
    how: {
      eyebrow: "How We Work",
      heading: "A consistent standard across every matter",
      intro: "Different matters require different strategies, but the principles guiding the work remain consistent.",
      items: [
        { title: "Understand the context", body: "We begin with the facts, the client's objective and the practical circumstances surrounding the legal issue." },
        { title: "Explain the position", body: "We identify the material legal issues and explain the available options in language that supports an informed decision." },
        { title: "Take responsibility", body: "The solicitor handling the matter remains accountable for the work, communication and next steps rather than treating the file as an administrative process." },
        { title: "Work across boundaries", body: "Where a matter involves more than one area of law, we coordinate the relevant experience within the firm and, where appropriate, with external professionals." },
      ],
    },
    practice: {
      eyebrow: "Our Practice",
      heading: "Advice across the matters that shape businesses, individuals and families",
      body: "Our work spans transactions, advisory matters, applications, court proceedings and disputes. The breadth of the practice allows us to recognise issues that may not sit neatly within one legal category.",
      link: "Explore our expertise",
    },
    people: {
      eyebrow: "Our People",
      heading: "The people responsible for your matter",
      body: "Lexcord is led by admitted solicitors who remain closely involved in the work entrusted to the firm. Our team brings experience across different areas of law, professional backgrounds and jurisdictions, while sharing one standard of care and responsibility.",
      link: "Meet the full team",
      viewProfile: "View profile",
    },
    melb: {
      eyebrow: "Melbourne Based, Internationally Connected",
      heading: "Local advice for matters that cross borders",
      paras: [
        "Lexcord is based in central Melbourne and acts for clients whose personal, business and family arrangements often extend beyond Australia.",
        "Where a matter involves another jurisdiction, we identify the Australian legal issues and, where required, work with appropriately qualified lawyers and professionals overseas. The scope of each firm's role is kept clear so that the client understands who is responsible for each part of the matter.",
        "Our team's multilingual and international backgrounds also assist us in understanding the commercial, cultural and practical context in which cross-border matters arise.",
      ],
    },
    standards: {
      eyebrow: "Our Standards",
      heading: "The way the work is done matters",
      items: [
        { title: "Professional responsibility", body: "We approach conflicts, confidentiality, costs and professional obligations with care and transparency." },
        { title: "Clear communication", body: "Clients should understand what is being done, why it is being done and what decision or action is required from them." },
        { title: "A sustainable practice", body: "Good legal work depends on people who can exercise sound judgment. We aim to maintain a professional environment in which our team can work carefully, responsibly and over the long term." },
      ],
    },
    glance: {
      eyebrow: "Lexcord at a Glance",
      items: [
        "Melbourne CBD office",
        "Nine practice areas",
        "Individuals, families and businesses",
        "Multilingual and cross-border capability",
        "Solicitor-led matters",
        "In-person and virtual appointments",
      ],
    },
    closing: {
      eyebrow: "Speak With Lexcord",
      heading: "Start with the matter as it stands today",
      body: "Tell us what has happened, what you are trying to achieve and whether any deadline, transaction or court date is already in place. We will help identify the appropriate next step and the solicitor best placed to assist.",
      cta: "Book a consultation",
      link: "Explore our expertise",
    },
  },
  zh: {
    hero: {
      eyebrow: "关于 Lexcord",
      heading: "以眼前每一件事务为中心的律师事务所",
      lede: "Lexcord 是一家位于墨尔本的律师事务所，为个人、家庭及企业提供房产、商业、移民、纠纷及个人法律事务方面的法律建议。",
      lede2: "我们以细致的关注和务实的判断力处理每一件事务，并清楚认识到法律问题只是客户整体处境的一部分。",
    },
    firm: {
      eyebrow: "关于律所",
      heading: "审慎建议。务实指引。个人责任。",
      paras: [
        "Lexcord 汇聚了在广泛互联法律领域执业的律师。部分客户因单一交易而委托我们，另一些则在商业、家庭或个人事务的多个阶段需要我们的协助。",
        "始终保持一致的是处理工作的方式：负责该事务的律师了解背景、解释可用选项，并对推动工作进展负责。",
        "我们不将法律工作视为一系列互不相关的任务。当不同法律领域相互交叉时，我们的团队协同工作，确保建议能够反映事务的整体情况。",
      ],
    },
    how: {
      eyebrow: "我们的工作方式",
      heading: "每一件事务都遵循一致的标准",
      intro: "不同事务需要不同的策略，但指导工作的原则始终如一。",
      items: [
        { title: "了解背景", body: "我们从事实、客户目标以及法律问题周围的实际情况入手。" },
        { title: "解释立场", body: "我们识别重要的法律问题，并用支持知情决策的语言解释可用选项。" },
        { title: "承担责任", body: "负责该事务的律师对工作、沟通及后续步骤保持问责，而非将档案视为行政流程。" },
        { title: "跨领域协作", body: "当事务涉及多个法律领域时，我们协调律所内的相关经验，并在适当情况下与外部专业人士合作。" },
      ],
    },
    practice: {
      eyebrow: "我们的执业领域",
      heading: "为影响企业、个人与家庭的事务提供建议",
      body: "我们的工作涵盖交易、咨询事务、申请、法庭诉讼及纠纷。执业领域的广度使我们能够识别可能不属于单一法律类别的问题。",
      link: "探索我们的专业领域",
    },
    people: {
      eyebrow: "我们的团队",
      heading: "负责您事务的人",
      body: "Lexcord 由注册律师领导，他们与委托给律所的工作保持密切联系。我们的团队在不同法律领域、职业背景和司法管辖区均有丰富经验，同时秉持同一标准的关怀与责任。",
      link: "认识全体团队",
      viewProfile: "查看简介",
    },
    melb: {
      eyebrow: "立足墨尔本，连接国际",
      heading: "跨境事务的本地法律建议",
      paras: [
        "Lexcord 位于墨尔本市中心，为个人、商业及家庭安排经常延伸至澳大利亚以外的客户提供服务。",
        "当事务涉及另一司法管辖区时，我们识别澳大利亚法律问题，并在需要时与海外具备适当资质的律师和专业人士合作。每家律所的职责范围保持清晰，以便客户了解谁负责事务的每个部分。",
        "我们团队的多语言和国际背景也有助于我们理解跨境事务发生的商业、文化和实际背景。",
      ],
    },
    standards: {
      eyebrow: "我们的标准",
      heading: "工作的方式同样重要",
      items: [
        { title: "专业责任", body: "我们以关怀和透明的态度处理利益冲突、保密、费用及专业义务。" },
        { title: "清晰沟通", body: "客户应了解正在做什么、为什么要做，以及需要他们作出什么决定或采取什么行动。" },
        { title: "可持续的执业", body: "良好的法律工作取决于能够做出正确判断的人。我们致力于维护一个专业环境，使团队能够在其中认真、负责且长期地工作。" },
      ],
    },
    glance: {
      eyebrow: "律所概览",
      items: [
        "墨尔本 CBD 办公室",
        "九个执业领域",
        "为个人、家庭及企业提供建议",
        "多语言及跨境服务能力",
        "律师主导的事务",
        "面对面及视频预约",
      ],
    },
    closing: {
      eyebrow: "与 Lexcord 交谈",
      heading: "从事务目前的状况开始",
      body: "告诉我们发生了什么、您希望实现什么，以及是否已有截止日期、交易或法庭日期。我们将协助确定适当的下一步及最适合协助您的律师。",
      cta: "预约咨询",
      link: "探索我们的专业领域",
    },
  },
} as const;

const PRACTICE_AREAS = [
  { label: "Property Law", labelZh: "房产法", slug: "property-law" },
  { label: "Conveyancing", labelZh: "房产过户", slug: "conveyancing" },
  { label: "Commercial", labelZh: "商业法", slug: "commercial" },
  { label: "Family Law", labelZh: "家庭法", slug: "family-law" },
  { label: "Wills & Estates", labelZh: "遗嘱与遗产", slug: "wills-estates" },
  { label: "Intellectual Property", labelZh: "知识产权", slug: "intellectual-property" },
  { label: "Criminal Law", labelZh: "刑事法", slug: "criminal-law" },
  { label: "Notary Public", labelZh: "公证人服务", slug: "notary-public" },
  { label: "Migration Law", labelZh: "移民法", slug: "migration-law" },
];

const FEATURED_SLUGS = ["katherine-ho", "elijah-feng", "justin-ho", "chang-qi"];

export function AboutContent() {
  const { lang } = useLang();
  const c = CONTENT[lang];
  const featured = FEATURED_SLUGS.map((slug) => team.find((m) => m.slug === slug)).filter(Boolean) as typeof team;

  return (
    <main>
      {/* 1. SPLIT HERO */}
      <section className={styles.hero} aria-label={c.hero.eyebrow}>
        <div className={styles.heroText}>
          <span className="eyebrow">{c.hero.eyebrow}</span>
          <h1 className={styles.heroTitle}>{c.hero.heading}</h1>
          <p className={styles.heroLede}>{c.hero.lede}</p>
          <p className={styles.heroLede2}>{c.hero.lede2}</p>
        </div>
        <PhotoPlaceholder label="OFFICE HERO — wide landscape" className={styles.heroPhoto} />
      </section>

      {/* 2. THE FIRM */}
      <section className={`section ${styles.firmSection}`}>
        <div className={`container ${styles.firmInner}`}>
          <div className={styles.firmLeft}>
            <Reveal>
              <span className="eyebrow">{c.firm.eyebrow}</span>
              <h2 className={styles.firmHeading}>{c.firm.heading}</h2>
            </Reveal>
          </div>
          <div className={styles.firmRight}>
            {c.firm.paras.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PHOTO BREAK — full-width office photo */}
      <div className={styles.photoBreak}>
        <PhotoPlaceholder label="OFFICE INTERIOR — wide landscape (21:8 ratio)" className={styles.photoBreakInner} />
      </div>

      {/* 4. HOW WE WORK */}
      <section className={`section ${styles.principlesSection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.principlesHead}>
              <span className="eyebrow">{c.how.eyebrow}</span>
              <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem", textWrap: "balance" as const }}>{c.how.heading}</h2>
              <p className={styles.principlesIntro}>{c.how.intro}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.principlesGrid}>
              {c.how.items.map((item, i) => (
                <div key={i} className={styles.principle}>
                  <h3 className={styles.principleTitle}>{item.title}</h3>
                  <p className={styles.principleBody}>{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. OUR PRACTICE */}
      <section className={`section ${styles.practiceSection}`}>
        <div className={`container ${styles.practiceInner}`}>
          <div className={styles.practiceLeft}>
            <Reveal>
              <span className="eyebrow">{c.practice.eyebrow}</span>
              <h2 className={styles.practiceHeading}>{c.practice.heading}</h2>
              <p className={styles.practiceBody}>{c.practice.body}</p>
              <Link href="/expertise" className={styles.practiceLink}>
                {c.practice.link} <ArrowRight />
              </Link>
            </Reveal>
          </div>
          <nav className={styles.practiceRight} aria-label={c.practice.eyebrow}>
            {PRACTICE_AREAS.map((area, i) => (
              <Reveal key={area.slug} delay={i * 50}>
                <Link href={`/expertise/${area.slug}`} className={styles.areaRow}>
                  {lang === "zh" ? area.labelZh : area.label}
                  <span>→</span>
                </Link>
              </Reveal>
            ))}
          </nav>
        </div>
      </section>

      {/* 6. OUR PEOPLE */}
      <section className={`section ${styles.peopleSection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.peopleHead}>
              <span className="eyebrow">{c.people.eyebrow}</span>
              <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem", textWrap: "balance" as const }}>{c.people.heading}</h2>
              <p className={styles.peopleLede}>{c.people.body}</p>
            </div>
          </Reveal>
          <div className={styles.peopleGrid}>
            {featured.map((member, i) => (
              <Reveal key={member.slug} delay={i * 80}>
                <div className={styles.personCard}>
                  <div className={styles.personAvatar}>
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="100px"
                        style={{ objectFit: "cover", objectPosition: member.photoPosition ?? "center 15%" }}
                      />
                    ) : (
                      <span className={styles.personInitials}>{initials(member.name)}</span>
                    )}
                  </div>
                  <div>
                    <p className={styles.personName}>{member.name}</p>
                    <p className={styles.personRole}>{lang === "zh" ? member.roleZh : member.role}</p>
                    <Link href={`/people/${member.slug}`} className={styles.personProfileLink}>
                      {c.people.viewProfile} <ArrowRight />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link href="/people" className={styles.peopleSeeAll}>
              {c.people.link} <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 7. TEAM / WORKING PHOTO */}
      <div className={styles.teamPhoto}>
        <PhotoPlaceholder label="TEAM PHOTOGRAPH or WORKING PHOTOGRAPH — wide (16:7 ratio)" className={styles.teamPhotoInner} />
      </div>

      {/* 8. MELBOURNE & CROSS-BORDER */}
      <section className={`section ${styles.melbSection}`}>
        <div className={`container ${styles.melbInner}`}>
          <div className={styles.melbText}>
            <Reveal>
              <span className="eyebrow">{c.melb.eyebrow}</span>
              <h2 className={styles.melbHeading}>{c.melb.heading}</h2>
            </Reveal>
            {c.melb.paras.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <PhotoPlaceholder label="OFFICE EXTERIOR or CITY — portrait (4:3 ratio)" className={styles.melbPhoto} />
          </Reveal>
        </div>
      </section>

      {/* 9. OUR STANDARDS */}
      <section className={`section ${styles.standardsSection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.standardsHead}>
              <span className="eyebrow eyebrow--light">{c.standards.eyebrow}</span>
              <h2 className={styles.standardsHeading}>{c.standards.heading}</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.standardsGrid}>
              {c.standards.items.map((item, i) => (
                <div key={i} className={styles.standardsCol}>
                  <h3 className={styles.standardsColTitle}>{item.title}</h3>
                  <p className={styles.standardsColBody}>{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. LEXCORD AT A GLANCE */}
      <section className={`section ${styles.glanceSection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.glanceHead}>
              <span className="eyebrow">{c.glance.eyebrow}</span>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.glanceGrid}>
              {c.glance.items.map((item, i) => (
                <div key={i} className={styles.glanceItem}>{item}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11. CLOSING CTA */}
      <section className={styles.aboutClosing}>
        <div className={`container ${styles.closingInner}`}>
          <div className={styles.closingText}>
            <Reveal>
              <span className="eyebrow eyebrow--light">{c.closing.eyebrow}</span>
              <h2 className={styles.closingHeading}>{c.closing.heading}</h2>
              <p className={styles.closingBody}>{c.closing.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <div className={styles.closingActions}>
                <Link href="/contact" className="btn btn--primary">
                  {c.closing.cta}
                </Link>
                <Link href="/expertise" className={styles.closingSecondaryLink}>
                  {c.closing.link} <ArrowRight />
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <PhotoPlaceholder label="MEETING ROOM or OFFICE — landscape (4:3 ratio)" className={styles.closingPhoto} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
