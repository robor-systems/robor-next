import Head from "next/head";
import { ThemeProvider } from "next-themes";
import "styles/globals.css";

import ErrorBoundary from "@/components/Elements/ErrorBoundary/ErrorBoundary";
import Layout from "@/components/Modules/Layout/Layout";
import { pageview } from "@/utils/google-analytics";
import seo from "@/utils/seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [canonical, setCanonical] = useState(seo.canonical);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setCanonical("https://robor.systems" + url);
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute="class">
      <ErrorBoundary>
        <Layout>
          <Head>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <link rel="canonical" href={canonical} />
            <meta property="og:url" content={seo.openGraph.url} />
            <meta property="og:title" content={seo.openGraph.title} />
            <meta property="og:description" content={seo.openGraph.description} />
            <meta property="og:image" content={seo.openGraph.images[0].url} />
            <meta property="og:site_name" content={seo.openGraph.site_name} />
            <meta property="og:type" content={seo.openGraph.type} />
            <meta name="twitter:card" content={seo.twitter.cardType} />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default MyApp;
