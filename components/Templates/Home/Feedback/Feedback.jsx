import { SectionHeading } from "@/components/Elements";
import Container from "@/components/Modules/Container/Container";
import { opacityVariants } from "constants/animations/variants.constant";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

const Feedback = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <ReactVisibilitySensor
        partialVisibility
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
        offset={{ bottom: 300 }}
      >
        <motion.div
          initial="invisible"
          animate={visible ? "visible" : "invisible"}
          variants={opacityVariants}
          transition={{ duration: 1 }}
        >
          <div className="text-center text-xl">
            Want to be part of our team? <br />
            Send your resumé for future opening at{" "}
            <a href="mailto:talent@robor.tech" target="_blank" rel="noreferrer">
              talent@robor.tech
            </a>
          </div>
        </motion.div>
      </ReactVisibilitySensor>
    </Container>
  );
};

export default Feedback;
