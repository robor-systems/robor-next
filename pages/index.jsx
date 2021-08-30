import {
  FeaturesHome,
  HeroHome,
  OurProcess,
  TeamHome,
  TechStackHome,
} from "@/components/Templates/Home";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect } from "react";
import { scroller } from "react-scroll";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query?.section)
      scroller.scrollTo(router.query?.section, { smooth: true, offset: -20 });
  }, [router]);

  return (
    <div>
      <Head>
        <title>Robor</title>
        <meta name="description" content="This is a description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col gap-16 items-center sm:gap-20">
        <HeroHome />
        <FeaturesHome />

        <TechStackHome />
        <OurProcess />
        <TeamHome />

        <div className="w-full h-20"></div>
      </main>
    </div>
  );
};

export default Home;
