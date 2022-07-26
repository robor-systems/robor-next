import Link from "next/link";
import { motion } from "framer-motion";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { opacityVariants } from "constants/animations/variants.constant";

const ContentProject = ({ slug, title, description, ...props }) => {
  const [visible, setVisible] = useState(false);

  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ bottom: 300 }}
    >
      <motion.div
        className="flex flex-col justify-center h-full md:px-20 space-y-4 ml-[12px] sm:ml-0"
        initial="invisible"
        animate={visible ? "visible" : "invisible"}
        variants={opacityVariants}
        transition={{ duration: 1.5 }}
      >
        {/* * title */}
        <h1 className="md:text-4xl font-bold">{title}</h1>
        {/* * description */}
        <p className="md:text-lg text-light-contentSecondary dark:text-dark-contentSecondary">
          {description}
        </p>
        {/* * go to project page link */}
        <Link href={`/work/${slug}`} passHref>
          <a className="flex items-center space-x-4 uppercase text-light-primary dark:text-dark-primary">
            <span>View Project</span>
            <FiArrowRight className="text-xl" />
          </a>
        </Link>
      </motion.div>
    </ReactVisibilitySensor>
  );
};

export default ContentProject;
