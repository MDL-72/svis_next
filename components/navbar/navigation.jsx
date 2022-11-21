import styles from "./navigation.module.scss";
import Link from "next/link";

import React, { useEffect, useState, useRef } from "react";
import MovingComponent from "react-moving-text";
import { CSSTransition } from "react-transition-group";

// import logo from "../../assets/image/logo.png";
// import exit_icon from "../../assets/image/cancel.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState();
  const [mobileMenu, setMobileMenu] = useState(true);
  const [isLogo, setIsLogo] = useState(true);

  const mobileNavMenuRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });

    if (window.screen.width <= 440) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    if (mobileMenu) {
      setIsLogo(true);
      document.body.style.overflow = "auto";
    } else {
      setIsLogo(false);
      document.body.style.overflow = "hidden";
    }
  }, [mobileMenu]);

  return (
    <>
      {!isMobile ? (
        <div
          className={styles[`navbar__cont${isScrolled ? "--bg_applied" : ""}`]}
        >
          <div
            className={
              styles[`navbar__logo__cont${isScrolled ? "--bg_applied" : ""}`]
            }
          >
            <img src={"/logo.png"} alt="logo" />
          </div>
          <div className={styles[`navbar__menu__cont`]}>
            <Link
              href={"/"}
              className={
                styles[`navbar__menu__item${isScrolled ? "--bg_applied" : ""}`]
              }
            >
              Home
            </Link>
            <Link
              href={"/about_us"}
              className={
                styles[`navbar__menu__item${isScrolled ? "--bg_applied" : ""}`]
              }
            >
              About us
            </Link>
            <Link
              href={"/contact_us"}
              className={
                styles[`navbar__menu__item${isScrolled ? "--bg_applied" : ""}`]
              }
            >
              Contact us
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div
            className={
              styles[`navbar__mobile__cont${!mobileMenu ? "--active" : ""}`]
            }
          >
            {
              <div
                className={styles.mobile__burger__cont}
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                {mobileMenu && (
                  <MovingComponent
                    type="spin"
                    duration="2000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="infinite"
                    fillMode="none"
                    className={
                      styles[
                        `mobile__burger__cont${isScrolled ? "--scrolled" : ""}`
                      ]
                    }
                  >
                    <img src={"/logo.png"} alt="nav icon" />
                  </MovingComponent>
                )}
                <CSSTransition
                  in={!mobileMenu}
                  unmountOnExit
                  classNames={`mobile__burger__transition`}
                  timeout={300}
                >
                  <div className={styles[`mobile__burger__cont--active`]}>
                    <img src="/cancel.png" alt="exit" />
                  </div>
                </CSSTransition>
              </div>
            }
          </div>
        </>
      )}
      <CSSTransition
        in={!mobileMenu}
        unmountOnExit
        classNames={`mobile__menu__transition`}
        timeout={300}
        nodeRef={mobileNavMenuRef}
      >
        <div className={styles.mobile__menu__cont} ref={mobileNavMenuRef}>
          <div className={styles.mobile__menu__logo__cont}>
            <img src={"/logo.png"} alt="" />
          </div>
          <div className={styles.mobile__menu}>
            <Link href={"/"} className={styles.mobile__menu__item}>
              Home
            </Link>
            <Link href={"/about_us"} className={styles.mobile__menu__item}>
              About us
            </Link>
            <Link href={"/contact_us"} className={styles.mobile__menu__item}>
              Contact us
            </Link>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
