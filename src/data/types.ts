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

/** One of three large editorial service blocks (e.g. migration core areas). */
export interface CoreServiceItem {
  number: string;
  title: string;
  description: string;
  services: string[];
  /** Optional note shown at the bottom of this card (e.g. time-limit warning). */
  note?: string;
}

/** One step in a numbered approach / process section. */
export interface ApproachStep {
  number: string;
  title: string;
  body: string;
}

/** One column of the ART / Judicial Review two-column block. */
export interface ArtJrSection {
  heading: string;
  body: string[];
}

/** Two-column ART vs Judicial Review explanation block. */
export interface ArtJrBlock {
  eyebrow?: string;
  heading: string;
  intro: string;
  art: ArtJrSection;
  jr: ArtJrSection;
  footer: string;
}

/** A collapsible accordion section (why-choose / Q&A). */
export interface AccordionBlock {
  eyebrow: string;
  heading: string;
  sub?: string;
  items: Faq[];
}

/** Ordered content blocks rendered between the hero and footer of a practice page. */
export type PracticeBlock =
  | "intro"
  | "practice"
  | "why"
  | "experts"
  | "news"
  | "qa"
  | "closing"
  | "coreServices"
  | "approach"
  | "artJr"
  | "riskItems"
  | "highlight"
  | "complexMatters"
  | "notaryColumns";

/** A concise risk / key-consideration item (used in the riskItems block). */
export interface RiskItem {
  title: string;
  body: string;
}

/** One column in the notarisation / apostille / authentication explanatory block. */
export interface NotaryColumnItem {
  title: string;
  body: string;
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

  /** Optional SEO title override (defaults to navLabel). */
  seoTitle?: string;
  /** Optional SEO description override (defaults to practiceSummaries[slug]). */
  seoDescription?: string;

  servicesEyebrow: string;
  servicesHeading: string;
  servicesIntro: string;
  services: ServiceItem[];

  /** Optional prose "Introduction" block shown after the hero. */
  introHeading?: string;
  introParagraphs?: string[];
  /** Editorial pull-quote shown to the right of intro text. */
  introQuote?: string;
  /** Render practice-area cards as a numbered, gapped grid (01..n). */
  practiceNumbered?: boolean;
  /** Render the practice-area block as prose paragraphs instead of cards. */
  practiceText?: string[];
  /** Replace numbered index badge on service cards with a navy dot. */
  practiceCardDot?: boolean;
  /** Optional "Why choose Lexcord" accordion. */
  whyChoose?: AccordionBlock;
  /** Render why-choose items as always-visible 3-column cards instead of accordion. */
  whyCards?: boolean;
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

  /** Three large editorial core-service blocks (migration, etc.). */
  coreServicesEyebrow?: string;
  coreServicesHeading?: string;
  coreServices?: CoreServiceItem[];

  /** Numbered-steps approach section with contrasting background. */
  approachEyebrow?: string;
  approachHeading?: string;
  approachBody?: string;
  approachSteps?: ApproachStep[];

  /** ART vs Judicial Review two-column block. */
  artJr?: ArtJrBlock;

  /** Custom eyebrow / heading / lede for the experts block. */
  expertsSectionEyebrow?: string;
  expertsSectionHeading?: string;
  expertsSectionLede?: string;
  /** Understated text-link CTA below the lede in the experts section. */
  expertsCta?: string;

  /** Custom heading/lede for the "Related insights" news block. */
  newsSectionHeading?: string;
  newsSectionLede?: string;

  /** Optional secondary CTA button label in the closing block. */
  closingCtaSecondary?: string;

  /** "Before You Sign" — editorial 2-col risk-items block. */
  riskItemsEyebrow?: string;
  riskItemsHeading?: string;
  riskItemsIntro?: string;
  riskItems?: RiskItem[];

  /** "More Than Settlement" — split editorial highlight block. */
  highlightEyebrow?: string;
  highlightHeading?: string;
  highlightBody?: string;
  /** Which architectural SVG to render in the highlight block ("sitePlan" | "titlePlan"). */
  highlightVariant?: string;

  /** "Complex Property Matters" — compact 2-column label list. */
  complexMattersEyebrow?: string;
  complexMattersHeading?: string;
  complexMatters?: string[];

  /** Notarisation / Apostille / Authentication three-column explanatory block. */
  notaryColumnsEyebrow?: string;
  notaryColumnsHeading?: string;
  notaryColumnsIntro?: string;
  notaryColumns?: NotaryColumnItem[];
  notaryColumnsNote?: string;

  /** Specific placeholder article titles for the Related Insights news block. */
  newsPlaceholders?: string[];

  closingKicker: string;
  closingTitle: string;
  closingBody?: string;
  closingCta: string;
}
