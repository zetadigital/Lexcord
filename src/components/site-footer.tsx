"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  const { t, lang } = useLang();
  const year = 2026;

  const links = [
    { href: "/expertise", label: lang === "zh-tw" ? "執業領域" : lang === "zh" ? "执业领域" : "Expertise" },
    { href: "/legal/privacy", label: lang === "zh-tw" ? "隱私政策" : lang === "zh" ? "隐私政策" : "Privacy Policy" },
    { href: "/legal/disclaimer", label: lang === "zh-tw" ? "免責聲明" : lang === "zh" ? "免责声明" : "Disclaimer" },
    { href: "/legal/copyright", label: lang === "zh-tw" ? "版權聲明" : lang === "zh" ? "版权声明" : "Copyright" },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <Link href="/" className={styles.brand} aria-label="Lexcord Lawyers home">
            <Image
              src="/images/brand/lexcord-white.png"
              alt="Lexcord Lawyers"
              width={188}
              height={67}
              className={styles.logo}
            />
          </Link>

          <nav className={styles.links} aria-label="Footer">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <span>© {year} Lexcord Lawyers. {t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
