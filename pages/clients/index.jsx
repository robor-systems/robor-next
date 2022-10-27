import Head from "next/head";
import { ProjectWork } from "@/components/Templates/Work";
import workProjects from "constants/content/work.constant";
import { useEffect, useRef, useState } from "react";
import { useElementScroll } from "framer-motion";
import Snackbar from "@/components/Modules/Snackbar/Snackbar";

const WorkPage = () => {
  const ref = useRef(null);
  const [scroll, setScroll] = useState(0);
  const { scrollYProgress } = useElementScroll(ref);
  useEffect(() => {
    const handleScroll = (y) => {
      setScroll(y * 100);
    };
    const unsubscribeY = scrollYProgress.onChange(handleScroll);
    return () => {
      unsubscribeY();
    };
  });
  return (
    <>
      <Head>
        <title>Our Clients | Robor Systems</title>
        <link rel="canonical" href="https://robor.systems/clients"></link>
      </Head>
      <main
        ref={ref}
        className="h-[100vh]  overflow-y-scroll snap snap-y snap-mandatory"
      >
        {workProjects.map((project, index) => (
          <ProjectWork key={project.general.slug} {...project} index={index} />
        ))}
      </main>
      <Snackbar scrollProgress={scroll} />
    </>
  );
};

export default WorkPage;
