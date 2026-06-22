"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import sectionStyles from "@/components/sections.module.css";
import styles from "./legal.module.css";

const EMAIL = "info@lexcord.com.au";
const PHONE = "+61 3 7054 5135";

// ── Types ─────────────────────────────────────────────────────────────────────

type Lang = "en" | "zh" | "zh-tw";

type LegalBlock =
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "contact" }
  | { t: "email" };

interface SectionDef {
  id: string;
  en: { label: string; blocks: LegalBlock[] };
  zh: { label: string; blocks: LegalBlock[] };
  "zh-tw": { label: string; blocks: LegalBlock[] };
}

interface Section {
  id: string;
  label: string;
  content: ReactNode;
}

// ── Helper components ────────────────────────────────────────────────────────

function ContactBlock() {
  return (
    <div className={styles.contactBlock}>
      <p><strong>Lexcord Lawyers</strong></p>
      <p>1508/530 Little Collins Street<br />Melbourne VIC 3000</p>
      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
      <p>
        <strong>Telephone:</strong>{" "}
        <a href="tel:+61370545135">{PHONE}</a>
      </p>
    </div>
  );
}

function renderBlock(b: LegalBlock, i: number): ReactNode {
  if (b.t === "p") return <p key={i} className={styles.para}>{b.text}</p>;
  if (b.t === "ul") return (
    <ul key={i} className={styles.list}>
      {b.items.map((item, j) => <li key={j}>{item}</li>)}
    </ul>
  );
  if (b.t === "contact") return <ContactBlock key={i} />;
  if (b.t === "email") return (
    <div key={i} className={styles.contactBlock}>
      <p><strong>Email:</strong>{" "}<a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
    </div>
  );
  return null;
}

function renderBlocks(blocks: LegalBlock[]): ReactNode {
  return <>{blocks.map((b, i) => renderBlock(b, i))}</>;
}

function makeSections(defs: SectionDef[], lang: Lang): Section[] {
  return defs.map((def) => {
    const c = def[lang];
    return { id: def.id, label: c.label, content: renderBlocks(c.blocks) };
  });
}

// ── Page metadata ─────────────────────────────────────────────────────────────

const PAGE_META: Record<string, Record<Lang, { title: string; intro: string }>> = {
  privacy: {
    en: {
      title: "Privacy Policy",
      intro: "This policy explains how Lexcord Lawyers collects, holds, uses, discloses and protects personal information.",
    },
    zh: {
      title: "隐私政策",
      intro: "本政策说明 Lexcord Lawyers 如何收集、持有、使用、披露和保护个人信息。",
    },
    "zh-tw": {
      title: "隱私政策",
      intro: "本政策說明 Lexcord Lawyers 如何收集、持有、使用、披露和保護個人資訊。",
    },
  },
  disclaimer: {
    en: {
      title: "Disclaimer",
      intro: "Important information about the general nature of this website and the limits of the information it contains.",
    },
    zh: {
      title: "免责声明",
      intro: "关于本网站一般性质及其所含信息限制的重要说明。",
    },
    "zh-tw": {
      title: "免責聲明",
      intro: "關於本網站一般性質及其所含資訊限制的重要說明。",
    },
  },
  copyright: {
    en: {
      title: "Copyright",
      intro: "Information about ownership and permitted use of content published on the Lexcord website.",
    },
    zh: {
      title: "版权声明",
      intro: "关于 Lexcord 网站所发布内容的所有权及许可使用信息。",
    },
    "zh-tw": {
      title: "版權聲明",
      intro: "關於 Lexcord 網站所發布內容的所有權及許可使用資訊。",
    },
  },
};

// ── Privacy sections ──────────────────────────────────────────────────────────

