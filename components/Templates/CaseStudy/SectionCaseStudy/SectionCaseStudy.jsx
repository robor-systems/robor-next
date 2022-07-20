import clsx from "clsx";
import Image from "next/image";
import { random } from "utils/utils";

const SectionCaseStudy = ({
  header,
  subHeader,
  index,
  description,
  images,
  imageCount,
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
      {!!imageCount && (
        <div className="relative flex h-[456px]">
          {imageCount === 3 ? (
            <>
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <Image
                  src={images[1]}
                  alt={`image${index}`}
                  width={700}
                  height={600}
                />
              </div>
              <div className="absolute top-[52.5%] left-[27.5%] translate-x-[-50%] translate-y-[-50%]">
                <Image
                  src={images[0]}
                  alt={`image${index}`}
                  width={300}
                  height={700}
                />
              </div>
              <div className="absolute top-[75.5%] right-[3.5%] translate-x-[-50%] translate-y-[-50%]">
                <Image
                  src={images[2]}
                  alt={`image${index}`}
                  width={300}
                  height={700}
                />
              </div>
            </>
          ) : imageCount === 2 ? null : (
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <Image
                src={images[0]}
                alt={`image${index}`}
                width="820px"
                height={1100}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionCaseStudy;
