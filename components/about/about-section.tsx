"use client";

import Image from "next/image";
import ScrollReveal from "@/components/home/scroll-reveal";
import ImageCarousel from "@/components/about/image-carousel";
import { cn } from "@/lib/utils";
import type { AboutSection as AboutSectionData } from "@/lib/content/about";

type AboutSectionProps = AboutSectionData & {
  variant?: "default" | "muted";
};

export default function AboutSection({
  title,
  paragraphs,
  layout,
  asset,
  carousel,
  variant = "default",
}: AboutSectionProps) {
  const textBlock = (
    <div className="flex w-full flex-col md:w-1/2">
      <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
        <span className="border-l-4 border-gold pl-4">{title}</span>
      </h3>
      {paragraphs.map((paragraph, i) => (
        <p
          key={i}
          className={cn(
            "text-base leading-relaxed text-muted-foreground",
            i === 0 ? "mt-5" : "mt-3"
          )}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );

  const assetBlock = (
    <div className="flex w-full justify-center md:w-1/2">
      <div className="w-full max-w-lg rounded-2xl border border-gold/25 bg-white/60 p-4 shadow-lg backdrop-blur-sm">
        {carousel ? (
          <ImageCarousel images={carousel} />
        ) : asset ? (
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={asset.src}
              alt={asset.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={asset.priority}
            />
          </div>
        ) : null}
      </div>
    </div>
  );

  return (
    <section
      className={cn(
        "px-4 py-14 md:px-8 md:py-20",
        variant === "muted" ? "bg-muted/50" : "bg-background"
      )}
    >
      <ScrollReveal
        className={cn(
          "mx-auto flex max-w-6xl flex-col items-center gap-10",
          layout === "text-left" ? "md:flex-row" : "md:flex-row-reverse"
        )}
      >
        {textBlock}
        {assetBlock}
      </ScrollReveal>
    </section>
  );
}
