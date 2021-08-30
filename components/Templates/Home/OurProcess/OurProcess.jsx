import { SectionHeading } from "components/Elements";
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
        id="features-home"
        className="text-blu flex flex-col gap-16 items-center pb-20 pt-16 w-full bg-gray-50"
        initial="invisible"
        animate={visible ? "visible" : "invisible"}
        variants={opacityVariants}
        transition={{ duration: 1 }}
      >
        <SectionHeading>Our Process</SectionHeading>
        <div className="grid gap-3 grid-cols-7">
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
            className="order-1"
            variants={translateVariants}
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            transition={{ duration: 1, delay: 0 }}
          >
            <FiArrowRight className="mt-10 w-full text-3xl" />
          </motion.div>
          <motion.div
            className="order-3"
            variants={translateVariants}
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <FiArrowRight className="mt-10 w-full text-3xl" />
          </motion.div>
          <motion.div
            className="order-4"
            variants={translateVariants}
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <FiArrowRight className="mt-10 w-full text-3xl" />
          </motion.div>
        </div>
      </motion.div>
    </ReactVisibilitySensor>
  );
};

export default OurProcess;
