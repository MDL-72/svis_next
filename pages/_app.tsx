import "../styles/globals.css";
import "../styles/contactUsForm.scss";
import "../styles/contactUs.scss";
import dynamic from "next/dynamic";
// import Layout from "../components/layout/layout";
import type { AppProps } from "next/app";
import Head from "next/head";
import { pathToTitleMap } from "../utils/pathTitleMap";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Layout = dynamic(() => import("../components/layout/layout"));

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [title, setTitle] = useState<string>("SVIS");

    useEffect(() => {
        router.pathname && setTitle(pathToTitleMap[router.pathname as keyof typeof pathToTitleMap] ?? "");
    }, [router.pathname]);

    return (
        <>
            <Head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8642026678974232"
                    crossOrigin="anonymous"
                ></script>
                <meta name="title" content="Spring of Virtue Integrated School, Inc." />
                <meta
                    name="description"
                    content="We believe that our students should have the best possible education, and we are committed to providing them with the resources they need to succeed."
                />
                <meta
                    name="keywords"
                    content="SVIS, Spring of Virtue Integrated School, Inc. Spring of Virtue, School"
                />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="1 days" />
                <meta name="author" content="MDL" />

                <meta charSet="utf-8" />
                <link rel="icon" href="/logo.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />

                {/* <!-- Primary Meta Tags --> */}
                <title>{title}</title>
                <meta name="title" content="SVIS" />
                <meta name="description" content="Spring of Virtue Integrated School, Inc." />

                {/* <!-- Google / Search Engine Tags --> */}
                <meta itemProp="name" content="Spring of Virtue Integrated School, Inc." />
                <meta itemProp="description" content="SVIS - Home" />
                <meta itemProp="image" content="/logo.png" />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.springofvirtue.com/" />
                <meta property="og:title" content="SVIS" />
                <meta property="og:description" content="Spring of Virtue Integrated School, Inc." />
                <meta property="og:image" content="/hero.jpg" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.springofvirtue.com/" />
                <meta property="twitter:title" content="SVIS" />
                <meta property="twitter:description" content="Spring of Virtue Integrated School, Inc." />
                <meta property="twitter:image" content="/hero.jpg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
