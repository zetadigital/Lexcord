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
    "zh-tw": {
      title: "隱私政策",
      intro:
        "Lexcord 如何依據《1988 年隱私法》(Privacy Act 1988 (Cth)) 及澳大利亞隱私原則，收集、使用、存儲並保護您的個人資訊。",
      sections: [
        "我們收集的資訊",
        "我們如何使用您的資訊",
        "向第三方披露",
        "資料安全與留存",
        "查閱與更正您的資訊",
        "聯絡與投訴",
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
    "zh-tw": {
      title: "使用條款",
      intro: "規範您使用 Lexcord 網站的條款。",
      sections: ["條款的接受", "網站的使用", "知識產權", "責任限制", "適用法律"],
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
    "zh-tw": {
      title: "免責聲明",
      intro: "關於本網站內容一般性質，以及不構成律師—委託人關係的重要說明。",
      sections: ["不構成法律意見", "不構成律師—委託人關係", "資訊的準確性", "外部連結"],
    },
  },
  copyright: {
    en: {
      title: "Copyright",
      intro:
        "Copyright and permitted-use information for the content published on the Lexcord website.",
      sections: [
        "Ownership of content",
        "Permitted use",
        "Trade marks and logos",
        "Requesting permission",
      ],
    },
    zh: {
      title: "版权声明",
      intro: "关于 Lexcord 网站所发布内容的版权及许可使用说明。",
      sections: ["内容的所有权", "许可使用", "商标与标识", "申请授权"],
    },
    "zh-tw": {
      title: "版權聲明",
      intro: "關於 Lexcord 網站所發布內容的版權及許可使用說明。",
      sections: ["內容的所有權", "許可使用", "商標與標識", "申請授權"],
    },
  },
};

export function LegalContent({ slug }: { slug: string }) {
  const { lang, t } = useLang();
  const doc = LEGAL[slug]?.[lang];
  if (!doc) return null;
  const isChinese = lang === "zh" || lang === "zh-tw";
  const updatedLabel = isChinese
    ? (lang === "zh-tw" ? "最後更新：待定" : "最后更新:待定")
    : "Last updated: pending";

  return (
    <>
      <section className={sectionStyles.hero}>
        <div className="container">
          <div className={sectionStyles.heroInner} style={{ paddingBlock: "clamp(3rem,2rem + 5vw,5.5rem)" }}>
            <span className="eyebrow eyebrow--light">{isChinese ? "法律" : "Legal"}</span>
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
                    {lang === "zh" ? "本节内容待提供。" : lang === "zh-tw" ? "本節內容待提供。" : "Section content to be supplied."}
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
