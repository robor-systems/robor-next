import Container from "@/components/Modules/Container/Container";
import { opacityVariants } from "constants/animations/variants.constant";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import FormFeedback from "./FormFeedback";
import HeaderFeedback from "./HeaderFeedback";

const Feedback = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ bottom: 0 }}
    >
      <div className="w-full h-full bg-form dark:bg-form-dark dark:bg-dark-bgPrimary">
        <Container>
          <motion.div
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            variants={opacityVariants}
            transition={{ duration: 1 }}
            className="flex flex-col w-full h-full gap-12 pt-10 pb-12 lg:flex-row lg:gap-20 lg:pb-16 lg:pt-52 lg:px-4"
          >
            <HeaderFeedback />
            <FormFeedback />
          </motion.div>
        </Container>
      </div>
    </ReactVisibilitySensor>
  );
};

export default Feedback;
