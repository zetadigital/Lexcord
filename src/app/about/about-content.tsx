"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { team } from "@/data/people";
import { practiceAreas } from "@/data/practices";
import styles from "./about.module.css";

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0] ?? "")
    .join("")
    .toUpperCase();
}

const CONTENT = {
  en: {
    hero: {
      eyebrow: "About Lexcord",
      heading: "A law firm built around the matter in front of us",
      lede: "Lexcord is a Melbourne-based law firm advising individuals, families and businesses across property, commercial, migration, disputes and personal legal matters.",
      lede2: "We approach each matter with careful attention, practical judgment and an understanding that the legal issue is often only one part of the client's wider circumstances.",
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
    practice: {
      eyebrow: "Our Practice",
      heading: "Legal advice across matters that shape individuals, families and businesses",
      body: "Our work spans transactions, advisory matters, applications, court proceedings and disputes. The breadth of the practice allows us to recognise issues that may not sit neatly within one legal category.",
      link: "Explore our expertise",
    },
    people: {
      eyebrow: "Our People",
      heading: "The people responsible for your matter",
      body: "Lexcord is led by admitted solicitors who remain closely involved in the work entrusted to the firm. Our team brings together different legal, professional and international backgrounds, while working to a consistent standard of care and responsibility.",
      link: "Meet the full team",
      viewProfile: "View profile",
    },
    melb: {
      eyebrow: "Melbourne Based, Internationally Connected",
      heading: "Local advice for matters that cross borders",
      paras: [
        "Lexcord is based in central Melbourne and assists clients whose personal, family and commercial arrangements often extend beyond Australia.",
        "Where another jurisdiction is involved, we identify the Australian legal issues and, where required, coordinate with appropriately qualified lawyers and professionals overseas. The scope of each adviser's role remains clear throughout the matter.",
        "Our team's multilingual and international backgrounds also assist us in understanding the commercial, cultural and practical setting in which cross-border matters arise.",
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
      lede2: "我们以细致的关注和务实的判断力处理每一件事务，并认识到法律问题往往只是客户整体处境的一部分。",
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
    practice: {
      eyebrow: "我们的执业领域",
      heading: "为影响个人、家庭及企业的事务提供法律建议",
      body: "我们的工作涵盖交易、咨询事务、申请、法庭诉讼及纠纷。执业领域的广度使我们能够识别可能不属于单一法律类别的问题。",
      link: "探索我们的专业领域",
    },
    people: {
      eyebrow: "我们的团队",
      heading: "负责您事务的人",
      body: "Lexcord 由注册律师领导，他们与委托给律所的工作保持密切联系。我们的团队汇聚了不同的法律、职业及国际背景，同时遵循一致的关怀与责任标准开展工作。",
      link: "认识全体团队",
      viewProfile: "查看简介",
    },
    melb: {
      eyebrow: "立足墨尔本，连接国际",
      heading: "跨境事务的本地法律建议",
      paras: [
        "Lexcord 位于墨尔本市中心，协助个人、家庭及商业安排经常延伸至澳大利亚以外的客户。",
        "当涉及另一司法管辖区时，我们识别澳大利亚法律问题，并在必要时与相关境外司法管辖区具备适当资质的律师及其他专业人士进行协调。各顾问的职责范围在整个事务过程中保持清晰。",
        "我们团队的多语言和国际背景也有助于我们理解跨境事务发生的商业、文化和实际背景。",
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

const GUIDES = {
  en: {
    eyebrow: "What Guides Us",
    heading: "The principles behind our practice",
    intro:
      "Our approach is shaped by the responsibility we accept to our clients, the standards we apply to our work and the kind of practice we are building for the long term.",
    mv: [
      {
        num: "01",
        heading: "Mission",
        subtitle: "",
        paras: [
          "We provide considered legal services to individuals, families and businesses across Australia, particularly when the legal position is complex or the appropriate way forward is not immediately clear.",
          "We begin with the client's circumstances, objectives and wider context rather than applying a standard response to every matter. Each matter is approached on its own facts, with advice and strategy developed for the situation in front of us.",
          "Our role is not limited to identifying the law. We help clients understand their position, make informed decisions and move towards a practical resolution with a solicitor who remains responsible for the matter.",
        ],
      },
      {
        num: "02",
        heading: "Vision",
        subtitle: "",
        paras: [
          "Our vision is to build a law firm in which clients can understand their legal position, exercise their rights and make important decisions with clarity.",
          "We are committed to developing the depth of our practice across each area in which we work, while maintaining personal responsibility for the matters entrusted to us. As Lexcord grows, our aim is to become a recognised and trusted Australian law firm for clients whose personal and commercial affairs may also extend across the Asia-Pacific region.",
          "We cannot determine every outcome, but we can ensure that each client's position is carefully considered, clearly presented and pursued through the most appropriate available pathway.",
        ],
      },
    ],
    triple: [
      {
        num: "03",
        heading: "Global Capability",
        subtitle: "",
        paras: [
          "Our team brings together lawyers with international backgrounds and experience assisting clients whose personal, family and commercial matters extend beyond Australia.",
          "In cross-border matters, we identify and advise on the Australian legal issues while coordinating, where required, with appropriately qualified lawyers and other professionals in the relevant overseas jurisdiction. Each adviser's role remains clearly defined so that clients understand how the different parts of the matter are being managed.",
          "This combination of Australian legal experience, international perspective and professional collaboration allows us to approach cross-border matters with a clearer understanding of their legal, cultural and practical context.",
        ],
      },
      {
        num: "04",
        heading: "Sustainability",
        subtitle: "A practice built for the long term",
        paras: [
          "We believe a sustainable legal practice is built on professional responsibility, sound judgment and relationships that can endure beyond a single matter.",
          "We manage conflicts, confidentiality, costs and professional obligations with care. The interests of the firm must not displace the duties owed to the client or the standards required of legal practitioners.",
          "By working transparently, accepting responsibility for our advice and maintaining appropriate professional boundaries, we aim to build long-term trust with clients, colleagues and the wider profession.",
        ],
      },
      {
        num: "05",
        heading: "Well-being",
        subtitle: "",
        paras: [
          "The quality of legal work depends on people who have the time, support and professional environment required to exercise sound judgment.",
          "We seek to maintain a workplace in which our team can develop, take responsibility for their work and raise concerns when support is needed. We recognise the pressures associated with legal practice and aim to manage workloads and working relationships responsibly.",
          "Supporting the long-term well-being of our people is not separate from client service. It contributes to careful work, clear communication and a more stable professional team.",
        ],
      },
    ],
  },
  zh: {
    eyebrow: "我们的理念",
    heading: "引导我们执业的原则",
    intro:
      "我们的工作方式由我们对客户所承担的责任、我们对工作所坚持的标准，以及我们致力于长远建立的律所形态共同塑造。",
    mv: [
      {
        num: "01",
        heading: "使命",
        subtitle: "",
        paras: [
          "我们为澳大利亚的个人、家庭及企业提供审慎的法律服务，尤其是在法律立场复杂或前进方向不甚明朗的情况下。",
          "我们从客户的具体情况、目标及更广泛的背景入手，而非对每一件事务套用固定的应对方式。每一件事务均以其自身的事实为基础，建议与策略均为当前情况量身制定。",
          "我们的职责不止于识别法律问题。我们帮助客户理解自身立场、做出知情决策，并在负责该事务的律师的全程陪同下，朝着务实的解决方案稳步推进。",
        ],
      },
      {
        num: "02",
        heading: "愿景",
        subtitle: "",
        paras: [
          "我们的愿景是建立一家让客户能够清晰了解自身法律立场、行使权利并作出重要决策的律师事务所。",
          "我们致力于深化各执业领域的专业深度，同时对委托给我们的每一件事务保持个人责任。随着 Lexcord 的成长，我们的目标是成为一家为个人及商业事务延伸至亚太地区的客户所认可和信赖的澳大利亚律师事务所。",
          "我们无法决定每一个结果，但我们能够确保每位客户的处境得到认真考量、清晰呈现，并通过最适合的可行途径加以推进。",
        ],
      },
    ],
    triple: [
      {
        num: "03",
        heading: "全球能力",
        subtitle: "",
        paras: [
          "我们的团队汇聚了具有国际背景的律师，擅长协助个人、家庭及商业事务延伸至澳大利亚以外的客户。",
          "在跨境事务中，我们识别并就澳大利亚法律问题提供建议，同时在必要时与相关境外司法管辖区具备适当资质的律师及其他专业人士进行协调。各顾问的职责范围始终保持清晰，以便客户了解事务各部分的处理方式。",
          "这种结合澳大利亚法律经验、国际视野与专业协作的工作方式，使我们能够以更清晰的法律、文化及实际背景理解来处理跨境事务。",
        ],
      },
      {
        num: "04",
        heading: "可持续发展",
        subtitle: "为长远而建立的律所",
        paras: [
          "我们认为，一个可持续的律所应建立在专业责任、健全判断和能够超越单一事务而延续的客户关系之上。",
          "我们以谨慎的态度处理利益冲突、保密义务、费用及专业职责。律所利益不得凌驾于对客户所负义务或执业者应遵守的标准之上。",
          "通过透明地开展工作、为我们的建议承担责任并维持适当的专业边界，我们致力于与客户、同事及更广泛的法律界建立长期信任。",
        ],
      },
      {
        num: "05",
        heading: "员工健康",
        subtitle: "",
        paras: [
          "法律工作的质量取决于团队成员拥有所需的时间、支持和专业环境，以做出健全的判断。",
          "我们致力于维护一个工作环境，使团队能够在其中成长、对自己的工作负责，并在需要支持时提出关切。我们认识到法律执业的压力，并致力于以负责任的方式管理工作量和工作关系。",
          "支持团队的长期健康发展并非独立于客户服务之外。它有助于细致的工作、清晰的沟通，以及一个更稳定的专业团队。",
        ],
      },
    ],
  },
} as const;

const FEATURED_SLUGS = ["katherine-ho", "elijah-feng", "justin-ho", "chang-qi"];

export function AboutContent() {
  const { lang, areaLabel } = useLang();
  const effectiveLang: "en" | "zh" = lang === "en" ? "en" : "zh";
  const c = CONTENT[effectiveLang];
  const g = GUIDES[effectiveLang];
  const featured = FEATURED_SLUGS.map((slug) =>
    team.find((m) => m.slug === slug),
  ).filter(Boolean) as typeof team;

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
        <div className={styles.heroPhoto}>
          <Image
            src="/images/office/office-1.jpg"
            alt="Lexcord Lawyers Melbourne office"
            fill
            priority
            sizes="(max-width: 860px) 100vw, 55vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
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

      {/* 3. WIDE PHOTO BREAK */}
      <div className={styles.photoBreak}>
        <div className={styles.photoBreakInner}>
          <Image
            src="/images/office/office-3.jpg"
            alt="Lexcord Lawyers office interior"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 35%" }}
          />
        </div>
      </div>

      {/* 4. WHAT GUIDES US */}
      <section className={`section ${styles.guidesSection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.guidesHead}>
              <span className="eyebrow">{g.eyebrow}</span>
              <h2
                style={{
                  fontSize: "var(--text-2xl)",
                  marginTop: "1rem",
                  textWrap: "balance" as const,
                  fontFamily: "var(--font-display)",
                  color: "var(--navy-900)",
                }}
              >
                {g.heading}
              </h2>
              <p className={styles.guidesIntro}>{g.intro}</p>
            </div>
          </Reveal>

          {/* Mission + Vision — 2-col */}
          <Reveal>
            <div className={styles.guidesMvRow}>
              {g.mv.map((principle) => (
                <div key={principle.num} className={styles.guidesPanel}>
                  <span className={styles.guidesNum}>{principle.num}</span>
                  <h3 className={styles.guidesHeading}>{principle.heading}</h3>
                  {principle.subtitle ? (
                    <p className={styles.guidesSubtitle}>{principle.subtitle}</p>
                  ) : null}
                  <div className={styles.guidesBody}>
                    {principle.paras.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Global Capability + Sustainability + Well-being — 3-col */}
          <Reveal>
            <div className={styles.guidesTripleRow}>
              {g.triple.map((principle) => (
                <div key={principle.num} className={styles.guidesPanel}>
                  <span className={styles.guidesNum}>{principle.num}</span>
                  <h3 className={styles.guidesHeading}>{principle.heading}</h3>
                  {principle.subtitle ? (
                    <p className={styles.guidesSubtitle}>{principle.subtitle}</p>
                  ) : null}
                  <div className={styles.guidesBody}>
                    {principle.paras.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
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
          <Reveal>
            <nav className={styles.practiceRight} aria-label={c.practice.eyebrow}>
              {practiceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/expertise/${area.slug}`}
                  className={styles.areaRow}
                >
                  <span>
                    {effectiveLang === "zh"
                      ? areaLabel(area.slug, area.navLabel)
                      : area.navLabel}
                  </span>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {/* 6. OUR PEOPLE */}
      <section className={`section ${styles.peopleSection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.peopleHead}>
              <span className="eyebrow">{c.people.eyebrow}</span>
              <h2
                style={{
                  fontSize: "var(--text-2xl)",
                  marginTop: "1rem",
                  textWrap: "balance" as const,
                }}
              >
                {c.people.heading}
              </h2>
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
                        style={{
                          objectFit: "cover",
                          objectPosition: member.photoPosition ?? "center 15%",
                        }}
                      />
                    ) : (
                      <span className={styles.personInitials}>
                        {initials(member.name)}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className={styles.personName}>{member.name}</p>
                    <p className={styles.personRole}>
                      {effectiveLang === "zh" ? member.roleZh : member.role}
                    </p>
                    <Link
                      href={`/people/${member.slug}`}
                      className={styles.personProfileLink}
                    >
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

      {/* 7. LEXCORD ENTRANCE PHOTOGRAPH */}
      <div className={styles.entrancePhoto}>
        <div className={styles.entrancePhotoInner}>
          <Image
            src="/images/office/office-7.jpg"
            alt="Lexcord Lawyers office entrance"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
        </div>
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
            <div className={styles.melbPhoto}>
              <Image
                src="/images/office/office-6.jpg"
                alt="Melbourne CBD view from Lexcord office"
                fill
                sizes="(max-width: 860px) 100vw, 45vw"
                style={{ objectFit: "cover", objectPosition: "center center" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. CLOSING CTA — text only */}
      <section className={styles.aboutClosing}>
        <div className="container">
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
        </div>
      </section>
    </main>
  );
}
