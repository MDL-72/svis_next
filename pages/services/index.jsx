import React, { useEffect } from "react";
import Head from "next/head";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Explore the academic programs and services offered by Spring of Virtue Integrated School."
          key="description"
        />
      </Head>
      <div>index</div>
    </>
  );
}
