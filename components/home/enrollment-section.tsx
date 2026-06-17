"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/home/scroll-reveal";
import { enrollmentContent } from "@/lib/content/home";

const LottieAnimation = dynamic(
  () => import("@/components/lottie/lottie-animation"),
  { ssr: false }
);

export default function EnrollmentSection() {
  const { animationJson, contentTitle, contentLine1, contentLine2, ctaText, ctaPath } =
    enrollmentContent;

  return (
    <section className="relative -mt-8 px-4 pb-4 md:-mt-12 md:px-8">
      <ScrollReveal className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-2xl border border-gold/30 bg-navy shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center px-6 py-10 md:px-10 md:py-14">
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
                Now Accepting Students
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-cream md:text-4xl">
                {contentTitle}
              </h2>
              <p className="mt-3 font-heading text-xl text-gold md:text-2xl">
                {contentLine1}
                <br />
                <span className="text-gold-light">{contentLine2}</span>
              </p>
              <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-cream/80">
                Join a community where faith, character, and academic excellence grow together.
              </p>
              <Button
                asChild
                size="xl"
                className="mt-8 w-fit bg-gold font-heading font-semibold text-navy hover:bg-gold-light"
              >
                <Link href={ctaPath}>{ctaText}</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center bg-cream/10 px-6 py-8 md:py-10">
              <LottieAnimation
                animationJson={animationJson}
                className="h-56 w-56 md:h-72 md:w-72"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
