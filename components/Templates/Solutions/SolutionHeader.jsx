import clsx from "clsx";

const SolutionHeader = ({ heading, subHeading, className }) => {
  return (
    <div className="text-center">
      <h4
        className={clsx(
          className,
          "text-light-primary text-4xl font-bold dark:text-dark-primary"
        )}
      >
        {heading}
      </h4>
      {subHeading && (
        <p className="text-light-contentSecondary max-w-2xl mx-auto text-lg dark:text-dark-content my-5">
          {subHeading}
        </p>
      )}
    </div>
  );
};

export default SolutionHeader;
