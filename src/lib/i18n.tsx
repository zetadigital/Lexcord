"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "zh" | "zh-tw";

interface Dictionary {
  nav: {
    expertise: string;
    services: string;
    resources: string;
    about: string;
    contact: string;
    book: string;
    firm: string;
    panelHeadline: string;
    panelBlurb: string;
    panelAbout: string;
  };
  footer: {
    blurb: string;
    disclaimer: string;
    expertise: string;
    firm: string;
    aboutLexcord: string;
    contact: string;
    book: string;
    rights: string;
    australiaWide: string;
    contactTitle: string;
    address: string;
    lift: string;
    legal: string;
  };
  common: {
    ourServices: string;
    whyChoose: string;
    bookConsultation: string;
    learnMore: string;
    relatedPosts: string;
    relatedPostsLede: string;
    postTitle: string;
    postExcerpt: string;
    areaTeam: string;
    areaTeamLede: string;
    areaTeamEmpty: string;
    viewProfile: string;
  };
  /** Standard Chinese names for the practice areas (display only). */
  areaZh: Record<string, string>;
  /** One-line summaries per practice-area slug. */
  summaries: Record<string, string>;
  pages: {
    home: {
      bannerTitle: string;
      bannerTagline: string;
      bannerLede: string;
      bannerCta1: string;
      bannerCta2: string;
      servicesTitle: string;
      servicesLearnMore: string;
      whyEyebrow: string;
      whyTitle: string;
      whySubtitle: string;
      why: { title: string; text: string }[];
      sayEyebrow: string;
      sayTitle: string;
      testimonials: { quote: string; name: string; detail: string }[];
      readyEyebrow: string;
      readyTitle: string;
      readyLede: string;
      addressLabel: string;
      phoneLabel: string;
      emailLabel: string;
    };
    services: {
      heroEyebrow: string;
      heroTitlePre: string;
      heroTitleEm: string;
      heroLede: string;
      exploreLabel: string;
    };
    resources: {
      heroEyebrow: string;
      heroTitlePre: string;
      heroTitleEm: string;
      heroLede: string;
      latest: string;
      heading: string;
      sub: string;
      cardTitle: string;
      cardExcerpt: string;
      cardMeta: string;
      cta: string;
    };
    about: {
      heroEyebrow: string;
      heroTitle: string;
      sections: { title: string; paragraphs: string[] }[];
    };
    contact: {
      heroTitle: string;
      introText: string;
      cardVisitLabel: string;
      cardVisitSub: string;
      cardVisitCta: string;
      cardCallLabel: string;
      cardCallSub: string;
      cardCallCta: string;
      cardEmailLabel: string;
      cardEmailSub: string;
      cardEmailCta: string;
      readyTitle: string;
      readyBody: string;
      bookingCta: string;
    };
    people: {
      heroEyebrow: string;
      heroTitlePre: string;
      heroTitleEm: string;
      heroLede: string;
      viewProfile: string;
      qualifications: string;
      expertise: string;
      backToPeople: string;
      contactLabel: string;
      bookWith: string;
    };
    legalPending: string;
    placeholderTag: string;
  };
}

