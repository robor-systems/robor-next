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
import { FiArrowRight } from "react-icons/fi";
import ItemClients from "./ItemClients";

const OurClients = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ bottom: 300 }}
    >
      <motion.div
        id="projects"
        className="text-blu flex flex-col gap-16 items-center -mt-20 pb-20 pt-16 w-full bg-gray-50 overflow-hidden"
        initial="invisible"
        animate={visible ? "visible" : "invisible"}
        variants={opacityVariants}
        transition={{ duration: 1 }}
      >
        <SectionHeading>Our Clients</SectionHeading>

        <div className="grid gap-12 grid-cols-2 px-16 max-w-screen-lg md:gap-3 md:grid-cols-6">
          {process.map((item, index) => (
            <ItemClients
              key={v4()}
              {...item}
              visible={visible}
              delay={index / 4}
            />
          ))}
        </div>
      </motion.div>
    </ReactVisibilitySensor>
  );
};

export default OurClients;
