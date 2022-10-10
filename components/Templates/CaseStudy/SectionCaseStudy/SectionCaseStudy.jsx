import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import ReactVisibilitySensor from "react-visibility-sensor";
import {
  leftTranslateVariant,
  rightTranslateVariant,
  singleImageVariant,
} from "constants/animations/variants.constant";

const SectionCaseStudy = ({
  header,
  subHeader,
  index,
  description,
  image,
  blurImage,

  ...props
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <ReactVisibilitySensor
      partialVisibility
      offset={{ bottom: 200 }}
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
    >
      <div
        className={clsx(
          index % 2 === 0
            ? "bg-light-bgPrimary dark:bg-dark-bgPrimary"
            : "bg-light-bgSecondary dark:bg-dark-bgSecondary",
          "md:py-24 py-16 px-8 md:px-10 lg:px-20 xl:px-44",
          "space-y-10 md:space-y-10"
        )}
      >
        <div className="container mx-auto flex flex-col gap-y-16">
          {/* * Top content */}
          <div className={clsx("grid grid-cols-2 gap-2 md:gap-10")}>
            {/* * left content */}
            <motion.div
              className="flex flex-col justify-center space-y-2 md:col-span-1 col-span-full text-light-contentSecondary dark:text-dark-contentSecondary"
              initial="invisible"
              variants={leftTranslateVariant}
              animate={visible ? "visible" : "invisible"}
              transition={{ duration: 1 }}
            >
              {/* * subheader */}
              <h4 className="project-info-heading ">{subHeader}</h4>
              {/* * header */}
              <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-light-primary dark:text-dark-primary">
                {header}
              </h1>
            </motion.div>
            {/* * right content */}
            <motion.div
              className=" text-md md:text-lg md:col-span-1 col-span-full"
              initial="invisible"
              variants={rightTranslateVariant}
              animate={visible ? "visible" : "invisible"}
              transition={{ duration: 1 }}
            >
              {description}
            </motion.div>
          </div>
          {/* * bottom images div */}

          {!!image && (
            <div className="flex items-center justify-center w-full h-[220px] md:h-[456px] m-auto">
              <motion.div
                className="relative w-full h-full"
                initial="invisible"
                variants={singleImageVariant}
                animate={visible ? "visible" : "invisible"}
                transition={{ duration: 1 }}
              >
                <Image
                  src={image}
                  alt={header}
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </ReactVisibilitySensor>
  );
};

export default SectionCaseStudy;
