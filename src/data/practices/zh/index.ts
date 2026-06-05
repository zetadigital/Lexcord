import type { PracticeArea } from "../../types";
import { property } from "../property";
import { commercial } from "../commercial";
import { estate } from "../estate";
import { ip } from "../ip";
import { criminal } from "../criminal";
import { notary } from "../notary";
import { migration } from "../migration";
import { propertyZh } from "./property";
import { commercialZh } from "./commercial";
import { estateZh } from "./estate";
import { ipZh } from "./ip";
import { criminalZh } from "./criminal";
import { notaryZh } from "./notary";
import { migrationZh } from "./migration";
import type { Lang } from "../../../lib/i18n";

const EN: PracticeArea[] = [property, commercial, estate, ip, criminal, notary, migration];
const ZH: PracticeArea[] = [
  propertyZh,
  commercialZh,
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
  return zhBySlug.get(enArea.slug) ?? enArea;
}

export const practiceAreasByLang: Record<Lang, PracticeArea[]> = {
  en: EN,
  zh: ZH,
};
