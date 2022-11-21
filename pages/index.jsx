import Hero from "../components/hero/hero";
import Navigation from "../components/navbar/navigation";
import { Slide, Fade } from "react-awesome-reveal";
import { Carousel } from "react-responsive-carousel";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "./home.module.scss";

export default function HomePage() {
  const [isReady, setIsReady] = useState();
  const [isMobile, setIsMobile] = useState();

  const pathToTitleMap = {
    "/": "SVIS - Home",
    "/about": "SVIS - About us",
    "/contact_us": "SVIS - Contact us",
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
      <Hero />
    </div>
  );
}
