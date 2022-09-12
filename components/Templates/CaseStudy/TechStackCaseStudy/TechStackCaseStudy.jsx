import { useState } from "react";
import clsx from "clsx";
import SectionTechStack from "./SectionTechStack";
import ReactVisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import {
  leftTranslateVariant,
  rightTranslateVariant,
} from "constants/animations/variants.constant";

const TechStackCaseStudy = ({ description, frontend, backend, other }) => {
  const [visible, setVisible] = useState(false);

  return (
    <ReactVisibilitySensor
      partialVisibility
      offset={{ bottom: 200 }}
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
    >
      <div
        className={clsx(
          "md:py-24 py-16  md:px-44 px-8",
          "grid grid-cols-2 gap-10",
          "bg-light-bgPrimary dark:bg-dark-bgPrimary"
        )}
      >
        {/* * left content */}
        <motion.div
          className="flex flex-col space-y-4 col-span-full md:col-span-1 text-light-contentSecondary dark:text-dark-contentSecondary"
          initial="invisible"
          variants={leftTranslateVariant}
          animate={visible ? "visible" : "invisible"}
          transition={{ duration: 1 }}
        >
          {/* * explore more heading */}
          <h4 className="project-info-heading ">Technology Stack</h4>
          {/* * project title */}
          <h1 className="pr-10 text-2xl font-bold sm:text-3xl md:text-4xl text-light-primary dark:text-dark-primary">
            Technological expertise provided by Robor
          </h1>
        </motion.div>
        {/* * right content */}

        <motion.div
          className="flex flex-col space-y-6 md:justify-end md:col-span-1 col-span-full"
          initial="invisible"
          variants={rightTranslateVariant}
          animate={visible ? "visible" : "invisible"}
          transition={{ duration: 1 }}
        >
          {/* * Description */}
          <p className=" text-md md:text-lg">{description}</p>
          {/* * Stack Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {/* * Frontend */}
            <SectionTechStack title="Frontend" stack={frontend} />
            {/* * Other */}
            <SectionTechStack title="Other" stack={other} />
            {/* * Backend */}
            <SectionTechStack title="Backend" stack={backend} />
          </div>
        </motion.div>
      </div>
    </ReactVisibilitySensor>
  );
};

export default TechStackCaseStudy;
