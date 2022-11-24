import React from "react";
import { LottieAnimation } from "../lottie/lottieModal";
import { useRouter } from "next/router";
import { Slide, Fade } from "react-awesome-reveal";
import styles from "../../styles/home.module.scss";

export default function HomeArticleModal(props) {
  const router = useRouter();
  const {
    slideDirection,
    animationJson,
    contentTitle,
    contentLine1,
    contentLine2,
    cta,
    ctaText,
    leftSideText,
    contentText,
    contentText1,
    contentText2,
    ctaPath,
    imageArticle,
  } = props;

  const ArticleContent = () => {
    return (
      <div className={styles["home__online__admission__text__cont"]}>
        <Fade cascade>
          <h1>{contentTitle}</h1>
          <h2>
            {contentLine1} <br />
            {contentLine2}
          </h2>
          <p>{contentText}</p>
          <p>{contentText1}</p>
          <p>{contentText2}</p>
          {cta && (
            <button
              className={styles["home__online__admission__cta"]}
              onClick={() => router.push(`${ctaPath}`)}
            >
              {ctaText}
            </button>
          )}
        </Fade>
      </div>
    );
  };

  return (
    <div className={styles["home__online__admission__cont"]}>
      {leftSideText ? ArticleContent() : null}
      <div className={styles["home__online__admission__asset"]}>
        <Slide direction={slideDirection}>
          {animationJson && <LottieAnimation animationJson={animationJson} />}
          {imageArticle && (
            <img src={`/${imageArticle}.webp`} alt={`${imageArticle} SVIS`} />
          )}
        </Slide>
      </div>
      {!leftSideText ? ArticleContent() : null}
    </div>
  );
}
