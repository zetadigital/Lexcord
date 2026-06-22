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

const SITE_URL = "https://lexcord.com.au";
const SITE_NAME = "Lexcord Lawyers";
const SITE_DESCRIPTION =
  "Lexcord is an Australian law firm advising on property and conveyancing, commercial, wills and estates, intellectual property, criminal, notary, and migration law.";
const OG_IMAGE = `${SITE_URL}/images/office/office-1.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lexcord Melbourne | Commercial, Family, Migration & Property Law",
    template: "%s — Lexcord Lawyers",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Lexcord Melbourne | Commercial, Family, Migration & Property Law",
    description: SITE_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 800, alt: "Lexcord Lawyers Melbourne office" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexcord Lawyers",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Lexcord Lawyers",
  alternateName: "Lexcord",
  description:
    "Melbourne-based Australian law firm advising individuals, families and businesses on property law, conveyancing, commercial law, family law, wills and estates, intellectual property, criminal law, notary public services, and migration law.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/brand/lexcord-navy.png`,
  image: OG_IMAGE,
  telephone: "+61-3-7054-5135",
  email: "info@lexcord.com.au",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1508/530 Little Collins Street",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    postalCode: "3000",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -37.8175,
    longitude: 144.9621,
  },
  areaServed: { "@type": "Country", name: "Australia" },
  knowsLanguage: ["en", "zh-Hans", "zh-Hant"],
  serviceType: [
    "Property Law",
    "Conveyancing",
    "Commercial Law",
    "Family Law",
    "Wills and Estates",
    "Intellectual Property",
    "Criminal Law",
    "Notary Public",
    "Migration Law",
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
      </head>
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
