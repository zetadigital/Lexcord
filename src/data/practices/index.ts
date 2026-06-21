import type { PracticeArea } from "../types";
import { propertyLaw } from "./property-law";
import { conveyancing } from "./conveyancing";
import { commercial } from "./commercial";
import { family } from "./family";
import { estate } from "./estate";
import { ip } from "./ip";
import { criminal } from "./criminal";
import { notary } from "./notary";
import { migration } from "./migration";

/** Ordered list of practice areas — drives navigation, home grid, and routing. */
export const practiceAreas: PracticeArea[] = [
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

export const practiceBySlug = new Map(
  practiceAreas.map((area) => [area.slug, area]),
);

export function getPractice(slug: string): PracticeArea | undefined {
  return practiceBySlug.get(slug);
}

/** Short one-line summary per area for the home-page service grid. */
export const practiceSummaries: Record<string, string> = {
  "property-law":
    "Commercial real estate, development, leasing, disputes, and foreign-investment matters across Australia.",
  conveyancing:
    "End-to-end residential, commercial, and off-the-plan conveyancing — from contract review to settlement.",
  commercial:
    "Direct, commercially-minded counsel on contracts, employment, disputes, and leasing for startups, SMEs, and corporates.",
  "family-law":
    "Compassionate, expert guidance on divorce, parenting, property settlement, and family violence matters.",
  "wills-estates":
    "Wills, testamentary trusts, powers of attorney, probate, and estate administration handled with care.",
  "intellectual-property":
    "Trade marks, patents, copyright, and designs — from first registration to international filing and enforcement.",
  "criminal-law":
    "Clear, honest representation across traffic, assault, drug, domestic violence, and bail matters.",
  "notary-public":
    "Qualified notarial services for documents destined for use overseas, including apostille and DFAT authentication.",
  "migration-law":
    "Lexcord advises on Australian visa applications, employer sponsorship, visa refusals and cancellations, ART reviews and migration judicial review proceedings.",
};
