import Head from "next/head";
import { ProjectWork } from "@/components/Templates/Work";
import workProjects from "constants/content/work.constant";

const WorkPage = () => {
  return (
    <>
      <Head>
        <title>Our Work | Robor Systems</title>
      </Head>
      {/* <main className="flex flex-none flex-col  flex-nowrap "> */}

     
         <main className="h-[100vh] overflow-y-scroll snap snap-y snap-mandatory pt-[6.75rem] ">
         {workProjects.map((project, index) => (
          <ProjectWork key={project.general.slug} {...project} index={index} />
        ))}   
    </main>
    </>
  );
};

export default WorkPage;
