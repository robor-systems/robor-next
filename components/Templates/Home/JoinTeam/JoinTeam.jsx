import Container from "@/components/Modules/Container/Container";
import { SectionHeading } from "@/components/Elements";
import { opacityVariants } from "@/constants/animations/variants.constant";
import { motion } from "framer-motion";
import { useState } from "react";
import { InView } from "react-intersection-observer";

const JoinTeam = () => {
  const [visible, setVisible] = useState(false);

  return (
    <InView
      triggerOnce
      onChange={(inView) => inView && setVisible(inView)}
    >
      <motion.div
        className="flex flex-col items-center w-full gap-8 px-6 pt-10 pb-12 overflow-hidden text-blu bg-shade dark:bg-dark-bgSecondary"
        initial="invisible"
        animate={visible ? "visible" : "invisible"}
        variants={opacityVariants}
        transition={{ duration: 1 }}
      >
        <SectionHeading>Join us</SectionHeading>

        <div className="text-xl text-center text-light-content dark:text-dark-formLabels">
          Want to be a part of our team? <br />
          Send your resumé for future opening at{" "}
          <a
            href="mailto:talent@robor.systems"
            target="_blank"
            rel="noreferrer"
            className="text-light-primary dark:text-dark-primary"
          >
            talent@robor.systems
          </a>
        </div>
      </motion.div>
    </InView>
  );
};

export default JoinTeam;
