import Container from "@/components/Modules/Container/Container";
import { opacityVariants } from "@/constants/animations/variants.constant";
import { motion } from "framer-motion";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import FormFeedback from "./FormFeedback";
import HeaderFeedback from "./HeaderFeedback";

const Feedback = () => {
  const [visible, setVisible] = useState(false);

  return (
    <InView
      triggerOnce
      onChange={(inView) => inView && setVisible(inView)}
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
    </InView>
  );
};

export default Feedback;
