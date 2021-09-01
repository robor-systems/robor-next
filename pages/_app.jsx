import Layout from "@/components/Modules/Layout/Layout";
import { DefaultSeo } from "next-seo";
import "styles/globals.css";
import seo from "utils/seo";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...seo} />

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
