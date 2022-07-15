import {
  FeaturesHome,
  // HeroHome,
  JoinTeam,
  OurClients,
  OurProcess,
  TeamHome,
  TechStackHome,
} from "@/components/Templates/Home";
import Feedback from "@/components/Templates/Home/Feedback/Feedback";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { lazy, useEffect } from "react";
import { scroller } from "react-scroll";
import dynamic from "next/dynamic";

const HeroHome = dynamic(
  () => import("@/components/Templates/Home/HeroHome/HeroHome"),
  {
    suspense: true,
  }
);

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
