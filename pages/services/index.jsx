import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ServicesPage() {
  const router = useRouter();
  const pathNameQuery = router?.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
    // document?.title = pathToTitleMap[pathNameQuery];
  }, []);

  return <div>index</div>;
}