const PRIVACY_DEFS: SectionDef[] = [
  {
    id: "s1",
    en: {
      label: "1. About this policy",
      blocks: [
        { t: "p", text: "Lexcord Lawyers respects the privacy of the people with whom we deal." },
        { t: "p", text: "This Privacy Policy explains how we collect, hold, use and disclose personal information and how an individual may request access to, or correction of, personal information held by us." },
        { t: "p", text: "We seek to manage personal information in accordance with the Privacy Act 1988 (Cth), the Australian Privacy Principles and our professional obligations as a legal practice." },
        { t: "p", text: 'In this policy, "Lexcord", "we", "us" and "our" refer to Lexcord Lawyers.' },
      ],
    },
    zh: {
      label: "1. 关于本政策",
      blocks: [
        { t: "p", text: "Lexcord Lawyers 尊重与我们往来的人士的隐私。" },
        { t: "p", text: "本隐私政策说明我们如何收集、持有、使用和披露个人信息，以及个人如何请求查阅或更正我们所持有的个人信息。" },
        { t: "p", text: "我们寻求依据《1988年隐私法》（联邦）、澳大利亚隐私原则以及我们作为法律执业机构的职业义务管理个人信息。" },
        { t: "p", text: "本政策中，"Lexcord"及"我们"均指 Lexcord Lawyers。" },
      ],
    },
    "zh-tw": {
      label: "1. 關於本政策",
      blocks: [
        { t: "p", text: "Lexcord Lawyers 尊重與我們往來的人士的隱私。" },
        { t: "p", text: "本隱私政策說明我們如何收集、持有、使用和披露個人資訊，以及個人如何請求查閱或更正我們所持有的個人資訊。" },
        { t: "p", text: "我們尋求依據《1988年隱私法》（聯邦）、澳大利亞隱私原則以及我們作為法律執業機構的職業義務管理個人資訊。" },
        { t: "p", text: "本政策中，「Lexcord」及「我們」均指 Lexcord Lawyers。" },
      ],
    },
  },
  {
    id: "s2",
    en: {
      label: "2. Personal information we may collect",
      blocks: [
        { t: "p", text: "The kinds of personal information we collect depend on the nature of our relationship with the relevant individual and the services being requested or provided." },
        { t: "p", text: "This information may include:" },
        { t: "ul", items: [
          "names, addresses and contact details;",
          "dates of birth and identity-document information;",
          "personal, family, employment and financial information;",
          "information concerning property, businesses, assets and liabilities;",
          "immigration, court, regulatory or transaction-related information;",
          "information contained in correspondence and documents provided to us;",
          "billing and payment information;",
          "information concerning enquiries, complaints or feedback;",
          "website and technical information, including information collected through cookies or similar technologies; and",
          "sensitive information where it is relevant to a legal matter and its collection is permitted by law.",
        ]},
        { t: "p", text: "We may also collect information about other people where that information is relevant to a client matter." },
      ],
    },
    zh: {
      label: "2. 我们可能收集的个人信息",
      blocks: [
        { t: "p", text: "我们收集的个人信息类别取决于我们与相关人士的关系性质及所请求或提供的服务。" },
        { t: "p", text: "这些信息可能包括：" },
        { t: "ul", items: [
          "姓名、地址及联系方式；",
          "出生日期及身份证件信息；",
          "个人、家庭、就业及财务信息；",
          "有关房产、企业、资产及负债的信息；",
          "移民、法院、监管或交易相关信息；",
          "提供给我们的往来函件及文件中所含信息；",
          "账单及付款信息；",
          "有关查询、投诉或反馈的信息；",
          "网站及技术信息，包括通过 Cookies 或类似技术收集的信息；以及",
          "在与法律事务相关且法律允许收集的情况下的敏感信息。",
        ]},
        { t: "p", text: "在与客户事务相关的情况下，我们也可能收集有关其他人士的信息。" },
      ],
    },
    "zh-tw": {
      label: "2. 我們可能收集的個人資訊",
      blocks: [
        { t: "p", text: "我們收集的個人資訊類別取決於我們與相關人士的關係性質及所請求或提供的服務。" },
        { t: "p", text: "這些資訊可能包括：" },
        { t: "ul", items: [
          "姓名、地址及聯絡方式；",
          "出生日期及身份證件資訊；",
          "個人、家庭、就業及財務資訊；",
          "有關不動產、企業、資產及負債的資訊；",
          "移民、法院、監管或交易相關資訊；",
          "提供給我們的往來函件及文件中所含資訊；",
          "帳單及付款資訊；",
          "有關查詢、投訴或反饋的資訊；",
          "網站及技術資訊，包括透過 Cookies 或類似技術收集的資訊；以及",
          "在與法律事務相關且法律允許收集的情況下的敏感資訊。",
        ]},
        { t: "p", text: "在與客戶事務相關的情況下，我們也可能收集有關其他人士的資訊。" },
      ],
    },
  },
  {
    id: "s3",
    en: {
      label: "3. How we collect personal information",
      blocks: [
        { t: "p", text: "We generally collect personal information directly from the individual concerned, including when a person:" },
        { t: "ul", items: [
          "contacts us by telephone, email, website form or in person;",
          "requests legal services or provides instructions;",
          "supplies documents or information in connection with a matter;",
          "subscribes to or communicates with us through an online service;",
          "applies for employment or another position with the firm; or",
          "attends an event or otherwise deals with us.",
        ]},
        { t: "p", text: "We may also collect personal information from:" },
        { t: "ul", items: [
          "clients and prospective clients;",
          "authorised representatives;",
          "courts, tribunals, government bodies and regulators;",
          "other solicitors, barristers and professional advisers;",
          "agents, employers, accountants, financial institutions and service providers;",
          "publicly available sources; and",
          "other persons where collection is authorised, required or reasonably necessary for our functions.",
        ]},
      ],
    },
    zh: {
      label: "3. 我们如何收集个人信息",
      blocks: [
        { t: "p", text: "我们通常直接从相关人士收集个人信息，包括当该人士：" },
        { t: "ul", items: [
          "通过电话、电子邮件、网站表格或亲自联系我们；",
          "请求法律服务或提供指示；",
          "提供与事务相关的文件或信息；",
          "通过在线服务订阅我们或与我们沟通；",
          "申请律所的职位或其他岗位；或",
          "出席活动或以其他方式与我们往来。",
        ]},
        { t: "p", text: "我们也可能从以下来源收集个人信息：" },
        { t: "ul", items: [
          "客户及潜在客户；",
          "授权代表；",
          "法院、裁判所、政府机构及监管机关；",
          "其他律师、大律师及专业顾问；",
          "代理人、雇主、会计师、金融机构及服务提供商；",
          "公开来源；以及",
          "在法律授权、要求或合理必要的情况下的其他人士。",
        ]},
      ],
    },
    "zh-tw": {
      label: "3. 我們如何收集個人資訊",
      blocks: [
        { t: "p", text: "我們通常直接從相關人士收集個人資訊，包括當該人士：" },
        { t: "ul", items: [
          "透過電話、電子郵件、網站表格或親自聯絡我們；",
          "請求法律服務或提供指示；",
          "提供與事務相關的文件或資訊；",
          "透過線上服務訂閱我們或與我們溝通；",
          "申請律所的職位或其他崗位；或",
          "出席活動或以其他方式與我們往來。",
        ]},
        { t: "p", text: "我們也可能從以下來源收集個人資訊：" },
        { t: "ul", items: [
          "客戶及潛在客戶；",
          "授權代表；",
          "法院、裁判所、政府機構及監管機關；",
          "其他律師、大律師及專業顧問；",
          "代理人、雇主、會計師、金融機構及服務提供商；",
          "公開來源；以及",
          "在法律授權、要求或合理必要的情況下的其他人士。",
        ]},
      ],
    },
  },
  {
    id: "s4",
    en: {
      label: "4. Why we collect, hold, use and disclose information",
      blocks: [
        { t: "p", text: "We may collect, hold, use and disclose personal information for purposes including:" },
        { t: "ul", items: [
          "responding to enquiries;",
          "assessing whether we can act, including conducting conflict checks;",
          "providing legal services and managing client matters;",
          "communicating with clients, courts, authorities, counterparties and other participants in a matter;",
          "verifying identity and authority;",
          "complying with legal, regulatory, professional and insurance obligations;",
          "issuing invoices and processing payments;",
          "engaging barristers, experts, interpreters, agents and other service providers;",
          "managing our business, systems, records, security and professional risk;",
          "considering employment applications;",
          "responding to complaints;",
          "maintaining and improving our website and services; and",
          "sending updates or information where the recipient has consented or where otherwise permitted by law.",
        ]},
        { t: "p", text: "We will not use or disclose personal information for an unrelated purpose unless consent has been obtained or the use or disclosure is otherwise permitted or required by law." },
      ],
    },
    zh: {
      label: "4. 我们为何收集、持有、使用和披露信息",
      blocks: [
        { t: "p", text: "我们可能出于以下目的收集、持有、使用和披露个人信息：" },
        { t: "ul", items: [
          "回复查询；",
          "评估我们是否能够受理事务，包括进行利益冲突审查；",
          "提供法律服务及处理客户事务；",
          "与客户、法院、主管机关、对方当事人及事务中的其他参与方沟通；",
          "核实身份及授权；",
          "履行法律、监管、职业及保险义务；",
          "开具发票及处理付款；",
          "聘用大律师、专家、口译员、代理人及其他服务提供商；",
          "管理我们的业务、系统、档案、安全及职业风险；",
          "处理就业申请；",
          "回应投诉；",
          "维护及改善我们的网站和服务；以及",
          "在收件人已同意或法律另有许可的情况下发送更新或信息。",
        ]},
        { t: "p", text: "未经同意或法律另有许可或要求，我们不会将个人信息用于无关目的或予以披露。" },
      ],
    },
    "zh-tw": {
      label: "4. 我們為何收集、持有、使用和披露資訊",
      blocks: [
        { t: "p", text: "我們可能出於以下目的收集、持有、使用和披露個人資訊：" },
        { t: "ul", items: [
          "回覆查詢；",
          "評估我們是否能夠受理事務，包括進行利益衝突審查；",
          "提供法律服務及處理客戶事務；",
          "與客戶、法院、主管機關、對方當事人及事務中的其他參與方溝通；",
          "核實身份及授權；",
          "履行法律、監管、職業及保險義務；",
          "開具發票及處理付款；",
          "聘用大律師、專家、口譯員、代理人及其他服務提供商；",
          "管理我們的業務、系統、檔案、安全及職業風險；",
          "處理就業申請；",
          "回應投訴；",
          "維護及改善我們的網站和服務；以及",
          "在收件人已同意或法律另有許可的情況下發送更新或資訊。",
        ]},
        { t: "p", text: "未經同意或法律另有許可或要求，我們不會將個人資訊用於無關目的或予以披露。" },
      ],
    },
  },
  {
    id: "s5",
    en: {
      label: "5. Disclosure of personal information",
      blocks: [
        { t: "p", text: "Depending on the matter, we may disclose personal information to:" },
        { t: "ul", items: [
          "courts, tribunals, government bodies and regulators;",
          "other legal practitioners and parties involved in a matter;",
          "barristers, experts, interpreters, investigators and consultants;",
          "accountants, financial advisers, banks, insurers and other professional advisers;",
          "property, settlement, migration and document-service providers;",
          "technology, data-storage, communications and administrative service providers;",
          "related or associated service providers;",
          "law-enforcement bodies where disclosure is required or authorised by law; and",
          "other recipients authorised by the individual concerned.",
        ]},
        { t: "p", text: "Legal professional privilege and our duties of confidentiality may apply to information provided to us. Nothing in this policy limits those obligations." },
      ],
    },
    zh: {
      label: "5. 个人信息的披露",
      blocks: [
        { t: "p", text: "根据事务的具体情况，我们可能向以下方披露个人信息：" },
        { t: "ul", items: [
          "法院、裁判所、政府机构及监管机关；",
          "参与事务的其他法律从业者及当事方；",
          "大律师、专家、口译员、调查人员及顾问；",
          "会计师、财务顾问、银行、保险公司及其他专业顾问；",
          "房产、结算、移民及文件服务提供商；",
          "技术、数据存储、通信及行政服务提供商；",
          "相关或附属服务提供商；",
          "在法律要求或授权的情况下的执法机构；以及",
          "相关人士授权的其他收件方。",
        ]},
        { t: "p", text: "法律专业特权及我们的保密义务可能适用于提供给我们的信息。本政策的任何内容均不限制上述义务。" },
      ],
    },
    "zh-tw": {
      label: "5. 個人資訊的披露",
      blocks: [
        { t: "p", text: "根據事務的具體情況，我們可能向以下方披露個人資訊：" },
        { t: "ul", items: [
          "法院、裁判所、政府機構及監管機關；",
          "參與事務的其他法律從業者及當事方；",
          "大律師、專家、口譯員、調查人員及顧問；",
          "會計師、財務顧問、銀行、保險公司及其他專業顧問；",
          "不動產、結算、移民及文件服務提供商；",
          "技術、數據存儲、通信及行政服務提供商；",
          "相關或附屬服務提供商；",
          "在法律要求或授權的情況下的執法機構；以及",
          "相關人士授權的其他收件方。",
        ]},
        { t: "p", text: "法律專業特權及我們的保密義務可能適用於提供給我們的資訊。本政策的任何內容均不限制上述義務。" },
      ],
    },
  },
  {
    id: "s6",
    en: {
      label: "6. Overseas disclosure and storage",
      blocks: [
        { t: "p", text: "Some matters involve parties, advisers, service providers or authorities outside Australia. We may disclose personal information overseas where this is required to conduct a matter, where the individual has authorised the disclosure, or where disclosure is otherwise permitted by law." },
        { t: "p", text: "Some technology and data-storage providers used by us may store or process information outside Australia." },
        { t: "p", text: "The countries involved will depend on the relevant matter and the service providers being used. Where practicable, further information about an anticipated overseas disclosure can be provided on request." },
        { t: "p", text: "We take reasonable steps in the circumstances to manage overseas disclosures consistently with applicable privacy obligations." },
      ],
    },
    zh: {
      label: "6. 境外披露与存储",
      blocks: [
        { t: "p", text: "部分事务涉及澳大利亚以外的当事方、顾问、服务提供商或主管机关。在处理事务需要、个人已授权披露或法律另有许可的情况下，我们可能在境外披露个人信息。" },
        { t: "p", text: "我们使用的部分技术及数据存储服务提供商可能在澳大利亚以外存储或处理信息。" },
        { t: "p", text: "所涉及的国家取决于具体事务及所使用的服务提供商。在可行的情况下，可应要求就预期的境外披露提供进一步信息。" },
        { t: "p", text: "我们采取合理措施，确保境外披露符合适用的隐私义务。" },
      ],
    },
    "zh-tw": {
      label: "6. 境外披露與存儲",
      blocks: [
        { t: "p", text: "部分事務涉及澳大利亞以外的當事方、顧問、服務提供商或主管機關。在處理事務需要、個人已授權披露或法律另有許可的情況下，我們可能在境外披露個人資訊。" },
        { t: "p", text: "我們使用的部分技術及數據存儲服務提供商可能在澳大利亞以外存儲或處理資訊。" },
        { t: "p", text: "所涉及的國家取決於具體事務及所使用的服務提供商。在可行的情況下，可應要求就預期的境外披露提供進一步資訊。" },
        { t: "p", text: "我們採取合理措施，確保境外披露符合適用的隱私義務。" },
      ],
    },
  },
  {
    id: "s7",
    en: {
      label: "7. Website, cookies and electronic communications",
      blocks: [
        { t: "p", text: "Our website may collect limited technical information, including:" },
        { t: "ul", items: [
          "internet protocol addresses;",
          "browser and device information;",
          "pages viewed;",
          "access times;",
          "referring websites; and",
          "information collected through cookies or similar technologies.",
        ]},
        { t: "p", text: "This information may be used to operate, secure and improve the website and to understand how it is used." },
        { t: "p", text: "A person may adjust browser settings to restrict cookies, although this may affect the operation of some website functions." },
        { t: "p", text: "Electronic communications may not always be secure. Individuals should avoid sending highly sensitive information through an unsecured website form unless instructed to do so." },
      ],
    },
    zh: {
      label: "7. 网站、Cookies 及电子通信",
      blocks: [
        { t: "p", text: "我们的网站可能收集有限的技术信息，包括：" },
        { t: "ul", items: [
          "互联网协议地址；",
          "浏览器及设备信息；",
          "浏览页面；",
          "访问时间；",
          "来源网站；以及",
          "通过 Cookies 或类似技术收集的信息。",
        ]},
        { t: "p", text: "这些信息可能用于运营、保护和改善网站，以及了解网站的使用情况。" },
        { t: "p", text: "用户可调整浏览器设置以限制 Cookies 的使用，但这可能影响某些网站功能的运行。" },
        { t: "p", text: "电子通信不一定是安全的。除非经指示，个人应避免通过不安全的网站表格发送高度敏感的信息。" },
      ],
    },
    "zh-tw": {
      label: "7. 網站、Cookies 及電子通信",
      blocks: [
        { t: "p", text: "我們的網站可能收集有限的技術資訊，包括：" },
        { t: "ul", items: [
          "網路協議地址；",
          "瀏覽器及設備資訊；",
          "瀏覽頁面；",
          "訪問時間；",
          "來源網站；以及",
          "透過 Cookies 或類似技術收集的資訊。",
        ]},
        { t: "p", text: "這些資訊可能用於運營、保護和改善網站，以及了解網站的使用情況。" },
        { t: "p", text: "用戶可調整瀏覽器設定以限制 Cookies 的使用，但這可能影響某些網站功能的運行。" },
        { t: "p", text: "電子通信不一定是安全的。除非經指示，個人應避免透過不安全的網站表格發送高度敏感的資訊。" },
      ],
    },
  },
  {
    id: "s8",
    en: {
      label: "8. Security and retention",
      blocks: [
        { t: "p", text: "We take reasonable technical and organisational steps to protect personal information from misuse, interference, loss and unauthorised access, modification or disclosure." },
        { t: "p", text: "Personal information may be held in electronic systems, cloud-based platforms and physical records." },
        { t: "p", text: "No system can be guaranteed to be completely secure. Individuals should contact us promptly if they believe information provided to Lexcord may have been compromised." },
        { t: "p", text: "We retain information for as long as reasonably required for legal, professional, insurance, regulatory and business purposes. Information that is no longer required may be securely destroyed or de-identified, subject to any applicable retention obligations." },
      ],
    },
    zh: {
      label: "8. 安全与保留",
      blocks: [
        { t: "p", text: "我们采取合理的技术和组织措施，保护个人信息免遭滥用、干扰、丢失及未经授权的访问、修改或披露。" },
        { t: "p", text: "个人信息可能存储于电子系统、云平台及纸质档案中。" },
        { t: "p", text: "没有任何系统能保证完全安全。若个人认为提供给 Lexcord 的信息可能已遭泄露，应立即与我们联系。" },
        { t: "p", text: "我们将在法律、职业、保险、监管及业务目的合理需要的期限内保留信息。不再需要的信息可能在符合适用保留义务的前提下予以安全销毁或去标识化处理。" },
      ],
    },
    "zh-tw": {
      label: "8. 安全與保留",
      blocks: [
        { t: "p", text: "我們採取合理的技術和組織措施，保護個人資訊免遭濫用、干擾、遺失及未經授權的訪問、修改或披露。" },
        { t: "p", text: "個人資訊可能存儲於電子系統、雲端平台及紙質檔案中。" },
        { t: "p", text: "沒有任何系統能保證完全安全。若個人認為提供給 Lexcord 的資訊可能已遭洩露，應立即與我們聯繫。" },
        { t: "p", text: "我們將在法律、職業、保險、監管及業務目的合理需要的期限內保留資訊。不再需要的資訊可能在符合適用保留義務的前提下予以安全銷毀或去識別化處理。" },
      ],
    },
  },
  {
    id: "s9",
    en: {
      label: "9. Access and correction",
      blocks: [
        { t: "p", text: "An individual may request access to personal information held about them or ask us to correct information that is inaccurate, incomplete or out of date." },
        { t: "p", text: "Requests should be made using the contact details below." },
        { t: "p", text: "We may need to verify the requester's identity before providing access or making a correction." },
        { t: "p", text: "Access may be refused or limited where permitted by law, including where providing access would affect legal professional privilege, another person's privacy or an existing or anticipated legal proceeding." },
        { t: "p", text: "We will explain the basis of any refusal where required." },
      ],
    },
    zh: {
      label: "9. 查阅与更正",
      blocks: [
        { t: "p", text: "个人可以请求查阅我们所持有的关于其本人的个人信息，或要求我们更正不准确、不完整或过时的信息。" },
        { t: "p", text: "请求应通过以下联系方式提出。" },
        { t: "p", text: "在提供查阅或进行更正之前，我们可能需要核实请求人的身份。" },
        { t: "p", text: "在法律允许的情况下，查阅可能被拒绝或受到限制，包括在提供查阅将影响法律专业特权、他人隐私或现有或预期诉讼的情形下。" },
        { t: "p", text: "在法律要求的情况下，我们将说明任何拒绝的依据。" },
      ],
    },
    "zh-tw": {
      label: "9. 查閱與更正",
      blocks: [
        { t: "p", text: "個人可以請求查閱我們所持有的關於其本人的個人資訊，或要求我們更正不準確、不完整或過時的資訊。" },
        { t: "p", text: "請求應透過以下聯絡方式提出。" },
        { t: "p", text: "在提供查閱或進行更正之前，我們可能需要核實請求人的身份。" },
        { t: "p", text: "在法律允許的情況下，查閱可能被拒絕或受到限制，包括在提供查閱將影響法律專業特權、他人隱私或現有或預期訴訟的情形下。" },
        { t: "p", text: "在法律要求的情況下，我們將說明任何拒絕的依據。" },
      ],
    },
  },
  {
    id: "s10",
    en: {
      label: "10. Direct marketing",
      blocks: [
        { t: "p", text: "We may send legal updates, firm news or information about our services where the recipient has consented or where otherwise permitted by law." },
        { t: "p", text: "A recipient may unsubscribe at any time by using an unsubscribe function in the communication or by contacting us." },
        { t: "p", text: "We do not sell personal information to third parties." },
      ],
    },
    zh: {
      label: "10. 直接营销",
      blocks: [
        { t: "p", text: "在收件人已同意或法律另有许可的情况下，我们可能发送法律更新、律所动态或有关我们服务的信息。" },
        { t: "p", text: "收件人可随时通过通信中的退订功能或联系我们选择退订。" },
        { t: "p", text: "我们不会将个人信息出售给第三方。" },
      ],
    },
    "zh-tw": {
      label: "10. 直接行銷",
      blocks: [
        { t: "p", text: "在收件人已同意或法律另有許可的情況下，我們可能發送法律更新、律所動態或有關我們服務的資訊。" },
        { t: "p", text: "收件人可隨時透過通信中的退訂功能或聯絡我們選擇退訂。" },
        { t: "p", text: "我們不會將個人資訊出售給第三方。" },
      ],
    },
  },
  {
    id: "s11",
    en: {
      label: "11. Privacy complaints",
      blocks: [
        { t: "p", text: "A person who has a question or complaint about how we have handled personal information should contact us using the details below." },
        { t: "p", text: "Please provide sufficient information for us to understand and investigate the issue." },
        { t: "p", text: "We will seek to acknowledge and respond to the complaint within a reasonable period." },
        { t: "p", text: "If the complaint is not resolved, the person may be entitled to contact the Office of the Australian Information Commissioner." },
      ],
    },
    zh: {
      label: "11. 隐私投诉",
      blocks: [
        { t: "p", text: "对我们处理个人信息的方式有疑问或投诉的人士，应通过以下联系方式与我们联系。" },
        { t: "p", text: "请提供足够信息，以便我们理解和调查相关问题。" },
        { t: "p", text: "我们将在合理期限内确认并回应投诉。" },
        { t: "p", text: "若投诉未获解决，相关人士可能有权联系澳大利亚信息专员办公室。" },
      ],
    },
    "zh-tw": {
      label: "11. 隱私投訴",
      blocks: [
        { t: "p", text: "對我們處理個人資訊的方式有疑問或投訴的人士，應透過以下聯絡方式與我們聯繫。" },
        { t: "p", text: "請提供足夠資訊，以便我們理解和調查相關問題。" },
        { t: "p", text: "我們將在合理期限內確認並回應投訴。" },
        { t: "p", text: "若投訴未獲解決，相關人士可能有權聯繫澳大利亞資訊專員辦公室。" },
      ],
    },
  },
  {
    id: "s12",
    en: {
      label: "12. Contact us",
      blocks: [
        { t: "p", text: "Privacy enquiries, access or correction requests and complaints may be directed to:" },
        { t: "contact" },
      ],
    },
    zh: {
      label: "12. 联系我们",
      blocks: [
        { t: "p", text: "隐私查询、查阅或更正请求及投诉可寄往：" },
        { t: "contact" },
      ],
    },
    "zh-tw": {
      label: "12. 聯絡我們",
      blocks: [
        { t: "p", text: "隱私查詢、查閱或更正請求及投訴可寄往：" },
        { t: "contact" },
      ],
    },
  },
  {
    id: "s13",
    en: {
      label: "13. Changes to this policy",
      blocks: [
        { t: "p", text: "We may update this Privacy Policy from time to time to reflect changes to our practices, systems or legal obligations." },
        { t: "p", text: "The current version will be published on this website with its latest revision date." },
      ],
    },
    zh: {
      label: "13. 本政策的变更",
      blocks: [
        { t: "p", text: "我们可能不时更新本隐私政策，以反映我们的实践、系统或法律义务的变化。" },
        { t: "p", text: "最新版本将与最新修订日期一并在本网站上发布。" },
      ],
    },
    "zh-tw": {
      label: "13. 本政策的變更",
      blocks: [
        { t: "p", text: "我們可能不時更新本隱私政策，以反映我們的實踐、系統或法律義務的變化。" },
        { t: "p", text: "最新版本將與最新修訂日期一併在本網站上發布。" },
      ],
    },
  },
];

