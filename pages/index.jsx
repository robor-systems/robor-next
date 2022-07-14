import {
  FeaturesHome,
  HeroHome,
  JoinTeam,
  OurClients,
  OurProcess,
  TeamHome,
  TechStackHome,
} from "@/components/Templates/Home";
import Feedback from "@/components/Templates/Home/Feedback/Feedback";
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
      <main className="flex flex-col items-center ">
        <HeroHome />
        <FeaturesHome />
        <TechStackHome />
        <OurClients />
        <OurProcess />
        <TeamHome />
        <JoinTeam />
        <Feedback />
      </main>
    </div>
  );
};

export default Home;
