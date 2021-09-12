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
        className="text-blu flex flex-col gap-16 items-center pb-20 pt-16 w-full bg-shade overflow-hidden"
        initial="invisible"
        animate={visible ? "visible" : "invisible"}
        variants={opacityVariants}
        transition={{ duration: 1 }}
      >
        <SectionHeader
          title="Our Process"
          subtitle="We lead your idea from inception to completion."
        />

        <div className="grid gap-6 grid-cols-1 px-16 max-w-screen-lg md:gap-3 md:grid-cols-7">
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
            className=" col-span-1 col-start-1 md:col-start-2  row-start-2  md:row-start-1"
            variants={translateVariants}
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            transition={{ duration: 1, delay: 0 }}
          >
            <FiArrowRight className="md:mt-10  w-full text-3xl rotate-90 md:transform-none" />
          </motion.div>
          <motion.div
            className=" col-span-1 col-start-1 md:col-start-4 row-start-4 md:row-start-1"
            variants={translateVariants}
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <FiArrowRight className="md:mt-10 w-full text-3xl rotate-90 md:transform-none" />
          </motion.div>
          <motion.div
            className=" col-span-1 col-start-1 md:col-start-6 row-start-6 md:row-start-1 "
            variants={translateVariants}
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <FiArrowRight className="md:mt-10 w-full text-3xl rotate-90 md:transform-none" />
          </motion.div>
        </div>
      </motion.div>
    </ReactVisibilitySensor>
  );
};

export default OurProcess;
