import clsx from "clsx";

import ContentProject from "@/components/Templates/Work/ContentProject";
import ImagesProject from "@/components/Templates/Work/ImagesProject";
const SlideItem = ({ general, index, content, ...props }) => {
  return (
    <div
      id={`project-${content.general.slug}`}
      className={clsx(
        " dark:bg-dark-bgSecondary rounded-xl xl:rounded-3xl ",
        "w-full h-full py-6 px-6 sm:py-10  md:px-10 md:py-10 lg:px-5 lg:py-0 xl:px-16 xl:py-16 3xl:px-16 3xl:py-16"
      )}
    >
      {/* * now we need a grid */}
      <div className="h-full md:grid grid-cols-2 items-center  md:gap-8 lg:gap-8">
        {/* * Left side will contain the project info */}
        <div className="px-0 lg:px-2 ">
          <ContentProject
            description={content.general.description}
            title={content.general.title}
            slug={`/clients/${content.general.slug}`}
            slider={true}
          />
        </div>
        {/* * Right side will contain images*/}
        <div className="md:w-full mt-5 h-full">
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
