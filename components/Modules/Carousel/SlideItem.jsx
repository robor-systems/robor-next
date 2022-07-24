import clsx from "clsx";

import ContentProject from "@/components/Templates/Work/ContentProject";
import ImagesProject from "@/components/Templates/Work/ImagesProject";
const SlideItem = ({ general, index, content, ...props }) => {
  return (
    <section
      id={`project-${content.general.slug}`}
      className={clsx("bg-light-bgSecondary dark:bg-dark-bgSecondary px-5")}
    >
      {/* * now we need a grid */}
      <div className="grid  grid-cols-2 gap-10 h-[97vh]">
        {/* * Left side will contain the project info */}
        <div className="col-span-full md:col-span-1">
          <ContentProject {...content.general} />
        </div>
        {/* * Right side will contain images*/}
        <div className="col-span-full md:col-span-1">
          <ImagesProject
            images={content.general.workPageImages}
            imageCount={content.general.workPageImageCount}
          />
        </div>
      </div>
    </section>
  );
};

export default SlideItem;
