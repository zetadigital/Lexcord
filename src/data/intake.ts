/**
 * Online intake (Settify) questionnaire — the practice areas that have one, and
 * the asset shown in the intake CTA panel. Keyed by practice-area slug.
 *
 * Single source of truth: the floating CTA and the in-page intake panel both
 * read from here, so a URL only ever has to change in one place.
 */
export interface IntakeTarget {
  /** External questionnaire URL. */
  href: string;
  /** Square-cropped-by-CSS image shown in the circular frame. */
  image: string;
  /** object-position for the circular crop. Defaults to centre. */
  focus?: string;
}

export const INTAKE_TARGETS: Record<string, IntakeTarget> = {
  "family-law": {
    href: "https://lexcord.app.settify.com.au/v2/client/family",
    image: "/images/expertise/family-law.png",
    focus: "100% 50%",
  },
  "wills-estates": {
    href: "https://lexcord.app.settify.com.au/v2/client/wills",
    image: "/images/expertise/wills-estates.png",
    focus: "100% 50%",
  },
};
