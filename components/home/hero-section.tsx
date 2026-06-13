"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Parallax } from "react-parallax";
import { Button } from "@/components/ui/button";
import HeroContentFrame from "@/components/home/hero-content-frame";
import { enrollmentContent } from "@/lib/content/home";

const heroLines = ["Welcome", "to", "Spring of Virtue Integrated School, Inc."];

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative">
      <Parallax
        blur={3}
        bgImage="/hero2.webp"
        bgImageAlt="Spring of Virtue Integrated School"
        strength={400}
        className="min-h-[100vh]"
      >
        <div className="relative min-h-[100vh]">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/45 to-background/90" />
          <div className="grain-overlay absolute inset-0" />

          <div className="relative flex min-h-[100vh] items-center justify-center px-4 pb-20 pt-28 md:pt-32">
            <HeroContentFrame>
              <h1 className="text-center font-heading text-2xl font-bold leading-snug tracking-wide text-cream text-shadow-navy sm:text-3xl md:text-4xl lg:text-5xl">
                {heroLines.map((line, index) => (
                  <motion.span
                    key={line}
                    className="inline"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {line}
                    {index < heroLines.length - 1 ? " " : ""}
                  </motion.span>
                ))}
              </h1>
              <p className="mt-4 text-center font-body text-sm text-cream/90 md:text-lg">
                A God-centered education nurturing virtue, wisdom, and excellence
              </p>
              <div className="mt-7 flex justify-center">
                <Button
                  asChild
                  size="xl"
                  className="bg-gold font-heading font-semibold text-navy shadow-lg hover:bg-gold-light"
                >
                  <Link href={enrollmentContent.ctaPath}>{enrollmentContent.ctaText}</Link>
                </Button>
              </div>
            </HeroContentFrame>
          </div>
        </div>
      </Parallax>
    </section>
  );
}
