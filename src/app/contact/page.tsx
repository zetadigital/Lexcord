import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact & Book a Consultation",
  description:
    "Book a confidential consultation with Lexcord Lawyers. We will assess your matter honestly and explain your options with no obligation to proceed.",
};

export default function ContactPage() {
  return <ContactContent />;
}
