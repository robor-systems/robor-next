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
      <div className="h-full w-full  bg-form ">
        <Container>
          <motion.div
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            variants={opacityVariants}
            transition={{ duration: 1 }}
            className="w-full flex flex-col  lg:flex-row gap-12  lg:gap-20 pt-10 pb-12  lg:py-16 h-full  lg:px-4"
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
