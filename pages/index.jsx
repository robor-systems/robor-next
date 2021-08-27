import { FeaturesHome, HeroHome } from "components/Templates/Home";
import { AnimateSharedLayout } from "framer-motion";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Robor</title>
        <meta name="description" content="This is a description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimateSharedLayout>
        <main className="flex flex-col items-center">
          <HeroHome />
          <FeaturesHome />
        </main>
      </AnimateSharedLayout>
    </div>
  );
};

export default Home;
