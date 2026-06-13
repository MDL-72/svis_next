import type { Metadata } from "next";
import AboutHero from "@/components/about/about-hero";
import AboutSection from "@/components/about/about-section";
import SectionBanner from "@/components/home/section-banner";
import { aboutSections } from "@/lib/content/about";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Learn about Spring of Virtue Integrated School — our history, mission, vision, facilities, and dedicated faculty.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <SectionBanner titleLine1="Our Story" titleLine2="Mission, Vision & Community" />
      {aboutSections.map((section, index) => (
        <AboutSection
          key={section.id}
          {...section}
          variant={index % 2 === 1 ? "muted" : "default"}
        />
      ))}
    </>
  );
}
