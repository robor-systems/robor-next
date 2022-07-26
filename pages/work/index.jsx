import { ProjectWork } from "@/components/Templates/Work";
import workProjects from "constants/content/work.constant";

const WorkPage = () => {
  return (
    <main className="min-h-screen pt-[6.75rem] snap snap-y flex flex-none flex-col snap-mandatory overflow-y-auto flex-nowrap">

      {/* * We will loop over the projects and make a section for each project */}
      {workProjects.map((project, index) => (
          <section class="container w-screen h-screen  snap-start">
        <ProjectWork key={project.general.slug} {...project} index={index} />
        </section>
      ))}
    </main>
  );
};

export default WorkPage;
