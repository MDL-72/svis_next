import React from "react";
import styles from "./bannerModal.module.scss";

export default function BannerModal(props) {
  const { titleLine1, titleLine2, contentText } = props;

  return (
    <div className={styles["home__content__banner"]}>
      <h1>
        {titleLine1} <br />
        {titleLine2}
      </h1>
      <p>{contentText}</p>
    </div>
  );
}
