import Snackbar from "@/components/Modules/Snackbar/Snackbar";
import { ProjectWork } from "@/components/Templates/Work";
import solutions from "constants/content/solutions.constant";
import { useElementScroll } from "framer-motion";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const SolutionsPage = () => {
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
        <title>Solutions | Robor Systems</title>
        <link rel="canonical" href="https://robor.systems/solutions"></link>
      </Head>
      <main
        ref={ref}
        className="h-[100vh]  overflow-y-scroll snap snap-y snap-mandatory"
      >
        {solutions.map((solution, index) => (
          <ProjectWork key={solution.slug} {...solution} index={index} />
        ))}
      </main>
      <Snackbar scrollProgress={scroll} />
    </>
  );
};

export default SolutionsPage;
