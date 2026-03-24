import Head from "next/head";
import { generateDefaultSeo } from "next-seo/pages";
import { ThemeProvider } from "next-themes";
import "styles/globals.css";

import ErrorBoundary from "@/components/Elements/ErrorBoundary/ErrorBoundary";
import Layout from "@/components/Modules/Layout/Layout";
import { pageview } from "@/utils/google-analytics";
import seo from "@/utils/seo";
import { useRouter } from "next/router";
import {useEffect, useState} from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [seoData, setSeoData] = useState(seo);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setSeoData((prev) => ({...prev, canonical: "https://robor.systems" + url}));
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
          <Head>{generateDefaultSeo(seoData)}</Head>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default MyApp;
