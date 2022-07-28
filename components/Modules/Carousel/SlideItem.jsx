import clsx from "clsx";

import ContentProject from "@/components/Templates/Work/ContentProject";
import ImagesProject from "@/components/Templates/Work/ImagesProject";
const SlideItem = ({ general, index, content, ...props }) => {
  return (
    <div
      id={`project-${content.general.slug}`}
      className={clsx(" dark:bg-dark-bgSecondary md:pl-5", "w-full h-full")}
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
            slider={true}
            images={content.general.workPageImages}
            imageCount={content.general.workPageImageCount}
            width={content.general.width}
            height={content.general.height}
            width_2={content.general.width_2}
            height_2={content.general.height_2}
          />
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
