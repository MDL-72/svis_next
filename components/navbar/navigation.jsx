import styles from "./navigation.module.scss";
import Link from "next/link";

import Mobilenav from "./mobilenav";
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

  const menuList = [
    {
      id: 1,
      path: "/",
      menuName: "Home",
    },
    {
      id: 2,
      path: "/about-us",
      menuName: "About us",
    },
    {
      id: 4,
      path: "/news-and-events",
      menuName: "News & Events",
    },
    {
      id: 3,
      path: "/contact-us",
      menuName: "Contact us",
    },
  ];

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
            {menuList.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  className={
                    styles[
                      `navbar__menu__item${isScrolled ? "--bg_applied" : ""}`
                    ]
                  }
                >
                  {item.menuName}
                </Link>
              );
            })}
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
          <Mobilenav menuList={menuList} />
        </div>
      </CSSTransition>
    </>
  );
}
