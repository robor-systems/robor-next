import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import "styles/globals.css";

import Layout from "@/components/Modules/Layout/Layout";
import seo from "utils/seo";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <DefaultSeo {...seo} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
