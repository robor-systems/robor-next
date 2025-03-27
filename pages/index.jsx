import {
  FeaturesHome,
  HeroHome,
  JoinTeam,
  OurClients,
  OurProcess,
  OurWork,
  TeamHome,
  TechStackHome,
} from "@/components/Templates/Home";
import Feedback from "@/components/Templates/Home/Feedback/Feedback";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { scroller } from "react-scroll";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query?.section)
      scroller.scrollTo(router.query?.section, { smooth: true, offset: -20 });
  }, [router]);

  return (
    <main className="flex flex-col items-center">
      <HeroHome />
      <FeaturesHome />
      <TechStackHome />
      <OurWork />
      {/* <OurClients /> */}
      <OurProcess />
      <JoinTeam />
      <Feedback />
    </main>
  );
};

export default Home;
