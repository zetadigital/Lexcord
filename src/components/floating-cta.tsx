"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";
import styles from "./floating-cta.module.css";

/**
 * Practice areas with their own online intake flow (Settify). On these pages the
 * floating CTA sends the visitor straight into the questionnaire instead of the
 * generic "book a consultation" contact form.
 */
const INTAKE_URLS: Record<string, string> = {
  "/expertise/family-law": "https://lexcord.app.settify.com.au/v2/client/family",
  "/expertise/wills-estates": "https://lexcord.app.settify.com.au/v2/client/wills",
};

export function FloatingCta() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 680);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Redundant on the contact page itself.
  if (pathname === "/contact") return null;

  const intakeUrl = pathname ? INTAKE_URLS[pathname] : undefined;
  const label = intakeUrl ? t.nav.getStarted : t.nav.book;

  const className = `${styles.fab} ${visible ? styles.visible : ""}`;
  // The label is hidden below 540px, so the accessible name has to come from aria-label.
  const sharedProps = {
    className,
    "aria-label": label,
    "aria-hidden": !visible,
    tabIndex: visible ? 0 : -1,
  } as const;

  const icon = intakeUrl ? (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path d="M4 5h16v11H7l-3 3V5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );

  if (intakeUrl) {
    return (
      <a {...sharedProps} href={intakeUrl} target="_blank" rel="noopener noreferrer">
        {icon}
        <span className={styles.label}>{label}</span>
      </a>
    );
  }

  return (
    <Link {...sharedProps} href="/contact">
      {icon}
      <span className={styles.label}>{label}</span>
    </Link>
  );
}
