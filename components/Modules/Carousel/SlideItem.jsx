import clsx from "clsx";

import ContentProject from "@/components/Templates/Work/ContentProject";
import ImagesProject from "@/components/Templates/Work/ImagesProject";
const SlideItem = ({ general, index, content, ...props }) => {
  return (
    <div
      id={`project-${content.general.slug}`}
      className={clsx(" dark:bg-dark-bgSecondary md:px-5", "w-full h-full")}
    >
      {/* * now we need a grid */}
      <div className="grid h-full grid-cols-2 md:gap-10 " >
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
    </div>
  );
};

export default SlideItem;