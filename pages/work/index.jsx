import { ProjectWork } from "@/components/Templates/Work";
import workProjects from "constants/content/work.constant";

const WorkPage = () => {
  return (
    <main className="flex flex-col min-h-screen overflow-scroll pt-[6.75rem] snap-y snap-mandatory">
      {/* * We will loop over the projects and make a section for each project */}
      {workProjects.map((project, index) => (
        <ProjectWork key={project.general.slug} {...project} index={index} />
      ))}
    </main>
  );
};

export default WorkPage;
