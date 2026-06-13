import HeroSection from "@/components/home/hero-section";
import EnrollmentSection from "@/components/home/enrollment-section";
import SectionBanner from "@/components/home/section-banner";
import ArticleSection from "@/components/home/article-section";
import CoursesSection from "@/components/home/courses-section";
import { homeArticles } from "@/lib/content/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EnrollmentSection />

      {homeArticles.map((article, index) => (
        <div key={article.id}>
          <SectionBanner
            titleLine1={article.bannerTitleLine1}
            titleLine2={article.bannerTitleLine2}
          />
          <ArticleSection
            articleAnimationJson={article.articleAnimationJson}
            articleContentTitle={article.articleContentTitle}
            articleContentText={article.articleContentText}
            articleContentTextLine1={article.articleContentTextLine1}
            articleContentTextLine2={article.articleContentTextLine2}
            articleCta={article.articleCta}
            articleCtaText={article.articleCtaText}
            articleCtaPath={article.articleCtaPath}
            isArticleLeftSidedText={article.isArticleLeftSidedText}
            variant={index % 2 === 1 ? "muted" : "default"}
          />
        </div>
      ))}

      <SectionBanner titleLine1="Courses We Offer" />
      <CoursesSection />
    </>
  );
}
