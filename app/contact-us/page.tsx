import type { Metadata } from "next";
import ContactHero from "@/components/contact/contact-hero";
import ContactMap from "@/components/contact/contact-map";
import ContactSection from "@/components/contact/contact-section";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with Spring of Virtue Integrated School. Reach out with questions about enrollment, programs, or visiting our campus.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <ContactMap />
    </>
  );
}
