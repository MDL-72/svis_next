"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/home/scroll-reveal";
import { cn } from "@/lib/utils";
import type { HomeArticle } from "@/lib/content/home";

const LottieAnimation = dynamic(
  () => import("@/components/lottie/lottie-animation"),
  { ssr: false }
);

type ArticleSectionProps = Pick<
  HomeArticle,
  | "articleAnimationJson"
  | "articleContentTitle"
  | "articleContentText"
  | "articleContentTextLine1"
  | "articleContentTextLine2"
  | "articleCta"
  | "articleCtaText"
  | "articleCtaPath"
  | "isArticleLeftSidedText"
> & {
  variant?: "default" | "muted";
};

export default function ArticleSection({
  articleAnimationJson,
  articleContentTitle,
  articleContentText,
  articleContentTextLine1,
  articleContentTextLine2,
  articleCta,
  articleCtaText,
  articleCtaPath,
  isArticleLeftSidedText,
  variant = "default",
}: ArticleSectionProps) {
  const textBlock = (
    <div className="flex w-full flex-col md:w-1/2">
      <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
        <span className="border-l-4 border-gold pl-4">{articleContentTitle}</span>
      </h3>
      <p className="mt-5 text-base leading-relaxed text-muted-foreground">
        {articleContentText}
      </p>
      {articleContentTextLine1 && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {articleContentTextLine1}
        </p>
      )}
      {articleContentTextLine2 && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {articleContentTextLine2}
        </p>
      )}
      {articleCta && (
        <Button
          asChild
          size="lg"
          className="mt-8 w-fit bg-gold font-heading font-semibold text-navy hover:bg-gold-light"
        >
          <Link href={articleCtaPath}>{articleCtaText}</Link>
        </Button>
      )}
    </div>
  );

  const assetBlock = (
    <div className="flex w-full justify-center md:w-1/2">
      <div className="rounded-2xl border border-gold/25 bg-white/60 p-4 shadow-lg backdrop-blur-sm">
        <LottieAnimation
          animationJson={articleAnimationJson}
          className="h-56 w-56 md:h-72 md:w-72"
        />
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
          isArticleLeftSidedText ? "md:flex-row" : "md:flex-row-reverse"
        )}
      >
        {textBlock}
        {assetBlock}
      </ScrollReveal>
    </section>
  );
}