// ── Disclaimer sections ───────────────────────────────────────────────────────

const DISCLAIMER_DEFS: SectionDef[] = [
  {
    id: "d1",
    en: {
      label: "1. General information only",
      blocks: [
        { t: "p", text: "The information published on this website is general information only." },
        { t: "p", text: "It is not legal advice and should not be relied upon as a substitute for advice concerning a person's particular circumstances." },
        { t: "p", text: "Legal rights, procedures and outcomes depend on the relevant facts, documents, jurisdiction and law applying at the time." },
      ],
    },
    zh: {
      label: "1. 仅供一般参考",
      blocks: [
        { t: "p", text: "本网站发布的信息仅供一般参考。" },
        { t: "p", text: "不构成法律建议，不应作为针对个人具体情况建议的替代依据。" },
        { t: "p", text: "法律权利、程序及结果取决于相关事实、文件、管辖区及当时适用的法律。" },
      ],
    },
    "zh-tw": {
      label: "1. 僅供一般參考",
      blocks: [
        { t: "p", text: "本網站發布的資訊僅供一般參考。" },
        { t: "p", text: "不構成法律建議，不應作為針對個人具體情況建議的替代依據。" },
        { t: "p", text: "法律權利、程序及結果取決於相關事實、文件、管轄區及當時適用的法律。" },
      ],
    },
  },
  {
    id: "d2",
    en: {
      label: "2. No lawyer–client relationship",
      blocks: [
        { t: "p", text: "Accessing this website, using a website form, sending an enquiry or receiving general information from Lexcord does not by itself create a lawyer–client relationship." },
        { t: "p", text: "Lexcord will only act for a person or organisation after:" },
        { t: "ul", items: [
          "confirming that we are able to act;",
          "completing any required conflict, identity and client-acceptance checks;",
          "agreeing on the scope of the engagement; and",
          "providing or entering into the required engagement and costs documentation.",
        ]},
        { t: "p", text: "Until those steps are completed, no person should assume that Lexcord is acting for them or protecting any deadline or limitation period." },
      ],
    },
    zh: {
      label: "2. 不构成律师-客户关系",
      blocks: [
        { t: "p", text: "访问本网站、使用网站表格、发送查询或从 Lexcord 获取一般信息，本身并不构成律师-客户关系。" },
        { t: "p", text: "Lexcord 仅在以下步骤完成后方可为某人或机构提供服务：" },
        { t: "ul", items: [
          "确认我们能够受理；",
          "完成所需的利益冲突审查、身份核实及客户接受审查；",
          "就委托范围达成协议；以及",
          "提供或签订所需的委托及费用文件。",
        ]},
        { t: "p", text: "在上述步骤完成之前，任何人不应认为 Lexcord 正在为其提供服务或监管任何截止日期或时效期限。" },
      ],
    },
    "zh-tw": {
      label: "2. 不構成律師-客戶關係",
      blocks: [
        { t: "p", text: "訪問本網站、使用網站表格、發送查詢或從 Lexcord 獲取一般資訊，本身並不構成律師-客戶關係。" },
        { t: "p", text: "Lexcord 僅在以下步驟完成後方可為某人或機構提供服務：" },
        { t: "ul", items: [
          "確認我們能夠受理；",
          "完成所需的利益衝突審查、身份核實及客戶接受審查；",
          "就委託範圍達成協議；以及",
          "提供或簽訂所需的委託及費用文件。",
        ]},
        { t: "p", text: "在上述步驟完成之前，任何人不應認為 Lexcord 正在為其提供服務或監管任何截止日期或時效期限。" },
      ],
    },
  },
  {
    id: "d3",
    en: {
      label: "3. Do not delay because of website content",
      blocks: [
        { t: "p", text: "Legal matters may be subject to strict time limits." },
        { t: "p", text: "Information on this website should not be used as a reason to delay obtaining advice, responding to correspondence, filing a document or taking another required step." },
        { t: "p", text: "Lexcord is not responsible for monitoring a deadline merely because a person has visited the website or submitted a general enquiry." },
      ],
    },
    zh: {
      label: "3. 勿因网站内容而延误行动",
      blocks: [
        { t: "p", text: "法律事务可能受到严格时限的约束。" },
        { t: "p", text: "本网站上的信息不应成为延迟获取建议、回应往来函件、提交文件或采取其他必要步骤的理由。" },
        { t: "p", text: "仅因访问了本网站或提交了一般查询，并不意味着 Lexcord 负有监督截止日期的责任。" },
      ],
    },
    "zh-tw": {
      label: "3. 勿因網站內容而延誤行動",
      blocks: [
        { t: "p", text: "法律事務可能受到嚴格時限的約束。" },
        { t: "p", text: "本網站上的資訊不應成為延遲獲取建議、回應往來函件、提交文件或採取其他必要步驟的理由。" },
        { t: "p", text: "僅因訪問了本網站或提交了一般查詢，並不意味著 Lexcord 負有監督截止日期的責任。" },
      ],
    },
  },
  {
    id: "d4",
    en: {
      label: "4. Accuracy and currency",
      blocks: [
        { t: "p", text: "We seek to keep the website accurate and current, but we do not guarantee that all information is complete, current or suitable for every circumstance." },
        { t: "p", text: "Law, procedure, government policy, fees, forms and administrative practices may change." },
        { t: "p", text: "Information may also be simplified for general explanation." },
        { t: "p", text: "Before acting or deciding not to act, obtain advice based on the current law and the specific circumstances." },
      ],
    },
    zh: {
      label: "4. 准确性与时效性",
      blocks: [
        { t: "p", text: "我们力求保持网站信息的准确性和时效性，但不保证所有信息对每种情况均完整、最新或适用。" },
        { t: "p", text: "法律、程序、政府政策、费用、表格及行政惯例可能发生变化。" },
        { t: "p", text: "信息也可能为便于一般说明而作出简化处理。" },
        { t: "p", text: "在采取行动或决定不采取行动之前，应根据当前法律及具体情况获取建议。" },
      ],
    },
    "zh-tw": {
      label: "4. 準確性與時效性",
      blocks: [
        { t: "p", text: "我們力求保持網站資訊的準確性和時效性，但不保證所有資訊對每種情況均完整、最新或適用。" },
        { t: "p", text: "法律、程序、政府政策、費用、表格及行政慣例可能發生變化。" },
        { t: "p", text: "資訊也可能為便於一般說明而作出簡化處理。" },
        { t: "p", text: "在採取行動或決定不採取行動之前，應根據當前法律及具體情況獲取建議。" },
      ],
    },
  },
  {
    id: "d5",
    en: {
      label: "5. Outcomes and examples",
      blocks: [
        { t: "p", text: "Any examples, descriptions of services, case discussions or general statements about possible outcomes are illustrative only." },
        { t: "p", text: "Past results do not guarantee a similar result in another matter." },
        { t: "p", text: "No statement on this website should be understood as a promise or guarantee concerning:" },
        { t: "ul", items: [
          "the outcome of a matter;",
          "the time required;",
          "the cost of the work;",
          "the availability of a visa, court order, approval or other decision; or",
          "the position that may be taken by another party, authority, court or tribunal.",
        ]},
      ],
    },
    zh: {
      label: "5. 结果与示例",
      blocks: [
        { t: "p", text: "任何示例、服务描述、案例讨论或关于可能结果的一般性陈述均仅供说明之用。" },
        { t: "p", text: "过往结果不保证在其他事务中取得类似结果。" },
        { t: "p", text: "本网站上的任何陈述均不应被理解为以下方面的承诺或保证：" },
        { t: "ul", items: [
          "事务的结果；",
          "所需时间；",
          "工作费用；",
          "签证、法院命令、审批或其他决定的可获得性；或",
          "另一方当事人、主管机关、法院或裁判所可能采取的立场。",
        ]},
      ],
    },
    "zh-tw": {
      label: "5. 結果與示例",
      blocks: [
        { t: "p", text: "任何示例、服務描述、案例討論或關於可能結果的一般性陳述均僅供說明之用。" },
        { t: "p", text: "過往結果不保證在其他事務中取得類似結果。" },
        { t: "p", text: "本網站上的任何陳述均不應被理解為以下方面的承諾或保證：" },
        { t: "ul", items: [
          "事務的結果；",
          "所需時間；",
          "工作費用；",
          "簽證、法院命令、審批或其他決定的可獲得性；或",
          "另一方當事人、主管機關、法院或裁判所可能採取的立場。",
        ]},
      ],
    },
  },
  {
    id: "d6",
    en: {
      label: "6. External websites and third-party material",
      blocks: [
        { t: "p", text: "This website may contain links to external websites or refer to information produced by third parties." },
        { t: "p", text: "Those links and references are provided for convenience only." },
        { t: "p", text: "Lexcord does not control third-party websites and does not endorse or accept responsibility for their content, security, availability or privacy practices." },
        { t: "p", text: "Users should consider the terms and policies applying to any external website they visit." },
      ],
    },
    zh: {
      label: "6. 外部网站及第三方内容",
      blocks: [
        { t: "p", text: "本网站可能包含指向外部网站的链接，或参考第三方制作的信息。" },
        { t: "p", text: "这些链接和参考仅为方便起见而提供。" },
        { t: "p", text: "Lexcord 不控制第三方网站，对其内容、安全性、可用性或隐私惯例概不认可或承担责任。" },
        { t: "p", text: "用户应查阅其所访问的任何外部网站的适用条款和政策。" },
      ],
    },
    "zh-tw": {
      label: "6. 外部網站及第三方內容",
      blocks: [
        { t: "p", text: "本網站可能包含指向外部網站的連結，或參考第三方製作的資訊。" },
        { t: "p", text: "這些連結和參考僅為方便起見而提供。" },
        { t: "p", text: "Lexcord 不控制第三方網站，對其內容、安全性、可用性或隱私慣例概不認可或承擔責任。" },
        { t: "p", text: "用戶應查閱其所訪問的任何外部網站的適用條款和政策。" },
      ],
    },
  },
  {
    id: "d7",
    en: {
      label: "7. Website availability and security",
      blocks: [
        { t: "p", text: "We do not guarantee that the website will always be available, uninterrupted, secure or free from errors, viruses or other harmful components." },
        { t: "p", text: "Users are responsible for taking appropriate precautions when accessing or downloading online material." },
        { t: "p", text: "To the extent permitted by law, Lexcord excludes liability arising from reliance on this website or from an inability to access or use it." },
        { t: "p", text: "Nothing in this disclaimer excludes, restricts or modifies any right or liability that cannot lawfully be excluded, restricted or modified." },
      ],
    },
    zh: {
      label: "7. 网站可用性与安全",
      blocks: [
        { t: "p", text: "我们不保证本网站将始终可用、不间断、安全或不含错误、病毒或其他有害组件。" },
        { t: "p", text: "用户在访问或下载在线内容时，有责任采取适当的预防措施。" },
        { t: "p", text: "在法律允许的最大范围内，Lexcord 排除因依赖本网站或无法访问或使用本网站而产生的责任。" },
        { t: "p", text: "本免责声明中的任何内容均不排除、限制或修改任何依法不得排除、限制或修改的权利或责任。" },
      ],
    },
    "zh-tw": {
      label: "7. 網站可用性與安全",
      blocks: [
        { t: "p", text: "我們不保證本網站將始終可用、不間斷、安全或不含錯誤、病毒或其他有害組件。" },
        { t: "p", text: "用戶在訪問或下載線上內容時，有責任採取適當的預防措施。" },
        { t: "p", text: "在法律允許的最大範圍內，Lexcord 排除因依賴本網站或無法訪問或使用本網站而產生的責任。" },
        { t: "p", text: "本免責聲明中的任何內容均不排除、限制或修改任何依法不得排除、限制或修改的權利或責任。" },
      ],
    },
  },
  {
    id: "d8",
    en: {
      label: "8. Jurisdiction",
      blocks: [
        { t: "p", text: "This website is operated from Victoria, Australia." },
        { t: "p", text: "Unless otherwise stated, its content concerns Australian legal services and should not be understood as advice on the law of another jurisdiction." },
        { t: "p", text: "Where a matter involves another country or jurisdiction, appropriately qualified local advice may be required." },
      ],
    },
    zh: {
      label: "8. 管辖权",
      blocks: [
        { t: "p", text: "本网站在澳大利亚维多利亚州运营。" },
        { t: "p", text: "除非另有说明，其内容涉及澳大利亚法律服务，不应被理解为就其他管辖区的法律提供建议。" },
        { t: "p", text: "当事务涉及另一国家或司法管辖区时，可能需要获得具有适当资质的当地法律建议。" },
      ],
    },
    "zh-tw": {
      label: "8. 管轄權",
      blocks: [
        { t: "p", text: "本網站在澳大利亞維多利亞州運營。" },
        { t: "p", text: "除非另有說明，其內容涉及澳大利亞法律服務，不應被理解為就其他管轄區的法律提供建議。" },
        { t: "p", text: "當事務涉及另一國家或司法管轄區時，可能需要獲得具有適當資質的當地法律建議。" },
      ],
    },
  },
  {
    id: "d9",
    en: {
      label: "9. Contact",
      blocks: [
        { t: "p", text: "Questions concerning this disclaimer may be directed to:" },
        { t: "contact" },
      ],
    },
    zh: {
      label: "9. 联系方式",
      blocks: [
        { t: "p", text: "有关本免责声明的问题可联系：" },
        { t: "contact" },
      ],
    },
    "zh-tw": {
      label: "9. 聯絡方式",
      blocks: [
        { t: "p", text: "有關本免責聲明的問題可聯絡：" },
        { t: "contact" },
      ],
    },
  },
];

