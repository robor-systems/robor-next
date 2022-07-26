import clsx from "clsx";
import ContentProject from "./ContentProject";
import ImagesProject from "./ImagesProject";

const ProjectWork = ({ general, index, ...props }) => {
  return (
    <section
      id={`project-${general.slug}`}
      className={clsx(
        "h-[100vh] snap-start ",
        index % 2 === 0
          ? "bg-light-bgSecondary dark:bg-dark-bgSecondary"
          : "bg-light-bgPrimary dark:bg-dark-bgPrimary",
        "px-5"
      )}
    >
      {/* * now we need a grid */}
      <div className="grid h-full grid-cols-2 gap-10">
        {/* * Left side will contain the project info */}
        <div className="col-span-full md:col-span-1">
          <ContentProject {...general} />
        </div>
        {/* * Right side will contain images*/}
        <div className="col-span-full md:col-span-1">
          <ImagesProject
            slug={general.slug}
            images={general.workPageImages}
            imageCount={general.workPageImageCount}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectWork;
