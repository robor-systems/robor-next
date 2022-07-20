import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const ContentProject = ({ slug, title, description, ...props }) => {
  return (
    <div className="flex flex-col justify-center h-full px-20 space-y-4">
      {/* * title */}
      <h1 className="text-4xl font-bold">{title}</h1>
      {/* * description */}
      <p className="text-lg text-light-contentSecondary dark:text-dark-contentSecondary">
        {description}
      </p>
      {/* * go to project page link */}
      <Link href={`/work/${slug}`} passHref>
        <a className="flex items-center space-x-4 uppercase text-light-primary dark:text-dark-primary">
          <span>View Project</span>
          <FiArrowRight className="text-xl" />
        </a>
      </Link>
    </div>
  );
};

export default ContentProject;