// ── Copyright sections ────────────────────────────────────────────────────────

const COPYRIGHT_DEFS: SectionDef[] = [
  {
    id: "c1",
    en: {
      label: "1. Ownership",
      blocks: [
        { t: "p", text: "Unless otherwise stated, copyright in the content of this website is owned by or licensed to Lexcord Lawyers." },
        { t: "p", text: "Website content includes, without limitation:" },
        { t: "ul", items: [
          "text;",
          "articles;",
          "page layouts;",
          "graphics;",
          "photographs;",
          "videos;",
          "downloadable documents;",
          "branding elements; and",
          "the selection and arrangement of website material.",
        ]},
        { t: "p", text: "Third-party material remains the property of its respective copyright owner." },
      ],
    },
    zh: {
      label: "1. 所有权",
      blocks: [
        { t: "p", text: "除非另有说明，本网站内容的版权由 Lexcord Lawyers 拥有或经许可使用。" },
        { t: "p", text: "网站内容包括但不限于：" },
        { t: "ul", items: [
          "文字；",
          "文章；",
          "页面布局；",
          "图形；",
          "照片；",
          "视频；",
          "可下载文件；",
          "品牌元素；以及",
          "网站内容的选取与编排。",
        ]},
        { t: "p", text: "第三方内容仍为各自版权所有方的财产。" },
      ],
    },
    "zh-tw": {
      label: "1. 所有權",
      blocks: [
        { t: "p", text: "除非另有說明，本網站內容的著作權由 Lexcord Lawyers 擁有或經許可使用。" },
        { t: "p", text: "網站內容包括但不限於：" },
        { t: "ul", items: [
          "文字；",
          "文章；",
          "頁面布局；",
          "圖形；",
          "照片；",
          "影片；",
          "可下載文件；",
          "品牌元素；以及",
          "網站內容的選取與編排。",
        ]},
        { t: "p", text: "第三方內容仍為各自著作權所有方的財產。" },
      ],
    },
  },
  {
    id: "c2",
    en: {
      label: "2. Personal and internal use",
      blocks: [
        { t: "p", text: "A person may view, download or print reasonable extracts of website content for personal, non-commercial or internal reference purposes." },
        { t: "p", text: "Any copy must:" },
        { t: "ul", items: [
          "remain unaltered;",
          "retain any copyright or attribution notice;",
          "identify Lexcord as the source where appropriate; and",
          "not be presented in a misleading context.",
        ]},
        { t: "p", text: "This permission does not transfer ownership of the content or grant any broader licence." },
      ],
    },
    zh: {
      label: "2. 个人及内部使用",
      blocks: [
        { t: "p", text: "任何人可出于个人、非商业或内部参考目的浏览、下载或打印网站内容的合理摘录。" },
        { t: "p", text: "任何副本必须：" },
        { t: "ul", items: [
          "保持原样不作修改；",
          "保留任何版权或归属声明；",
          "在适当情况下注明 Lexcord 为来源；以及",
          "不得以具有误导性的方式呈现。",
        ]},
        { t: "p", text: "本许可不转让内容的所有权，也不授予任何更广泛的许可。" },
      ],
    },
    "zh-tw": {
      label: "2. 個人及內部使用",
      blocks: [
        { t: "p", text: "任何人可出於個人、非商業或內部參考目的瀏覽、下載或列印網站內容的合理摘錄。" },
        { t: "p", text: "任何副本必須：" },
        { t: "ul", items: [
          "保持原樣不作修改；",
          "保留任何著作權或歸屬聲明；",
          "在適當情況下註明 Lexcord 為來源；以及",
          "不得以具有誤導性的方式呈現。",
        ]},
        { t: "p", text: "本許可不轉讓內容的所有權，也不授予任何更廣泛的許可。" },
      ],
    },
  },
  {
    id: "c3",
    en: {
      label: "3. Uses requiring permission",
      blocks: [
        { t: "p", text: "Unless permitted by law, prior written permission from Lexcord is required to:" },
        { t: "ul", items: [
          "reproduce substantial parts of the website;",
          "republish content on another website or platform;",
          "distribute content commercially;",
          "modify or adapt content;",
          "incorporate content into another publication, service or database;",
          "use photographs, graphics, videos or downloadable resources;",
          "frame or mirror the website;",
          "use content to promote another business or service; or",
          "remove copyright, attribution or rights-management information.",
        ]},
      ],
    },
    zh: {
      label: "3. 需要许可的使用",
      blocks: [
        { t: "p", text: "除法律另有规定外，以下使用须事先获得 Lexcord 的书面许可：" },
        { t: "ul", items: [
          "复制网站的实质性部分；",
          "在其他网站或平台上转载内容；",
          "以商业方式发布内容；",
          "修改或改编内容；",
          "将内容纳入其他出版物、服务或数据库；",
          "使用照片、图形、视频或可下载资源；",
          "对本网站进行框架引用或镜像；",
          "使用内容推广其他业务或服务；或",
          "删除版权、归属或权利管理信息。",
        ]},
      ],
    },
    "zh-tw": {
      label: "3. 需要許可的使用",
      blocks: [
        { t: "p", text: "除法律另有規定外，以下使用須事先獲得 Lexcord 的書面許可：" },
        { t: "ul", items: [
          "複製網站的實質性部分；",
          "在其他網站或平台上轉載內容；",
          "以商業方式發布內容；",
          "修改或改編內容；",
          "將內容納入其他出版物、服務或資料庫；",
          "使用照片、圖形、影片或可下載資源；",
          "對本網站進行框架引用或鏡像；",
          "使用內容推廣其他業務或服務；或",
          "刪除著作權、歸屬或權利管理資訊。",
        ]},
      ],
    },
  },
  {
    id: "c4",
    en: {
      label: "4. Linking to this website",
      blocks: [
        { t: "p", text: "A person may link to a publicly accessible page of this website, provided that the link:" },
        { t: "ul", items: [
          "is accurate and not misleading;",
          "does not imply sponsorship, endorsement or association;",
          "does not frame the page or obscure its source; and",
          "does not use Lexcord branding without permission.",
        ]},
        { t: "p", text: "We may request that a link be removed where it is misleading, inappropriate or inconsistent with these terms." },
      ],
    },
    zh: {
      label: "4. 链接至本网站",
      blocks: [
        { t: "p", text: "任何人可链接至本网站公开可访问的页面，但链接必须：" },
        { t: "ul", items: [
          "准确且无误导性；",
          "不暗示赞助、认可或关联关系；",
          "不对页面进行框架引用或遮蔽其来源；以及",
          "未经许可不得使用 Lexcord 品牌。",
        ]},
        { t: "p", text: "若链接具有误导性、不当性或与上述条款不符，我们可要求删除该链接。" },
      ],
    },
    "zh-tw": {
      label: "4. 連結至本網站",
      blocks: [
        { t: "p", text: "任何人可連結至本網站公開可訪問的頁面，但連結必須：" },
        { t: "ul", items: [
          "準確且無誤導性；",
          "不暗示贊助、認可或關聯關係；",
          "不對頁面進行框架引用或遮蔽其來源；以及",
          "未經許可不得使用 Lexcord 品牌。",
        ]},
        { t: "p", text: "若連結具有誤導性、不當性或與上述條款不符，我們可要求刪除該連結。" },
      ],
    },
  },
  {
    id: "c5",
    en: {
      label: "5. Trade marks and branding",
      blocks: [
        { t: "p", text: "The Lexcord name, logo and other branding elements displayed on this website may be protected by trade mark, copyright or other laws." },
        { t: "p", text: "They must not be used, copied or reproduced in a way that suggests endorsement, affiliation or authorisation without prior written permission." },
      ],
    },
    zh: {
      label: "5. 商标及品牌",
      blocks: [
        { t: "p", text: "本网站上显示的 Lexcord 名称、标志及其他品牌元素可能受商标、版权或其他法律保护。" },
        { t: "p", text: "未经事先书面许可，不得以暗示认可、附属关系或授权的方式使用、复制或再现上述内容。" },
      ],
    },
    "zh-tw": {
      label: "5. 商標及品牌",
      blocks: [
        { t: "p", text: "本網站上顯示的 Lexcord 名稱、標誌及其他品牌元素可能受商標、著作權或其他法律保護。" },
        { t: "p", text: "未經事先書面許可，不得以暗示認可、附屬關係或授權的方式使用、複製或再現上述內容。" },
      ],
    },
  },
  {
    id: "c6",
    en: {
      label: "6. Third-party content",
      blocks: [
        { t: "p", text: "Some images, fonts, software, articles or other material may be owned by third parties and used under licence or with permission." },
        { t: "p", text: "The permissions granted on this page do not apply to third-party content." },
        { t: "p", text: "A person wishing to use third-party content must obtain permission from the relevant rights holder." },
      ],
    },
    zh: {
      label: "6. 第三方内容",
      blocks: [
        { t: "p", text: "部分图像、字体、软件、文章或其他内容可能为第三方所有，经许可或授权使用。" },
        { t: "p", text: "本页面所授予的许可不适用于第三方内容。" },
        { t: "p", text: "希望使用第三方内容的人士须向相关权利持有人获取许可。" },
      ],
    },
    "zh-tw": {
      label: "6. 第三方內容",
      blocks: [
        { t: "p", text: "部分圖像、字體、軟體、文章或其他內容可能為第三方所有，經許可或授權使用。" },
        { t: "p", text: "本頁面所授予的許可不適用於第三方內容。" },
        { t: "p", text: "希望使用第三方內容的人士須向相關權利持有人獲取許可。" },
      ],
    },
  },
  {
    id: "c7",
    en: {
      label: "7. Requesting permission",
      blocks: [
        { t: "p", text: "Requests to reproduce or use Lexcord website content should identify:" },
        { t: "ul", items: [
          "the material concerned;",
          "the proposed use;",
          "the publication, platform or audience;",
          "whether the use is commercial; and",
          "the requester's contact details.",
        ]},
        { t: "p", text: "Requests may be sent to:" },
        { t: "email" },
        { t: "p", text: "Permission is not granted unless confirmed in writing." },
      ],
    },
    zh: {
      label: "7. 申请许可",
      blocks: [
        { t: "p", text: "复制或使用 Lexcord 网站内容的申请应说明：" },
        { t: "ul", items: [
          "所涉及的内容；",
          "拟定的使用方式；",
          "出版物、平台或受众；",
          "是否为商业用途；以及",
          "申请人的联系方式。",
        ]},
        { t: "p", text: "申请可发送至：" },
        { t: "email" },
        { t: "p", text: "未以书面形式确认，不视为已获许可。" },
      ],
    },
    "zh-tw": {
      label: "7. 申請許可",
      blocks: [
        { t: "p", text: "複製或使用 Lexcord 網站內容的申請應說明：" },
        { t: "ul", items: [
          "所涉及的內容；",
          "擬定的使用方式；",
          "出版物、平台或受眾；",
          "是否為商業用途；以及",
          "申請人的聯絡方式。",
        ]},
        { t: "p", text: "申請可發送至：" },
        { t: "email" },
        { t: "p", text: "未以書面形式確認，不視為已獲許可。" },
      ],
    },
  },
  {
    id: "c8",
    en: {
      label: "8. Reporting an issue",
      blocks: [
        { t: "p", text: "A person who believes that material on this website infringes their intellectual property rights should contact us and provide:" },
        { t: "ul", items: [
          "identification of the relevant material;",
          "the page on which it appears;",
          "an explanation of the rights claimed;",
          "supporting information; and",
          "contact details.",
        ]},
        { t: "p", text: "We will review the notification and take any action we consider appropriate." },
      ],
    },
    zh: {
      label: "8. 报告侵权问题",
      blocks: [
        { t: "p", text: "认为本网站上的内容侵犯其知识产权的人士，应联系我们并提供：" },
        { t: "ul", items: [
          "相关内容的说明；",
          "内容所在页面；",
          "所主张权利的说明；",
          "支持性信息；以及",
          "联系方式。",
        ]},
        { t: "p", text: "我们将审查通知并采取我们认为适当的措施。" },
      ],
    },
    "zh-tw": {
      label: "8. 報告侵權問題",
      blocks: [
        { t: "p", text: "認為本網站上的內容侵犯其智慧財產權的人士，應聯絡我們並提供：" },
        { t: "ul", items: [
          "相關內容的說明；",
          "內容所在頁面；",
          "所主張權利的說明；",
          "支持性資訊；以及",
          "聯絡方式。",
        ]},
        { t: "p", text: "我們將審查通知並採取我們認為適當的措施。" },
      ],
    },
  },
];

