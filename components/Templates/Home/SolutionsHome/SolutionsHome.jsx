import React, { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/Elements";
import { opacityVariants } from "constants/animations/variants.constant";
import Container from "@/components/Modules/Container/Container";
import { ImageGenerator } from "../../Solutions";

const FeaturedSolution = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Container>
      <ReactVisibilitySensor
        partialVisibility
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
        offset={{ bottom: 300 }}
      >
        <motion.section
          id="solutions-section"
          className="flex flex-col items-center w-full gap-16  pb-52  overflow-hidden"
          initial="invisible"
          animate={visible ? "visible" : "invisible"}
          variants={opacityVariants}
          transition={{ duration: 1 }}
        >
          {/* * Heading */}
          <SectionHeading>Featured Solutions</SectionHeading>
          {/* Object Detector */}
          <div>
            <ImageGenerator />
          </div>
        </motion.section>
      </ReactVisibilitySensor>
    </Container>
  );
};

export default FeaturedSolution;
