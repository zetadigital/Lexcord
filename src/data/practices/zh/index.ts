import type { PracticeArea } from "../../types";
import { propertyLaw } from "../property-law";
import { conveyancing } from "../conveyancing";
import { commercial } from "../commercial";
import { family } from "../family";
import { estate } from "../estate";
import { ip } from "../ip";
import { criminal } from "../criminal";
import { notary } from "../notary";
import { migration } from "../migration";
import { propertyLawZh } from "./property-law";
import { conveyancingZh } from "./conveyancing";
import { commercialZh } from "./commercial";
import { familyZh } from "./family";
import { estateZh } from "./estate";
import { ipZh } from "./ip";
import { criminalZh } from "./criminal";
import { notaryZh } from "./notary";
import { migrationZh } from "./migration";
import type { Lang } from "../../../lib/i18n";

const EN: PracticeArea[] = [
  propertyLaw,
  conveyancing,
  commercial,
  family,
  estate,
  ip,
  criminal,
  notary,
  migration,
];
const ZH: PracticeArea[] = [
  propertyLawZh,
  conveyancingZh,
  commercialZh,
  familyZh,
  estateZh,
  ipZh,
  criminalZh,
  notaryZh,
  migrationZh,
];

const zhBySlug = new Map(ZH.map((area) => [area.slug, area]));

export function getPracticeZh(slug: string): PracticeArea | undefined {
  return zhBySlug.get(slug);
}

/** Return the practice area for a slug in the requested language (falls back to English). */
export function localizedPractice(
  enArea: PracticeArea,
  lang: Lang,
): PracticeArea {
  if (lang === "en") return enArea;
  // zh-tw falls back to Simplified Chinese content (Traditional Chinese practice data pending)
  return zhBySlug.get(enArea.slug) ?? enArea;
}

export const practiceAreasByLang: Record<Lang, PracticeArea[]> = {
  en: EN,
  zh: ZH,
  "zh-tw": ZH,
};
