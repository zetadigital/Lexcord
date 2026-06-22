"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import sectionStyles from "@/components/sections.module.css";
import styles from "./legal.module.css";

const EMAIL = "info@lexcord.com.au";
const PHONE = "+61 3 7054 5135";

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

// ── Page metadata (multilingual) ─────────────────────────────────────────────

type Lang = "en" | "zh" | "zh-tw";

const PAGE_META: Record<string, Record<Lang, { title: string; intro: string }>> = {
  privacy: {
    en: {
      title: "Privacy Policy",
      intro:
        "This policy explains how Lexcord Lawyers collects, holds, uses, discloses and protects personal information.",
    },
    zh: {
      title: "隐私政策",
      intro:
        "本政策说明 Lexcord Lawyers 如何收集、持有、使用、披露和保护个人信息。",
    },
    "zh-tw": {
      title: "隱私政策",
      intro:
        "本政策說明 Lexcord Lawyers 如何收集、持有、使用、披露和保護個人資訊。",
    },
  },
  disclaimer: {
    en: {
      title: "Disclaimer",
      intro:
        "Important information about the general nature of this website and the limits of the information it contains.",
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
      intro:
        "Information about ownership and permitted use of content published on the Lexcord website.",
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

// ── Section content ──────────────────────────────────────────────────────────

interface Section {
  id: string;
  label: string;
  content: ReactNode;
}

function getPrivacySections(): Section[] {
  return [
    {
      id: "s1",
      label: "1. About this policy",
      content: (
        <>
          <p className={styles.para}>
            Lexcord Lawyers respects the privacy of the people with whom we deal.
          </p>
          <p className={styles.para}>
            This Privacy Policy explains how we collect, hold, use and disclose personal information
            and how an individual may request access to, or correction of, personal information
            held by us.
          </p>
          <p className={styles.para}>
            We seek to manage personal information in accordance with the Privacy Act 1988 (Cth),
            the Australian Privacy Principles and our professional obligations as a legal practice.
          </p>
          <p className={styles.para}>
            In this policy, "Lexcord", "we", "us" and "our" refer to Lexcord Lawyers.
          </p>
        </>
      ),
    },
    {
      id: "s2",
      label: "2. Personal information we may collect",
      content: (
        <>
          <p className={styles.para}>
            The kinds of personal information we collect depend on the nature of our relationship
            with the relevant individual and the services being requested or provided.
          </p>
          <p className={styles.para}>This information may include:</p>
          <ul className={styles.list}>
            <li>names, addresses and contact details;</li>
            <li>dates of birth and identity-document information;</li>
            <li>personal, family, employment and financial information;</li>
            <li>information concerning property, businesses, assets and liabilities;</li>
            <li>immigration, court, regulatory or transaction-related information;</li>
            <li>information contained in correspondence and documents provided to us;</li>
            <li>billing and payment information;</li>
            <li>information concerning enquiries, complaints or feedback;</li>
            <li>
              website and technical information, including information collected through cookies or
              similar technologies; and
            </li>
            <li>
              sensitive information where it is relevant to a legal matter and its collection is
              permitted by law.
            </li>
          </ul>
          <p className={styles.para}>
            We may also collect information about other people where that information is relevant
            to a client matter.
          </p>
        </>
      ),
    },
    {
      id: "s3",
      label: "3. How we collect personal information",
      content: (
        <>
          <p className={styles.para}>
            We generally collect personal information directly from the individual concerned,
            including when a person:
          </p>
          <ul className={styles.list}>
            <li>contacts us by telephone, email, website form or in person;</li>
            <li>requests legal services or provides instructions;</li>
            <li>supplies documents or information in connection with a matter;</li>
            <li>subscribes to or communicates with us through an online service;</li>
            <li>applies for employment or another position with the firm; or</li>
            <li>attends an event or otherwise deals with us.</li>
          </ul>
          <p className={styles.para}>We may also collect personal information from:</p>
          <ul className={styles.list}>
            <li>clients and prospective clients;</li>
            <li>authorised representatives;</li>
            <li>courts, tribunals, government bodies and regulators;</li>
            <li>other solicitors, barristers and professional advisers;</li>
            <li>agents, employers, accountants, financial institutions and service providers;</li>
            <li>publicly available sources; and</li>
            <li>
              other persons where collection is authorised, required or reasonably necessary for
              our functions.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "s4",
      label: "4. Why we collect, hold, use and disclose information",
      content: (
        <>
          <p className={styles.para}>
            We may collect, hold, use and disclose personal information for purposes including:
          </p>
          <ul className={styles.list}>
            <li>responding to enquiries;</li>
            <li>assessing whether we can act, including conducting conflict checks;</li>
            <li>providing legal services and managing client matters;</li>
            <li>
              communicating with clients, courts, authorities, counterparties and other participants
              in a matter;
            </li>
            <li>verifying identity and authority;</li>
            <li>complying with legal, regulatory, professional and insurance obligations;</li>
            <li>issuing invoices and processing payments;</li>
            <li>engaging barristers, experts, interpreters, agents and other service providers;</li>
            <li>managing our business, systems, records, security and professional risk;</li>
            <li>considering employment applications;</li>
            <li>responding to complaints;</li>
            <li>maintaining and improving our website and services; and</li>
            <li>
              sending updates or information where the recipient has consented or where otherwise
              permitted by law.
            </li>
          </ul>
          <p className={styles.para}>
            We will not use or disclose personal information for an unrelated purpose unless consent
            has been obtained or the use or disclosure is otherwise permitted or required by law.
          </p>
        </>
      ),
    },
    {
      id: "s5",
      label: "5. Disclosure of personal information",
      content: (
        <>
          <p className={styles.para}>
            Depending on the matter, we may disclose personal information to:
          </p>
          <ul className={styles.list}>
            <li>courts, tribunals, government bodies and regulators;</li>
            <li>other legal practitioners and parties involved in a matter;</li>
            <li>barristers, experts, interpreters, investigators and consultants;</li>
            <li>accountants, financial advisers, banks, insurers and other professional advisers;</li>
            <li>property, settlement, migration and document-service providers;</li>
            <li>technology, data-storage, communications and administrative service providers;</li>
            <li>related or associated service providers;</li>
            <li>law-enforcement bodies where disclosure is required or authorised by law; and</li>
            <li>other recipients authorised by the individual concerned.</li>
          </ul>
          <p className={styles.para}>
            Legal professional privilege and our duties of confidentiality may apply to information
            provided to us. Nothing in this policy limits those obligations.
          </p>
        </>
      ),
    },
    {
      id: "s6",
      label: "6. Overseas disclosure and storage",
      content: (
        <>
          <p className={styles.para}>
            Some matters involve parties, advisers, service providers or authorities outside
            Australia. We may disclose personal information overseas where this is required to
            conduct a matter, where the individual has authorised the disclosure, or where
            disclosure is otherwise permitted by law.
          </p>
          <p className={styles.para}>
            Some technology and data-storage providers used by us may store or process information
            outside Australia.
          </p>
          <p className={styles.para}>
            The countries involved will depend on the relevant matter and the service providers
            being used. Where practicable, further information about an anticipated overseas
            disclosure can be provided on request.
          </p>
          <p className={styles.para}>
            We take reasonable steps in the circumstances to manage overseas disclosures
            consistently with applicable privacy obligations.
          </p>
        </>
      ),
    },
    {
      id: "s7",
      label: "7. Website, cookies and electronic communications",
      content: (
        <>
          <p className={styles.para}>
            Our website may collect limited technical information, including:
          </p>
          <ul className={styles.list}>
            <li>internet protocol addresses;</li>
            <li>browser and device information;</li>
            <li>pages viewed;</li>
            <li>access times;</li>
            <li>referring websites; and</li>
            <li>information collected through cookies or similar technologies.</li>
          </ul>
          <p className={styles.para}>
            This information may be used to operate, secure and improve the website and to
            understand how it is used.
          </p>
          <p className={styles.para}>
            A person may adjust browser settings to restrict cookies, although this may affect the
            operation of some website functions.
          </p>
          <p className={styles.para}>
            Electronic communications may not always be secure. Individuals should avoid sending
            highly sensitive information through an unsecured website form unless instructed
            to do so.
          </p>
        </>
      ),
    },
    {
      id: "s8",
      label: "8. Security and retention",
      content: (
        <>
          <p className={styles.para}>
            We take reasonable technical and organisational steps to protect personal information
            from misuse, interference, loss and unauthorised access, modification or disclosure.
          </p>
          <p className={styles.para}>
            Personal information may be held in electronic systems, cloud-based platforms and
            physical records.
          </p>
          <p className={styles.para}>
            No system can be guaranteed to be completely secure. Individuals should contact us
            promptly if they believe information provided to Lexcord may have been compromised.
          </p>
          <p className={styles.para}>
            We retain information for as long as reasonably required for legal, professional,
            insurance, regulatory and business purposes. Information that is no longer required
            may be securely destroyed or de-identified, subject to any applicable retention
            obligations.
          </p>
        </>
      ),
    },
    {
      id: "s9",
      label: "9. Access and correction",
      content: (
        <>
          <p className={styles.para}>
            An individual may request access to personal information held about them or ask us
            to correct information that is inaccurate, incomplete or out of date.
          </p>
          <p className={styles.para}>Requests should be made using the contact details below.</p>
          <p className={styles.para}>
            We may need to verify the requester&apos;s identity before providing access or making a
            correction.
          </p>
          <p className={styles.para}>
            Access may be refused or limited where permitted by law, including where providing
            access would affect legal professional privilege, another person&apos;s privacy or an
            existing or anticipated legal proceeding.
          </p>
          <p className={styles.para}>
            We will explain the basis of any refusal where required.
          </p>
        </>
      ),
    },
    {
      id: "s10",
      label: "10. Direct marketing",
      content: (
        <>
          <p className={styles.para}>
            We may send legal updates, firm news or information about our services where the
            recipient has consented or where otherwise permitted by law.
          </p>
          <p className={styles.para}>
            A recipient may unsubscribe at any time by using an unsubscribe function in the
            communication or by contacting us.
          </p>
          <p className={styles.para}>We do not sell personal information to third parties.</p>
        </>
      ),
    },
    {
      id: "s11",
      label: "11. Privacy complaints",
      content: (
        <>
          <p className={styles.para}>
            A person who has a question or complaint about how we have handled personal information
            should contact us using the details below.
          </p>
          <p className={styles.para}>
            Please provide sufficient information for us to understand and investigate the issue.
          </p>
          <p className={styles.para}>
            We will seek to acknowledge and respond to the complaint within a reasonable period.
          </p>
          <p className={styles.para}>
            If the complaint is not resolved, the person may be entitled to contact the Office of
            the Australian Information Commissioner.
          </p>
        </>
      ),
    },
    {
      id: "s12",
      label: "12. Contact us",
      content: (
        <>
          <p className={styles.para}>
            Privacy enquiries, access or correction requests and complaints may be directed to:
          </p>
          <ContactBlock />
        </>
      ),
    },
    {
      id: "s13",
      label: "13. Changes to this policy",
      content: (
        <>
          <p className={styles.para}>
            We may update this Privacy Policy from time to time to reflect changes to our
            practices, systems or legal obligations.
          </p>
          <p className={styles.para}>
            The current version will be published on this website with its latest revision date.
          </p>
        </>
      ),
    },
  ];
}

function getDisclaimerSections(): Section[] {
  return [
    {
      id: "d1",
      label: "1. General information only",
      content: (
        <>
          <p className={styles.para}>
            The information published on this website is general information only.
          </p>
          <p className={styles.para}>
            It is not legal advice and should not be relied upon as a substitute for advice
            concerning a person&apos;s particular circumstances.
          </p>
          <p className={styles.para}>
            Legal rights, procedures and outcomes depend on the relevant facts, documents,
            jurisdiction and law applying at the time.
          </p>
        </>
      ),
    },
    {
      id: "d2",
      label: "2. No lawyer–client relationship",
      content: (
        <>
          <p className={styles.para}>
            Accessing this website, using a website form, sending an enquiry or receiving general
            information from Lexcord does not by itself create a lawyer&ndash;client relationship.
          </p>
          <p className={styles.para}>
            Lexcord will only act for a person or organisation after:
          </p>
          <ul className={styles.list}>
            <li>confirming that we are able to act;</li>
            <li>completing any required conflict, identity and client-acceptance checks;</li>
            <li>agreeing on the scope of the engagement; and</li>
            <li>providing or entering into the required engagement and costs documentation.</li>
          </ul>
          <p className={styles.para}>
            Until those steps are completed, no person should assume that Lexcord is acting for
            them or protecting any deadline or limitation period.
          </p>
        </>
      ),
    },
    {
      id: "d3",
      label: "3. Do not delay because of website content",
      content: (
        <>
          <p className={styles.para}>Legal matters may be subject to strict time limits.</p>
          <p className={styles.para}>
            Information on this website should not be used as a reason to delay obtaining advice,
            responding to correspondence, filing a document or taking another required step.
          </p>
          <p className={styles.para}>
            Lexcord is not responsible for monitoring a deadline merely because a person has
            visited the website or submitted a general enquiry.
          </p>
        </>
      ),
    },
    {
      id: "d4",
      label: "4. Accuracy and currency",
      content: (
        <>
          <p className={styles.para}>
            We seek to keep the website accurate and current, but we do not guarantee that all
            information is complete, current or suitable for every circumstance.
          </p>
          <p className={styles.para}>
            Law, procedure, government policy, fees, forms and administrative practices may change.
          </p>
          <p className={styles.para}>
            Information may also be simplified for general explanation.
          </p>
          <p className={styles.para}>
            Before acting or deciding not to act, obtain advice based on the current law and the
            specific circumstances.
          </p>
        </>
      ),
    },
    {
      id: "d5",
      label: "5. Outcomes and examples",
      content: (
        <>
          <p className={styles.para}>
            Any examples, descriptions of services, case discussions or general statements about
            possible outcomes are illustrative only.
          </p>
          <p className={styles.para}>
            Past results do not guarantee a similar result in another matter.
          </p>
          <p className={styles.para}>
            No statement on this website should be understood as a promise or guarantee concerning:
          </p>
          <ul className={styles.list}>
            <li>the outcome of a matter;</li>
            <li>the time required;</li>
            <li>the cost of the work;</li>
            <li>the availability of a visa, court order, approval or other decision; or</li>
            <li>
              the position that may be taken by another party, authority, court or tribunal.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "d6",
      label: "6. External websites and third-party material",
      content: (
        <>
          <p className={styles.para}>
            This website may contain links to external websites or refer to information produced
            by third parties.
          </p>
          <p className={styles.para}>
            Those links and references are provided for convenience only.
          </p>
          <p className={styles.para}>
            Lexcord does not control third-party websites and does not endorse or accept
            responsibility for their content, security, availability or privacy practices.
          </p>
          <p className={styles.para}>
            Users should consider the terms and policies applying to any external website
            they visit.
          </p>
        </>
      ),
    },
    {
      id: "d7",
      label: "7. Website availability and security",
      content: (
        <>
          <p className={styles.para}>
            We do not guarantee that the website will always be available, uninterrupted, secure
            or free from errors, viruses or other harmful components.
          </p>
          <p className={styles.para}>
            Users are responsible for taking appropriate precautions when accessing or downloading
            online material.
          </p>
          <p className={styles.para}>
            To the extent permitted by law, Lexcord excludes liability arising from reliance on
            this website or from an inability to access or use it.
          </p>
          <p className={styles.para}>
            Nothing in this disclaimer excludes, restricts or modifies any right or liability that
            cannot lawfully be excluded, restricted or modified.
          </p>
        </>
      ),
    },
    {
      id: "d8",
      label: "8. Jurisdiction",
      content: (
        <>
          <p className={styles.para}>This website is operated from Victoria, Australia.</p>
          <p className={styles.para}>
            Unless otherwise stated, its content concerns Australian legal services and should not
            be understood as advice on the law of another jurisdiction.
          </p>
          <p className={styles.para}>
            Where a matter involves another country or jurisdiction, appropriately qualified local
            advice may be required.
          </p>
        </>
      ),
    },
    {
      id: "d9",
      label: "9. Contact",
      content: (
        <>
          <p className={styles.para}>
            Questions concerning this disclaimer may be directed to:
          </p>
          <ContactBlock />
        </>
      ),
    },
  ];
}

function getCopyrightSections(): Section[] {
  return [
    {
      id: "c1",
      label: "1. Ownership",
      content: (
        <>
          <p className={styles.para}>
            Unless otherwise stated, copyright in the content of this website is owned by or
            licensed to Lexcord Lawyers.
          </p>
          <p className={styles.para}>Website content includes, without limitation:</p>
          <ul className={styles.list}>
            <li>text;</li>
            <li>articles;</li>
            <li>page layouts;</li>
            <li>graphics;</li>
            <li>photographs;</li>
            <li>videos;</li>
            <li>downloadable documents;</li>
            <li>branding elements; and</li>
            <li>the selection and arrangement of website material.</li>
          </ul>
          <p className={styles.para}>
            Third-party material remains the property of its respective copyright owner.
          </p>
        </>
      ),
    },
    {
      id: "c2",
      label: "2. Personal and internal use",
      content: (
        <>
          <p className={styles.para}>
            A person may view, download or print reasonable extracts of website content for
            personal, non-commercial or internal reference purposes.
          </p>
          <p className={styles.para}>Any copy must:</p>
          <ul className={styles.list}>
            <li>remain unaltered;</li>
            <li>retain any copyright or attribution notice;</li>
            <li>identify Lexcord as the source where appropriate; and</li>
            <li>not be presented in a misleading context.</li>
          </ul>
          <p className={styles.para}>
            This permission does not transfer ownership of the content or grant any broader licence.
          </p>
        </>
      ),
    },
    {
      id: "c3",
      label: "3. Uses requiring permission",
      content: (
        <>
          <p className={styles.para}>
            Unless permitted by law, prior written permission from Lexcord is required to:
          </p>
          <ul className={styles.list}>
            <li>reproduce substantial parts of the website;</li>
            <li>republish content on another website or platform;</li>
            <li>distribute content commercially;</li>
            <li>modify or adapt content;</li>
            <li>incorporate content into another publication, service or database;</li>
            <li>use photographs, graphics, videos or downloadable resources;</li>
            <li>frame or mirror the website;</li>
            <li>use content to promote another business or service; or</li>
            <li>remove copyright, attribution or rights-management information.</li>
          </ul>
        </>
      ),
    },
    {
      id: "c4",
      label: "4. Linking to this website",
      content: (
        <>
          <p className={styles.para}>
            A person may link to a publicly accessible page of this website, provided that the
            link:
          </p>
          <ul className={styles.list}>
            <li>is accurate and not misleading;</li>
            <li>does not imply sponsorship, endorsement or association;</li>
            <li>does not frame the page or obscure its source; and</li>
            <li>does not use Lexcord branding without permission.</li>
          </ul>
          <p className={styles.para}>
            We may request that a link be removed where it is misleading, inappropriate or
            inconsistent with these terms.
          </p>
        </>
      ),
    },
    {
      id: "c5",
      label: "5. Trade marks and branding",
      content: (
        <>
          <p className={styles.para}>
            The Lexcord name, logo and other branding elements displayed on this website may be
            protected by trade mark, copyright or other laws.
          </p>
          <p className={styles.para}>
            They must not be used, copied or reproduced in a way that suggests endorsement,
            affiliation or authorisation without prior written permission.
          </p>
        </>
      ),
    },
    {
      id: "c6",
      label: "6. Third-party content",
      content: (
        <>
          <p className={styles.para}>
            Some images, fonts, software, articles or other material may be owned by third parties
            and used under licence or with permission.
          </p>
          <p className={styles.para}>
            The permissions granted on this page do not apply to third-party content.
          </p>
          <p className={styles.para}>
            A person wishing to use third-party content must obtain permission from the relevant
            rights holder.
          </p>
        </>
      ),
    },
    {
      id: "c7",
      label: "7. Requesting permission",
      content: (
        <>
          <p className={styles.para}>
            Requests to reproduce or use Lexcord website content should identify:
          </p>
          <ul className={styles.list}>
            <li>the material concerned;</li>
            <li>the proposed use;</li>
            <li>the publication, platform or audience;</li>
            <li>whether the use is commercial; and</li>
            <li>the requester&apos;s contact details.</li>
          </ul>
          <p className={styles.para}>Requests may be sent to:</p>
          <div className={styles.contactBlock}>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </div>
          <p className={styles.para}>
            Permission is not granted unless confirmed in writing.
          </p>
        </>
      ),
    },
    {
      id: "c8",
      label: "8. Reporting an issue",
      content: (
        <>
          <p className={styles.para}>
            A person who believes that material on this website infringes their intellectual
            property rights should contact us and provide:
          </p>
          <ul className={styles.list}>
            <li>identification of the relevant material;</li>
            <li>the page on which it appears;</li>
            <li>an explanation of the rights claimed;</li>
            <li>supporting information; and</li>
            <li>contact details.</li>
          </ul>
          <p className={styles.para}>
            We will review the notification and take any action we consider appropriate.
          </p>
        </>
      ),
    },
  ];
}

function getSections(slug: string): Section[] {
  if (slug === "privacy") return getPrivacySections();
  if (slug === "disclaimer") return getDisclaimerSections();
  if (slug === "copyright") return getCopyrightSections();
  return [];
}

// ── Cross-links ───────────────────────────────────────────────────────────────

const CROSS_LINKS = [
  { slug: "privacy", label: "Privacy Policy" },
  { slug: "disclaimer", label: "Disclaimer" },
  { slug: "copyright", label: "Copyright" },
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
  const sections = getSections(slug);
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
                    {link.label}
                  </span>
                ) : (
                  <Link
                    key={link.slug}
                    href={`/legal/${link.slug}`}
                    className={styles.crossLink}
                  >
                    {link.label}
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
