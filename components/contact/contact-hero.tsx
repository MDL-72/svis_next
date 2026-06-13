"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Parallax } from "react-parallax";
import HeroContentFrame from "@/components/home/hero-content-frame";
import { contactHeroContent } from "@/lib/content/contact";

export default function ContactHero() {
  const prefersReducedMotion = useReducedMotion();
  const { lines, subtitle } = contactHeroContent;

  return (
    <section className="relative">
      <Parallax
        blur={3}
        bgImage="/connect.jpg"
        bgImageAlt="Contact Spring of Virtue Integrated School"
        strength={300}
        className="min-h-[50vh] md:min-h-[55vh]"
      >
        <div className="relative min-h-[50vh] md:min-h-[55vh]">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/50 to-background/90" />
          <div className="grain-overlay absolute inset-0" />

          <div className="relative flex min-h-[50vh] items-center justify-center px-4 pb-16 pt-28 md:min-h-[55vh] md:pt-32">
            <HeroContentFrame>
              <h1 className="text-center font-heading text-2xl font-bold leading-snug tracking-wide text-cream text-shadow-navy sm:text-3xl md:text-4xl">
                {lines.map((line, index) => (
                  <motion.span
                    key={line}
                    className="block"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {line}
                  </motion.span>
                ))}
              </h1>
              <p className="mt-4 text-center font-body text-sm text-cream/90 md:text-lg">
                {subtitle}
              </p>
            </HeroContentFrame>
          </div>
        </div>
      </Parallax>
    </section>
  );
}
