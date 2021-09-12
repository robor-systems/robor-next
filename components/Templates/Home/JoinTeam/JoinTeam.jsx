import Container from "@/components/Modules/Container/Container";
import { SectionHeading } from "components/Elements";
import { opacityVariants } from "constants/animations/variants.constant";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

const JoinTeam = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ bottom: 300 }}
    >
      <motion.div
        className="text-blu flex flex-col gap-8 items-center  pb-12 pt-10 px-6 w-full bg-shade overflow-hidden"
        initial="invisible"
        animate={visible ? "visible" : "invisible"}
        variants={opacityVariants}
        transition={{ duration: 1 }}
      >
        <SectionHeading>Join us</SectionHeading>

        <div className="text-center text-xl">
          Want to be a part of our team? <br />
          Send your resumé for future opening at{" "}
          <a href="mailto:talent@robor.tech" target="_blank" rel="noreferrer">
            talent@robor.tech
          </a>
        </div>
      </motion.div>
    </ReactVisibilitySensor>
  );
};

export default JoinTeam;
