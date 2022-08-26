import clsx from "clsx";

import ContentProject from "@/components/Templates/Work/ContentProject";
import ImagesProject from "@/components/Templates/Work/ImagesProject";
const SlideItem = ({ general, index, content, ...props }) => {
  return (
    <div
      id={`project-${content.general.slug}`}
      className={clsx(
        " dark:bg-dark-bgSecondary rounded-xl xl:rounded-3xl",
        "w-full h-full px-[1rem] md:pr-0 sm:pl-[2rem] md:pl-[4rem] lg:pl-[1.5rem] xl:pl-[2rem]"
      )}
    >
      {/* * now we need a grid */}
      <div className="grid h-full grid-cols-2 md:gap-8 lg:gap-8">
        {/* * Left side will contain the project info */}
        <div className="col-span-full md:col-span-1">
          <ContentProject {...content.general} slider={true} />
        </div>
        {/* * Right side will contain images*/}
        <div className="col-span-full md:col-span-1">
          <ImagesProject
            slider={true}
            images={content.general.workPageImages}
            imageCount={content.general.workPageImageCount}
          />
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
