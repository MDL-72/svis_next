import Hero from "../components/hero/hero";
import Navigation from "../components/navbar/navigation";
import { Slide, Fade } from "react-awesome-reveal";
import { Carousel } from "react-responsive-carousel";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LottieAnimation } from "../components/lottie/lottieModal";
import HomeArticleModal from "../components/homeArticleModal/homeArticleModal";
import styles from "./home.module.scss";

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
          contentTitle="Online Admissions"
          contentLine1="Now Open"
          contentLine2="S.Y. 2022 - 2023"
          cta={true}
          ctaText="Apply here"
        />
      </div>
    </div>
  );
}
