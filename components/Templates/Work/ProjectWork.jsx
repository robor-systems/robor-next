import clsx from "clsx";
import ContentProject from "./ContentProject";
import Container from "@/components/Modules/Container/Container";
import ImagesProject from "./ImagesProject";

const ProjectWork = ({ general, index, ...props }) => {
  return (
    <section
      id={`project-${general.slug}`}
      className={clsx(
        "h-[100vh] snap-start overflow-hidden  pt-[6.75rem] md:pt-0",
        index % 2 === 0
          ? "bg-light-bgSecondary dark:bg-dark-bgSecondary"
          : "bg-light-bgPrimary dark:bg-dark-bgPrimary"
      )}
    >
      <Container>
        {/* * now we need a grid */}
        <div className="h-full md:grid grid-cols-2 items-center sm:gap-2 md:gap-10 px-[20px] ">
          {/* * Left side will contain the project info */}
          <div className="px-0 xl:px-20 3xl:px-0">
            <ContentProject {...general} />
          </div>
          {/* * Right side will contain images*/}
          <div className="md:w-full  lg:max-w-2xl 3xl:max-w-3xl ml-auto ">
            <ImagesProject
              slug={general.slug}
              images={general.workPageImages}
              imageCount={general.workPageImageCount}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectWork;

// 3xl:top-[0px] xl:top-[0px] lg:top-[-90px] md:top-[-60px] top-[-160px]