// ── Section dispatcher ────────────────────────────────────────────────────────

function getSections(slug: string, lang: Lang): Section[] {
  if (slug === "privacy") return makeSections(PRIVACY_DEFS, lang);
  if (slug === "disclaimer") return makeSections(DISCLAIMER_DEFS, lang);
  if (slug === "copyright") return makeSections(COPYRIGHT_DEFS, lang);
  return [];
}

// ── Cross-links ───────────────────────────────────────────────────────────────

const CROSS_LINKS = [
  { slug: "privacy", labels: { en: "Privacy Policy", zh: "隐私政策", "zh-tw": "隱私政策" } },
  { slug: "disclaimer", labels: { en: "Disclaimer", zh: "免责声明", "zh-tw": "免責聲明" } },
  { slug: "copyright", labels: { en: "Copyright", zh: "版权声明", "zh-tw": "版權聲明" } },
];

// ── Scroll-based active section tracking ──────────────────────────────────────

function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? "");
  const idsKey = ids.join(",");

  useEffect(() => {
    if (!ids.length) return;
    const handler = () => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActive(ids[i]);
          return;
        }
      }
      setActive(ids[0]);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey]);

  return active;
}

// ── Main component ────────────────────────────────────────────────────────────

export function LegalContent({ slug }: { slug: string }) {
  const { lang } = useLang();
  const effectiveLang: Lang =
    lang === "zh-tw" ? "zh-tw" : lang === "zh" ? "zh" : "en";

  const meta = PAGE_META[slug]?.[effectiveLang];
  const sections = getSections(slug, effectiveLang);
  const ids = sections.map((s) => s.id);
  const activeId = useActiveSection(ids);

  const isChinese = effectiveLang !== "en";

  if (!meta) {
    return (
      <div className={styles.legalPage}>
        <div className="container">
          <p className={styles.para} style={{ paddingTop: "2rem" }}>
            Content for this page is being prepared.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Compact legal hero */}
      <section className={sectionStyles.hero}>
        <div className="container">
          <div
            className={sectionStyles.heroInner}
            style={{ paddingBlock: "clamp(2rem, 1.5rem + 3vw, 3.5rem)", maxWidth: "50rem" }}
          >
            <span className="eyebrow eyebrow--light">
              {isChinese ? "法律" : "Legal"}
            </span>
            <h1
              className={sectionStyles.heroTitle}
              style={{ fontSize: "var(--text-3xl)", maxWidth: "28ch" }}
            >
              {meta.title}
            </h1>
            <p className={sectionStyles.heroLede} style={{ marginTop: "1.2rem" }}>
              {meta.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className={styles.legalPage}>
        <div className="container">
          <div className={styles.legalLayout}>
            {/* Sticky TOC — desktop only */}
            <aside className={styles.tocCol}>
              <nav aria-label="Page contents">
                <p className={styles.tocTitle}>{effectiveLang === "zh-tw" ? "目錄" : isChinese ? "目录" : "Contents"}</p>
                <ol className={styles.tocList}>
                  {sections.map((s) => (
                    <li
                      key={s.id}
                      className={`${styles.tocItem} ${activeId === s.id ? styles.tocActive : ""}`}
                    >
                      <a href={`#${s.id}`} className={styles.tocLink}>
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Content column */}
            <div className={styles.contentCol}>
              {/* Mobile TOC */}
              <nav className={styles.mobileToc} aria-label="Page contents">
                <p className={styles.mobileTocLabel}>{effectiveLang === "zh-tw" ? "目錄" : isChinese ? "目录" : "Contents"}</p>
                <ol className={styles.mobileTocList}>
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`}>{s.label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Sections */}
              <div className={styles.sections}>
                {sections.map((s, i) => (
                  <div
                    key={s.id}
                    id={s.id}
                    className={`${styles.docSection} ${i === 0 ? styles.docSectionFirst : ""}`}
                  >
                    <h2 className={styles.sectionHeading}>{s.label}</h2>
                    {s.content}
                  </div>
                ))}
              </div>

              {/* Last updated */}
              <p className={styles.updated}>
                {effectiveLang === "zh-tw" ? "最後更新：2026 年 6 月 22 日" : isChinese ? "最后更新：2026 年 6 月 22 日" : "Last updated: 22 June 2026"}
              </p>
            </div>
          </div>
        </div>

        {/* Cross-links */}
        <div className={styles.crossLinksWrap}>
          <div className="container">
            <div className={styles.crossLinks}>
              <span className={styles.crossLinksLabel}>{isChinese ? "法律" : "Legal"}</span>
              {CROSS_LINKS.map((link) =>
                link.slug === slug ? (
                  <span key={link.slug} className={styles.crossLinkCurrent}>
                    {link.labels[effectiveLang]}
                  </span>
                ) : (
                  <Link
                    key={link.slug}
                    href={`/legal/${link.slug}`}
                    className={styles.crossLink}
                  >
                    {link.labels[effectiveLang]}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
