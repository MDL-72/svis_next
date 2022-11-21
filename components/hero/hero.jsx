import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import MovingComponent from "react-moving-text";
import styles from "./hero.module.scss";
import { Fade } from "react-awesome-reveal";

export default function Hero() {
  const [isReady, setIsReady] = useState();

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <>
      {isReady && (
        <Parallax
          className={styles.home__hero__cont}
          blur={4}
          bgImage="/hero2.jpg"
          strength={-400}
          bgImageStyle={{ minHeight: "200vh" }}
        >
          <div className={styles.home__hero__content__cont}>
            <MovingComponent
              type="zoomIn"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="linear"
              iteration="1"
              fillMode="both"
            >
              <Fade>
                <h1>
                  Welcome <br /> to <br /> Spring of Virtue Integrated School,
                  Inc.
                </h1>
              </Fade>
            </MovingComponent>
          </div>
        </Parallax>
      )}
    </>
  );
}
