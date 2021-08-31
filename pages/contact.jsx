import { SectionHeading } from "@/components/Elements";
import Container from "@/components/Modules/Container/Container";
import { opacityVariants } from "constants/animations/variants.constant";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

const {
  default: FormFeedback,
} = require("@/components/Templates/Home/Feedback/FormFeedback");

const Contact = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ReactVisibilitySensor
      partialVisibility
      offset={{ top: 400 }}
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
    >
      <motion.div
        className="flex  justify-center  pt-20 bg-form "
        initial="invisible"
        animate={visible ? "visible" : "invisible"}
        variants={opacityVariants}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <div className="sm:py-20 py-16 mb-8  flex flex-col w-full  gap-12 sm:gap-16 max-w-screen-md  mx-auto sm:px-4 ">
            <div className="flex flex-col gap-6 sm:gap-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
                Book Free Consultation
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-2xl font-light text-center">
                Whether you have questions about features, demos or trials, we
                are here to help you meet your business needs.
              </h2>
            </div>
            <FormFeedback />
          </div>
        </Container>
      </motion.div>
    </ReactVisibilitySensor>
  );
};

export default Contact;
