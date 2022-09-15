import Link from "next/link";
import { motion } from "framer-motion";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { opacityVariants } from "constants/animations/variants.constant";
import clsx from "clsx";

const ContentProject = ({ slug, title, description, slider, ...props }) => {
  const [visible, setVisible] = useState(false);

  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ bottom: 300 }}
    >
      <motion.div
        initial="invisible"
        animate={visible ? "visible" : "invisible"}
        variants={opacityVariants}
        transition={{ duration: 1.5 }}
      >
        {/* * title */}
        <h1 className="font-bold text-xl md:text-4xl  sm:mt-[2px] mb-6 leading-[1.25rem]">
          {title}
        </h1>
        {/* * description */}
        <p className="text-sm sm:text-lg text-light-contentSecondary dark:text-dark-contentSecondary break-words lg:w-[350px] mb-6">
          {description}
        </p>
        {/* * go to project page link */}
        <div className="relative group">
          <Link href={`/work/${slug}`} passHref>
            <a className="flex items-center space-x-4 uppercase text-light-primary dark:text-dark-primary">
              <span className="flex justify-between  items-center  text-sm md:text-base ">
                View Project{" "}
                <FiArrowRight className="ml-3 text-sm md:text-2xl" />
              </span>
            </a>
          </Link>
          <div className="absolute  w-0 group-hover:w-[108px] h-1 bg-light-primary dark:bg-dark-primary rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></div>
        </div>
      </motion.div>
    </ReactVisibilitySensor>
  );
};

export default ContentProject;
