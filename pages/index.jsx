import {
  FeaturesHome,
  HeroHome,
  TeamHome,
  TechStackHome,
} from "@/components/Templates/Home";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Robor</title>
        <meta name="description" content="This is a description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col gap-24 items-center">
        <HeroHome />
        <FeaturesHome />

        <TechStackHome />
        <TeamHome />

        <div className="w-full h-20"></div>
      </main>
    </div>
  );
};

export default Home;
