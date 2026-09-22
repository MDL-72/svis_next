import React, { useEffect } from "react";
import Head from "next/head";

export default function NewsEvents() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Stay updated with the latest news and events from Spring of Virtue Integrated School."
          key="description"
        />
      </Head>
      <div>news and events</div>
    </>
  );
}
