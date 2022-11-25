import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import styles from "../styles/home.module.scss";

const BannerModal = dynamic(() =>
  import("../components/bannerModal/bannerModal")
);
const CardModal = dynamic(() => import("../components/cardModal/cardModal"));
const HomeArticleModal = dynamic(() =>
  import("../components/homeArticleModalStandard/homeArticleModal")
);

const dataHomeArticles = [
  {
    id: 1,
    bannerTitleLine1: "Why Choose",
    bannerTitleLine2: "Spring of Virtue Integrated School ?",
    articleAnimationJson: "lottie-teacher",
    articleContentTitle: "Spring of Virtue Integrated School",
    articleContentText:
      "Is a unique school that provides an extraordinary education for your child. Our teachers are highly skilled and experienced professionals who are passionate about their work. They use innovative teaching methods to engage your child and help them reach their full potential.",
    articleImageSlideDirection: "right",
    articleContentTextLine1: null,
    articleContentTextLine2: null,
    articleCta: true,
    articleCtaText: "Know more about SVIS",
    isArticleftSidedText: true,
    articleCtaPath: "/about-us",
    articleImage: null,
    articleCarouselImages: null,
    articleImageSizeHeight: null,
  },
  {
    id: 2,
    bannerTitleLine1: "Scholarship Program",
    bannerTitleLine2: null,
    articleAnimationJson: "lottie-book",
    articleContentTitle: "SVIS in Partnership with TLC",
    articleContentText:
      "SVIS is partnered with TLC Scholarship Program, which offers scholarships in exchange for academic excellence and community involvement.",
    articleContentTextLine1:
      "As a member of TLC, you'll receive books, school uniforms, and an allowance—all free of charge!",
    articleContentTextLine2: null,
    articleImageSlideDirection: "left",
    articleCta: true,
    articleCtaText: "Apply now",
    isArticleftSidedText: false,
    articleCtaPath: "/",
    articleImage: null,
    articleCarouselImages: null,
    articleImageSizeHeight: null,
  },
];

export default function HomePage(props) {
  const pathToTitleMap = {
    "/": "SVIS - Home",
    "/about-us": "SVIS - About us",
    "/contact-us": "SVIS - Contact us",
  };

  const router = useRouter();
  const pathNameQuery = router?.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = pathToTitleMap[pathNameQuery];
  }, []);

  return (
    <div className={styles[`container`]}>
      <div className={styles["home__content__cont"]}>
        <HomeArticleModal
          animationJson="lottie-register"
          contentTitle="Enrollment"
          contentLine1="Is Now Ongoing"
          contentLine2="for SY: 2022 - 2023"
          cta={true}
          ctaText="Be a SVISian now"
          ctaPath="contact-us"
        />
        {props.dataHomeArticles.map((item) => {
          return (
            <div key={item.id}>
              <BannerModal
                titleLine1={item.bannerTitleLine1}
                titleLine2={item.bannerTitleLine2}
              />
              <HomeArticleModal
                animationJson={item.articleAnimationJson}
                contentTitle={item.articleContentTitle}
                contentText={item.articleContentText}
                contentText2={item.articleContentTextLine1}
                cta={item.articleCta}
                ctaText={item.articleCtaText}
                ctaPath={item.articleCtaPath}
                leftSideText={item.isArticleftSidedText}
                slideDirection={item.articleImageSlideDirection}
              />
            </div>
          );
        })}
        <BannerModal titleLine1="Courses We Offer" />
        <CardModal />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      dataHomeArticles: dataHomeArticles,
    },
  };
}
