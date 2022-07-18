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
import { useEffect } from "react";
import { scroller } from "react-scroll";
// import dynamic from "next/dynamic";

// const HeroHome = dynamic(
//   () => import("@/components/Templates/Home/HeroHome/HeroHome"),
//   {
//     loading: () => <div>Loading...</div>,
//     ssr: false,
//   }
// );

// const FeaturesHome = dynamic(
//   () => import("@/components/Templates/Home/FeaturesHome/FeaturesHome"),
//   {
//     loading: () => <div>Loading...</div>,
//     ssr: false,
//   }
// );

// const OurClients = dynamic(
//   () => import("@/components/Templates/Home/OurClients/OurClients"),
//   {
//     loading: () => <div>Loading...</div>,
//     ssr: false,
//   }
// );

// const OurProcess = dynamic(
//   () => import("@/components/Templates/Home/OurProcess/OurProcess"),
//   {
//     loading: () => <div>Loading...</div>,
//     ssr: false,
//   }
// );

// const TeamHome = dynamic(
//   () => import("@/components/Templates/Home/TeamHome/TeamHome"),
//   {
//     loading: () => <div>Loading...</div>,
//     ssr: false,
//   }
// );

// const TechStackHome = dynamic(
//   () => import("@/components/Templates/Home/TechStackHome/TechStackHome"),
//   {
//     loading: () => <div>Loading...</div>,
//     ssr: false,
//   }
// );

// const JoinTeam = dynamic(
//   () => import("@/components/Templates/Home/JoinTeam/JoinTeam"),
//   {
//     loading: () => <div>Loading...</div>,
//     ssr: false,
//   }
// );

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query?.section)
      scroller.scrollTo(router.query?.section, { smooth: true, offset: -20 });
  }, [router]);

  return (
    <div>
      <main className="flex flex-col items-center">
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
