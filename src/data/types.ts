export interface ServiceItem {
  title: string;
  body: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

export interface WhyPoint {
  title: string;
  body: string;
}

export interface Faq {
  q: string;
  a: string;
}

/** A small labelled card used for "who we serve" / "visa pathway" style grids. */
export interface TagCard {
  title: string;
  body: string;
}

/** Life-stage / timeline block (used by Wills & Estates). */
export interface StageItem {
  marker: string;
  kicker: string;
  title: string;
  body: string;
}

export interface ExtraSection {
  variant: "tags" | "stages";
  eyebrow: string;
  heading: string;
  intro?: string;
  tags?: TagCard[];
  stages?: StageItem[];
}

/** Ordered content blocks rendered between the hero and footer of a practice page. */
export type PracticeBlock =
  | "intro"
  | "practice"
  | "why"
  | "experts"
  | "news"
  | "qa"
  | "closing";

/** A collapsible accordion section (why-choose / Q&A). */
export interface AccordionBlock {
  eyebrow: string;
  heading: string;
  sub?: string;
  items: Faq[];
}

export interface PracticeArea {
  slug: string;
  /** Short label for navigation. */
  navLabel: string;
  /** Eyebrow above hero headline. */
  heroEyebrow: string;
  /** Hero headline. Use {accent} markers around the highlighted words. */
  heroTitle: string;
  heroLede: string;
  /** Optional banner display title (defaults to navLabel when omitted). */
  bannerTitle?: string;

  servicesEyebrow: string;
  servicesHeading: string;
  servicesIntro: string;
  services: ServiceItem[];

  /** Optional prose "Introduction" block shown after the hero. */
  introParagraphs?: string[];
  /** Render practice-area cards as a numbered, gapped grid (01..n). */
  practiceNumbered?: boolean;
  /** Render the practice-area block as prose paragraphs instead of cards. */
  practiceText?: string[];
  /** Optional "Why choose Lexcord" accordion. */
  whyChoose?: AccordionBlock;
  /** Render the FAQ block as an accordion (with optional subtitle). */
  faqAccordion?: boolean;
  faqSub?: string;
  /** Explicit block order between hero and footer. Defaults to practice/news/experts/closing. */
  layout?: PracticeBlock[];

  processEyebrow?: string;
  processHeading: string;
  processIntro?: string;
  process?: ProcessStep[];

  /** Optional special section rendered between process and why/faq. */
  extra?: ExtraSection;

  whyHeading?: string;
  whyIntro?: string;
  why?: WhyPoint[];

  faqEyebrow: string;
  faqHeading: string;
  faqIntro: string;
  faqs: Faq[];

  closingKicker: string;
  closingTitle: string;
  closingBody?: string;
  closingCta: string;
}
