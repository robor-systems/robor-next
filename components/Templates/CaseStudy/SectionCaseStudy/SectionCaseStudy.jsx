import clsx from "clsx";

const SectionCaseStudy = ({
  header,
  subHeader,
  index,
  description,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-2 gap-10",
        index % 2 === 0
          ? "bg-light-bgPrimary dark:bg-dark-bgPrimary"
          : "bg-light-bgSecondary dark:bg-dark-bgSecondary",
        "md:py-24 py-16 md:px-24 px-8"
      )}
    >
      {/* * left content */}
      <div className="flex flex-col justify-center md:col-span-1 col-span-full text-light-contentSecondary dark:text-dark-contentSecondary">
        {/* * subheader */}
        <h4 className="project-info-heading ">{subHeader}</h4>
        {/* * header */}
        <h1 className="text-4xl font-bold text-light-primary dark:text-dark-primary">
          {header}
        </h1>
      </div>
      {/* * right content */}
      <div className="text-lg font-light md:col-span-1 col-span-full">
        {description}
      </div>
    </div>
  );
};

export default SectionCaseStudy;
