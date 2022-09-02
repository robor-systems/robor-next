import clsx from "clsx";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const RelatedProjectCaseStudy = ({ title, slug, description, ...props }) => {
  return (
    <div
      className={clsx(
        "md:py-24 py-16 md:px-24 px-8",
        "grid grid-cols-5 gap-10",
        "bg-light-bgSecondary dark:bg-dark-bgSecondary"
      )}
    >
      {/* * left content */}
      <div className="flex flex-col justify-center space-y-4 col-span-full md:col-span-3 text-light-contentSecondary dark:text-dark-contentSecondary">
        {/* * explore more heading */}
        <h4 className="project-info-heading ">Explore more</h4>
        {/* * project title */}
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-50">
          {title}
        </h3>
        {/* * description */}
        <p className="text-base md:text-lg">{description}</p>
      </div>
      {/* * right content */}
      <div className="flex items-center justify-start md:justify-end md:col-span-2 col-span-full ">
        <Link href={`/work/${slug}`} passHref>
          <a className="outline-link hover:bg-light-primary hover:dark:bg-dark-primary hover:text-[#fff]">
            <span>View Project</span>
            <FiArrowRight />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default RelatedProjectCaseStudy;
