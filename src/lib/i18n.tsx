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

export type Lang = "en" | "zh";

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
  };
  common: {
    ourServices: string;
    whyChoose: string;
    bookConsultation: string;
    learnMore: string;
  };
  /** Standard Chinese names for the practice areas (display only). */
  areaZh: Record<string, string>;
  /** One-line summaries per practice-area slug. */
  summaries: Record<string, string>;
  pages: {
    home: {
      heroEyebrow: string;
      heroTitle: string;
      heroLede: string;
      explore: string;
      statsAreas: string;
      statsStates: string;
      statsFixed: string;
      statsPexa: string;
      introBig: string;
      introBody: string;
      expertiseEyebrow: string;
      expertiseHeading: string;
      expertiseLede: string;
      whyEyebrow: string;
      whyHeading: string;
      why: { title: string; text: string }[];
      firmEyebrow: string;
      firmHeading: string;
      firmBody: string;
      aboutCta: string;
      closingEyebrow: string;
      closingTitlePre: string;
      closingTitleEm: string;
      closingTitlePost: string;
      closingBody: string;
    };
    services: {
      heroEyebrow: string;
      heroTitlePre: string;
      heroTitleEm: string;
      heroLede: string;
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
      heroLede: string;
      storyEyebrow: string;
      storyHeading: string;
      storyBody: string;
      teamEyebrow: string;
      teamHeading: string;
      teamSub: string;
      teamRole: string;
      whatEyebrow: string;
      whatHeading: string;
      whatLede: string;
    };
    contact: {
      heroEyebrow: string;
      heroTitle: string;
      heroLede: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      area: string;
      areaSelect: string;
      areaOther: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      consent: string;
      thanksTitle: string;
      thanksBody: string;
      asideEmail: string;
      asidePhone: string;
      asideOffices: string;
      asideHours: string;
      pendingConfirm: string;
      emailValue: string;
      officesValue: string;
      hoursValue: string;
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
      panelHeadline: "Seven areas, one standard of care",
      panelBlurb:
        "Considered counsel across the matters that shape Australian businesses and families — handled by solicitors, not just process.",
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
    },
    common: {
      ourServices: "Our services",
      whyChoose: "Why Choose Lexcord",
      bookConsultation: "Book a consultation",
      learnMore: "Learn more",
    },
    areaZh: {},
    summaries: {
      "property-conveyancing":
        "End-to-end conveyancing, off-the-plan, development, and title disputes across every Australian state and territory.",
      commercial:
        "Direct, commercially-minded counsel on contracts, employment, disputes, and leasing for startups, SMEs, and corporates.",
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
        heroEyebrow: "Lexcord Lawyers — Australia-wide",
        heroTitle:
          "Firm headline pending — e.g. clear, considered counsel for life's significant decisions.",
        heroLede:
          "Homepage introduction pending. This connective copy is not part of the supplied document. The firm advises across seven practice areas Australia-wide.",
        explore: "Explore our expertise",
        statsAreas: "Practice areas under one roof",
        statsStates: "Australian states & territories",
        statsFixed: "Standard conveyancing matters",
        statsPexa: "Registered electronic settlements",
        introBig: "Opening statement pending firm copy.",
        introBody:
          "This introductory section is connective copy, not part of the supplied document. Replace with the firm's positioning statement.",
        expertiseEyebrow: "Our Expertise",
        expertiseHeading: "Seven practice areas, one standard of care",
        expertiseLede:
          "Deep capability across the matters that shape Australian businesses and families.",
        whyEyebrow: "Why Lexcord",
        whyHeading: "The way we work is the difference",
        why: [
          {
            title: "Solicitors, not just process",
            text: "Admitted solicitors who can advise on the legal dimensions of a matter — disputes, injunctions, and complex issues — not only the paperwork.",
          },
          {
            title: "Commercially-minded counsel",
            text: "Every piece of advice is calibrated to your real-world outcome. We will tell you when settling, or walking away, is the right call.",
          },
          {
            title: "Honest, upfront, transparent",
            text: "A frank assessment of your position and clear fee estimates before we spend your money. No open-ended billing surprises.",
          },
        ],
        firmEyebrow: "The firm",
        firmHeading: "People you will actually speak to",
        firmBody:
          "Firm story and team introduction pending. Replace with real copy and photography.",
        aboutCta: "About Lexcord",
        closingEyebrow: "Speak with us",
        closingTitlePre: "The right advice, ",
        closingTitleEm: "at the right time",
        closingTitlePost: ", changes everything.",
        closingBody:
          "Book a confidential consultation. We will assess your situation honestly and map out your options — with no obligation to proceed.",
      },
      services: {
        heroEyebrow: "Our Services",
        heroTitlePre: "Seven practice areas, ",
        heroTitleEm: "one standard of care",
        heroLede:
          "Lexcord brings the breadth of a general practice together with the depth of specialist counsel — advising individuals, families, and businesses across every Australian state and territory.",
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
        heroEyebrow: "About the firm",
        heroTitle: "Firm headline pending — e.g. a general practice with specialist depth.",
        heroLede:
          "Firm overview pending. This copy is not part of the supplied document. Replace with the firm's real story, values, and positioning.",
        storyEyebrow: "Our story",
        storyHeading: "Firm history headline",
        storyBody:
          "Firm history, founding story, values, and approach to be supplied. This section is a placeholder, not part of the source document.",
        teamEyebrow: "The team",
        teamHeading: "Our people",
        teamSub: "Lawyer profiles, photos, admissions, and credentials are pending your content.",
        teamRole: "Title · Admissions",
        whatEyebrow: "What we do",
        whatHeading: "Counsel across seven areas of law",
        whatLede: "Explore any practice area to see how we work.",
      },
      contact: {
        heroEyebrow: "Book a consultation",
        heroTitle: "Contact headline pending — e.g. let's talk about your matter.",
        heroLede:
          "Intro copy pending firm content. The enquiry form below is functional and routes to the firm once connected.",
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        phone: "Phone",
        area: "Area of law",
        areaSelect: "Select the area that best fits…",
        areaOther: "Something else",
        message: "How can we help?",
        messagePlaceholder:
          "Tell us a little about your matter. There is no obligation, and your enquiry is confidential.",
        submit: "Request a consultation",
        consent:
          "By submitting this form you agree to be contacted about your enquiry. The information you provide is general and does not create a lawyer–client relationship.",
        thanksTitle: "Thank you — we have your enquiry.",
        thanksBody:
          "A member of our team will be in touch within one business day to arrange your consultation. For urgent criminal or bail matters, please call us directly.",
        asideEmail: "Email",
        asidePhone: "Phone",
        asideOffices: "Offices",
        asideHours: "Hours",
        pendingConfirm: "To be confirmed",
        emailValue: "hello@lexcord.com.au",
        officesValue:
          "Servicing all Australian states & territories. Office address to be confirmed.",
        hoursValue:
          "Monday – Friday, by appointment. Urgent criminal & bail matters: contact us any time.",
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
      panelHeadline: "七大领域,同一份用心",
      panelBlurb: "为塑造澳大利亚企业与家庭的重要事务提供深思熟虑的法律意见——由律师亲自处理,而非流于流程。",
      panelAbout: "了解律所",
    },
    footer: {
      blurb:
        "覆盖全澳的清晰、审慎法律意见——从房产与商业事务,到遗产、知识产权、刑事、移民及公证服务。",
      disclaimer: "本网站信息仅为一般性内容,不构成法律意见。请联系我们获取针对您具体情况的建议。",
      expertise: "执业领域",
      firm: "律所",
      aboutLexcord: "关于 Lexcord",
      contact: "联系我们",
      book: "预约咨询",
      rights: "版权所有。",
      australiaWide: "服务全澳",
    },
    common: {
      ourServices: "我们的服务",
      whyChoose: "为何选择 Lexcord",
      bookConsultation: "预约咨询",
      learnMore: "了解更多",
    },
    areaZh: {
      "property-conveyancing": "房产与产权过户",
      commercial: "商业法",
      "wills-estates": "遗嘱与遗产",
      "intellectual-property": "知识产权",
      "criminal-law": "刑事法",
      "notary-public": "公证服务",
      "migration-law": "移民法",
    },
    summaries: {
      "property-conveyancing":
        "全流程产权过户、楼花购买、地产开发与产权纠纷,服务全澳各州与领地。",
      commercial:
        "就合同、雇佣、纠纷与租赁,为初创企业、中小企业及大型企业提供直接、务实的商业法律意见。",
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
        heroEyebrow: "Lexcord 律师事务所 — 服务全澳",
        heroTitle: "事务所主标题待定 — 例如:为人生重大抉择提供清晰、审慎的法律意见。",
        heroLede:
          "首页引言待定。此段为连接性文案,非源文档内容。本所在全澳范围内提供七大执业领域的法律服务。",
        explore: "浏览我们的专长",
        statsAreas: "执业领域,一站式服务",
        statsStates: "覆盖全澳州与领地",
        statsFixed: "标准产权过户事务",
        statsPexa: "PEXA 注册电子交割",
        introBig: "开篇陈述待事务所提供。",
        introBody: "此引言区为连接性文案,非源文档内容。请替换为本所的定位陈述。",
        expertiseEyebrow: "我们的专长",
        expertiseHeading: "七大执业领域,同一份用心",
        expertiseLede: "在塑造澳大利亚企业与家庭的重要事务上,具备深厚专业能力。",
        whyEyebrow: "为何选择 Lexcord",
        whyHeading: "我们的工作方式,就是不同之处",
        why: [
          {
            title: "是律师,而非只走流程",
            text: "正式执业的律师,能就事务的法律层面提供意见——纠纷、禁制令与复杂问题,而不仅是文书工作。",
          },
          {
            title: "懂商业的法律意见",
            text: "每一条建议都以您的实际结果为准。该和解或该收手时,我们会如实相告。",
          },
          {
            title: "诚实、坦率、透明",
            text: "在动用您的预算之前,坦诚评估您的处境并给出清晰的费用预估。绝无无止境的账单意外。",
          },
        ],
        firmEyebrow: "本所",
        firmHeading: "您真正能对话的人",
        firmBody: "事务所故事与团队介绍待定。请替换为真实文案与照片。",
        aboutCta: "关于 Lexcord",
        closingEyebrow: "与我们洽谈",
        closingTitlePre: "在",
        closingTitleEm: "正确的时机",
        closingTitlePost: "获得正确的建议,会改变一切。",
        closingBody:
          "预约一次保密咨询。我们会诚实评估您的处境,并为您梳理可选方案——无需任何继续委托的义务。",
      },
      services: {
        heroEyebrow: "我们的服务",
        heroTitlePre: "七大执业领域,",
        heroTitleEm: "同一份用心",
        heroLede:
          "Lexcord 兼具综合性事务所的广度与专业律师的深度——为个人、家庭与企业提供服务,覆盖全澳各州与领地。",
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
        heroEyebrow: "关于本所",
        heroTitle: "事务所主标题待定 — 例如:兼具综合广度与专业深度的事务所。",
        heroLede:
          "事务所概览待定。此段非源文档内容。请替换为本所真实的故事、价值观与定位。",
        storyEyebrow: "我们的故事",
        storyHeading: "事务所历史标题",
        storyBody:
          "事务所历史、创立故事、价值观与执业理念有待提供。本区为占位内容,非源文档内容。",
        teamEyebrow: "团队",
        teamHeading: "我们的成员",
        teamSub: "律师简介、照片、执业资格与资历有待您提供内容。",
        teamRole: "职衔 · 执业资格",
        whatEyebrow: "我们的业务",
        whatHeading: "横跨七大法律领域的专业意见",
        whatLede: "浏览任一执业领域,了解我们的工作方式。",
      },
      contact: {
        heroEyebrow: "预约咨询",
        heroTitle: "联系页主标题待定 — 例如:聊聊您的事务。",
        heroLede: "引言文案待事务所提供。下方的咨询表单已可使用,接通后将直达本所。",
        firstName: "名",
        lastName: "姓",
        email: "电子邮箱",
        phone: "电话",
        area: "法律领域",
        areaSelect: "请选择最相符的领域……",
        areaOther: "其他事务",
        message: "我们能为您做些什么?",
        messagePlaceholder: "请简单描述您的事务。无需任何义务,且您的咨询将予以保密。",
        submit: "申请咨询",
        consent:
          "提交此表单即表示您同意我们就您的咨询与您联系。您提供的信息为一般性内容,不构成律师—委托人关系。",
        thanksTitle: "感谢您——我们已收到您的咨询。",
        thanksBody:
          "我们的团队成员将在一个工作日内与您联系,安排咨询。如遇紧急刑事或保释事务,请直接致电我们。",
        asideEmail: "电子邮箱",
        asidePhone: "电话",
        asideOffices: "办公地点",
        asideHours: "工作时间",
        pendingConfirm: "待确认",
        emailValue: "hello@lexcord.com.au",
        officesValue: "服务全澳各州与领地。办公地址待确认。",
        hoursValue: "周一至周五,需预约。紧急刑事与保释事务:可随时联系我们。",
      },
      legalPending:
        "本页为占位内容。本所的最终措辞有待确定,发布前应由具资质的执业者审核。",
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

  // Restore persisted preference after hydration.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "zh") {
      setLangState(stored);
      document.documentElement.lang = stored === "zh" ? "zh-CN" : "en-AU";
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en-AU";
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
      areaLabel: (slug, enLabel) => (lang === "zh" ? t.areaZh[slug] ?? enLabel : enLabel),
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
