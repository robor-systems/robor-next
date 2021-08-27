import { FeaturesHome, HeroHome } from "components/Templates/Home";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Robor</title>
        <meta name="description" content="This is a description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <HeroHome />
        <FeaturesHome />
      </main>
    </div>
  );
};

export default Home;
