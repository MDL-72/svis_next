import React from "react";
import { LottieAnimation } from "../lottie/lottieModal";
import { Slide, Fade } from "react-awesome-reveal";
import styles from "../../styles/home.module.scss";

export default function HomeArticleModal(props) {
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
          {cta && (
            <button className={styles["home__online__admission__cta"]}>
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
          <LottieAnimation animationJson={animationJson} />
        </Slide>
      </div>
      {!leftSideText ? ArticleContent() : null}
    </div>
  );
}
