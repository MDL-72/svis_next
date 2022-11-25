import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function NewsEvents() {
  const pathToTitleMap = {
    "/": "SVIS - Home",
    "/about-us": "SVIS - About us",
    "/contact-us": "SVIS - Contact us",
    "/news-and-events": "SVIS - News & Events",
  };

  const router = useRouter();
  const pathNameQuery = router?.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = pathToTitleMap[pathNameQuery];
  }, []);

  return <div>news and events</div>;
}
