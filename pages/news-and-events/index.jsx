import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { pathToTitleMap } from "../../utils/pathTitleMap";

export default function NewsEvents() {

  const router = useRouter();
  const pathNameQuery = router?.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
    // document.title = pathToTitleMap[pathNameQuery];
  }, []);

  return <div>news and events</div>;
}
