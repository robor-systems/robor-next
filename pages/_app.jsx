import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import "styles/globals.css";

import Layout from "@/components/Modules/Layout/Layout";
import { pageview } from "utils/google-analytics";
import seo from "utils/seo";
import { useRouter } from "next/router";
import {useEffect, useState} from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [seoData, setSeoData] = useState(seo);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setSeoData({...seoData, canonical: "https://robor.systems" + url});
      pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <DefaultSeo {...seoData} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
