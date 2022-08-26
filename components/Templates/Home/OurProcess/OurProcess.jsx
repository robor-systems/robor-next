import { SectionHeader } from "components/Elements";
import {
  opacityVariants,
  translateVariants,
} from "constants/animations/variants.constant";
import process from "constants/content/process.constant";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { v4 } from "uuid";
import ItemProcess from "./ItemProcess";
import { FiArrowRight } from "react-icons/fi";

const OurProcess = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ bottom: 300 }}
    >
      <motion.div
        id="projects"
        className="flex flex-col items-center w-full gap-16 pt-16 pb-20 overflow-hidden text-blu bg-shade dark:bg-dark-bgSecondary"
        initial="invisible"
        animate={visible ? "visible" : "invisible"}
        variants={opacityVariants}
        transition={{ duration: 1 }}
      >
        <SectionHeader
          title="Our Process"
          subtitle="We lead your idea from inception to completion."
        />

        <div className="grid max-w-screen-lg grid-cols-1 gap-6 px-16 md:gap-3 md:grid-cols-7">
          {process.map((item, index) => (
            <ItemProcess
              key={v4()}
              {...item}
              visible={visible}
              order={index * 2}
              delay={index / 4}
            />
          ))}
          <motion.div
            className="col-span-1 col-start-1 row-start-2 md:col-start-2 md:row-start-1"
            variants={translateVariants}
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            transition={{ duration: 1, delay: 0 }}
          >
            <FiArrowRight className="w-full text-3xl rotate-90 md:mt-10 md:transform-none text-light-content dark:text-dark-content" />
          </motion.div>
          <motion.div
            className="col-span-1 col-start-1 row-start-4 md:col-start-4 md:row-start-1"
            variants={translateVariants}
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <FiArrowRight className="w-full text-3xl rotate-90 md:mt-10 md:transform-none text-light-content dark:text-dark-content" />
          </motion.div>
          <motion.div
            className="col-span-1 col-start-1 row-start-6 md:col-start-6 md:row-start-1"
            variants={translateVariants}
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <FiArrowRight className="w-full text-3xl rotate-90 md:mt-10 md:transform-none text-light-content dark:text-dark-content" />
          </motion.div>
        </div>
      </motion.div>
    </ReactVisibilitySensor>
  );
};

export default OurProcess;
