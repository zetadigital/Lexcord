import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { FloatingCta } from "@/components/floating-cta";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lexcord Lawyers — Clear, Considered Legal Counsel Across Australia",
    template: "%s — Lexcord Lawyers",
  },
  description:
    "Lexcord is an Australian law firm advising on property and conveyancing, commercial, wills and estates, intellectual property, criminal, notary, and migration law.",
  metadataBase: new URL("https://lexcord.com.au"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>
          <a href="#main" className="visually-hidden">
            Skip to content
          </a>
          <SiteNav />
          <main id="main">{children}</main>
          <SiteFooter />
          <FloatingCta />
        </LanguageProvider>
      </body>
    </html>
  );
}
