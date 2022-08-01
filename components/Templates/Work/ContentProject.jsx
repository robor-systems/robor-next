import Link from "next/link";
import { motion } from "framer-motion";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { opacityVariants } from "constants/animations/variants.constant";
import clsx from "clsx";

const ContentProject = ({ slug, title, description, ...props }) => {
  const [visible, setVisible] = useState(false);

  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ bottom: 300 }}
    >
      <motion.div
        className={clsx(
          "flex flex-col sm:justify-center h-full",
          // "md:px-20 space-y-4 ml-[12px] sm:ml-0"
          "space-y-4 px-[20px] pt-[35px] sm:p-8"
        )}
        initial="invisible"
        animate={visible ? "visible" : "invisible"}
        variants={opacityVariants}
        transition={{ duration: 1.5 }}
      >
        {/* * title */}
        <h1 className="font-bold md:text-4xl mt-[60px] sm:mt-[2px]">{title}</h1>
        {/* * description */}
        <p className="md:text-lg text-light-contentSecondary dark:text-dark-contentSecondary break-words lg:w-[350px]">
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
