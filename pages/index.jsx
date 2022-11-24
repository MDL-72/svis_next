import Hero from "../components/hero/hero";
import Navigation from "../components/navbar/navigation";
import { Slide, Fade } from "react-awesome-reveal";
import { Carousel } from "react-responsive-carousel";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LottieAnimation } from "../components/lottie/lottieModal";
import HomeArticleModal from "../components/homeArticleModalStandard/homeArticleModal";
import styles from "../styles/home.module.scss";
import BannerModal from "../components/bannerModal/bannerModal";
import CardModal from "../components/cardModal/cardModal";

export default function HomePage() {
  const [isReady, setIsReady] = useState();
  const [isMobile, setIsMobile] = useState();

  const pathToTitleMap = {
    "/": "SVIS - Home",
    "/about-us": "SVIS - About us",
    "/contact-us": "SVIS - Contact us",
  };

  const navigate = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);

    const { pathname } = window.location;
    document.title = pathToTitleMap[pathname];

    setIsReady(true);

    if (window.screen.width <= 440) {
      setIsMobile(true);
    }
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
        <BannerModal
          titleLine1="Why Choose"
          titleLine2="Spring of Virtue Integrated School ?"
        />
        <HomeArticleModal
          animationJson="lottie-teacher"
          contentTitle="Spring of Virtue Integrated School"
          contentText="Is a unique school that provides an extraordinary education for your child. Our teachers are highly skilled and experienced professionals who are passionate about their work. They use innovative teaching methods to engage your child and help them reach their full potential."
          // contentLine2="for SY: 2022 - 2023"
          cta={true}
          ctaText="Know more about SVIS"
          ctaPath="/about-us"
          leftSideText={true}
          slideDirection="right"
        />
        <BannerModal titleLine1="Courses We Offer" />
        <CardModal />
        <BannerModal titleLine1="Scholarship Program" />{" "}
        <HomeArticleModal
          animationJson="lottie-book"
          contentTitle="SVIS in Partnership with TLC"
          contentText="SVIS is partnered with TLC Scholarship Program, which offers scholarships in exchange for academic excellence and community involvement."
          contentText2="As a member of TLC, you'll receive books, school uniforms, and an allowance—all free of charge!"
          cta={true}
          ctaText="Apply now"
          ctaPath=""
        />
      </div>
    </div>
  );
}
