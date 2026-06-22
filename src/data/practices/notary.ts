import type { PracticeArea } from "../types";

export const notary: PracticeArea = {
  slug: "notary-public",
  navLabel: "Notary Public",
  heroEyebrow: "Expertise",
  heroTitle: "Notary Public",
  heroLede:
    "Notarial certification, witnessing and authentication of Australian documents intended for use overseas, available by appointment in Melbourne.",

  seoTitle: "Notary Public Melbourne | Document Certification for Overseas Use | Lexcord",
  seoDescription:
    "Lexcord provides notarial certification, witnessing and authentication of Australian documents for use overseas. Available by appointment in Melbourne.",

  servicesEyebrow: "Notarial Services",
  servicesHeading: "Documents prepared for use overseas",
  servicesIntro:
    "Requirements vary depending on the document, receiving country and overseas authority. We assist with common forms of notarisation and help identify whether further authentication may be required.",
  practiceCardDot: true,
  services: [
    {
      title: "Certified Copies",
      body: "Certification of copies of passports, identity documents, certificates, qualifications, licences, company records and other original documents for use overseas.",
    },
    {
      title: "Witnessing Signatures",
      body: "Witnessing and certifying the signing of powers of attorney, declarations, deeds, agreements and other documents where notarial verification is required.",
    },
    {
      title: "Personal Documents",
      body: "Notarisation of documents relating to overseas property, marriage, study, employment, immigration, succession and other personal matters.",
    },
    {
      title: "Corporate Documents",
      body: "Notarisation of company extracts, constitutions, resolutions, authorisations, corporate powers of attorney and documents required for overseas transactions or registrations.",
    },
    {
      title: "Legal and Court Documents",
      body: "Notarisation of affidavits, declarations, agreements, authorities and documents required by overseas courts, regulators or government bodies.",
    },
    {
      title: "Apostille and Authentication",
      body: "Guidance on the next steps where a notarised or original Australian document must also be submitted to DFAT for an apostille or authentication.",
    },
  ],

  approachEyebrow: "The Appointment Process",
  approachHeading: "Know what is required before you attend",
  approachBody:
    "Providing the document and destination details in advance helps us confirm the likely notarial requirements and what must be brought to the appointment.",
  approachSteps: [
    {
      number: "01",
      title: "Send the Details",
      body: "Provide a copy of the document, identify the country where it will be used and tell us what the receiving authority has requested.",
    },
    {
      number: "02",
      title: "Confirm Requirements",
      body: "We review the information provided and confirm the likely notarial service, identification requirements and whether any further steps may be needed.",
    },
    {
      number: "03",
      title: "Attend the Appointment",
      body: "Bring the original documents and acceptable identification. Where a signature must be witnessed, do not sign the document beforehand unless instructed.",
    },
    {
      number: "04",
      title: "Complete the Next Step",
      body: "After notarisation, the document may be ready for use or may need an apostille, DFAT authentication, consular legalisation or another destination-specific step.",
    },
  ],

  riskItemsEyebrow: "Before Your Appointment",
  riskItemsHeading: "Bring the originals and confirm the destination",
  riskItemsIntro:
    "A Notary Public must be able to verify the relevant document, identity and authority. Missing originals or unclear overseas requirements may mean the service cannot be completed at the first appointment.",
  riskItems: [
    {
      title: "Original documents",
      body: "Bring the original document to be certified or signed. A scan or ordinary photocopy may not be sufficient for the notarial act required.",
    },
    {
      title: "Identification",
      body: "Bring current government-issued photographic identification, ordinarily including your passport or driver licence. Additional identification may be required depending on the document.",
    },
    {
      title: "Overseas instructions",
      body: "Provide any written instructions from the receiving authority, overseas lawyer, bank, registry or government agency.",
    },
    {
      title: "Signing authority",
      body: "If signing for a company, trust, estate or another person, bring the documents showing your authority to sign in that capacity.",
    },
  ],

  notaryColumnsEyebrow: "Understanding the Process",
  notaryColumnsHeading: "Notarisation is not always the final step",
  notaryColumnsIntro:
    "The required process depends on the type of document and the country or authority receiving it.",
  notaryColumns: [
    {
      title: "Notarisation",
      body: "A Notary Public verifies or certifies a document, signature, identity or authority for use outside Australia.",
    },
    {
      title: "Apostille",
      body: "For use in certain countries participating in the Hague Apostille Convention, DFAT may issue an apostille confirming the authenticity of the Australian public signature or seal on the document.",
    },
    {
      title: "Authentication",
      body: "For some other destinations, DFAT authentication may be required, sometimes followed by legalisation through the relevant embassy or consulate.",
    },
  ],
  complexMattersEyebrow: "Common Documents",
  complexMattersHeading: "Personal, legal and commercial documents",
  complexMatters: [
    "Passports and identity documents",
    "Birth, death and marriage certificates",
    "Academic certificates and transcripts",
    "Professional licences and registrations",
    "Powers of attorney",
    "Affidavits and declarations",
    "Overseas property documents",
    "Consent and authority forms",
    "Company constitutions and extracts",
    "Board and shareholder resolutions",
    "Corporate powers of attorney",
    "Contracts and transaction documents",
    "Court and regulatory documents",
    "Documents relating to estates and succession",
    "Certified translations and bilingual documents",
    "Documents for overseas study or employment",
  ],

  expertsSectionEyebrow: "Arrange a Notarial Appointment",
  expertsSectionHeading: "Send the document before you attend",
  expertsSectionLede:
    "Tell us what the document is, where it will be used and what the receiving authority has requested. We will review the information and confirm the appointment requirements. Appointments are arranged with Lexcord's qualified Notary Public.",
  expertsCta: "Book an appointment",

  processHeading: "",
  faqEyebrow: "",
  faqHeading: "",
  faqIntro: "",
  faqs: [],

  closingKicker: "Arrange an appointment",
  closingTitle: "Notary Public",
  closingCta: "Book an appointment",

  layout: ["practice", "approach", "riskItems", "notaryColumns", "complexMatters", "experts"],
};
