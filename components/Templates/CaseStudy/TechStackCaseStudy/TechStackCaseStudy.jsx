import clsx from "clsx";

const TechStackCaseStudy = ({ description, frontend, backend, other }) => {
  return (
    <div
      className={clsx(
        "md:py-24 py-16 md:px-24 px-8",
        "grid grid-cols-2 gap-10",
        "bg-light-bgPrimary dark:bg-dark-bgPrimary"
      )}
    >
      {/* * left content */}
      <div className="flex flex-col space-y-4 col-span-full md:col-span-1 text-light-contentSecondary dark:text-dark-contentSecondary">
        {/* * explore more heading */}
        <h4 className="project-info-heading ">Technology Stack</h4>
        {/* * project title */}
        <h1 className="pr-10 text-2xl font-bold sm:text-3xl md:text-4xl text-light-primary dark:text-dark-primary">
          Technological expertise provided by Robor
        </h1>
      </div>
      {/* * right content */}
      <div className="flex flex-col space-y-6 md:justify-end md:col-span-1 col-span-full">
        {/* * Description */}
        <p className="font-light text-md md:text-lg">{description}</p>
        {/* * Stack Grid */}
        <div className="grid grid-cols-3 gap-10">
          {/* * Frontend */}
          <TechStackSection title="Frontend" stack={frontend} />
          {/* * Other */}
          <TechStackSection title="Other" stack={other} />
          {/* * Backend */}
          <TechStackSection title="Backend" stack={backend} />
        </div>
      </div>
    </div>
  );
};

export default TechStackCaseStudy;

const TechStackSection = ({ title, stack }) => {
  return (
    <div className="col-span-1 space-y-4 md:col-span-1">
      <h5 className="font-semibold text-xl pb-[10px] border-b-2 text-light-content dark:text-dark-content border-[#A0A8BB]">
        {title}
      </h5>
      {/* * stack */}
      <ul className="list-disc list-inside">
        {stack.map((item, index) => (
          <li
            key={index}
            className="text-sm font-light md:text-lg text-light-contentSecondary dark:text-dark-contentSecondary"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