const DICT: Record<Lang, Dictionary> = {
  en: {
    nav: {
      expertise: "Expertise",
      services: "Services",
      resources: "Resources",
      about: "About",
      contact: "Contact",
      book: "Book a consultation",
      firm: "Firm",
      panelHeadline: "Every area, one standard of care",
      panelBlurb:
        "Thoughtful, practical legal advice across the matters that shape businesses, individuals and families with every matter approached personally and handled with care.",
      panelAbout: "About the firm",
    },
    footer: {
      blurb:
        "Clear, considered legal counsel across Australia — from property and commercial matters to estates, intellectual property, criminal, migration, and notarial services.",
      disclaimer:
        "The information on this website is general in nature and does not constitute legal advice. Please contact us for advice tailored to your circumstances.",
      expertise: "Expertise",
      firm: "Firm",
      aboutLexcord: "About Lexcord",
      contact: "Contact",
      book: "Book a consultation",
      rights: "All rights reserved.",
      australiaWide: "Australia-wide",
      contactTitle: "Contact",
      address: "1508/530 Little Collins St, Melbourne VIC 3000",
      lift: "Take the lift to Level 14, then the opposite lift up to Level 15. Turn right as you exit and continue straight ahead.",
      legal: "Legal",
    },
    common: {
      ourServices: "Our services",
      whyChoose: "Why Choose Lexcord",
      bookConsultation: "Book a consultation",
      learnMore: "Learn more",
      relatedPosts: "Related insights",
      relatedPostsLede: "Plain-language guidance on this area — articles pending the firm's real publications.",
      postTitle: "Article title goes here",
      postExcerpt: "A short standfirst summarising the article will appear here once content is supplied.",
      areaTeam: "Your legal team",
      areaTeamLede: "The solicitors who handle these matters. Book a consultation to get started.",
      areaTeamEmpty: "Team profiles for this area are being added. Contact us and we will connect you with the right solicitor.",
      viewProfile: "View profile",
    },
    areaZh: {},
    summaries: {
      "property-law":
        "Commercial real estate, development, leasing, disputes, and foreign-investment matters across Australia.",
      conveyancing:
        "End-to-end residential, commercial, and off-the-plan conveyancing — from contract review to settlement.",
      commercial:
        "Direct, commercially-minded counsel on contracts, employment, disputes, and leasing for startups, SMEs, and corporates.",
      "family-law":
        "Compassionate, expert guidance on divorce, parenting, property settlement, and family violence matters.",
      "wills-estates":
        "Wills, testamentary trusts, powers of attorney, probate, and estate administration handled with care.",
      "intellectual-property":
        "Trade marks, patents, copyright, and designs — from first registration to international filing and enforcement.",
      "criminal-law":
        "Clear, honest representation across traffic, assault, drug, domestic violence, and bail matters.",
      "notary-public":
        "Qualified notarial services for documents destined for use overseas, including apostille and DFAT authentication.",
      "migration-law":
        "Registered advice across skilled, family, student, business, humanitarian, and tribunal review pathways.",
    },
    pages: {
      home: {
        bannerTitle: "For what matters next.",
        bannerTagline: "Thoughtful advice. Practical direction. People first.",
        bannerLede:
          "We help individuals, families and businesses navigate property, commercial, migration and dispute matters with confidence.",
        bannerCta1: "About Lexcord",
        bannerCta2: "Meet our people",
        servicesTitle: "How we can support you",
        servicesLearnMore: "Learn more",
        whyEyebrow: "Why Lexcord",
        whyTitle: "Why choose Lexcord?",
        whySubtitle: "Sharp legal thinking, delivered with care.",
        why: [
          {
            title: "Clear and practical advice",
            text: "We explain your legal position, options and risks in a way that is clear, direct and easy to understand.",
          },
          {
            title: "Personal attention",
            text: "We take the time to understand your circumstances, priorities and concerns before recommending the next steps.",
          },
          {
            title: "Depth across key practice areas",
            text: "Our partners and lawyers each bring focused experience in their respective practice areas, allowing clients to receive tailored advice from the right person for the right matter.",
          },
        ],
        sayEyebrow: "Client feedback",
        sayTitle: "What do they say",
        testimonials: [
          { quote: "From our first conversation, Lexcord explained my options clearly and made a stressful process feel manageable.", name: "J. Williams", detail: "Conveyancing" },
          { quote: "Responsive, practical and genuinely on my side. I always knew exactly where my matter stood.", name: "A. Chen", detail: "Commercial" },
          { quote: "They handled my visa application with real care and kept me informed at every single step.", name: "R. Kumar", detail: "Migration" },
          { quote: "Clear advice, fair fees and no surprises. Exactly what you want from a law firm.", name: "M. Rossi", detail: "Wills & Estates" },
          { quote: "Professional, calm and thorough. I felt supported throughout a genuinely difficult time.", name: "S. Nguyen", detail: "Criminal" },
          { quote: "Sharp on the detail and easy to deal with. I would recommend them without hesitation.", name: "D. Brown", detail: "Intellectual Property" },
        ],
        readyEyebrow: "Get in touch",
        readyTitle: "Ready to discuss your matter?",
        readyLede:
          "Speak with us about your situation. Book a confidential consultation, or reach us by phone or email.",
        addressLabel: "Address",
        phoneLabel: "Phone",
        emailLabel: "Email",
      },
      services: {
        heroEyebrow: "Our Services",
        heroTitlePre: "Our areas of expertise, ",
        heroTitleEm: "one standard of care",
        heroLede:
          "Lexcord brings the breadth of a general practice together with the depth of specialist counsel — advising individuals, families, and businesses across every Australian state and territory.",
        exploreLabel: "Explore",
      },
      resources: {
        heroEyebrow: "Resources & Insights",
        heroTitlePre: "Plain-language guidance on ",
        heroTitleEm: "the law that affects you",
        heroLede:
          "Article and insight content is not part of the supplied document and is pending the firm's real publications. The layout below shows how it will be presented.",
        latest: "Latest insights",
        heading: "Articles & guides",
        sub: "Placeholder cards — replace each with a real article when content is ready.",
        cardTitle: "Article title goes here",
        cardExcerpt:
          "A short standfirst summarising the article will appear here once real content is supplied.",
        cardMeta: "Author · Date · 5 min read",
        cta: "Have a question now? Book a consultation",
      },
      about: {
        heroEyebrow: "About Lexcord",
        heroTitle: "More than your lawyers. Your companions through every legal journey.",
        sections: [
          {
            title: "Mission",
            paragraphs: [
              "We provide tailored legal services to everyone in Australia, dedicated to supporting those who need guidance through complex legal matters. From the moment our clients walk through the door, we go beyond simply listening to their stories and offering legal advice, we take their unique background and circumstances as our starting point, walking alongside them step by step toward resolution.",
              "Every case is treated as distinct. We reject one-size-fits-all approaches in favour of strategies crafted specifically for each client's situation. Throughout the journey, we are more than legal advisors; we are trusted companions, committed to standing by our clients every step of the way.",
            ],
          },
          {
            title: "Vision",
            paragraphs: [
              "At the heart of our vision lies an unwavering client-centred philosophy. We strive to empower every client to understand and exercise their legal rights with confidence and clarity.",
              "At the same time, we are dedicated to continuous growth across every practice area, aspiring to become one of the most trusted legal advisors in Australia and the wider Asia-Pacific region. We may not be able to right every wrong in the world, but for those who turn to us for help, we are committed to helping them achieve the fairness and justice they seek.",
            ],
          },
          {
            title: "Global Capability",
            paragraphs: [
              "Our professional team brings together lawyers with diverse international backgrounds, and our practice spans cases that reach across continents. In cross-border matters, our role extends beyond providing counsel on the Australian side, we collaborate closely with trusted legal teams in other jurisdictions, working together to navigate the complexities of international law and safeguard our clients' interests on a global scale.",
            ],
          },
          {
            title: "Sustainability",
            paragraphs: [
              "We manage conflicts of interest with the utmost care and diligence, ensuring that our interests never compromise the rights of those we represent. Legal ethics and professional integrity are the cornerstones of our practice. We hold ourselves accountable to the highest standards, never allowing personal gain to undermine our moral obligations.",
              "Through this principled approach, we build enduring relationships with our clients, founded on stability, transparency, and long-term trust.",
            ],
          },
          {
            title: "Well-being",
            paragraphs: [
              "We value not only the rights of our clients, but also the welfare of our team. We are committed to cultivating a workplace where every member can thrive, maintaining a positive mindset that fuels both productivity and personal fulfilment.",
              "We actively safeguard our people from the burdens of accumulated stress, ensuring that their physical and mental well-being remains protected. A healthy team is the foundation of exceptional service.",
            ],
          },
        ],
      },
      contact: {
        heroTitle: "Contact Us",
        introText:
          "Get in touch with our team to discuss how we can assist with your legal matter. Whether you have questions or are simply looking for guidance on where to start, we welcome the opportunity to hear from you.",
        cardVisitLabel: "Visit",
        cardVisitSub: "Melbourne VIC 3000, Australia",
        cardVisitCta: "Get directions",
        cardCallLabel: "Call",
        cardCallSub: "Monday – Friday, 9:00 am – 5:30 pm",
        cardCallCta: "Call now",
        cardEmailLabel: "Email",
        cardEmailSub: "We reply within one business day",
        cardEmailCta: "Send email",
        readyTitle: "Ready when you are",
        readyBody: "Book a time that suits you and we will match you with the right person for your matter.",
        bookingCta: "Book a consultation",
      },
      people: {
        heroEyebrow: "Our People",
        heroTitlePre: "The people behind ",
        heroTitleEm: "your matter",
        heroLede:
          "Lexcord is led by solicitors who understand that every legal matter is personal to the people behind it. We take the time to understand your circumstances, what is at stake and the outcome you are working towards.",
        viewProfile: "View profile",
        qualifications: "Qualifications",
        expertise: "Areas of expertise",
        backToPeople: "All people",
        contactLabel: "Contact",
        bookWith: "Book a consultation",
      },
      legalPending:
        "This page is a placeholder. The firm's final wording is pending and should be reviewed by a qualified practitioner before publication.",
      placeholderTag: "Placeholder",
    },
  },
  zh: {
    nav: {
      expertise: "执业领域",
      services: "服务",
      resources: "资讯",
      about: "关于我们",
      contact: "联系我们",
      book: "预约咨询",
      firm: "律所",
      panelHeadline: "每一个领域,同一份用心",
      panelBlurb: "为企业、个人与家庭提供深思熟虑、切实可行的法律意见——每一件事务都以认真负责的态度亲力亲为、用心处理。",
      panelAbout: "了解律所",
    },
    footer: {
      blurb:
        "覆盖全澳的清晰、审慎法律意见——从房产与商业事务,到遗产、知识产权、刑事、移民及公证服务。",
      disclaimer: "本网站信息仅为一般性内容,不构成法律意见。请联系我们获取针对您具体情况的建议。",
      expertise: "执业领域",
      firm: "律所",
      aboutLexcord: "关于律和",
      contact: "联系我们",
      book: "预约咨询",
      rights: "版权所有。",
      australiaWide: "服务全澳",
      contactTitle: "联系方式",
      address: "维多利亚州墨尔本市 Little Collins St 530 号 1508 室,邮编 3000",
      lift: "电梯坐到 14 楼,对面电梯再上 15 楼,出电梯后右转直走。",
      legal: "法律",
    },
    common: {
      ourServices: "我们的服务",
      whyChoose: "为何选择律和",
      bookConsultation: "预约咨询",
      learnMore: "了解更多",
      relatedPosts: "相关资讯",
      relatedPostsLede: "关于本领域的通俗解读——文章内容有待律所提供真实出版物。",
      postTitle: "文章标题占位",
      postExcerpt: "提供内容后,此处将显示概括文章的简短导语。",
      areaTeam: "您的法律团队",
      areaTeamLede: "处理此类事务的律师。预约咨询即可开始。",
      areaTeamEmpty: "该领域的团队简介正在陆续加入。请联系我们,我们会为您对接合适的律师。",
      viewProfile: "查看简介",
    },
    areaZh: {
      "property-law": "房产法",
      conveyancing: "产权过户",
      commercial: "商业法",
      "family-law": "家庭法",
      "wills-estates": "遗嘱与遗产",
      "intellectual-property": "知识产权",
      "criminal-law": "刑事法",
      "notary-public": "公证服务",
      "migration-law": "移民法",
    },
    summaries: {
      "property-law":
        "商业地产、开发、租赁、纠纷与外国投资事务,服务全澳。",
      conveyancing:
        "住宅、商业及楼花的全流程产权过户——从合同审阅到交割。",
      commercial:
        "就合同、雇佣、纠纷与租赁,为初创企业、中小企业及大型企业提供直接、务实的商业法律意见。",
      "family-law": "就离婚、子女抚养、财产分割与家庭暴力事务,提供专业而富有同理心的指引。",
      "wills-estates": "用心处理遗嘱、遗嘱信托、授权书、遗嘱认证与遗产管理。",
      "intellectual-property":
        "商标、专利、版权与外观设计——从首次注册到国际申请与维权。",
      "criminal-law": "就交通、伤害、毒品、家庭暴力与保释事务,提供清晰、诚实的代理。",
      "notary-public":
        "为境外使用的文件提供具资质的公证服务,包括海牙认证(Apostille)与 DFAT 认证。",
      "migration-law": "就技术、家庭、学生、商业、人道及复议途径提供注册移民意见。",
    },
    pages: {
      home: {
        bannerTitle: "为您所重要的事。",
        bannerTagline: "用心建议。务实方向。以人为本。",
        bannerLede:
          "我们协助个人、家庭及企业，自信应对房产、商业、移民与纠纷等法律事务。",
        bannerCta1: "关于律和",
        bannerCta2: "认识我们的团队",
        servicesTitle: "我们如何为您提供支持",
        servicesLearnMore: "了解更多",
        whyEyebrow: "为何选择律和",
        whyTitle: "为何选择律和?",
        whySubtitle: "敏锐的法律思考,以用心的方式交付。",
        why: [
          {
            title: "清晰而务实的建议",
            text: "我们以清晰、直接、易于理解的方式,向您说明法律处境、可选方案与风险。",
          },
          {
            title: "贴身的个性化关注",
            text: "在提出下一步建议之前,我们会用心了解您的处境、优先事项与顾虑。",
          },
          {
            title: "在核心领域的深厚专长",
            text: "我们的合伙人与律师各自在其执业领域拥有专注的经验,让客户能就合适的事务,从合适的人那里获得量身定制的建议。",
          },
        ],
        sayEyebrow: "客户评价",
        sayTitle: "客户怎么说",
        testimonials: [
          { quote: "从第一次沟通起,律和就把我的选择讲得清清楚楚,让原本压力很大的过程变得从容可控。", name: "J. Williams", detail: "产权过户" },
          { quote: "回应及时、做法务实,真心站在我这一边。我始终清楚自己的事务进展到哪一步。", name: "A. Chen", detail: "商业法" },
          { quote: "他们非常用心地处理了我的签证申请,每一步都让我了解进展。", name: "R. Kumar", detail: "移民法" },
          { quote: "建议清晰、收费合理、毫无意外。这正是你对一家律所的期待。", name: "M. Rossi", detail: "遗嘱与遗产" },
          { quote: "专业、沉稳、细致。在一段艰难的时期里,我始终感到被支持。", name: "S. Nguyen", detail: "刑事法" },
          { quote: "对细节把握精准,沟通也很轻松。我会毫不犹豫地推荐他们。", name: "D. Brown", detail: "知识产权" },
        ],
        readyEyebrow: "与我们联系",
        readyTitle: "准备好谈谈您的事务了吗?",
        readyLede:
          "与我们聊聊您的处境。预约一次保密咨询,或通过电话、邮件联系我们。",
        addressLabel: "地址",
        phoneLabel: "电话",
        emailLabel: "邮箱",
      },
      services: {
        heroEyebrow: "我们的服务",
        heroTitlePre: "我们的执业领域,",
        heroTitleEm: "同一份用心",
        heroLede:
          "律和兼具综合性事务所的广度与专业律师的深度——为个人、家庭与企业提供服务,覆盖全澳各州与领地。",
        exploreLabel: "了解更多",
      },
      resources: {
        heroEyebrow: "资讯与洞见",
        heroTitlePre: "用通俗语言解读",
        heroTitleEm: "与你相关的法律",
        heroLede:
          "文章与洞见内容非源文档的一部分,有待本所提供真实出版内容。下方版式展示其呈现方式。",
        latest: "最新洞见",
        heading: "文章与指南",
        sub: "占位卡片——内容就绪后逐一替换为真实文章。",
        cardTitle: "文章标题占位",
        cardExcerpt: "提供真实内容后,此处将显示概括文章的简短导语。",
        cardMeta: "作者 · 日期 · 5 分钟阅读",
        cta: "现在就有疑问?预约咨询",
      },
      about: {
        heroEyebrow: "关于律和",
        heroTitle: "不止是您的律师,更是您每一段法律旅程的同行者。",
        sections: [
          {
            title: "使命 Mission",
            paragraphs: [
              "我们为身处澳大利亚的每一个人提供量身定制的法律服务,致力于支持那些在复杂法律事务中需要指引的人。从客户走进门的那一刻起,我们不只是倾听他们的故事、给出法律意见——我们以他们独特的背景与处境为起点,陪伴他们一步步走向解决方案。",
              "每一宗案件都被视为独一无二。我们摒弃千篇一律的做法,转而为每位客户的具体情况量身打造策略。在整个过程中,我们不只是法律顾问;我们是值得信赖的同行者,坚定地陪伴客户走好每一步。",
            ],
          },
          {
            title: "愿景 Vision",
            paragraphs: [
              "我们愿景的核心,是坚定不移的「以客户为中心」理念。我们努力让每一位客户都能自信、清晰地理解并行使自己的法律权利。",
              "与此同时,我们致力于在每一个执业领域持续成长,立志成为澳大利亚乃至整个亚太地区最值得信赖的法律顾问之一。我们或许无法纠正世间所有的不公,但对于每一位向我们求助的人,我们都承诺尽力帮助他们获得所追求的公平与正义。",
            ],
          },
          {
            title: "全球能力 Global Capability",
            paragraphs: [
              "我们的专业团队汇聚了拥有多元国际背景的律师,执业范围涵盖跨越各大洲的案件。在跨境事务中,我们的角色不止于在澳大利亚一侧提供法律意见——我们与其他司法管辖区值得信赖的法律团队紧密协作,共同应对国际法的复杂性,在全球范围内守护客户的利益。",
            ],
          },
          {
            title: "可持续 Sustainability",
            paragraphs: [
              "我们以最大的审慎与勤勉处理利益冲突,确保自身利益绝不损害我们所代表者的权利。法律伦理与职业操守是我们执业的基石。我们以最高标准要求自己,绝不让个人利益凌驾于道德义务之上。",
              "凭借这一以原则为本的态度,我们与客户建立起以稳定、透明与长期信任为根基的持久关系。",
            ],
          },
          {
            title: "团队福祉 Well-being",
            paragraphs: [
              "我们不仅重视客户的权利,也重视团队的福祉。我们致力于营造一个让每位成员都能茁壮成长的工作环境,保持一种既驱动效率、又带来个人成就感的积极心态。",
              "我们主动保护团队成员免受长期累积压力的负担,确保他们的身心健康得到守护。一支健康的团队,是卓越服务的根基。",
            ],
          },
        ],
      },
      contact: {
        heroTitle: "联系我们",
        introText:
          "欢迎联系我们的团队，与我们探讨如何协助处理您的法律事务。无论您有初步疑问，还是已准备好寻求专业意见，我们都诚挚欢迎您与我们沟通。",
        cardVisitLabel: "前往",
        cardVisitSub: "墨尔本 VIC 3000，澳大利亚",
        cardVisitCta: "获取路线",
        cardCallLabel: "致电",
        cardCallSub: "周一至周五，上午 9:00 至下午 5:30",
        cardCallCta: "立即致电",
        cardEmailLabel: "邮件",
        cardEmailSub: "我们将在一个工作日内回复",
        cardEmailCta: "发送邮件",
        readyTitle: "随时为您服务",
        readyBody: "预约一个适合您的时间，我们将为您的事务安排最合适的律师。",
        bookingCta: "预约咨询",
      },
      people: {
        heroEyebrow: "我们的团队",
        heroTitlePre: "为您的事务",
        heroTitleEm: "保驾护航的团队",
        heroLede:
          "律和由执业律师领衔，深知每一件法律事务对当事人而言都有其独特的个人意义。我们会认真了解您的处境、充分权衡事务的利害所在，以及您所期望达到的结果。",
        viewProfile: "查看简介",
        qualifications: "资历与执业资格",
        expertise: "专长领域",
        backToPeople: "返回团队",
        contactLabel: "联系方式",
        bookWith: "预约咨询",
      },
      legalPending:
        "本页为占位内容。本所的最终措辞有待确定,发布前应由具资质的执业者审核。",
      placeholderTag: "占位",
    },
  },
  "zh-tw": {
    nav: {
      expertise: "執業領域",
      services: "服務",
      resources: "資訊",
      about: "關於我們",
      contact: "聯絡我們",
      book: "預約諮詢",
      firm: "律所",
      panelHeadline: "每一個領域，同一份用心",
      panelBlurb: "為企業、個人與家庭提供深思熟慮、切實可行的法律意見——每一件事務都以認真負責的態度親力親為、用心處理。",
      panelAbout: "了解律所",
    },
    footer: {
      blurb: "覆蓋全澳的清晰、審慎法律意見——從房產與商業事務，到遺產、知識產權、刑事、移民及公證服務。",
      disclaimer: "本網站資訊僅為一般性內容，不構成法律意見。請聯絡我們獲取針對您具體情況的建議。",
      expertise: "執業領域",
      firm: "律所",
      aboutLexcord: "關於律和",
      contact: "聯絡我們",
      book: "預約諮詢",
      rights: "版權所有。",
      australiaWide: "服務全澳",
      contactTitle: "聯絡方式",
      address: "維多利亞州墨爾本市 Little Collins St 530 號 1508 室，郵編 3000",
      lift: "電梯坐到 14 樓，對面電梯再上 15 樓，出電梯後右轉直走。",
      legal: "法律",
    },
    common: {
      ourServices: "我們的服務",
      whyChoose: "為何選擇律和",
      bookConsultation: "預約諮詢",
      learnMore: "了解更多",
      relatedPosts: "相關資訊",
      relatedPostsLede: "關於本領域的通俗解讀——文章內容有待律所提供真實出版物。",
      postTitle: "文章標題占位",
      postExcerpt: "提供內容後，此處將顯示概括文章的簡短導語。",
      areaTeam: "您的法律團隊",
      areaTeamLede: "處理此類事務的律師。預約諮詢即可開始。",
      areaTeamEmpty: "該領域的團隊簡介正在陸續加入。請聯絡我們，我們會為您對接合適的律師。",
      viewProfile: "查看簡介",
    },
    areaZh: {
      "property-law": "房產法",
      conveyancing: "產權過戶",
      commercial: "商業法",
      "family-law": "家庭法",
      "wills-estates": "遺囑與遺產",
      "intellectual-property": "知識產權",
      "criminal-law": "刑事法",
      "notary-public": "公證服務",
      "migration-law": "移民法",
    },
    summaries: {
      "property-law": "商業地產、開發、租賃、糾紛與外國投資事務，服務全澳。",
      conveyancing: "住宅、商業及樓花的全流程產權過戶——從合約審閱到交割。",
      commercial: "就合約、僱傭、糾紛與租賃，為初創企業、中小企業及大型企業提供直接、務實的商業法律意見。",
      "family-law": "就離婚、子女撫養、財產分割與家庭暴力事務，提供專業而富有同理心的指引。",
      "wills-estates": "用心處理遺囑、遺囑信託、授權書、遺囑認證與遺產管理。",
      "intellectual-property": "商標、專利、版權與外觀設計——從首次註冊到國際申請與維權。",
      "criminal-law": "就交通、傷害、毒品、家庭暴力與保釋事務，提供清晰、誠實的代理。",
      "notary-public": "為境外使用的文件提供具資質的公證服務，包括海牙認證（Apostille）與 DFAT 認證。",
      "migration-law": "就技術、家庭、學生、商業、人道及複議途徑提供註冊移民意見。",
    },
    pages: {
      home: {
        bannerTitle: "為您所重要的事。",
        bannerTagline: "用心建議。務實方向。以人為本。",
        bannerLede: "我們協助個人、家庭及企業，自信應對房產、商業、移民與糾紛等法律事務。",
        bannerCta1: "關於律和",
        bannerCta2: "認識我們的團隊",
        servicesTitle: "我們如何為您提供支持",
        servicesLearnMore: "了解更多",
        whyEyebrow: "為何選擇律和",
        whyTitle: "為何選擇律和?",
        whySubtitle: "敏銳的法律思考，以用心的方式交付。",
        why: [
          {
            title: "清晰而務實的建議",
            text: "我們以清晰、直接、易於理解的方式，向您說明法律處境、可選方案與風險。",
          },
          {
            title: "貼身的個性化關注",
            text: "在提出下一步建議之前，我們會用心了解您的處境、優先事項與顧慮。",
          },
          {
            title: "在核心領域的深厚專長",
            text: "我們的合夥人與律師各自在其執業領域擁有專注的經驗，讓客戶能就合適的事務，從合適的人那裡獲得量身定制的建議。",
          },
        ],
        sayEyebrow: "客戶評價",
        sayTitle: "客戶怎麼說",
        testimonials: [
          { quote: "從第一次溝通起，律和就把我的選擇講得清清楚楚，讓原本壓力很大的過程變得從容可控。", name: "J. Williams", detail: "產權過戶" },
          { quote: "回應及時、做法務實，真心站在我這一邊。我始終清楚自己的事務進展到哪一步。", name: "A. Chen", detail: "商業法" },
          { quote: "他們非常用心地處理了我的簽證申請，每一步都讓我了解進展。", name: "R. Kumar", detail: "移民法" },
          { quote: "建議清晰、收費合理、毫無意外。這正是你對一家律所的期待。", name: "M. Rossi", detail: "遺囑與遺產" },
          { quote: "專業、沉穩、細致。在一段艱難的時期裡，我始終感到被支持。", name: "S. Nguyen", detail: "刑事法" },
          { quote: "對細節把握精準，溝通也很輕鬆。我會毫不猶豫地推薦他們。", name: "D. Brown", detail: "知識產權" },
        ],
        readyEyebrow: "與我們聯絡",
        readyTitle: "準備好談談您的事務了嗎？",
        readyLede: "與我們聊聊您的處境。預約一次保密諮詢，或通過電話、郵件聯絡我們。",
        addressLabel: "地址",
        phoneLabel: "電話",
        emailLabel: "郵箱",
      },
      services: {
        heroEyebrow: "我們的服務",
        heroTitlePre: "我們的執業領域，",
        heroTitleEm: "同一份用心",
        heroLede: "律和兼具綜合性事務所的廣度與專業律師的深度——為個人、家庭與企業提供服務，覆蓋全澳各州與領地。",
        exploreLabel: "了解更多",
      },
      resources: {
        heroEyebrow: "資訊與洞見",
        heroTitlePre: "用通俗語言解讀",
        heroTitleEm: "與你相關的法律",
        heroLede: "文章與洞見內容非源文件的一部分，有待本所提供真實出版內容。下方版式展示其呈現方式。",
        latest: "最新洞見",
        heading: "文章與指南",
        sub: "占位卡片——內容就緒後逐一替換為真實文章。",
        cardTitle: "文章標題占位",
        cardExcerpt: "提供真實內容後，此處將顯示概括文章的簡短導語。",
        cardMeta: "作者 · 日期 · 5 分鐘閱讀",
        cta: "現在就有疑問？預約諮詢",
      },
      about: {
        heroEyebrow: "關於律和",
        heroTitle: "不止是您的律師，更是您每一段法律旅程的同行者。",
        sections: [
          {
            title: "使命 Mission",
            paragraphs: [
              "我們為身處澳大利亞的每一個人提供量身定制的法律服務，致力於支持那些在複雜法律事務中需要指引的人。從客戶走進門的那一刻起，我們不只是傾聽他們的故事、給出法律意見——我們以他們獨特的背景與處境為起點，陪伴他們一步步走向解決方案。",
              "每一宗案件都被視為獨一無二。我們摒棄千篇一律的做法，轉而為每位客戶的具體情況量身打造策略。在整個過程中，我們不只是法律顧問；我們是值得信賴的同行者，堅定地陪伴客戶走好每一步。",
            ],
          },
          {
            title: "願景 Vision",
            paragraphs: [
              "我們願景的核心，是堅定不移的「以客戶為中心」理念。我們努力讓每一位客戶都能自信、清晰地理解並行使自己的法律權利。",
              "與此同時，我們致力於在每一個執業領域持續成長，立志成為澳大利亞乃至整個亞太地區最值得信賴的法律顧問之一。我們或許無法糾正世間所有的不公，但對於每一位向我們求助的人，我們都承諾盡力幫助他們獲得所追求的公平與正義。",
            ],
          },
          {
            title: "全球能力 Global Capability",
            paragraphs: [
              "我們的專業團隊匯聚了擁有多元國際背景的律師，執業範圍涵蓋跨越各大洲的案件。在跨境事務中，我們的角色不止於在澳大利亞一側提供法律意見——我們與其他司法管轄區值得信賴的法律團隊緊密協作，共同應對國際法的複雜性，在全球範圍內守護客戶的利益。",
            ],
          },
          {
            title: "可持續 Sustainability",
            paragraphs: [
              "我們以最大的審慎與勤勉處理利益衝突，確保自身利益絕不損害我們所代表者的權利。法律倫理與職業操守是我們執業的基石。我們以最高標準要求自己，絕不讓個人利益凌駕於道德義務之上。",
              "憑藉這一以原則為本的態度，我們與客戶建立起以穩定、透明與長期信任為根基的持久關係。",
            ],
          },
          {
            title: "團隊福祉 Well-being",
            paragraphs: [
              "我們不僅重視客戶的權利，也重視團隊的福祉。我們致力於營造一個讓每位成員都能茁壯成長的工作環境，保持一種既驅動效率、又帶來個人成就感的積極心態。",
              "我們主動保護團隊成員免受長期累積壓力的負擔，確保他們的身心健康得到守護。一支健康的團隊，是卓越服務的根基。",
            ],
          },
        ],
      },
      contact: {
        heroTitle: "聯絡我們",
        introText:
          "歡迎聯絡我們的團隊，與我們探討如何協助處理您的法律事務。無論您有初步疑問，還是已準備好尋求專業意見，我們都誠摯歡迎您與我們溝通。",
        cardVisitLabel: "前往",
        cardVisitSub: "墨爾本 VIC 3000，澳大利亞",
        cardVisitCta: "獲取路線",
        cardCallLabel: "致電",
        cardCallSub: "週一至週五，上午 9:00 至下午 5:30",
        cardCallCta: "立即致電",
        cardEmailLabel: "郵件",
        cardEmailSub: "我們將在一個工作日內回覆",
        cardEmailCta: "傳送郵件",
        readyTitle: "隨時為您服務",
        readyBody: "預約一個適合您的時間，我們將為您的事務安排最合適的律師。",
        bookingCta: "預約諮詢",
      },
      people: {
        heroEyebrow: "我們的團隊",
        heroTitlePre: "為您的事務",
        heroTitleEm: "保駕護航的團隊",
        heroLede: "律和由執業律師領銜，深知每一件法律事務對當事人而言都有其獨特的個人意義。我們會認真了解您的處境、充分權衡事務的利害所在，以及您所期望達到的結果。",
        viewProfile: "查看簡介",
        qualifications: "資歷與執業資格",
        expertise: "專長領域",
        backToPeople: "返回團隊",
        contactLabel: "聯絡方式",
        bookWith: "預約諮詢",
      },
      legalPending: "本頁為占位內容。本所的最終措辭有待確定，發布前應由具資質的執業者審核。",
      placeholderTag: "占位",
    },
  },
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: Dictionary;
  /** Localised practice-area label for display. */
  areaLabel: (slug: string, enLabel: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "lexcord-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  function htmlLang(l: Lang) {
    if (l === "zh") return "zh-CN";
    if (l === "zh-tw") return "zh-TW";
    return "en-AU";
  }

  // Restore persisted preference after hydration.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "zh" || stored === "zh-tw") {
      setLangState(stored as Lang);
      document.documentElement.lang = htmlLang(stored as Lang);
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = htmlLang(next);
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "en" ? "zh" : "en");
  }, [lang, setLang]);

  const value = useMemo<LanguageContextValue>(() => {
    const t = DICT[lang];
    return {
      lang,
      setLang,
      toggle,
      t,
      areaLabel: (slug, enLabel) =>
        (lang === "zh" || lang === "zh-tw") ? t.areaZh[slug] ?? enLabel : enLabel,
    };
  }, [lang, setLang, toggle]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return ctx;
}
