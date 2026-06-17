"use client";

import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { practiceAreas } from "@/data/practices";
import { useLang } from "@/lib/i18n";
import { LanguageToggle } from "./language-toggle";
import styles from "./site-nav.module.css";

const PHONE_DISPLAY = "+61 3 7054 5135";
const PHONE_DIAL = "+61370545135";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" width="15" height="15" fill="none" aria-hidden="true">
      <path
        d="M5 3h3l1.5 4-2 1.5a9 9 0 004 4l1.5-2 4 1.5v3a1.5 1.5 0 01-1.6 1.5A13.5 13.5 0 014.5 5.6 1.5 1.5 0 016 4z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [expOpen, setExpOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { t, areaLabel, lang } = useLang();
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  const openExpertise = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setExpOpen(true);
  };

  // Small delay so the cursor can travel from the trigger to the panel.
  const closeExpertise = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setExpOpen(false), 140);
  };

  // Primary nav order: About, Expertise (dropdown), People, Resources, Contact.
  const beforeExpertise = [{ href: "/about", label: t.nav.about }];
  const afterExpertise = [
    { href: "/people", label: (lang === "zh" || lang === "zh-tw") ? (lang === "zh-tw" ? "團隊" : "团队") : "Our People" },
    { href: "/resources", label: t.nav.resources },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className={styles.header}>
      {/* Utility bar: language (left), phone + book (right) */}
      <div className={styles.utility}>
        <div className={`container ${styles.utilityInner}`}>
          <LanguageToggle light={false} />
          <div className={styles.utilityRight}>
            <a href={`tel:${PHONE_DIAL}`} className={styles.utilityPhone}>
              <PhoneIcon />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <Link href="/contact" className={styles.utilityBook}>
              {t.nav.book}
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar: logo + primary nav */}
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label="Lexcord Lawyers home">
          <Image
            src="/images/brand/lexcord-navy.png"
            alt="Lexcord Lawyers"
            width={176}
            height={63}
            className={styles.logo}
            priority
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {beforeExpertise.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${isActive(link.href) ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          ))}

          <div
            className={styles.dropdown}
            onMouseEnter={openExpertise}
            onMouseLeave={closeExpertise}
          >
            <Link
              href="/expertise"
              className={`${styles.navLink} ${isActive("/expertise") ? styles.active : ""}`}
              aria-haspopup="true"
              aria-expanded={expOpen}
              onFocus={openExpertise}
            >
              {t.nav.expertise}
              <svg className={styles.chevron} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className={`${styles.panel} ${expOpen ? styles.panelOpen : ""}`} role="menu">
              <div className={styles.panelAside}>
                <span className={styles.panelKicker}>{t.nav.expertise}</span>
                <p className={styles.panelHeadline}>{t.nav.panelHeadline}</p>
                <p className={styles.panelBlurb}>{t.nav.panelBlurb}</p>
                <Link href="/expertise" className={styles.panelAll} role="menuitem">
                  {lang === "zh" ? "全部领域" : lang === "zh-tw" ? "全部領域" : "All expertise"}
                  <svg viewBox="0 0 20 20" width="14" height="14" fill="none" aria-hidden="true">
                    <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <div className={styles.panelList}>
                {practiceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/expertise/${area.slug}`}
                    className={styles.panelItem}
                    role="menuitem"
                  >
                    <span className={styles.panelItemTitle}>{areaLabel(area.slug, area.navLabel)}</span>
                    <span className={styles.panelItemDesc}>{t.summaries[area.slug]}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {afterExpertise.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${isActive(link.href) ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className={styles.toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.toggleCircle} aria-hidden="true">
            {open ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </span>
          <span className={styles.toggleLabel}>{open ? "CLOSE" : "MENU"}</span>
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      <div className={`${styles.sheet} ${open ? styles.sheetOpen : ""}`} aria-hidden={!open}>
        <div className={styles.sheetInner}>
          <nav className={styles.sheetNav}>
            {[
              { href: "/about", label: t.nav.about },
              { href: "/expertise", label: t.nav.expertise },
              { href: "/people", label: lang === "zh" ? "团队" : lang === "zh-tw" ? "團隊" : "Our People" },
              { href: "/resources", label: t.nav.resources },
              { href: "/contact", label: t.nav.contact },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.sheetLink} ${isActive(link.href) ? styles.sheetLinkActive : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.sheetFooter}>
            <a href={`tel:${PHONE_DIAL}`} className={styles.sheetContactRow}>
              <PhoneIcon />
              {PHONE_DISPLAY}
            </a>
            <a href="mailto:info@lexcord.com.au" className={styles.sheetContactRow}>
              <svg viewBox="0 0 20 20" width="15" height="15" fill="none" aria-hidden="true">
                <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M2 6l8 6 8-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              info@lexcord.com.au
            </a>
            <p className={styles.sheetAddress}>
              1508/530 Little Collins St, Melbourne VIC 3000
            </p>
            <Link
              href="/contact"
              className={`btn btn--primary ${styles.sheetCta}`}
              onClick={() => setOpen(false)}
            >
              {t.nav.book}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
