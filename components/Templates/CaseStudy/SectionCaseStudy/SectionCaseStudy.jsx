import clsx from "clsx";
import Image from "next/image";
import { useEffect } from "react";

const SectionCaseStudy = ({
  header,
  subHeader,
  index,
  description,
  image,
  blurImage,
  ...props
}) => {
  return (
    <div
      className={clsx(
        index % 2 === 0
          ? "bg-light-bgPrimary dark:bg-dark-bgPrimary"
          : "bg-light-bgSecondary dark:bg-dark-bgSecondary",
        "md:py-24 py-16 md:px-24 px-8",
        "space-y-10 md:space-y-10"
      )}
    >
      {/* * Top content */}
      <div className={clsx("grid grid-cols-2 gap-10")}>
        {/* * left content */}
        <div className="flex flex-col justify-center space-y-2 md:col-span-1 col-span-full text-light-contentSecondary dark:text-dark-contentSecondary">
          {/* * subheader */}
          <h4 className="project-info-heading ">{subHeader}</h4>
          {/* * header */}
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-light-primary dark:text-dark-primary">
            {header}
          </h1>
        </div>
        {/* * right content */}
        <div className="font-light text-md md:text-lg md:col-span-1 col-span-full">
          {description}
        </div>
      </div>
      {/* * bottom images div */}
      {!!image && (
        <div className="flex items-center justify-center w-full h-[220px] md:h-[456px] m-auto">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={header}
              layout="fill"
              objectFit="contain"
              // placeholder="blur"
              // blurDataURL={blurImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionCaseStudy;
