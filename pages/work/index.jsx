import Head from "next/head";
import { ProjectWork } from "@/components/Templates/Work";
import workProjects from "constants/content/work.constant";

const WorkPage = () => {
  return (
    <>
      <Head>
        <title>Our Work | Robor Systems</title>
      </Head>

      <main className="h-[100vh]  overflow-y-scroll snap snap-y snap-mandatory">
        {workProjects.map((project, index) => (
          <ProjectWork key={project.general.slug} {...project} index={index} />
        ))}
      </main>
    </>
  );
};

export default WorkPage;
