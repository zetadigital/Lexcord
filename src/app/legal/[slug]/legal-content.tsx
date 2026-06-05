"use client";

import { useLang, type Lang } from "@/lib/i18n";
import { PlaceholderText } from "@/components/placeholder";
import sectionStyles from "@/components/sections.module.css";
import styles from "./legal.module.css";

interface LegalDoc {
  title: string;
  intro: string;
  sections: string[];
}

type LegalContentMap = Record<string, Record<Lang, LegalDoc>>;

export const LEGAL: LegalContentMap = {
  privacy: {
    en: {
      title: "Privacy Policy",
      intro:
        "How Lexcord collects, uses, stores, and protects your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.",
      sections: [
        "Information we collect",
        "How we use your information",
        "Disclosure to third parties",
        "Data security and retention",
        "Accessing and correcting your information",
        "Contact and complaints",
      ],
    },
    zh: {
      title: "隐私政策",
      intro:
        "Lexcord 如何依据《1988 年隐私法》(Privacy Act 1988 (Cth)) 及澳大利亚隐私原则,收集、使用、存储并保护您的个人信息。",
      sections: [
        "我们收集的信息",
        "我们如何使用您的信息",
        "向第三方披露",
        "数据安全与留存",
        "查阅与更正您的信息",
        "联系与投诉",
      ],
    },
  },
  terms: {
    en: {
      title: "Terms of Use",
      intro: "The terms governing your use of the Lexcord website.",
      sections: [
        "Acceptance of terms",
        "Use of the website",
        "Intellectual property",
        "Limitation of liability",
        "Governing law",
      ],
    },
    zh: {
      title: "使用条款",
      intro: "规范您使用 Lexcord 网站的条款。",
      sections: ["条款的接受", "网站的使用", "知识产权", "责任限制", "适用法律"],
    },
  },
  disclaimer: {
    en: {
      title: "Disclaimer",
      intro:
        "Important information about the general nature of the content on this website and the absence of a lawyer–client relationship.",
      sections: [
        "No legal advice",
        "No lawyer–client relationship",
        "Accuracy of information",
        "External links",
      ],
    },
    zh: {
      title: "免责声明",
      intro: "关于本网站内容一般性质,以及不构成律师—委托人关系的重要说明。",
      sections: ["不构成法律意见", "不构成律师—委托人关系", "信息的准确性", "外部链接"],
    },
  },
};

export function LegalContent({ slug }: { slug: string }) {
  const { lang, t } = useLang();
  const doc = LEGAL[slug]?.[lang];
  if (!doc) return null;
  const updatedLabel = lang === "zh" ? "最后更新:待定" : "Last updated: pending";

  return (
    <>
      <section className={sectionStyles.hero}>
        <div className="container">
          <div className={sectionStyles.heroInner} style={{ paddingBlock: "clamp(3rem,2rem + 5vw,5.5rem)" }}>
            <span className="eyebrow eyebrow--light">{lang === "zh" ? "法律" : "Legal"}</span>
            <h1 className={sectionStyles.heroTitle} style={{ fontSize: "var(--text-3xl)" }}>
              {doc.title}
            </h1>
            <p className={sectionStyles.heroLede}>{doc.intro}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.doc}>
            <p className={styles.lead}>
              <PlaceholderText tag={t.pages.placeholderTag}>{t.pages.legalPending}</PlaceholderText>
            </p>
            {doc.sections.map((heading, i) => (
              <div key={i} className={styles.section}>
                <h2 className={styles.heading}>
                  {i + 1}. {heading}
                </h2>
                <p className={styles.body}>
                  <PlaceholderText tag={t.pages.placeholderTag}>
                    {lang === "zh" ? "本节内容待提供。" : "Section content to be supplied."}
                  </PlaceholderText>
                </p>
              </div>
            ))}
            <p className={styles.updated}>{updatedLabel}</p>
          </div>
        </div>
      </section>
    </>
  );
}
