import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import MovingComponent from "react-moving-text";
import styles from "./hero.module.scss";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";

export default function Hero() {
  const [pathName, setPathName] = useState();
  const [isReady, setIsReady] = useState();
  const router = useRouter();
  const pathNameQuery = router?.pathname;

  const image_dictionary = {
    "/": "/hero2.webp",
    "/about-us": "/abouthero.jpg",
    "/contact-us": "/connect.jpg",
    "/news-and-events": "/connect.jpg",
  };

  const image_hero_size_dictionary = {
    "/": "200vh",
    "/about-us": `50vh`,
    "/contact-us": `50vh`,
    "/news-and-events": `50vh`,
  };

  const hero_classes_dictionary = {
    "/": `home__hero__cont`,
    "/about-us": `about__hero__cont`,
    "/contact-us": `about__hero__cont`,
    "/news-and-events": `about__hero__cont`,
  };

  const hero_classes_content_dictionary = {
    "/": `home__hero__content__cont`,
    "/about-us": `about__hero__content__cont`,
    "/contact-us": `about__hero__content__cont`,
    "/news-and-events": `about__hero__content__cont`,
  };

  const hero_image_str_dictionary = {
    "/": -400,
    "/about-us": -300,
    "/contact-us": -300,
    "/news-and-events": -300,
  };

  const hero_header_class_dictionary = {
    "/": `home__hero__header__cont`,
    "/about-us": `hero__header__cont`,
    "/contact-us": `hero__header__cont`,
    "/news-and-events": `hero__header__cont`,
  };

  const hero_image_header_line_text = {
    "/": [`Welcome`, ` to`, `Spring of Virtue Integrated School, Inc.`],
    "/about-us": [`About`, ` Spring of Virtue Integrated School`],
    "/contact-us": [`Contact`, ` Spring of Virtue Integrated School`],
    "/news-and-events": [
      `News & Events`,
      ` Spring of Virtue Integrated School`,
    ],
  };

  useEffect(() => {
    setIsReady(true);
    setPathName(pathNameQuery);
  }, []);

  useEffect(() => {
    setPathName(pathNameQuery);
  }, [pathNameQuery]);

  return (
    <>
      {isReady && (
        <Parallax
          className={styles[hero_classes_dictionary[pathName]]}
          blur={4}
          bgImage={image_dictionary[pathName]}
          strength={hero_image_str_dictionary[pathName]}
          bgImageStyle={{
            minHeight: image_hero_size_dictionary[pathName],
          }}
        >
          <div className={styles[hero_classes_content_dictionary[pathName]]}>
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
                <h1 className={styles[hero_header_class_dictionary[pathName]]}>
                  <span>
                    {hero_image_header_line_text[pathName][0]} <br />
                    {hero_image_header_line_text[pathName]?.[1]} <br />
                    {hero_image_header_line_text[pathName]?.[2]}
                  </span>
                </h1>
              </Fade>
            </MovingComponent>
          </div>
        </Parallax>
      )}
    </>
  );
}
